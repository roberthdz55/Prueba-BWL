-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-03-2022 a las 00:27:56
-- Versión del servidor: 8.0.28
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `login_bwl`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `user` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `pass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user`, `name`, `pass`) VALUES
(1, 'hdz11', 'Robert Hdz', '$2a$08$VMyU7qtkMKMNF2ZS53aRU.hGvtgXFiO5HH7dKHNixsumMfy2qAgqi'),
(2, 'lupis12', 'Maria', '$2a$08$Ghgs3tH0oCTeiKU15jMlG.HBV53msiSjt03z8P2fmNBvEzV4Zjopq'),
(3, 'roberthdz11', 'Admin', '$2a$08$CxSUfdhu7NJCuNdlaZD.POVyCq5D96lufA6TKFzeemktiZCGPds7y'),
(4, 'hdz15', 'roberto hdz', '$2a$08$3ymNYmep84J1/kXH7qXHFujLb5c6ZfbYq2NUX2e4eSEkz0vPwK3LK'),
(5, 'kari11', 'karina', '$2a$08$MSL5aRxko/H7l6INGf08/excTKUBzy4iw/XaHkNgfOYU9L.NxLphq'),
(6, 'chino11', 'jesus', '$2a$08$GNL6iInKRN0xUVyKOVN4r.4/T0g4CpJUogTRgztoRYgfob54Ep9OG');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
