import {LayoutDashboard,CheckSquare,FolderGit2,Settings,} from "lucide-react";
function Sidebar() {
  
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Tasks", icon: CheckSquare, href: "/tasks" },
    { name: "Projects", icon: FolderGit2, href: "/projects" },
    { name: "Settings", icon: Settings, href: "/settings" },
  ];

  return (
    <div>
      <aside className=" hidden md:flex flex-col text-white w-60  bg-gray-700 p-4 h-screen shrink-0">
        <p>Main Menu</p>
        <ul className="flex flex-col gap-4 mt-5">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-5 py-2.5 rounded-xl text-md font-semibold text-white hover:text-indigo-600 hover:bg-indigo-50/50 transition-all group"
              >
                <Icon className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                <span>{item.name}</span>
              </a>
            );
          })}
          {/* {menuItems.map((item) => (
              <li key={item} className="flex  hover:bg-black rounded-lg ml-9 mr-6 text-lg">
                <button className={activeMenu === item ? 'active': ''} 
                 onClick={() => setActiveMenu(item)}>
                  {item}
                </button> 
              </li>
            ))} */}
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
