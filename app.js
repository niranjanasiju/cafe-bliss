const express = require('express');
const app = express();
const path = require('path');

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/menu', (req, res) => {
    res.render('menu', { title: 'Menu' });
});


// Item-specific routes
app.get('/latte', (req, res) => {
    res.render('latte', { title: 'Latte' });
});

app.get('/espresso', (req, res) => {
    res.render('espresso', { title: 'Espresso' });
});

app.get('/cappuccino', (req, res) => {
    res.render('cappuccino', { title: 'Cappuccino' });
});

app.get('/pastries', (req, res) => {
    res.render('pastries', { title: 'Pastries' });
});

app.get('/green_tea', (req, res) => {
    res.render('green_tea', { title: 'Green Tea' });
});

app.get('/sandwich', (req, res) => {
    res.render('sandwich', { title: 'Sandwich' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
