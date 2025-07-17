const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'logs.txt'); 

const logger = (req, res, next) => {
  const logEntry = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} Body: ${JSON.stringify(req.body)}\n`;

  fs.appendFile(logFile, logEntry, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });

  next();
};

module.exports = logger;
