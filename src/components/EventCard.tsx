import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'online' | 'offline';
  attendees: number;
  category: string;
}

export default function EventCard({ title, date, time, location, type, attendees, category }: EventCardProps) {
  return (
    <Card className="p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
          {category}
        </Badge>
        <Badge variant={type === 'online' ? 'default' : 'secondary'} className="text-xs">
          {type === 'online' ? (
            <>
              <Icon name="Video" size={12} className="mr-1" />
              Онлайн
            </>
          ) : (
            <>
              <Icon name="MapPin" size={12} className="mr-1" />
              Офлайн
            </>
          )}
        </Badge>
      </div>

      <h3 className="font-semibold text-foreground mb-3 line-clamp-2">{title}</h3>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name="Calendar" size={16} className="text-primary" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name="Clock" size={16} className="text-primary" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name={type === 'online' ? 'Video' : 'MapPin'} size={16} className="text-primary" />
          <span className="line-clamp-1">{location}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name="Users" size={16} />
          <span>{attendees} участников</span>
        </div>
        <Button size="sm" variant="outline" className="hover:bg-primary hover:text-white transition-colors">
          Участвовать
        </Button>
      </div>
    </Card>
  );
}
