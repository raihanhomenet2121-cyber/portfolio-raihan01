export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Muhammad Raihan Nugraha. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/raizenHans" target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-white text-sm transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-white text-sm transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
