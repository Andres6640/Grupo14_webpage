/* db.js */

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pantera_db"
});

connection.connect((err) => {
    if (err) {
        console.error("Error al conectar con la base de datos: ", err);
        return;
    };

    console.log("Conectado a la base de datos");

    connection.query("CREATE DATABASE IF NOT EXISTS pantera_db", (err, results) => {
        if (err) {
            console.error("Error al crear la base de datos: ", err);
            return;
        };

        console.log("Base de datos ok");

        connection.changeUser({database: "pantera_db"}, (err) => {
            if (err) {
                console.error("Error al cambiar a 'pantera_db': ", err);
                return;
            };

            const createTablePaises = `
                CREATE TABLE IF NOT EXISTS paises (
                    cc char(2) CHARACTER SET utf8 NOT NULL DEFAULT '',
                    nombre varchar(36) COLLATE utf8_spanish_ci NOT NULL DEFAULT '',
                    PRIMARY KEY (cc),
                    UNIQUE KEY Paises_nombre_IDX (nombre) USING BTREE
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
            `;

            connection.query(createTablePaises, (err, results) => {
                if (err) {
                    console.error("Error al crear tabla: ", err);
                    return;
                };

                console.log("Tabla Paises ok");
            });

            const createTableContactos = `
                CREATE TABLE IF NOT EXISTS contactos (
                    id int(11) NOT NULL AUTO_INCREMENT,
                    fecha datetime NOT NULL,
                    nombre varchar(255) CHARACTER SET utf8 NOT NULL,
                    email varchar(255) CHARACTER SET utf8 NOT NULL,
                    mensaje text CHARACTER SET utf8,
                    PRIMARY KEY (id)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
                `;

            connection.query(createTableContactos, (err, results) => {
                if (err) {
                    console.error("Error al crear tabla: ", err);
                    return;
                };

                console.log("Tabla Contactos ok");
            });

            const createTableUsuarios = `
                CREATE TABLE IF NOT EXISTS usuarios (
                    id int(11) NOT NULL AUTO_INCREMENT,
                    nombre varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT '',
                    email varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
                    direccion varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT '',
                    ciudad varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT '',
                    pais_cc char(2) CHARACTER SET utf8 NOT NULL DEFAULT '',
                    coche_id int(11) DEFAULT '0',
                    password varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT '',
                    PRIMARY KEY (id),
                    UNIQUE KEY usuarios_unique (email),
                    KEY usuarios_paises_FK (pais_cc),
                    CONSTRAINT usuarios_paises_FK FOREIGN KEY (pais_cc) REFERENCES paises (cc)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
            `;

            connection.query(createTableUsuarios, (err, results) => {
                if (err) {
                    console.error("Error al crear tabla: ", err);
                    return;
                };

                console.log("Tabla Usuarios ok");
            });

            const createTableCoches = `
                CREATE TABLE IF NOT EXISTS coches (
                     id int(11) NOT NULL AUTO_INCREMENT,
                     modelo varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '',
                     anio year(4) NOT NULL,
                     matricula varchar(20) CHARACTER SET utf8 NOT NULL DEFAULT '',
                     pais_cc char(2) CHARACTER SET utf8 NOT NULL,
                     ciudad varchar(100) CHARACTER SET utf8 NOT NULL,
                     imagen varchar(255) CHARACTER SET utf8 DEFAULT NULL,
                     PRIMARY KEY (id),
                     KEY coches_paises_FK (pais_cc),
                     CONSTRAINT coches_paises_FK FOREIGN KEY (pais_cc) REFERENCES paises (cc)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
            `;

            connection.query(createTableCoches, (err, results) => {
                if (err) {
                    console.error("Error al crear tabla: ", err);
                    return;
                };

                console.log("Tabla Coches ok");
            });
        });
    });
});

module.exports = connection;
