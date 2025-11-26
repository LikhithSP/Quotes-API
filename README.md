# Quotes API
![alt text](image.png)

A modern, full-stack quotes management application built with Node.js, Express, MongoDB, and a beautiful frontend UI.

## 🌟 Features

- **Create** - Add new quotes with author, category, and tags
- **Read** - Display all quotes with advanced search and filtering
- **Update** - Edit existing quotes with a modal dialog
- **Delete** - Remove quotes with confirmation
- **Search** - Real-time search across quote text and authors
- **Filter** - Filter quotes by category
- **Modern UI** - Clean, linear design with responsive layout
- **Two-column Layout** - Displays two quotes per row on desktop
- **Auto-refresh** - Quotes update every 30 seconds

## 📋 Project Structure

```
quotes-api/
├── config/
│   └── db.js                 # MongoDB connection configuration
├── controllers/
│   └── quotesController.js   # Quote CRUD logic
├── data/
│   └── sampleQuotes.json     # Sample quote data
├── models/
│   └── Quote.js              # Quote schema and model
├── public/
│   └── index.html            # Frontend UI (modern linear design)
├── routes/
│   └── quotes.js             # API routes
├── .env                       # Environment variables
├── .gitignore                # Git ignore file
├── server.js                 # Express server setup
└── package.json              # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LikhithSP/Quotes-API.git
   cd Quotes-API/quotes-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the `quotes-api` directory
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/quotesdb
   ```

4. **Start the server**
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:5000`

## 📚 API Endpoints

### Base URL
- `http://localhost:5000/quotes` (recommended)

### Endpoints

#### Get All Quotes
```
GET http://localhost:5000/quotes
```
Returns all quotes with optional filtering

**Query Parameters:**
- `author` - Filter by author name
- `category` - Filter by category
- `tag` - Filter by tag
- `q` - Search query for quote text

**Example:**
```
GET http://localhost:5000/quotes/?category=Motivation
```

#### Get Random Quote
```
GET http://localhost:5000/quotes/random
```
Returns a random quote from the database

#### Get Quote by ID
```
GET http://localhost:5000/quotes/:id
```
Returns a specific quote by its MongoDB ID

#### Create Quote
```
POST http://localhost:5000/quotes/

Content-Type: application/json

{
  "quote": "The only limit to our realization of tomorrow is our doubts of today.",
  "author": "Franklin D. Roosevelt",
  "category": "Motivation",
  "tags": ["future", "doubt"]
}
```

#### Update Quote
```
PUT http://localhost:5000/quotes/:id

Content-Type: application/json

{
  "quote": "Updated quote text",
  "author": "Author Name",
  "category": "Wisdom",
  "tags": ["tag1", "tag2"]
}
```

#### Delete Quote
```
DELETE http://localhost:5000/quotes/:id
```

## 🎨 Frontend Features

### User Interface
- **Add New Quote** - Form on the left side
- **All Quotes** - Display quotes in a grid (2 columns on desktop, 1 on mobile)
- **Search** - Real-time search functionality
- **Filter** - Filter by category
- **Edit Modal** - Update quotes in a popup modal
- **Soft Buttons** - Linear theme buttons with subtle colors



## 📦 Dependencies

### Backend
- **express** - Web framework
- **mongoose** - MongoDB ODM
- **dotenv** - Environment variables
- **cors** - Cross-Origin Resource Sharing

### Frontend
- Vanilla JavaScript (no framework required)
- HTML5
- CSS3

## 🔧 Available Scripts

In the `quotes-api` directory, you can run:

### Development Mode
```bash
npm run dev
```
Starts the server with nodemon for auto-reload on file changes

### Production Mode
```bash
npm start
```
Starts the server normally

## 🌐 Accessing the Application

### Frontend
Open your browser and navigate to:
```
http://localhost:5000
```

### API Testing (Postman)
- **Base URL:** `http://localhost:5000/quotes`


## 🛠️ Environment Variables

Create a `.env` file in the `quotes-api` directory:

```env
# Server Configuration
PORT=5000

# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/quotesdb

or 

# For MongoDB Atlas (Cloud)
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/quotesdb?retryWrites=true&w=majority
```

## 💾 MongoDB Connection

### Local MongoDB
```
mongodb://localhost:27017/quotesdb
```

### MongoDB Atlas (Cloud)
```
mongodb+srv://username:password@cluster.mongodb.net/quotesdb?retryWrites=true&w=majority
```

## 🐛 Troubleshooting

### MongoDB Connection Error
If you get a connection error, ensure:
- MongoDB is running locally (`mongod`)
- Or you have a valid MongoDB Atlas connection string in `.env`


## 🎯 Sample Data

The project includes `data/sampleQuotes.json` with initial quotes:
- "The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt
- "Simplicity is the ultimate sophistication." - Leonardo da Vinci
- "Strive not to be a success, but rather to be of value." - Albert Einstein

## 🚀 Future Enhancements

- [ ] User authentication and authorization
- [ ] Pagination for quotes
- [ ] Export quotes as CSV/JSON
- [ ] Dark mode support
- [ ] Rate limiting for API
- [ ] Quote of the day feature
- [ ] Social sharing functionality
- [ ] Advanced analytics

## 📄 License

This project is open source and available under the MIT License.


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

