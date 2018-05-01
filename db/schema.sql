/* --> DROP DATABASE IF EXISTS vfm; <--
use above line to recreate database if needed */
CREATE DATABASE vfm;
USE vfm;

/* 
1) Make sure to create database & edit connection before running the server file.
    -mysql -u root -p < schema.sql    
    -update config/config.json file to connect to specified database.

@@ After creating DB and running server:
2) Use Table Data Import Wizard (MySQL Workbench) to import Proj3Dataset.csv
*/