# LaterBox Frontend

🌐 **Live Application**:  [LaterBox](https://laterbox-fe.netlify.app) | 
                          [Backend Repository](https://github.com/unreal-amaan/LaterBox-BE)

## 📋 Overview

LaterBox Frontend is a modern, responsive web application built with React, TypeScript, and Tailwind CSS. It provides an intuitive interface for managing bookmarks, organizing links into categories, and sharing collections with others. 

## ✨ Key Features

- **🎨 Modern UI/UX**: Clean, intuitive interface with smooth animations
- **🌙 Dark/Light Theme**: Seamless theme switching with system preference detection
- **📱 Responsive Design**: Mobile-first approach with perfect desktop experience
- **🔍 Smart Search**: Auto-complete search with category and link suggestions
- **📁 Category Management**: Create, edit, and organize link categories
- **🔗 Link Management**: Save, tag, and organize bookmarks with notes
- **📤 Public Sharing**: Share categories with unique public links
- **🏷️ Tag System**: Organize links with custom tags
- **📌 Pin System**: Pin important categories and links
- **🔄 Real-time Updates**: Instant UI updates with optimistic mutations

## 🛠️ Tech Stack

### Core Technologies
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation

### State Management & Data Fetching
- **Recoil** for global state management
- **TanStack Query** for server state and caching
- **Axios** for HTTP requests with interceptors


## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/unreal-amaan/LaterBox-FE.git
   cd LaterBox-FE
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=
   VITE_REACT_APP_URL=
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Base UI components (Button, Input, etc.)
│   │   └── ...            # Feature-specific components
│   ├── pages/             # Page components
│   │   ├── Home/          # Home page components
│   │   ├── CategoryDetails/ # Category view components
│   │   ├── LandingPage/   # Landing page components
│   │   └── ...            # Other pages
│   ├── hooks/             # Custom React hooks
│   ├── controllers/       # API controllers
│   ├── context/          # React context providers
│   ├── types.ts          # TypeScript type definitions
│   └── lib/               # Utility functions
├── package.json
└── vite.config.ts
```

## 🎯 Key Pages & Features

### Landing Page
- **Hero Section**: Compelling introduction with CTA
- **Features**: Showcase of key capabilities
- **How It Works**: Step-by-step user journey
- **Testimonials**: Social proof and user feedback
- **CTA Section**: Clear call-to-action for sign-up

### Home Dashboard
- **Category Grid**: Visual representation of all categories
- **Quick Actions**: Add category, search, and settings
- **Statistics**: Link counts and activity overview
- **Recent Activity**: Latest additions and updates

### Category Details
- **Link Management**: Add, edit, and delete links
- **Search & Filter**: Find specific links quickly
- **Tag System**: Organize with custom tags
- **Share Options**: Public sharing with unique URLs

### Public Sharing
- **Clean Interface**: Minimalist design for shared content
- **Responsive Layout**: Works on all devices
- **Social Sharing**: Easy sharing to social platforms

## 🔐 Authentication Flow

1. **Google OAuth**: Secure authentication with Google
2. **Token Management**: Automatic token refresh
3. **Protected Routes**: Secure access to user data
4. **Session Persistence**: Maintains login across browser sessions


## 👨‍💻 Author

**Syed Amaanuddin**
- GitHub: [@unreal-amaan](https://github.com/unreal-amaan)
- Project: [LaterBox](https://laterbox-fe.netlify.app)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/unreal-amaan/LaterBox-FE/issues) page
2. Create a new issue with detailed information
3. Contact the maintainer

---

⭐ **Star this repository if you found it helpful!**

🔗 **Try the live application**: [LaterBox](https://laterbox-fe.netlify.app)