const express = require("express");
const path = require("path");
const app = express();
const LogInCollection = require("./mongo");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const templatesPath = path.join(__dirname, 'templates');
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'hbs');
app.set('views', templatesPath);
app.use(express.static(publicPath));

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/', (req, res) => {
    res.render('login');
});

app.post('/signup', async (req, res) => {
    const { name, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await LogInCollection.findOne({ name });

        if (existingUser) {
            return res.send('User already exists');
        }

        // Create a new user document
        const newUser = new LogInCollection({ name, password });

        // Save the new user to the database
        await newUser.save();

        // Respond with success message or redirect to login
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).send('Error registering user');
    }
});

app.post('/login', async (req, res) => {
    const { name, password } = req.body;

    try {
        // Find the user in the database
        const user = await LogInCollection.findOne({ name, password });

        if (user) {
            // Successful login
            // Render the dashboard.hbs file
            res.render('hod_dashboard'); // No need to specify the path if your views are configured correctly
        } else {
            // Invalid credentials
            res.status(401).send('Invalid username or password');
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Error logging in');
    }
});

app.listen(port, () => {
    console.log('Server connected on port:', port);
});
