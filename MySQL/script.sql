-- Create database
CREATE DATABASE TiendaOnline;
USE TiendaOnline;
CREATE TABLE Clientes (
    Nombre VARCHAR (20),
    Apellido VARCHAR (20),
    IDCliente INT (10) not null,
    PRIMARY KEY (IDCliente),
    NumeroProducto INT (10) not null
);

INSERT INTO Clientes (Nombre, Apellido, IDCliente, NumeroProducto)
VALUE 
('Ana', 'García', 1, 123),
('Luis', 'Martínez', 2, 456),
('Carmen', 'Hernández', 3, 789),
('José', 'López', 4, 321),
('Laura', 'Díaz', 5, 654),
('Juan', 'Pérez', 6, 987),
('María', 'González', 7, 432),
('Pedro', 'Sánchez', 8, 876),
('Elena', 'Ramírez', 9, 543),
('Miguel', 'Flores', 10, 210);


-- Create table

CREATE TABLE Productos (
    IDProducto INT (10) not null,
    NombreProducto VARCHAR (20),
    Descripcion TEXT,
    Precio INT (10) not null,
    Stock INT (10),
    PRIMARY KEY (IDProducto)
);

INSERT INTO Productos (IDProducto, NombreProducto, Descripcion, Precio, Stock) VALUES
(1, 'Producto A', 'Descripción del Producto A', 100000, 50),
(2, 'Producto B', 'Descripción del Producto B', 150000, 30),
(3, 'Producto C', 'Descripción del Producto C', 200000, 20),
(4, 'Producto D', 'Descripción del Producto D', 250000, 15),
(5, 'Producto E', 'Descripción del Producto E', 300000, 10),
(6, 'Producto F', 'Descripción del Producto F', 350000, 5),
(7, 'Producto G', 'Descripción del Producto G', 400000, 25),
(8, 'Producto H', 'Descripción del Producto H', 450000, 35),
(9, 'Producto I', 'Descripción del Producto I', 500000, 20),
(10, 'Producto J', 'Descripción del Producto J', 550000, 6);




CREATE TABLE Proveedores (
    IDProveedor INT (10) not null,
    NombreProveedor VARCHAR (30),
    Direccion VARCHAR (40),
    Email VARCHAR(40),
    PRIMARY KEY (IDProveedor)
);

INSERT INTO Proveedores (IDProveedor, NombreProveedor, Email, Direccion) VALUES
(1, 'Carlos López', 'contactoA@proveedor.com', 'Calle Falsa 123'),
(2, 'Ana García', 'contactoB@proveedor.com', 'Avenida Siempre 456'),
(3, 'Luis Martínez', 'contactoC@proveedor.com', 'Boulevard de los Sueños'),
(4, 'María Rodríguez', 'contactoD@proveedor.com', 'Calle de la Alegría 101'),
(5, 'José Fernández', 'contactoE@proveedor.com', 'Plaza Mayor 202'),
(6, 'Laura Pérez', 'contactoF@proveedor.com', 'Carrera Larga 303'),
(7, 'David González', 'contactoG@proveedor.com', 'Avenida Principal 505'),
(8, 'Ana Martínez', 'contactoH@proveedor.com', 'Calle del Sol 808'),
(9, 'Sergio López', 'contactoI@proveedor.com', 'Avenida Central 707'),
(10,'Elena Sánchez', 'contactoJ@proveedor.com', 'Calle Estrecha 909');


CREATE TABLE Ventas (
    IDVenta INT(10) NOT NULL,
    FechaVenta DATE,
    IDCliente INT(10),
    IDProducto INT(10),
    NombreProducto VARCHAR(20),
    CantidadVendida INT(10),
    PRIMARY KEY (IDVenta),
    FOREIGN KEY (IDCliente) REFERENCES Clientes(IDCliente),
    FOREIGN KEY (IDProducto) REFERENCES Productos(IDProducto)
);


