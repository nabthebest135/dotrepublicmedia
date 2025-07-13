import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Youtube, Instagram, Twitter, Globe } from 'lucide-react';

const socialLinks = [
    {
        name: "YouTube",
        icon: Youtube,
        link: "https://youtube.com/dotrepublicmedia",
        color: "text-red-600"
    },
    {
        name: "Instagram",
        icon: Instagram,
        link: "https://instagram.com/dotrepublicmedia",
        color: "text-pink-600"
    },
    {
        name: "Twitter",
        icon: Twitter,
        link: "https://twitter.com/dotrepublicmedia",
        color: "text-blue-400"
    },
    {
        name: "Website",
        icon: Globe,
        link: "https://dotrepublicmedia.com",
        color: "text-green-500"
    }
];

export function QuickLinks() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline"
                        >
                            <Button
                                variant="outline"
                                className="w-full"
                            >
                                <link.icon className={`h-4 w-4 mr-2 ${link.color}`} />
                                {link.name}
                            </Button>
                        </a>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
