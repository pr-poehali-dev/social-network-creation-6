import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const menuItems = [
    { id: 'feed', label: 'Лента', icon: 'Home' },
    { id: 'profile', label: 'Профиль', icon: 'User' },
    { id: 'messages', label: 'Сообщения', icon: 'MessageSquare' },
    { id: 'events', label: 'Мероприятия', icon: 'Calendar' },
    { id: 'groups', label: 'Группы', icon: 'Users' },
    { id: 'search', label: 'Поиск', icon: 'Search' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Icon name="Briefcase" className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-sidebar-foreground">BizConnect</h1>
            <p className="text-xs text-sidebar-foreground/60">Деловая сеть</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? 'default' : 'ghost'}
              className={`w-full justify-start gap-3 ${
                activeSection === item.id 
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              }`}
              onClick={() => onSectionChange(item.id)}
            >
              <Icon name={item.icon as any} size={20} />
              <span>{item.label}</span>
            </Button>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sidebar-accent cursor-pointer transition-colors">
          <Avatar className="h-10 w-10">
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary text-white">АП</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-sidebar-foreground truncate">Анна Петрова</p>
              <Badge variant="secondary" className="h-5 px-1.5 text-xs bg-primary/10 text-primary border-primary/20">
                <Icon name="BadgeCheck" size={12} className="mr-1" />
                Pro
              </Badge>
            </div>
            <p className="text-xs text-sidebar-foreground/60 truncate">CEO, TechStart</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
