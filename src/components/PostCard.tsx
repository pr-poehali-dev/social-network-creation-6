import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface PostCardProps {
  author: string;
  authorRole: string;
  verified: boolean;
  timestamp: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

export default function PostCard({
  author,
  authorRole,
  verified,
  timestamp,
  content,
  image,
  likes,
  comments,
  shares,
}: PostCardProps) {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="" />
          <AvatarFallback className="bg-primary/10 text-primary font-medium">
            {author.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground">{author}</h3>
            {verified && (
              <Badge variant="secondary" className="h-5 px-1.5 text-xs bg-primary/10 text-primary border-primary/20">
                <Icon name="BadgeCheck" size={12} />
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-1">{authorRole}</p>
          <p className="text-xs text-muted-foreground">{timestamp}</p>

          <p className="mt-4 text-foreground leading-relaxed">{content}</p>

          {image && (
            <div className="mt-4 rounded-lg overflow-hidden bg-muted">
              <img src={image} alt="Post content" className="w-full h-64 object-cover" />
            </div>
          )}

          <div className="flex items-center gap-6 mt-4 pt-4 border-t border-border">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
              <Icon name="ThumbsUp" size={18} />
              <span className="text-sm font-medium">{likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
              <Icon name="MessageSquare" size={18} />
              <span className="text-sm font-medium">{comments}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
              <Icon name="Share2" size={18} />
              <span className="text-sm font-medium">{shares}</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
