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
  `email` varchar(30) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `res_account`
--

LOCK TABLES `res_account` WRITE;
/*!40000 ALTER TABLE `res_account` DISABLE KEYS */;
INSERT INTO `res_account` VALUES (1,'Danny\'s Thai','dannythai@gmail.com','danny'),(2,'Hawker Walker','hawkerwalker@gmail.com','hawk'),(3,'BBQ City','bbqcity@gmail.com','jim'),(4,'Shujinko Ramen','shujinko@gmail.com','ramen'),(5,'PHO SA','phosa@gmail.com','pho'),(6,'Mandoo','mandoo@gmail.com','dumpling'),(7,'Chicco Palms','chiccopalms@gmail.com','pizza'),(8,'82 Pocha','82pocha@gmail.com','kfc'),(9,'Sit-Lo','sitlo@gmail.com','bahnmi'),(10,'Dumpling King','dumplingking@gmail.com','dumpling');
/*!40000 ALTER TABLE `res_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `restaurant` (
  `res_name` varchar(30) DEFAULT NULL,
  `Location` varchar(30) DEFAULT NULL,
  `Phone` int(11) DEFAULT NULL,
  `openhours` varchar(30) DEFAULT NULL,
  `Rating` varchar(30) DEFAULT NULL,
  `Cusine` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES ('Hawker Walker','Francis St, Adelaide SA 5000',870017778,'11AM-6PM','5/5','Malaysian'),('Dumpling King','Gouger St, Adelaide SA 5000',870017778,'11AM-6PM','3/5','Chinese'),('Shujinko Ramen','Gouger St, Adelaide SA 5000',38912012,'24 Hours','5/5','Japanese'),('Danny\'s Thai','Franklin St, Adelaide SA 5000',1451200,'11AM-11PM','5/5','Thai'),('Chicco Palms','Adam St, Adelaide SA 5000',131312331,'11AM-10PM','5/5','Italian'),('PHO SA','Gouger St, Adelaide SA 5000',121415151,'10AM-10PM','4/5','Vietnamese'),('BBQ City','Gouger St, Adelaide SA 5000',125151,'10AM-12PM','4/5','Chinese'),('82 Pocha','Grenfell St, Adelaide SA 5000',72611141,'3PM-1AM','5/5','Korean'),('Mandoo','Hindley St, Adelaide SA 5000',72611141,'11AM-9PM','5/5','Korean'),('Sit-Lo','Hindley St, Adelaide SA 5000',72611141,'11AM-9PM','5/5','Vietnamese');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `useraccounts`
--

DROP TABLE IF EXISTS `useraccounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `useraccounts` (
  `userid` int(11) DEFAULT NULL,
  `Name` varchar(30) DEFAULT NULL,
  `Email` varchar(30) DEFAULT NULL,
  `Password` varchar(30) DEFAULT NULL,
  `PhoneNum` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `useraccounts`
--

LOCK TABLES `useraccounts` WRITE;
/*!40000 ALTER TABLE `useraccounts` DISABLE KEYS */;
INSERT INTO `useraccounts` VALUES (1,'Waiho Vong','waihovong@gmail.com','password',123456789);
/*!40000 ALTER TABLE `useraccounts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-10 15:41:52
