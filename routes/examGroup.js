const express = require('express');
const router = express.Router();

// GET /exam-group route
router.get('/', (req, res) => {
  res.json({ message: 'Group E API' });
});

// PUT /exam-group/exams/:id route - updates an exam
router.put('/exams/:id', (req, res) => {
  const examId = parseInt(req.params.id); // Get ID from URL
  const { name, date } = req.body; // Get updated data from request body
  const examIndex = exams.findIndex(exam => exam.id === examId); // Find the exam by ID

  if (examIndex !== -1) {
    // Update the exam if it exists
    exams[examIndex] = { id: examId, name, date };
    res.json({ message: 'Exam updated successfully!', exam: exams[examIndex] });
  } else {
    // Return error if exam is not found
    res.status(404).json({ message: 'Exam not found!' });
  }
});

module.exports = router; 
