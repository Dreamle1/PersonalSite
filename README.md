# Personal Website - MERN Stack

A modern, responsive personal website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-first approach
- ⚡ Fast loading with optimized performance
- 🔧 Easy to customize and extend
- 📧 Contact form with backend integration
- 🎯 Smooth scrolling navigation
- 🌟 Beautiful animations and transitions

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

### Frontend
- **React.js** - JavaScript library for building user interfaces
- **CSS3** - Styling with modern CSS features
- **Responsive Design** - Mobile-first approach

## Project Structure

```
PersonalSite/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Projects.js
│   │   │   ├── Contact.js
│   │   │   └── Footer.js
│   │   ├── App.js         # Main App component
│   │   └── index.js       # Entry point
│   └── package.json
├── index.js               # Express server
├── package.json           # Backend dependencies
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd PersonalSite
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/personal-site
   NODE_ENV=development
   ```

5. **Start the development servers**

   **Option 1: Run both servers simultaneously**
   ```bash
   npm run dev
   ```

   **Option 2: Run servers separately**
   
   Terminal 1 (Backend):
   ```bash
   npm run server
   ```
   
   Terminal 2 (Frontend):
   ```bash
   npm run client
   ```

6. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Available Scripts

### Backend Scripts
- `npm start` - Start production server
- `npm run server` - Start development server with nodemon
- `npm run dev` - Start both frontend and backend in development mode

### Frontend Scripts
- `npm run client` - Start React development server
- `npm run build` - Build for production
- `npm run install-client` - Install frontend dependencies

## Customization

### Personal Information
1. Update personal details in `client/src/components/` files
2. Modify the API responses in `index.js` backend routes
3. Update contact information in the Contact component

### Styling
- Modify CSS files in `client/src/components/` for component-specific styles
- Update `client/src/App.css` for global styles
- Change color scheme by updating CSS variables

### Content
- Update project information in the backend `/api/projects` route
- Modify about section data in the `/api/about` route
- Customize hero section content in `Hero.js`

## API Endpoints

- `GET /api/data` - Basic test endpoint
- `GET /api/about` - Personal information
- `GET /api/projects` - Project portfolio
- `POST /api/contact` - Contact form submission

## Deployment

### Heroku Deployment
1. Create a Heroku account and install Heroku CLI
2. Initialize git repository (if not already done)
3. Create Heroku app: `heroku create your-app-name`
4. Set environment variables in Heroku dashboard
5. Deploy: `git push heroku main`

### Vercel Deployment (Frontend)
1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to client directory: `cd client`
3. Deploy: `vercel`

### MongoDB Atlas
1. Create MongoDB Atlas account
2. Create a new cluster
3. Get connection string and update `MONGODB_URI` in environment variables

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

If you have any questions or need help, feel free to open an issue or contact me through the contact form on the website.

---

Built with ❤️ using the MERN Stack