INSERT INTO Ventas (IDVenta, FechaVenta, IDCliente, IDProducto, NombreProducto, CantidadVendida) VALUES
(1, '2024-05-01', 1, 1, 'Producto A', 3),
(2, '2024-05-02', 2, 2, 'Producto B', 1),
(3, '2024-05-03', 3, 3, 'Producto C', 2),
(4, '2024-05-04', 4, 4, 'Producto D', 1),
(5, '2024-05-05', 5, 5, 'Producto E', 4),
(6, '2024-05-06', 6, 6, 'Producto F', 1),
(7, '2024-05-07', 7, 7, 'Producto G', 3),
(8, '2024-05-08', 8, 8, 'Producto H', 2),
(9, '2024-05-09', 9, 9, 'Producto I', 1),
(10, '2024-05-10', 10, 10, 'Producto J', 2),
(11, '2024-05-10', 1, 11, 'Producto B', 5);



-- Insertando datos en la tabla Ventas
INSERT INTO Ventas (IDVenta, FechaVenta, IDCliente, IDProducto, NombreProducto, CantidadVendida) VALUES
(1, '2024-05-01', 1, 1, 'Producto A', 5),
(2, '2024-05-02', 2, 2, 'Producto B', 3),
(3, '2024-05-03', 3, 3, 'Producto C', 10),
(4, '2024-05-04', 4, 4, 'Producto D', 2),
(5, '2024-05-05', 5, 5, 'Producto E', 7),
(6, '2024-05-06', 6, 6, 'Producto F', 1),
(7, '2024-05-07', 7, 7, 'Producto G', 4),
(8, '2024-05-08', 8, 8, 'Producto H', 8),
(9, '2024-05-09', 9, 9, 'Producto I', 6),
(10, '2024-05-10', 10, 10, 'Producto J', 9);


-- Consultar relación entre tablas
SELECT
    Ventas.IDVenta,
    Ventas.FechaVenta,
    Clientes.Nombre,
    Clientes.Apellido,
    Ventas.NombreProducto,
    Ventas.CantidadVendida
FROM
    Ventas
JOIN
    Clientes
WHERE
    Clientes.IDCliente = 1
ON
    Ventas.IDCliente = Clientes.IDCliente;


-- insert nueva compra
INSERT INTO Ventas (IDVenta, FechaVenta, IDCliente, IDProducto, NombreProducto, CantidadVendida)
VALUES (12, '2024-05-12', 2, 2, 'Producto B', 2);

#Actualizar el stock de productos
UPDATE Productos
SET Stock = Stock - 2
WHERE IDProducto = 2;


-- Encapsulamiento de ordenes para asegurarnos de la integridad de datos
START TRANSACTION;
-- Se utiliza para una nueva transacción
--  Permiten garantizar la integridad y consistencia de los datos en la base de datos

-- Insertar una nueva venta
INSERT INTO Ventas (IDVenta, FechaVenta, IDCliente,IDProducto, NombreProducto, CantidadVendida)
VALUES (13, '2024-05-11', 1, 1, 'Producto A', 2),
        (14, '2024-05-12', 2, 2, 'Producto B', 2);

-- Marca el final de la transacción actual. Si se ejecuta se da por hecho que la transacción interna se ejecutó correctamente
COMMIT;


-- Actualizar el stock del producto
-- Stock es el nombre de una de las columnas definidas en la tabla de productos
UPDATE Productos
SET Stock = Stock - 2
WHERE IDProducto = 1;

UPDATE Productos
SET Stock = Stock - 2
WHERE IDProducto = 2;



-- Agregar datos a la tabla de clientes
INSERT INTO Clientes (Nombre, Apellido, IDCliente, NumeroProducto)
VALUE ('Liz', 'Victoria', 11, 213);

-- Agregar datos a la tabla de proveedores
INSERT INTO Proveedores (IDProveedor, NombreProveedor, Email, Direccion)
VALUE (11, 'Victoria Liz', 'contactoA@proveedor.com','Calle Feliz');

-- Modificar datos de la tabla clientes
UPDATE Clientes
SET IDCliente = 12
WHERE IDCliente = 11;

-- Modificar datos de la tabla proveedores
UPDATE Proveedores
SET Direccion = 'Calle no tan Feliz'
WHERE Direccion = 'Calle Feliz';

-- Eliminar datos de la tabla de clientes
DELETE FROM Clientes
WHERE IDCliente = 12;

-- Eliminar datos de la tabla de proveedores
DELETE FROM Proveedores
WHERE NombreProveedor = 'Victoria Liz';
