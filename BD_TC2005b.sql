CREATE DATABASE tc2005b;
USE tc2005b;

CREATE TABLE alumno(
	id INT AUTO_INCREMENT,
    nombre VARCHAR(30),
    paterno VARCHAR(30),
    materno VARCHAR(30),
    nacimiento DATE,
    PRIMARY KEY(id)
);

