# MyIMDB

## 📽️ About
MyIMDB is a modern web application that replicates IMDb's core functionalities, allowing users to discover and explore a vast collection of movies and TV shows. Built with React and Next.js for optimal performance and a seamless user experience.

## ✨ Features
- 🎬 Display popular movies with posters
- 🌗 Dark/Light mode switcher
- 🔍 Advanced sorting system (by popularity, etc.)
- 📱 Fully responsive design
- 🎨 Modern and intuitive UI
- 🔄 Real-time updates
- 🎯 Dynamic routing for movie details

## 🛠️ Tech Stack
- React.js
- Next.js 14
- Tailwind CSS
- TMDB API Integration
- Server-Side Rendering (SSR)
- TypeScript (optional - if you're using it)

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- TMDB API key

### Environment Variables
Rename `.env.example` to `.env.local` and add your configuration:

```env
API_KEY=YOUR_TMDB_API_KEY
API_URL=https://api.themoviedb.org/3/
NEXT_PUBLIC_IMAGE_URL=https://image.tmdb.org/t/p/
```

# Clone the repository
git clone https://github.com/yourusername/myimdb.git

# Navigate to project directory
cd myimdb

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
