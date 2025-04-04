const express = require('express');
const router = express.Router();

// GET /exam-group route
router.get('/', (req, res) => {
  res.json({ message: 'Group E API' });
});

// GET /exam-group/exams route - returns hardcoded list of users
router.get('/exams', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com' }
  ];
  
  res.json(users);
});

module.exports = router; 