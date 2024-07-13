/* server.js */

const express = require("express");
const cors = require('cors');

require('dotenv').config();

const usersRouter = require("./routes/usersRoutes");
const carsRouter = require("./routes/carsRoutes");
const contactsRouter = require("./routes/contactsRoutes");
const countriesRouter = require("./routes/countriesRoutes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Rutas */
app.use("/api/users", usersRouter);
app.use("/api/cars", carsRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/countries", countriesRouter);


app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
});
