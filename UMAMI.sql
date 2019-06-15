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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'admin','admin@example.example','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(2,'John','John@example.example','4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2'),(3,'ha','haha@example.example','8693873cd8f8a2d9c7c596477180f851e525f4eaf55a4f637b445cb442a5e340'),(4,'ben','ben@exmaple.example','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3');
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
  `date` date NOT NULL,
  `time` time NOT NULL,
  `people` int(11) NOT NULL,
  PRIMARY KEY (`booking_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (1,1,1,'2019-06-13','03:32:00',1),(2,3,3,'2019-06-13','13:13:00',4),(3,1,1,'2019-06-14','13:30:00',3),(4,1,1,'2019-06-14','03:30:00',3);
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `resID` int(11) DEFAULT NULL,
  `imageurl` varchar(60) DEFAULT NULL,
  `imageurl2` varchar(60) DEFAULT NULL,
  `imageurl3` varchar(60) DEFAULT NULL,
  `imageurl4` varchar(60) DEFAULT NULL,
  `imageurl5` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (2,'./images/dk.jpg','./images/dk2.jpeg','./images/dk3.jpeg','./images/dk4.jpeg','./images/dk5.jpg'),(3,'./images/sr.jpg','./images/sr2.jpg','./images/sr3.jpg','./images/sr4.jpeg','./images/sr5.jpg'),(4,'./images/dannythai.jpg','./images/dannythai2.jpg','./images/dannythai3.jpg','./images/dannythai4.jpg','./images/dannythai5.jpg'),(5,'./images/cp.jpeg','./images/cp2.jpg','./images/cp3.jpeg','./images/cp4.jpg','./images/cp5.jpg'),(6,'./images/pho.jpg','./images/pho2.jpg','./images/pho3.jpg','./images/pho4.jpeg','./images/pho5.jpg'),(7,'./images/bbq.jpg','./images/bbq2.jpg','./images/bbq3.jpg','./images/bbq4.jpg','./images/bbq5.jpg'),(8,'./images/poc.jpg','./images/poc2.jpg','./images/poc3.jpg','./images/poc4.jpg','./images/poc5.jpg'),(9,'./images/man.jpg','./images/man2.jpg','./images/man3.jpg','./images/man4.jpg','./images/man5.jpg'),(10,'./images/sit.jpg','./images/sit2.jpg','./images/sit3.jpg','./images/sit4.jpg','./images/sit5.jpg'),(1,'./images/hw.jpg','./images/hw2.jpg','./images/hw3.jpg','./images/hw4.jpg','./images/hw5.jpg');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
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
  `openhours` time NOT NULL,
  `closehours` time NOT NULL,
  `rating` int(11) NOT NULL,
  `cuisine` varchar(30) NOT NULL,
  `password` varchar(64) NOT NULL,
  UNIQUE KEY `restaurantID` (`restaurantID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (1,'Hawker Walker','hawkerwalker@gmail.com','Francis St, Adelaide SA 5000',870017778,'11:00:00','18:00:00',5,'Malaysian','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(2,'Dumpling King','dumplingking@gmail.com','Gouger St, Adelaide SA 5000',870017778,'11:00:00','18:00:00',3,'Chinese','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(3,'Shujinko Ramen','shujinko@gmail.com','Gouger St, Adelaide SA 5000',38912012,'00:00:00','00:00:00',5,'Japanese','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(4,'Dannys Thai','dannythai@gmail.com','Franklin St, Adelaide SA 5000',1451200,'11:00:00','23:00:00',5,'Thai','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(5,'Chicco Palms','chiccopalms@gmail.com','Adam St, Adelaide SA 5000',131312331,'11:00:00','22:00:00',5,'Italian','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(6,'PHO SA','phosa@gmail.com','Gouger St, Adelaide SA 5000',121415151,'10:00:00','22:00:00',4,'Vietnamese','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(7,'BBQ City','bbqcity@gmail.com','Gouger St, Adelaide SA 5000',125151,'10:00:00','16:00:00',4,'Chinese','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(8,'82 Pocha','82pocha@gmail.com','Grenfell St, Adelaide SA 5000',72611141,'15:00:00','01:00:00',5,'Korean','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(9,'Mandoo','mandoo@gmail.com','Hindley St, Adelaide SA 5000',72611141,'11:00:00','21:00:00',5,'Korean','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(10,'Sit-Lo','sitlo@gmail.com','Hindley St, Adelaide SA 5000',72611141,'11:00:00','21:00:00',5,'Vietnamese','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),(11,'maccas','maccas@example.example','5 North Tce, Adelaide 5000',1234,'12:00:00','14:00:00',0,'Fast Food','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `review_id` int(11) NOT NULL AUTO_INCREMENT,
  `review_title` varchar(250) DEFAULT NULL,
  `content` text,
  `post_time` datetime DEFAULT NULL,
  PRIMARY KEY (`review_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,'wdc','wcd','2019-06-13 15:18:57');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-15 13:57:01
