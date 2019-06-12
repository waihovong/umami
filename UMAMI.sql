-- MySQL dump 10.16  Distrib 10.1.40-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: website
-- ------------------------------------------------------
-- Server version	10.1.40-MariaDB-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `website`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `website` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `website`;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `password_hash` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'admin','admin@example.example','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(2,'John','John@example.example','4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bookings` (
  `booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `res_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` DATE NOT NULL,
  `time` TIME NOT NULL,
  `people` int(11) NOT NULL,
  PRIMARY KEY (`booking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `res_account`
--

DROP TABLE IF EXISTS `res_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `res_account` (
  `res_id` int(11) DEFAULT NULL,
  `res_name` varchar(30) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `res_account`
--

LOCK TABLES `res_account` WRITE;
/*!40000 ALTER TABLE `res_account` DISABLE KEYS */;
INSERT INTO `res_account` VALUES (4,'Dannys Thai','dannythai@gmail.com','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(1,'Hawker Walker','hawkerwalker@gmail.com','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(7,'BBQ City','bbqcity@gmail.com','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(3,'Shujinko Ramen','shujinko@gmail.com','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(6,'PHO SA','phosa@gmail.com','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(9,'Mandoo','mandoo@gmail.com','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(5,'Chicco Palms','chiccopalms@gmail.com','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(8,'82 Pocha','82pocha@gmail.com','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(10,'Sit-Lo','sitlo@gmail.com','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(2,'Dumpling King','dumplingking@gmail.com','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918');
/*!40000 ALTER TABLE `res_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `restaurants` (
  `restaurantID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `email` varchar(60) NOT NULL,
  `address` varchar(30) NOT NULL,
  `phone` int(11) NOT NULL,
  `openhours` TIME NOT NULL,
  `closehours` TIME NOT NULL,
  `rating` int(11) NOT NULL,
  `cuisine` varchar(30) NOT NULL,
  `password` varchar(64) NOT NULL,
  UNIQUE KEY `restaurantID` (`restaurantID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (1,'Hawker Walker','hawkerwalker@gmail.com','Francis St, Adelaide SA 5000',870017778,'11:00:00','18:00:00',5,'Malaysian','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(2,'Dumpling King','dumplingking@gmail.com','Gouger St, Adelaide SA 5000',870017778,'11:00:00','18:00:00',3,'Chinese','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(3,'Shujinko Ramen','shujinko@gmail.com','Gouger St, Adelaide SA 5000',38912012,'00:00:00','00:00:00',5,'Japanese','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(4,'Dannys Thai','dannythai@gmail.com','Franklin St, Adelaide SA 5000',1451200,'11:00:00','23:00:00',5,'Thai','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(5,'Chicco Palms','chiccopalms@gmail.com','Adam St, Adelaide SA 5000',131312331,'11:00:00','22:00:00',5,'Italian','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(6,'PHO SA','phosa@gmail.com','Gouger St, Adelaide SA 5000',121415151,'10:00:00','22:00:00',4,'Vietnamese','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(7,'BBQ City','bbqcity@gmail.com','Gouger St, Adelaide SA 5000',125151,'10:00:00','16:00:00',4,'Chinese','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(8,'82 Pocha','82pocha@gmail.com','Grenfell St, Adelaide SA 5000',72611141,'15:00:00','01:00:00',5,'Korean','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(9,'Mandoo','mandoo@gmail.com','Hindley St, Adelaide SA 5000',72611141,'11:00:00','21:00:00',5,'Korean','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(10,'Sit-Lo','sitlo@gmail.com','Hindley St, Adelaide SA 5000',72611141,'11:00:00','21:00:00',5,'Vietnamese','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-12 13:31:45
