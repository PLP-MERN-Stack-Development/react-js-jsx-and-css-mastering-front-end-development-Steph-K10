// personal task manager with external API data display 

import { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';

// Import your components here
import Button from './components/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import Posts from './pages/Posts';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

function AppContent() {
  const [count, setCount] = useState(0);
  const [activeSection, setActiveSection] = useState('tasks');
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      <Navbar />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <Button 
            variant={activeSection === 'tasks' ? 'primary' : 'secondary'}
            onClick={() => setActiveSection('tasks')}
            className="flex items-center gap-2"
          >
            <span>📝</span>
            Task Manager
          </Button>
          <Button 
            variant={activeSection === 'api' ? 'primary' : 'secondary'}
            onClick={() => setActiveSection('api')}
            className="flex items-center gap-2"
          >
            <span>🌐</span>
            API Data Explorer
          </Button>
          
          {/* Section Indicator */}
          <div className="ml-auto flex items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
              {activeSection === 'tasks' ? 'Task Management' : 'API Explorer'}
            </span>
          </div>
        </div>

        {activeSection === 'tasks' ? (
          <div className="space-y-8">
            <TaskManager />
            
            {/* Demo Counter */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Interactive Counter Demo
                </h3>
                
                <div className="flex items-center justify-center gap-4 my-4">
                  <Button
                    variant="danger"
                    size="lg"
                    onClick={() => setCount((count) => count - 1)}
                    className="w-12 h-12 rounded-full text-lg"
                  >
                    -
                  </Button>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white min-w-16 text-center">
                    {count}
                  </span>
                  <Button
                    variant="success"
                    size="lg"
                    onClick={() => setCount((count) => count + 1)}
                    className="w-12 h-12 rounded-full text-lg"
                  >
                    +
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                  This demonstrates component state management
                </p>
              </div>
            </div>
          </div>
        ) : (
          <Posts />
        )}
      </main>

      <Footer />
    </div>
  )
}



export default App