import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ProfileCardProps {
  name: string;
  role: string;
  company: string;
  verified: boolean;
  connections: number;
  bio: string;
}

export default function ProfileCard({ name, role, company, verified, connections, bio }: ProfileCardProps) {
  return (
    <Card className="p-6">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary text-white text-2xl font-semibold">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          {verified && (
            <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1.5">
              <Icon name="BadgeCheck" size={16} className="text-white" />
            </div>
          )}
        </div>

        <h2 className="text-xl font-bold text-foreground mb-1">{name}</h2>
        <p className="text-sm font-medium text-muted-foreground mb-1">{role}</p>
        <p className="text-sm text-muted-foreground mb-4">{company}</p>

        <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
          <Icon name="Users" size={14} className="mr-1" />
          {connections} контактов
        </Badge>

        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{bio}</p>

        <div className="flex gap-2 w-full">
          <Button className="flex-1 bg-primary hover:bg-primary/90">
            <Icon name="UserPlus" size={18} className="mr-2" />
            Добавить
          </Button>
          <Button variant="outline" className="flex-1">
            <Icon name="Mail" size={18} className="mr-2" />
            Написать
          </Button>
        </div>
      </div>
    </Card>
  );
}
