//Archana

const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
//define path for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))
app.get('', (req, res) => {
    res.render('index', {
        title: 'ExpressApp',
        name: 'Archana'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Archana'
    })
})
app.get('/about/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'MyName',
        errorMessage: 'About article not found.'
    })
})
app.get('/intro', (req, res) => {
    res.render('intro', {
        title: 'Introduction',
        name: 'Archana'
    })
})
app.get('/intro/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'MyName',
        errorMessage: 'Introduction article not found.'
    })
})

app.get('/history', (req, res) => {
    res.render('history', {
        history: 'Weather Forcasting',
        title: 'History',
        name: 'Archana'
    })
})
app.get('/history/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'MyName',
        errorMessage: 'History article not found.'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'MyName'
    })
})
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'MyName',
        errorMessage: 'Help article not found.'
    })
})


app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'MyName',
        errorMessage: 'Page not found.'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})