import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

//Express modulio iniciavimas
const app = express()
//Sugeneruojamas esamos direktorijos absoliutus kelias
const __dirname = dirname(fileURLToPath(import.meta.url))

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/uzduotys/index.html')
})

app.get('/pirma_uzduotis', (req, res) => {
   res.sendFile(__dirname + '/uzduotys/1.html')
})

app.get('/antra_uzduotis', (req, res) => {
   res.sendFile(__dirname + '/uzduotys/2.html')
})

app.get('/trecia_uzduotis', (req, res) => {
   res.sendFile(__dirname + '/uzduotys/3.html')
})

app.get('/ketvirta_uzduotis', (req, res) => {
   res.sendFile(__dirname + '/uzduotys/4.html')
})

app.get('/penkta_uzduotis', (req, res) => {
   res.sendFile(__dirname + '/uzduotys/5.html')
})

app.get('/sesta_uzduotis', (req, res) => {
   res.sendFile(__dirname + '/uzduotys/6.html')
})

app.listen(3000)