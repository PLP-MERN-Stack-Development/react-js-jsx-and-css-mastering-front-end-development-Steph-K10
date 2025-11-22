# Week 3 React.js and Tailwind CSS Assignment

This assignment focuses on building a responsive React application using JSX and Tailwind CSS, implementing component architecture, state management, hooks, and API integration.

## 🌟 Features
### 🎯 Task Management
- Add, edit, and delete tasks
- Mark tasks as complete/incomplete
- Filter tasks (All, Active, Completed)
- Local storage persistence
- Task statistics, clear completed tasks

### 🌐 API Integration
- Fetch data from JSONPlaceholder API
- Real-time search functionality
- Pagination with "Load More"
- Loading states and error handling
- Aesthetic card-based layout

### 🎨 User Experience
- Dark/Light theme toggle
- Fully responsive design
- Smooth animations and transitions
- Interactive UI components
- Fast and performant

## 🚀 Live Demo
Live Application URL: [YOUR_VERCEL_APP_URL_HERE]()


## 📸 Application Screenshots
### Light Theme
[Clean light theme interface with task management](images/light.png)

### Dark Theme
[Dark theme with reduced eye strain](images/dark.png)

### API Data Explorer
[API data display in light mode](images/dataExplorer.png)

### API Data Explorer Load State
[API loading state](images/loading.png)



## 🛠️ Tech Stack
- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Hooks + Context API
- **API**: JSONPlaceholder REST API
- **Deployment**: Vercel

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Customizable button component
│   ├── TaskManager.jsx # Main task management
│   ├── Navbar.jsx      # Navigation header
│   └── Footer.jsx      # Site footer
├── pages/              # Main application pages
│   └── Posts.jsx       # API data display
├── hooks/              # Custom React hooks
│   └── useLocalStorage.js # Local storage hook
├── context/            # React context providers
│   └── ThemeContext.jsx # Dark/light theme
├── api/                # API integration
│   └── jsonPlaceholder.js # External API calls
└── utils/              # Utility functions
```

## 📥 Installation & Setup
### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Modern web browser

**Step 1: Clone the Repository**
```
git clone git@github.com:PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-Steph-K10.git
```

**Step 2: Install Dependencies**
```
npm install
```

**Step 3: Run Development Server**
```
npm run dev
```
The application will open at http://localhost:5173

## 🎯 Usage Guide
### Managing Tasks
1. **Add Task**: Type in the input field and click "Add Task" or press Enter
2. **Complete Task**: Click the checkbox next to any task
3. **Delete Task**: Hover over a task and click the trash icon
4. **Filter Tasks**: Use the filter buttons (All, Active, Completed)
5. **Clear Completed**: Remove all completed tasks at once

### Exploring API Data
1. **Switch to API Tab**: Click "API Data Explorer" in navigation
2. **Search Posts**: Use the search bar to filter posts
3. **Load More**: Click "Load More Posts" to paginate
4. **View Details**: Each card shows post title, content, and metadata

### Theme Customization
- Click the moon/sun icon in the navbar to toggle themes
- Theme preference is saved in local storage
- System preference is respected on first visit

## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/) 