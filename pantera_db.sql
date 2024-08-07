-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 13-07-2024 a las 05:33:54
-- Versión del servidor: 5.5.39
-- Versión de PHP: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `pantera_db`
--
CREATE DATABASE IF NOT EXISTS `pantera_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `pantera_db`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coches`
--
-- Creación: 08-07-2024 a las 19:18:57
--

DROP TABLE IF EXISTS `coches`;
CREATE TABLE IF NOT EXISTS `coches` (
`id` int(11) NOT NULL,
  `modelo` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `anio` year(4) NOT NULL,
  `matricula` varchar(20) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `pais_cc` char(2) CHARACTER SET utf8 NOT NULL,
  `ciudad` varchar(100) CHARACTER SET utf8 NOT NULL,
  `imagen` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=10 ;

--
-- RELACIONES PARA LA TABLA `coches`:
--   `pais_cc`
--       `paises` -> `cc`
--   `usuario_id`
--       `usuarios` -> `id`
--

--
-- Volcado de datos para la tabla `coches`
--

INSERT INTO `coches` (`id`, `modelo`, `anio`, `matricula`, `pais_cc`, `ciudad`, `imagen`, `usuario_id`) VALUES
(1, 'PL', 1971, 'UOO303T', 'US', 'Los Angeles', '3cv m28.jpg', 18),
(2, 'GTS', 1974, 'PNO641T', 'AU', 'Perth', '3cv m28.jpg', 19),
(3, 'PSI', 1990, 'VWK666J', 'CA', 'Ottawa', '3cv m28.jpg', 20),
(4, 'GT4', 1972, 'BONJOVI1', 'US', 'Los Angeles', '3cv m28.jpg', 21),
(5, 'GT4', 1972, '23241433', 'US', 'Los Angeles', '3cv m28.jpg', 22),
(6, 'GT4', 1972, '23241433', 'US', 'Los Angeles', '3cv m28.jpg', 23),
(7, 'PL', 1971, 'AG540UT', 'SA', 'Ryad', NULL, 24),
(8, 'PSI', 1990, 'ROCK01', 'UK', 'Sussex', NULL, 25),
(9, 'GTS', 1972, 'MOON01', 'US', 'Cabo Cañaveral', NULL, 26);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactos`
--
-- Creación: 10-07-2024 a las 19:52:28
--

DROP TABLE IF EXISTS `contactos`;
CREATE TABLE IF NOT EXISTS `contactos` (
`id` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `nombre` varchar(255) CHARACTER SET utf8 NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `mensaje` text CHARACTER SET utf8
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `contactos`
--

INSERT INTO `contactos` (`id`, `fecha`, `nombre`, `email`, `mensaje`) VALUES
(2, '2024-07-10 17:00:26', 'q', 'q@q', 'q'),
(3, '2024-07-11 00:03:15', 'z', 'z@z', 'z'),
(4, '2024-07-11 15:16:56', 'q', 'q@q', 'q'),
(5, '2024-07-11 21:45:57', 'pp', 'pp@pp', 'cxvxcfvx');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--
-- Creación: 24-06-2024 a las 00:27:25
--

DROP TABLE IF EXISTS `paises`;
CREATE TABLE IF NOT EXISTS `paises` (
  `cc` char(2) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `nombre` varchar(36) COLLATE utf8_spanish_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`cc`, `nombre`) VALUES
('AF', 'Afganistán'),
('AL', 'Albania'),
('DE', 'Alemania'),
('AD', 'Andorra'),
('AO', 'Angola'),
('AI', 'Anguila'),
('AG', 'Antigua y Barbuda'),
('SA', 'Arabia Saudita'),
('DZ', 'Argelia'),
('AR', 'Argentina'),
('AM', 'Armenia'),
('AU', 'Australia'),
('AT', 'Austria'),
('AZ', 'Azerbaiyán'),
('BS', 'Bahamas'),
('BD', 'Bangladés'),
('BB', 'Barbados'),
('BH', 'Baréin'),
('BE', 'Bélgica'),
('BZ', 'Belice'),
('BJ', 'Benín'),
('BM', 'Bermudas'),
('BY', 'Bielorrusia'),
('MM', 'Birmania (Myanmar)'),
('BO', 'Bolivia'),
('BA', 'Bosnia-Herzegovina'),
('BW', 'Botsuana'),
('BR', 'Brasil'),
('BN', 'Brunéi'),
('BG', 'Bulgaria'),
('BF', 'Burkina Faso'),
('BI', 'Burundi'),
('BT', 'Bután'),
('KH', 'Camboya'),
('CM', 'Camerún'),
('CA', 'Canadá'),
('QA', 'Catar'),
('TD', 'Chad'),
('CZ', 'Chequia'),
('CL', 'Chile'),
('CY', 'Chipre'),
('VA', 'Ciudad del Vaticano'),
('CO', 'Colombia'),
('KP', 'Corea del Norte'),
('KR', 'Corea del Sur'),
('CI', 'Costa de Marfil'),
('CR', 'Costa Rica'),
('HR', 'Croacia'),
('CU', 'Cuba'),
('DK', 'Dinamarca'),
('DM', 'Dominica'),
('EC', 'Ecuador'),
('EG', 'Egipto'),
('SV', 'El Salvador'),
('AE', 'Emiratos Árabes Unidos'),
('ER', 'Eritrea'),
('SK', 'Eslovaquia'),
('SI', 'Eslovenia'),
('ES', 'España'),
('US', 'Estados Unidos'),
('EE', 'Estonia'),
('ET', 'Etiopía'),
('PH', 'Filipinas'),
('FI', 'Finlandia'),
('FJ', 'Fiyi'),
('FR', 'Francia'),
('GA', 'Gabón'),
('GM', 'Gambia'),
('GE', 'Georgia'),
('GH', 'Ghana'),
('GD', 'Granada'),
('GR', 'Grecia'),
('GL', 'Groenlandia'),
('GF', 'Guayana Francesa'),
('GN', 'Guinea'),
('GQ', 'Guinea Ecuatorial'),
('GW', 'Guinea-Bisáu'),
('GY', 'Guyana'),
('HT', 'Haití'),
('HN', 'Honduras'),
('HK', 'Hong Kong'),
('HU', 'Hungría'),
('IN', 'India'),
('ID', 'Indonesia'),
('IQ', 'Irak'),
('IR', 'Irán'),
('IE', 'Irlanda'),
('IS', 'Islandia'),
('IL', 'Israel'),
('IT', 'Italia'),
('JM', 'Jamaica'),
('JP', 'Japón'),
('JO', 'Jordania'),
('KZ', 'Kazajistán'),
('KE', 'Kenia'),
('KG', 'Kirguistán'),
('KI', 'Kiribati'),
('KW', 'Kuwait'),
('LA', 'Laos'),
('LS', 'Lesoto'),
('LV', 'Letonia'),
('LB', 'Líbano'),
('LR', 'Liberia'),
('LY', 'Libia'),
('LI', 'Liechtenstein'),
('LT', 'Lituania'),
('LU', 'Luxemburgo'),
('MO', 'Macao'),
('MK', 'Macedonia del Norte'),
('MG', 'Madagascar'),
('MY', 'Malasia'),
('MW', 'Malaui'),
('MV', 'Maldivas'),
('ML', 'Malí'),
('MT', 'Malta'),
('MA', 'Marruecos'),
('MR', 'Mauritania'),
('MX', 'México'),
('MD', 'Moldavia'),
('MC', 'Mónaco'),
('MN', 'Mongolia'),
('ME', 'Montenegro'),
('MZ', 'Mozambique'),
('NA', 'Namibia'),
('NR', 'Nauru'),
('NP', 'Nepal'),
('NI', 'Nicaragua'),
('NE', 'Níger'),
('NG', 'Nigeria'),
('NO', 'Noruega'),
('NZ', 'Nueva Zelanda'),
('OM', 'Omán'),
('NL', 'Países Bajos'),
('PK', 'Pakistán'),
('PA', 'Panamá'),
('PG', 'Papúa Nueva Guinea'),
('PY', 'Paraguay'),
('PE', 'Perú'),
('PL', 'Polonia'),
('PT', 'Portugal'),
('PR', 'Puerto Rico'),
('UK', 'Reino Unido'),
('CF', 'República Centroafricana'),
('CG', 'República del Congo'),
('CD', 'República Democrática del Congo'),
('DO', 'República Dominicana'),
('CN', 'República Popular China'),
('RW', 'Ruanda'),
('RO', 'Rumania'),
('RU', 'Rusia'),
('WS', 'Samoa'),
('AS', 'Samoa Americana'),
('SM', 'San Marino'),
('SN', 'Senegal'),
('RS', 'Serbia'),
('SL', 'Sierra Leona'),
('SG', 'Singapur'),
('SY', 'Siria'),
('SO', 'Somalia'),
('LK', 'Sri Lanka'),
('SZ', 'Suazilandia'),
('ZA', 'Sudáfrica'),
('SD', 'Sudán'),
('SE', 'Suecia'),
('CH', 'Suiza'),
('SR', 'Surinam'),
('TH', 'Tailandia'),
('TW', 'Taiwán (República de China)'),
('TZ', 'Tanzania'),
('TJ', 'Tayikistán'),
('TL', 'Timor Oriental'),
('TG', 'Togo'),
('TK', 'Tokelau'),
('TO', 'Tonga'),
('TT', 'Trinidad y Tobago'),
('TN', 'Túnez'),
('TM', 'Turkmenistán'),
('TR', 'Turquía'),
('TV', 'Tuvalu'),
('UA', 'Ucrania'),
('UG', 'Uganda'),
('UY', 'Uruguay'),
('UZ', 'Uzbekistán'),
('VU', 'Vanuatu'),
('VE', 'Venezuela'),
('VN', 'Vietnam'),
('YE', 'Yemen'),
('DJ', 'Yibuti'),
('ZM', 'Zambia'),
('ZW', 'Zimbabue');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--
-- Creación: 11-07-2024 a las 21:40:25
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
`id` int(11) NOT NULL,
  `nombre` varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `email` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `ciudad` varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `pais_cc` char(2) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `password` varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=27 ;

--
-- RELACIONES PARA LA TABLA `usuarios`:
--   `pais_cc`
--       `paises` -> `cc`
--

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `ciudad`, `pais_cc`, `password`) VALUES
(18, 'William Bodie', 'wb@gmail.com', 'Los Angeles', 'US', '$2b$10$t6HHCjG85oxzKEacHGf4wOdAwnBpUf1JlApaTesHuCKFl7zshcmai'),
(19, 'Ray Doyle', 'rd@gmail.com', 'Perth', 'AU', '$2b$10$kE/.VLT9V6OH1au56GLT8OqnDNfOHX8OTLJnRvScSNsN5/xJPGVui'),
(20, 'George Cowley', 'gc@gmail.com', 'Ottawa', 'CA', '$2b$10$F2TbxJZtABflZ6rHZ.r4cej/MF1AEqDeA9SqlanHOSsU9HwHKaKV.'),
(21, 'Jon Bonjovi', 'bonjovi@gmail.com', 'Los Angeles', 'US', '$2b$10$Di9KyF2IQm1mCs2GHE6D/OJiLier3hB/LGFk9X2qbMcXQfRe3ykxW'),
(22, 'Juan Perez', 'jp@gmail.com', 'Los Angeles', 'US', '$2b$10$N20Etqdj26s66nHa3.RTx.IFYqUoNb/4.IPOayKnN2uZYd2aAYJm2'),
(23, 'Monica Galindo', 'mg@mail.com', 'Los Angeles', 'US', '$2b$10$rGpy3Qs35/Mtr6aRjj2qX.UT4hipKsh.P5sjvGRjhGeg1.fgSQ4qy'),
(24, 'Bill Clinton', 'bc@gmail.com', 'Ryad', 'SA', '$2b$10$xbCiMBzLyQgkBYSENO8.t.CcdbfGH/OkNUi.3G4ule2Wuy0LoWeG.'),
(25, 'Freddy Mercury', 'fm@gmail.com', 'Sussex', 'UK', '$2b$10$vmRNuApYsPTNJqCLsLhI7O0QEjK4Wv.VUh/MFyOKlM/LmVXqb7uNW'),
(26, 'Neil Armstrong', 'na@nasa.gov', 'Cabo Cañaveral', 'US', '$2b$10$JLJJocgzwxmvfK2plIQfXeO16qmy74tm51vEGMTePc6.8sO/f/bbS');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `coches`
--
ALTER TABLE `coches`
 ADD PRIMARY KEY (`id`), ADD KEY `coches_paises_FK` (`pais_cc`), ADD KEY `coches_usuarios_FK` (`usuario_id`);

--
-- Indices de la tabla `contactos`
--
ALTER TABLE `contactos`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `paises`
--
ALTER TABLE `paises`
 ADD PRIMARY KEY (`cc`), ADD UNIQUE KEY `Paises_nombre_IDX` (`nombre`) USING BTREE;

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `usuarios_unique` (`email`), ADD KEY `usuarios_paises_FK` (`pais_cc`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `coches`
--
ALTER TABLE `coches`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `contactos`
--
ALTER TABLE `contactos`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=27;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `coches`
--
ALTER TABLE `coches`
ADD CONSTRAINT `coches_paises_FK` FOREIGN KEY (`pais_cc`) REFERENCES `paises` (`cc`),
ADD CONSTRAINT `coches_usuarios_FK` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
ADD CONSTRAINT `usuarios_paises_FK` FOREIGN KEY (`pais_cc`) REFERENCES `paises` (`cc`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
