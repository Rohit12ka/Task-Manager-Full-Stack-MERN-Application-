// import React from 'react'

function Navbar() {
  return (
    <div>
      {/* <h1>Navbar</h1> */}
      <nav className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-6 sticky top-0 z-40 shadow-sm shadow-gray-100/50">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick}
          className="md:hidden p-2 hover:bg-gray-50 rounded-lg text-gray-500 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md shadow-indigo-100">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="font-bold text-lg text-gray-900 hidden sm:block">Taskly</span>
        </div>
      </div>

      <div className="flex-1 max-w-xl px-4 hidden md:block">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-gray-50 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        
        <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 p-1 pl-1 pr-2 hover:bg-gray-50 rounded-xl transition-all"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-gray-200">
              <img
                src={user?.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-semibold text-gray-900 leading-tight">{user?.name || "John Doe"}</p>
              <p className="text-[10px] text-gray-500">Premium Plan</p>
            </div>
          </button>

          <AnimatePresence>
            {isProfileOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsProfileOpen(false)}
                ></div>
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl z-20 overflow-hidden py-1"
                >
                  <div className="px-4 py-3 border-b border-gray-50">
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                  </div>
                  <div className="p-1">
                    <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-xl transition-colors text-left">
                      <User className="w-4 h-4" />
                      My Profile
                    </button>
                    <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-xl transition-colors text-left">
                      <Settings className="w-4 h-4" />
                      Settings
                    </button>
                  </div>
                  <div className="p-1 border-t border-gray-50">
                    <button onClick={logout}
                      className="flex items-center gap-3 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-colors text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign out
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Navbar
