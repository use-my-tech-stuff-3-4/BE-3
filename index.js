const express = require("express");
const server = express();
const LandingRouter = require("./server")

require('dotenv').config();

server.use(express.json());

const host = process.env.HOST || "http://127.0.0.1";
const port = process.env.PORT || 4000;

server.use("/", LandingRouter);

server.listen(port, () => {
    console.log(`\n*** Server is listening on ${host}:${port}`);
})