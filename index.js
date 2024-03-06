// API ============================================

const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const { leiteenvasado, getLeiteenvasado, getDadosDoMiguel, postDadosDoMiguel } = require("./src/requisições/temperatura");

app.use(cors({ origin: '*' }));
app.use(express.json());

router.post(`/leiteenvasado`, (req, res) => leiteenvasado(req, res));
router.post("/becker", (req, res) => postDadosDoMiguel(req, res));

// Corrected callback functions for GET requests
router.get(`/leiteenvasado`, (req, res) => getLeiteenvasado(res));
router.get("/becker", (req, res) => getDadosDoMiguel(res));

app.use(router);

app.listen(7777, () => console.log(`API rodando na porta ${7777}`));

