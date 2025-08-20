// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/personal-site', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));

// Basic route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// About route
app.get('/api/about', (req, res) => {
  res.json({
    name: 'Andrew Chang',
    title: 'Software Engineer',
    description: 'Experienced software engineer with expertise in full-stack development, database systems, and cloud technologies. Currently working at insightsoftware where I design and implement robust software solutions.',
    skills: [
      'JavaScript', 'Python', 'Java', 'C', 'C++', 'React.js', 'Node.js', 'Express',
      'MongoDB', 'SQL', 'REST API', 'Git', 'Jenkins', 'AWS S3', 'BigQuery',
      'OAuth2', 'JWT', 'Material-UI', 'Agile', 'OOP', 'Data Structures & Algorithms'
    ],
    experience: '5+ years'
  });
});

// Projects route
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'SparkJDBC Driver',
      description: 'Designed and implemented SparkJDBC driver enabling SQL translation for Apache Spark database connections. Led OAuth 2.0 implementation with token caching for enhanced authentication.',
      technologies: ['Java', 'Apache Spark', 'OAuth2', 'JWT', 'REST API', 'Jenkins'],
      github: 'https://github.com/andrewchang',
      live: 'https://insightsoftware.com'
    },
    {
      id: 2,
      title: 'MERN Stack Learning Platform',
      description: 'Redesigned and deployed MERN stack platform for Sandbox Academy, enabling students to learn Python game programming with integrated code editor and file storage.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Python', 'AWS S3', 'Material-UI'],
      github: 'https://github.com/andrewchang',
      live: 'https://sandboxacademy.com'
    },
    {
      id: 3,
      title: 'XML Documentation System',
      description: 'Designed translation system for XML to HTML5 and PDF using XSLT for SAP internal documentation with auto-generated table of contents and collapsible content.',
      technologies: ['XSLT', 'XML', 'HTML5', 'JavaScript', 'CSS', 'jQuery', 'DITA'],
      github: 'https://github.com/andrewchang',
      live: 'https://sap.com'
    },
    {
      id: 4,
      title: 'Automated Testing Framework',
      description: 'Created comprehensive automated testing framework using Selenium and REST APIs with BigQuery integration for improved testing efficiency and scalability.',
      technologies: ['Python', 'Selenium', 'REST API', 'BigQuery', 'Jenkins', 'Jira'],
      github: 'https://github.com/andrewchang',
      live: 'https://appneta.com'
    }
  ]);
});

// Contact route
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Here you would typically save to database or send email
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message! I\'ll get back to you soon.' 
  });
});

// Serve static files from React build in production
if (process.env.NODE_ENV === 'production') {
  const buildPath = path.resolve(__dirname, 'build');
  app.use(express.static(buildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
