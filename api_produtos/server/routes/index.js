const { Router } = require("express");
const routes = Router();

// Liberar origens para requisições
var cors = require('cors');
routes.use(cors({origin: '*'}));
//routes.use(cors({origin: 'http://localhost:3000'}));

// cada programa terá uma entrada em routes
const produtosRout = require("./ProdutosRout");
routes.use("/api", produtosRout);






module.exports = routes;