const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const DATA_FILE = './wasteLogs.json';

// Helper function to read existing logs
function readLogs() {
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }
  const fileData = fs.readFileSync(DATA_FILE);
  return JSON.parse(fileData);
}

// Helper function to save logs
function saveLogs(logs) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(logs, null, 2));
}

// API to add new waste log
app.post('/api/waste-log', (req, res) => {
  try {
    const logs = readLogs();
    logs.push({
      username: req.body.username,
      type: req.body.type,
      amount: req.body.amount
