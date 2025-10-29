import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface GroupCardProps {
  name: string;
  category: string;
  members: number;
  posts: number;
  description: string;
  isPrivate: boolean;
}

export default function GroupCard({ name, category, members, posts, description, isPrivate }: GroupCardProps) {
  return (
    <Card className="p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="h-14 w-14 rounded-lg">
          <AvatarFallback className="bg-accent/20 text-accent text-lg font-semibold rounded-lg">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground truncate">{name}</h3>
            {isPrivate && (
              <Icon name="Lock" size={14} className="text-muted-foreground" />
            )}
          </div>
          <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
            {category}
          </Badge>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Icon name="Users" size={16} className="text-primary" />
          <span>{members}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Icon name="FileText" size={16} className="text-primary" />
          <span>{posts} постов</span>
        </div>
      </div>

      <Button className="w-full" variant="outline">
        <Icon name="UserPlus" size={16} className="mr-2" />
        Вступить в группу
      </Button>
    </Card>
  );
}
