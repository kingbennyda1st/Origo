import { Home, Briefcase, Store, GraduationCap, User, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/')
      setActiveTab('home');
    else if (path.startsWith('/business'))
      setActiveTab('business');
    else if (path.startsWith('/market'))
      setActiveTab('market');
    else if (path.startsWith('/skills'))
      setActiveTab('skills');
    else if (path.startsWith('/profile'))
      setActiveTab('profile');
  }, []);

  const tabs = [
    { id: 'home', label: 'Home', icon: Home, href: '/' },
    { id: 'business', label: 'Business', icon: Briefcase, href: '/business' },
    { id: 'market', label: 'Market', icon: Store, href: '/market' },
    { id: 'skills', label: 'Skills', icon: GraduationCap, href: '/skills' },
    { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <a
              key={tab.id}
              href={tab.href}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{tab.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
     }
