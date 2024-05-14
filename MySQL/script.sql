# Create database
CREATE DATABASE TiendaOnline;
USE TiendaOnline;
CREATE TABLE Clientes (
    Nombre VARCHAR (20),
    Apellido VARCHAR (20),
    IDCliente INT (10) not null,
    PRIMARY KEY (ID),
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


#Create table

CREATE TABLE Productos (
    IDProducto INT (10) not null,
    NombreProducto VARCHAR (20),
    Descripcion TEXT,
    Precio INT (10) not null,
    Stock INT (10),
    PRIMARY KEY (IDProducto)
);

INSERT INTO productos (IDProducto, NombreProducto, Descripcion, Precio, Stock) VALUES
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
    NombreProveedor VARCHAR (20),
    Direccion VARCHAR (20),
    Email VARCHAR(20),
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
IDVenta INT (10) not null,
FechaVenta DATE,
NombreCliente VARCHAR (20),
NombreProducto VARCHAR (20),
CantidadVendida INT (10),
FOREIGN KEY (FKClientes) REFERENCES Clientes(IDCliente)
);

