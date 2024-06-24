/* server.js */

const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRoutes");
const carsRouter = require("./routes/carsRoutes");
const PORT = 3000;

app.use(express.json());

app.use("/usuarios", usersRouter);
app.use("/coches", carsRouter);

app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
});
