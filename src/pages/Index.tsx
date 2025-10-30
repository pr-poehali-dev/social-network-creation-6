import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Post {
  id: number;
  author: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  liked: boolean;
}

const Index = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: 'Анна Смирнова',
      avatar: '/placeholder.svg',
      time: '2 часа назад',
      content: 'Прекрасный день для новых открытий! Только что запустили наш новый проект 🚀',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop',
      likes: 124,
      comments: 18,
      shares: 5,
      liked: false,
    },
    {
      id: 2,
      author: 'Дмитрий Козлов',
      avatar: '/placeholder.svg',
      time: '5 часов назад',
      content: 'Кто-нибудь был на конференции TechConnect? Поделитесь впечатлениями!',
      likes: 45,
      comments: 12,
      shares: 2,
      liked: false,
    },
    {
      id: 3,
      author: 'Мария Петрова',
      avatar: '/placeholder.svg',
      time: '8 часов назад',
      content: 'Наша команда ищет frontend-разработчика. Работа удаленная, интересные задачи, отличный коллектив!',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
      likes: 89,
      comments: 24,
      shares: 15,
      liked: true,
    },
  ]);

  const [newPostContent, setNewPostContent] = useState('');

  const toggleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleCreatePost = () => {
    if (newPostContent.trim()) {
      const newPost: Post = {
        id: Date.now(),
        author: 'Вы',
        avatar: '/placeholder.svg',
        time: 'Только что',
        content: newPostContent,
        likes: 0,
        comments: 0,
        shares: 0,
        liked: false,
      };
      setPosts([newPost, ...posts]);
      setNewPostContent('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card border-b shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-primary">Социум</h1>
            <div className="hidden md:flex items-center gap-1">
              <Button variant="ghost" size="sm" className="gap-2">
                <Icon name="Home" size={20} />
                Главная
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Icon name="Users" size={20} />
                Друзья
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Icon name="MessageCircle" size={20} />
                Сообщения
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Icon name="Bell" size={20} />
                Уведомления
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block relative">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Поиск" 
                className="pl-10 w-[200px] lg:w-[300px]"
              />
            </div>
            <Avatar className="cursor-pointer">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>Я</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>Я</AvatarFallback>
              </Avatar>
              <Textarea
                placeholder="Что у вас нового?"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                className="min-h-[60px] resize-none"
              />
            </div>
          </CardHeader>
          <CardFooter className="pt-0 flex justify-between">
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="gap-2">
                <Icon name="Image" size={18} />
                Фото
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Icon name="Video" size={18} />
                Видео
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Icon name="Smile" size={18} />
                Эмоции
              </Button>
            </div>
            <Button onClick={handleCreatePost} disabled={!newPostContent.trim()}>
              Опубликовать
            </Button>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={post.avatar} />
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{post.author}</p>
                      <p className="text-sm text-muted-foreground">{post.time}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Icon name="MoreHorizontal" size={20} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">{post.content}</p>
                {post.image && (
                  <img 
                    src={post.image} 
                    alt="Post content" 
                    className="w-full rounded-lg object-cover max-h-[400px]"
                  />
                )}
              </CardContent>
              <CardFooter className="flex-col gap-3">
                <div className="flex justify-between w-full text-sm text-muted-foreground">
                  <span>{post.likes} отметок "Нравится"</span>
                  <div className="flex gap-4">
                    <span>{post.comments} комментариев</span>
                    <span>{post.shares} репостов</span>
                  </div>
                </div>
                <div className="flex gap-2 w-full pt-2 border-t">
                  <Button 
                    variant="ghost" 
                    className="flex-1 gap-2" 
                    onClick={() => toggleLike(post.id)}
                  >
                    <Icon 
                      name="Heart" 
                      size={18} 
                      className={post.liked ? 'fill-red-500 text-red-500' : ''}
                    />
                    {post.liked ? 'Нравится' : 'Нравится'}
                  </Button>
                  <Button variant="ghost" className="flex-1 gap-2">
                    <Icon name="MessageCircle" size={18} />
                    Комментировать
                  </Button>
                  <Button variant="ghost" className="flex-1 gap-2">
                    <Icon name="Share2" size={18} />
                    Поделиться
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
