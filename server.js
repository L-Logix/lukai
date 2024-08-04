const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Sample credentials (For demonstration purposes only; use a database in production)
const users = {
    'alana': 'password1',
    'daddy': 'password2',
    'mama': 'password3',
    'admin': 'db8yL4jk8k7RZx'
};

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from 'public' folder

// Login route
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (users[username] && users[username] === password) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
