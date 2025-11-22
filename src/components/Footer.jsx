import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} PLP Task Manager. Built with React & Tailwind CSS.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="text-xs text-gray-400 dark:text-gray-500">
              Features: Task Management • API Integration • Dark Mode
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer