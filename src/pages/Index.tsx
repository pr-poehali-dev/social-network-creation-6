import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import PostCard from '@/components/PostCard';
import ProfileCard from '@/components/ProfileCard';
import EventCard from '@/components/EventCard';
import GroupCard from '@/components/GroupCard';
import MessageThread from '@/components/MessageThread';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('feed');

  const posts = [
    {
      author: 'Дмитрий Соколов',
      authorRole: 'CTO, FinanceHub',
      verified: true,
      timestamp: '2 часа назад',
      content: 'Рады объявить о запуске нашей новой платформы для автоматизации финансовых процессов! Это результат работы команды из 20 специалистов за последние 8 месяцев. Уже более 50 компаний присоединились к бета-тестированию.',
      likes: 156,
      comments: 23,
      shares: 12,
    },
    {
      author: 'Елена Морозова',
      authorRole: 'HR Director, TechStart',
      verified: true,
      timestamp: '5 часов назад',
      content: 'Ищем Senior Backend Developer в нашу команду! Работа над инновационными проектами, гибкий график, конкурентная зарплата. Если вы знаете Python, Go или Node.js на высоком уровне - пишите в личку.',
      likes: 89,
      comments: 34,
      shares: 45,
    },
    {
      author: 'Алексей Ковалев',
      authorRole: 'CEO, AI Solutions',
      verified: true,
      timestamp: '1 день назад',
      content: 'Прошедшая конференция AI Summit 2024 показала, что искусственный интеллект меняет бизнес быстрее, чем мы думали. Поделюсь ключевыми инсайтами на вебинаре в следующую пятницу.',
      likes: 234,
      comments: 67,
      shares: 89,
    },
  ];

  const profiles = [
    {
      name: 'Мария Волкова',
      role: 'Product Manager',
      company: 'Google',
      verified: true,
      connections: 1234,
      bio: 'Специализируюсь на запуске технологических продуктов. 10+ лет в IT. Ментор стартапов.',
    },
    {
      name: 'Иван Смирнов',
      role: 'Investment Manager',
      company: 'VentureCapital',
      verified: true,
      connections: 892,
      bio: 'Инвестирую в технологические стартапы на ранних стадиях. Фокус на B2B SaaS.',
    },
  ];

  const events = [
    {
      title: 'AI & Machine Learning Summit 2024',
      date: '15 ноября 2024',
      time: '10:00 - 18:00',
      location: 'Конференц-центр "Москва"',
      type: 'offline' as const,
      attendees: 523,
      category: 'Технологии',
    },
    {
      title: 'Стратегии роста B2B бизнеса',
      date: '20 ноября 2024',
      time: '14:00 - 16:00',
      location: 'Zoom',
      type: 'online' as const,
      attendees: 234,
      category: 'Бизнес',
    },
    {
      title: 'Networking Evening: Founders & Investors',
      date: '25 ноября 2024',
      time: '19:00 - 22:00',
      location: 'Loft Space, Санкт-Петербург',
      type: 'offline' as const,
      attendees: 145,
      category: 'Нетворкинг',
    },
  ];

  const groups = [
    {
      name: 'Стартапы и инвестиции',
      category: 'Бизнес',
      members: 12453,
      posts: 1234,
      description: 'Сообщество предпринимателей и инвесторов. Обсуждаем идеи, ищем партнеров, делимся опытом.',
      isPrivate: false,
    },
    {
      name: 'Product Management Pro',
      category: 'Технологии',
      members: 8921,
      posts: 892,
      description: 'Профессиональное сообщество продакт-менеджеров. Кейсы, методологии, best practices.',
      isPrivate: true,
    },
  ];

  const messages = [
    {
      name: 'Сергей Петров',
      lastMessage: 'Отличная идея! Давайте обсудим детали завтра',
      timestamp: '10 мин',
      unread: 2,
      online: true,
    },
    {
      name: 'Ольга Новикова',
      lastMessage: 'Отправила вам презентацию проекта',
      timestamp: '1 час',
      unread: 0,
      online: true,
    },
    {
      name: 'Михаил Федоров',
      lastMessage: 'Спасибо за встречу! Было продуктивно',
      timestamp: '3 часа',
      unread: 0,
      online: false,
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="ml-64 flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {activeSection === 'feed' && (
            <>
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-2">Лента новостей</h1>
                <p className="text-muted-foreground">Актуальные публикации вашей сети</p>
              </div>

              <Card className="p-6 mb-6">
                <div className="flex gap-4">
                  <Input placeholder="Поделитесь своими мыслями..." className="flex-1" />
                  <Button className="bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={18} className="mr-2" />
                    Опубликовать
                  </Button>
                </div>
              </Card>

              <div className="space-y-4">
                {posts.map((post, index) => (
                  <PostCard key={index} {...post} />
                ))}
              </div>
            </>
          )}

          {activeSection === 'profile' && (
            <>
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-2">Ваш профиль</h1>
                <p className="text-muted-foreground">Управляйте своей профессиональной информацией</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <ProfileCard
                    name="Анна Петрова"
                    role="CEO & Founder"
                    company="TechStart"
                    verified={true}
                    connections={2456}
                    bio="Основатель технологического стартапа. Помогаю компаниям трансформироваться через инновации. Ментор, спикер, инвестор."
                  />
                </div>

                <div className="lg:col-span-2">
                  <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">О себе</h2>
                    <Textarea 
                      placeholder="Расскажите о своем опыте и достижениях..." 
                      className="min-h-32 mb-4"
                      defaultValue="15+ лет опыта в технологическом предпринимательстве. Запустила 3 успешных проекта в сфере B2B SaaS. Специализируюсь на построении команд и масштабировании бизнеса."
                    />
                    <Button className="bg-primary hover:bg-primary/90">Сохранить изменения</Button>
                  </Card>

                  <Card className="p-6 mt-6">
                    <h2 className="text-xl font-semibold mb-4">Опыт работы</h2>
                    <div className="space-y-4">
                      <div className="flex gap-4 pb-4 border-b border-border">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="Briefcase" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">CEO & Founder</h3>
                          <p className="text-sm text-muted-foreground">TechStart · 2020 - Настоящее время</p>
                          <p className="text-sm mt-2">Основала и развиваю компанию по разработке B2B SaaS решений</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </>
          )}

          {activeSection === 'messages' && (
            <>
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-2">Сообщения</h1>
                <p className="text-muted-foreground">Ваши деловые переписки</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-3">
                  {messages.map((message, index) => (
                    <MessageThread key={index} {...message} />
                  ))}
                </div>

                <div className="lg:col-span-2">
                  <Card className="p-6 h-[600px] flex flex-col">
                    <div className="flex items-center gap-3 pb-4 border-b border-border">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="MessageSquare" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Выберите диалог</h3>
                        <p className="text-sm text-muted-foreground">Начните общение с коллегами</p>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <Icon name="MessageCircle" size={64} className="text-muted-foreground/30 mx-auto mb-4" />
                        <p className="text-muted-foreground">Выберите диалог из списка</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </>
          )}

          {activeSection === 'events' && (
            <>
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-2">Мероприятия</h1>
                <p className="text-muted-foreground">Деловые встречи и конференции</p>
              </div>

              <div className="flex gap-4 mb-6">
                <Input placeholder="Поиск мероприятий..." className="flex-1" />
                <Button variant="outline">
                  <Icon name="Filter" size={18} className="mr-2" />
                  Фильтры
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, index) => (
                  <EventCard key={index} {...event} />
                ))}
              </div>
            </>
          )}

          {activeSection === 'groups' && (
            <>
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-2">Бизнес-группы</h1>
                <p className="text-muted-foreground">Профессиональные сообщества</p>
              </div>

              <div className="flex gap-4 mb-6">
                <Input placeholder="Найти группу..." className="flex-1" />
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="Plus" size={18} className="mr-2" />
                  Создать группу
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groups.map((group, index) => (
                  <GroupCard key={index} {...group} />
                ))}
              </div>
            </>
          )}

          {activeSection === 'search' && (
            <>
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-2">Поиск контактов</h1>
                <p className="text-muted-foreground">Находите нужных специалистов и компании</p>
              </div>

              <Card className="p-6 mb-6">
                <div className="flex gap-4">
                  <Input placeholder="Должность, компания или навыки..." className="flex-1" />
                  <Button className="bg-primary hover:bg-primary/90">
                    <Icon name="Search" size={18} className="mr-2" />
                    Найти
                  </Button>
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {profiles.map((profile, index) => (
                  <ProfileCard key={index} {...profile} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;