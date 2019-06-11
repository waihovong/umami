-- MySQL dump 10.17  Distrib 10.3.14-MariaDB, for osx10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: website
-- ------------------------------------------------------
-- Server version	10.3.14-MariaDB

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
INSERT INTO `res_account` VALUES (4,'Dannys Thai','dannythai@gmail.com','668e2b73ac556a2f051304702da290160b29bad3392ddcc72074fefbee80c55a'),(1,'Hawker Walker','hawkerwalker@gmail.com','0139bc5debaaa4b84e9341efb6ffa3e470f45a084742310e8f0b63ea83380168'),(7,'BBQ City','bbqcity@gmail.com','484ae24edd22ea09a58edc2b6c58ee2b5f3879e3b267838a8726366f255fd4b9'),(3,'Shujinko Ramen','shujinko@gmail.com','d8472e7f4f470b142075ada25acd85415ae9c7dfab273b21c696461e12b772d8'),(6,'PHO SA','phosa@gmail.com','bd1505eba5af8be0aed5523f432c8c011b38f6296d4063dc016ca973d62135a3'),(9,'Mandoo','mandoo@gmail.com','32e382dfb93f0f3f26f7cfb94cd1c86a2c1ad2c30c7eb49d419be55d9e847e20'),(5,'Chicco Palms','chiccopalms@gmail.com','9ed1515819dec61fd361d5fdabb57f41ecce1a5fe1fe263b98c0d6943b9b232e'),(8,'82 Pocha','82pocha@gmail.com','eefa3980fdf345e9f673e115a77224b8ed56a8c286dc38def70699f6bbec22a4'),(10,'Sit-Lo','sitlo@gmail.com','12d6b60809a811bd92319747db16c18190463a87803a9f1e62b0926e599a28ea'),(2,'Dumpling King','dumplingking@gmail.com','32e382dfb93f0f3f26f7cfb94cd1c86a2c1ad2c30c7eb49d419be55d9e847e20');
/*!40000 ALTER TABLE `res_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `restaurants` (
  `restaurantID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `address` varchar(30) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `openhours` varchar(30) DEFAULT NULL,
  `rating` varchar(30) DEFAULT NULL,
  `cuisine` varchar(30) DEFAULT NULL,
  UNIQUE KEY `restaurantID` (`restaurantID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (1,'Hawker Walker','Francis St, Adelaide SA 5000',870017778,'11AM-6PM','5/5','Malaysian'),(2,'Dumpling King','Gouger St, Adelaide SA 5000',870017778,'11AM-6PM','3/5','Chinese'),(3,'Shujinko Ramen','Gouger St, Adelaide SA 5000',38912012,'24 Hours','5/5','Japanese'),(4,'Dannys Thai','Franklin St, Adelaide SA 5000',1451200,'11AM-11PM','5/5','Thai'),(5,'Chicco Palms','Adam St, Adelaide SA 5000',131312331,'11AM-10PM','5/5','Italian'),(6,'PHO SA','Gouger St, Adelaide SA 5000',121415151,'10AM-10PM','4/5','Vietnamese'),(7,'BBQ City','Gouger St, Adelaide SA 5000',125151,'10AM-12PM','4/5','Chinese'),(8,'82 Pocha','Grenfell St, Adelaide SA 5000',72611141,'3PM-1AM','5/5','Korean'),(9,'Mandoo','Hindley St, Adelaide SA 5000',72611141,'11AM-9PM','5/5','Korean'),(10,'Sit-Lo','Hindley St, Adelaide SA 5000',72611141,'11AM-9PM','5/5','Vietnamese');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `useraccounts`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-07 23:40:51
