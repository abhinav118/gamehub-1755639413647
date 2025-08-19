import { siteData, navigation } from '@/lib/data'

export default function GamesLibraryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">{siteData?.settings?.appName || 'GameHub'}</h1>
            <div className="flex space-x-6">
              <a key={index} href="undefined" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Home
              </a>
              <a key={index} href="undefined" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Games
              </a>
              <a key={index} href="undefined" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Leaderboard
              </a>
              <a key={index} href="undefined" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Profile
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container py-12">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Contact Us</h2>
          <form className="space-y-6 bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                rows={4}
                
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Content Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className="card p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Item {item}</h3>
              <p className="text-gray-600 mb-4">This is a sample item in the grid layout.</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container text-center">
          <p>&copy; 2024 {siteData?.settings?.appName || 'GameHub'}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}