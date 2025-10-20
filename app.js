const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello DevOps Internship! My CI/CD pipeline is working with GitHub Secrets!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});