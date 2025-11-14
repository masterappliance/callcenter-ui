import { NavLink } from 'react-router-dom'

const navItems = [
  { id: 'calls', label: 'Lead Center', path: '/lead-center', icon: '📞' },
  { id: 'messages', label: 'Messaging', path: '/messages', icon: '💬' },
  { id: 'flows', label: 'Flows', path: '/flows', icon: '🔁' },
  { id: 'numbers', label: 'Numbers', path: '/numbers', icon: '#️⃣' },
  { id: 'users', label: 'Users', path: '/users', icon: '👥' },
  { id: 'settings', label: 'Settings', path: '/settings', icon: '⚙️' }
]

export default function Sidebar() {
  return (
    <aside className="w-16 bg-slate-900 text-slate-200 flex flex-col items-center py-3 space-y-4">
      {/* Logo / initials */}
      <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-xs font-semibold">
        MA
      </div>

      <nav className="flex-1 flex flex-col space-y-3 mt-4">
        {navItems.map(item => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              [
                'h-9 w-9 rounded-md flex items-center justify-center text-lg',
                isActive ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800/70 hover:text-white'
              ].join(' ')
            }
          >
            <span aria-hidden>{item.icon}</span>
          </NavLink>
        ))}
      </nav>

      {/* User avatar */}
      <button className="mt-auto h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">
        A
      </button>
    </aside>
  )
}
