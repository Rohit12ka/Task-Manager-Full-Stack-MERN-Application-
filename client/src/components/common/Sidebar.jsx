import { 
  LayoutDashboard, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Calendar, 
  Settings, 
  Users, 
  X,
  PlusCircle,
} from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard", count: null },
  { icon: CheckCircle2, label: "Completed", id: "completed", count: 12 },
  { icon: Clock, label: "Pending", id: "pending", count: 5 },
  { icon: AlertCircle, label: "Overdue", id: "overdue", count: 2 },
  { icon: Calendar, label: "Calendar", id: "calendar", count: null },
];

const projects = [
  { name: "Website Redesign", color: "bg-blue-500" },
  { name: "Mobile App", color: "bg-purple-500" },
  { name: "Marketing Campaign", color: "bg-orange-500" },
];

export function Sidebar({ isMobileOpen, toggleMobileSidebar }) {
  const activeId = "dashboard"; // This would come from router or state

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobileSidebar}
            className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      <aside
        className={cn( // Always sticky on desktop, slides in on mobile
          "fixed md:sticky top-0 h-screen w-64 bg-white border-r border-gray-100 transition-transform duration-300 z-50",
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="p-4 md:hidden flex justify-end">
          <button onClick={toggleMobileSidebar} className="p-2 text-gray-400">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-3 py-6 space-y-8">
          {/* Main Nav */}
          <div>
            <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
              Main Menu
            </p>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group",
                    activeId === item.id 
                      ? "bg-indigo-50 text-indigo-600 shadow-sm shadow-indigo-100/50" 
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={cn(
                      "w-5 h-5 transition-colors",
                      activeId === item.id ? "text-indigo-600" : "text-gray-400 group-hover:text-gray-600"
                    )} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  {item.count !== null && (
                    <span className={cn(
                      "text-[10px] font-bold px-2 py-0.5 rounded-full",
                      activeId === item.id ? "bg-white text-indigo-600" : "bg-gray-100 text-gray-500"
                    )}>
                      {item.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Projects */}
          <div>
            <div className="px-3 flex items-center justify-between mb-4">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                My Projects
              </p>
              <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                <PlusCircle className="w-4 h-4" />
              </button>
            </div>
            <nav className="space-y-1">
              {projects.map((project) => (
                <button
                  key={project.name}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all group"
                >
                  <div className={cn("w-2 h-2 rounded-full", project.color)} />
                  <span className="text-sm font-medium">{project.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Teams */}
          <div>
            <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
              Team Spaces
            </p>
            <nav className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all">
                <Users className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium">Design Team</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all">
                <Users className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium">Engineering</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 w-full p-3">
          <nav className="space-y-1 p-1 border-t border-gray-100">
            <button
              key="settings"
              className={cn(
                "w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group",
                "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <div className="flex items-center gap-3">
                <Settings className={cn(
                  "w-5 h-5 transition-colors",
                  "text-gray-400 group-hover:text-gray-600"
                )} />
                <span className="text-sm font-medium">Settings</span>
              </div>
            </button>
          </nav>
        </div>
      </aside>
    </>
  );
}
