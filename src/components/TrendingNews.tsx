import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';

interface NewsItem {
    title: string;
    category: string;
    timestamp: string;
    link: string;
}

export function TrendingNews() {
    const [news, setNews] = useState<NewsItem[]>([]);

    useEffect(() => {
        // In a real application, this would be an API call to your news service
        // For now, we'll use some example news items
        const fetchNews = async () => {
            // This should be replaced with actual API call to your news service
            const demoNews = [
                {
                    title: "New Series Launch: Inspector Jamshed",
                    category: "Content",
                    timestamp: "2 hours ago",
                    link: "https://youtube.com/dotrepublicmedia"
                },
                {
                    title: "C1 Fitness Reaches 100K Subscribers",
                    category: "Milestone",
                    timestamp: "1 day ago",
                    link: "https://youtube.com/c1fitness"
                },
                {
                    title: "DRM Kids Channel Anniversary Special",
                    category: "Event",
                    timestamp: "2 days ago",
                    link: "https://youtube.com/drmkids"
                }
            ];
            setNews(demoNews);
        };

        fetchNews();
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Trending News</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {news.map((item, index) => (
                        <div key={index} className="flex items-start justify-between p-3 hover:bg-muted rounded-lg transition-colors">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <h4 className="font-medium">{item.title}</h4>
                                    <Badge variant="outline">{item.category}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{item.timestamp}</p>
                            </div>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
