import React from 'react'
import Button from './Button'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-200">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              🚀 PLP Task Manager
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Manage tasks & explore API data
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <span className="text-xl">☀️</span>
              ) : (
                <span className="text-xl">🌙</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar