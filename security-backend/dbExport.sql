-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.6.7-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for security_dashboard
CREATE DATABASE IF NOT EXISTS `security_dashboard` /*!40100 DEFAULT CHARACTER SET utf8mb3 */;
USE `security_dashboard`;

-- Dumping structure for table security_dashboard.cases
CREATE TABLE IF NOT EXISTS `cases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `case_vehicle` int(11) NOT NULL,
  `success` tinyint(4) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `case_vehicle_idx` (`case_vehicle`),
  CONSTRAINT `case_vehicle` FOREIGN KEY (`case_vehicle`) REFERENCES `vehicles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table security_dashboard.cases: ~7 rows (approximately)
DELETE FROM `cases`;
/*!40000 ALTER TABLE `cases` DISABLE KEYS */;
INSERT INTO `cases` (`id`, `case_vehicle`, `success`, `date`) VALUES
	(1, 1, 1, '2022-01-10'),
	(2, 2, 0, '2022-01-10'),
	(3, 3, 1, '2022-01-10'),
	(4, 2, 0, '2022-01-10'),
	(5, 1, 1, '2022-01-10'),
	(6, 1, 0, '2022-01-10'),
	(7, 3, 1, '2022-01-10');
/*!40000 ALTER TABLE `cases` ENABLE KEYS */;

-- Dumping structure for table security_dashboard.reports
CREATE TABLE IF NOT EXISTS `reports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `location` varchar(100) NOT NULL,
  `description` varchar(120) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `category` varchar(45) NOT NULL,
  `report_vehicle` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `report_vehicle_idx` (`report_vehicle`),
  CONSTRAINT `report_vehicle` FOREIGN KEY (`report_vehicle`) REFERENCES `vehicles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table security_dashboard.reports: ~3 rows (approximately)
DELETE FROM `reports`;
/*!40000 ALTER TABLE `reports` DISABLE KEYS */;
INSERT INTO `reports` (`id`, `name`, `location`, `description`, `latitude`, `longitude`, `category`, `report_vehicle`) VALUES
	(1, 'Homicidio', 'Valle San José 1er Sector, García', 'Reporte de ataque armado con saldo de tres muertos y un herido', 25.7222, -100.545, 'Arma de Fuego', 1),
	(2, 'Reporte de Ubicación de Desaparecida', 'Circuito de las Fincas, Ex Hacienda Santa Rosa, Apodaca', 'Última ubicación conocida de Maria Fernanda Contreras, reportada como desaparecida el día 3 de abril.', 25.7946, -100.217, 'Víctima Desaparecida', NULL),
	(3, 'Robo a mano armada', 'Av. Pablo Livas 1052, Gustavo Díaz Ordaz, Guadalupe', 'Reporte de robo de 500 mil pesos con armas de fuego realizado por dos hombres.', 25.6901, -100.264, 'Arma de Fuego', NULL);
/*!40000 ALTER TABLE `reports` ENABLE KEYS */;

-- Dumping structure for table security_dashboard.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `profile` varchar(45) NOT NULL,
  `user_vehicle` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_vehicle_idx` (`user_vehicle`),
  CONSTRAINT `user_vehicle` FOREIGN KEY (`user_vehicle`) REFERENCES `vehicles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table security_dashboard.users: ~3 rows (approximately)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `password`, `name`, `profile`, `user_vehicle`) VALUES
	(1, 'admin', 'admin', 'Administrator', 'admin', NULL),
	(2, 'employee', 'employee', 'Employee', 'employee', NULL),
	(3, 'mateo', 'mateo', 'Mateo Espinosa', 'admin', NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table security_dashboard.vehicles
CREATE TABLE IF NOT EXISTS `vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(45) NOT NULL,
  `description` varchar(100) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `avg_health_hours` int(11) NOT NULL,
  `improvement` float NOT NULL,
  `talks` int(11) NOT NULL,
  `commute` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table security_dashboard.vehicles: ~3 rows (approximately)
DELETE FROM `vehicles`;
/*!40000 ALTER TABLE `vehicles` DISABLE KEYS */;
INSERT INTO `vehicles` (`id`, `location`, `description`, `latitude`, `longitude`, `avg_health_hours`, `improvement`, `talks`, `commute`) VALUES
	(1, 'Colonia del Valle, San Pedro', 'Miembros cuentan con capacitación especializada para resolución de conflictos involucrando rehenes.', 25.6522, -100.378, 2, 6.5, 3, 75),
	(2, 'Las Brisas, Monterrey', 'Unidad conformada por miembros en etapa de capacitación.', 25.6244, -100.283, 2, 6.5, 3, 83),
	(3, 'Linda Vista, Guadalupe', 'Unidad conformada por miembros en etapa de capacitación.', 25.6931, -100.26, 2, 6.5, 3, 44);
/*!40000 ALTER TABLE `vehicles` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
