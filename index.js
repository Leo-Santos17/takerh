// Padrão
const express = require("express")
const session = require('express-session')
const serverless = require('serverless-http')
const app = express()
const path = require('node:path')
const port = 3000
const gemini = require('./app/api/gemini')
const extractTag = require('./app/api/extractTag')
const pdf = require('./app/api/pdfGen')
const config = require('./app/config/config')
require('dotenv').config()


// Caminhos
app.set('views', path.join(__dirname, 'app/views'))
app.set('view engine', 'ejs');


// Configurações
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {secure:false}
    }))


app.get('/', (req,res) => {
    res.render("index.ejs", {session: req.session, templates: config.pdf.AVAILABLE_TEMPLATES, nomes: config.pdf.NAME_TEMPLATES});
})

app.post('/geminiRefactor', async (req,res)=>{
    const template = req.body.template
    const name = req.body.name;
    const address = req.body.address;
    const objective = req.body.objective;
    const experience = req.body.experience;
    const education = req.body.education;
    const skills = req.body.skills;
    const languages = req.body.languages;

    let text = `
    <name>${name}</name>
    <address>${address}</address>
    <objective>${objective}</objective>
    <experience>${experience}</experience>
    <education>${education}</education>
    <skills>${skills}</skills>
    <languages>${languages}</languages>
    `

    text = await gemini(text)
    
    req.session.template = template
    req.session.name = req.body.name
    req.session.address = extractTag(text, "address")
    req.session.phone = req.body.phone
    req.session.email = req.body.email
    req.session.objective = extractTag(text, "objective")
    req.session.experience = extractTag(text, "experience")
    req.session.education = extractTag(text, "education")
    req.session.skills = extractTag(text, "skills")
    req.session.languages = extractTag(text, "languages")

    req.session.save(function (err) {
        if (err) next(err)

        res.redirect('/')
    })
    
})

app.post('/pdfDownload', async (req,res) => {
    let pdfFile = await pdf(req.session.template, req.session)


    res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=curriculo.pdf'
    });
    res.send(pdfFile);
    //res.render('templates/template1.ejs', {session: req.session})
})


module.exports = app
module.exports.handler = serverless(app)