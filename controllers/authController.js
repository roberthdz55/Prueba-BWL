const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const conexion = require('../database/bd')

//const {promisify} = require('util');


//metodo para registrar los usuarios 
exports.register = async (req, res) => {

    try {
        const name = req.body.name
        const user = req.body.user
        const pass = req.body.pass
        const pass2 = req.body.pass2
        const expre = {
            correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        }
        let passHash = await bcryptjs.hash(pass, 8)
        //console.log(passHash) 
        
        if (pass !== pass2) {
            res.render('register', {
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "contraseñas diferentes",
                alertIcon: 'Info',
                showConfirmButton: true,
                timer: false,
                ruta: "register"
                
            })

        }  if (expre.correo.test(user)==false) {
            res.render('login', {
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Correo invalido",
                alertIcon: 'Info',
                showConfirmButton: true,
                timer: false,
                ruta: "register"
            })
        } else {
            conexion.query('INSERT INTO users SET ?', { user: user, name: name, pass: passHash }, (error, results) => {
                if (error) {
                    console.log(error)
                }
                //res.redirect('/')
                res.render('register', {
                    alert: true,
                    alertTitle: "Usuario Registrado correctamenete",
                    alertMessage: "",
                    alertIcon: 'success',
                    showConfirmButton: false,
                    timer: 1800,
                    ruta: 'login'
                })
            })
        }

    } catch (error) {
        console.log(error)
    }

}

exports.login = async (req, res) => {
    try {
        const user = req.body.user
        const pass = req.body.pass
        if (!user || !pass) {
            res.render('login', {
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese usuario y contraseña",
                alertIcon: 'Info',
                showConfirmButton: true,
                timer: false,
                ruta: "login"
            })
        } else {
            conexion.query('SELECT * FROM users WHERE user = ?', [user], async (error, results) => {
                if (results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass))) {
                    res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Usuario y/o Password incorrectas",
                        alertIcon: 'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: "login"

                    })
                } else {
                    //inicio de sesion OK ****JWT****
                    const id = results[0].id
                    const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, {
                        expiresIn: process.env.JWT_TIEMPO_EXPIRA
                    })
                    console.log("TOKEN: " + token + "para el USUARIO: " + user)

                    const cookiesOptions = {
                        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                        httpOnly: true
                    }
                    res.cookie('jwt', token, cookiesOptions)
                    res.render('login', {
                        alert: true,
                        alertTitle: "Coenxion Exitosa",
                        alertMessage: "LOGIN CORRECTO",
                        alertIcon: 'success',
                        showConfirmButton: false,
                        timer: 1800,
                        ruta: 'clima'
                    })
                }
            })
        }
    } catch (error) {
        console.log(error)
    }
}

//metodo para el clima
