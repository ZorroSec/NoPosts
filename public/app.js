import { posts } from "./posts.js"
import { cotacao } from "./cotacao.js"
const covidResponse = document.getElementById('covidResponse')
const mainConteiner = document.getElementById('mainConteiner')
const cotacaoId = document.getElementById('cotacao')
cotacao(cotacaoId, 'BTC-BRL')
posts(mainConteiner)