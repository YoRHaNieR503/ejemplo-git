const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

// Middleware para analizar los cuerpos de las solicitudes entrantes
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para mostrar el formulario
app.get('/agregar-producto', (req, res) => {
    res.render('agregar_producto');
});

// Ruta para manejar el envío del formulario
app.post('/agregar-producto', (req, res) => {
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    // Aquí puedes hacer lo que quieras con los datos del formulario
    res.send(`Producto agregado: ${nombre}, Precio: ${precio}`);
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
