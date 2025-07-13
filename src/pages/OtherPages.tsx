import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus, Calendar, Users, Play, Clock, Send } from "lucide-react"
import { TrendingNews } from "@/components/TrendingNews"
import { QuickLinks } from "@/components/QuickLinks"

interface Message {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
}

interface Channel {
  name: string;
  members: number;
  lastMessage: string;
  time: string;
}

export function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Inspector Jamshed Series",
      status: "In Production",
      progress: 75,
      dueDate: "Dec 15, 2024",
      team: 12,
      channel: "CreatorsOne Studios"
    },
    {
      id: 2,
      title: "C1 Fitness Challenge",
      status: "Planning",
      progress: 30,
      dueDate: "Jan 10, 2025",
      team: 8,
      channel: "C1 Fitness"
    },
    {
      id: 3,
      title: "DRM Kids Winter Stories",
      status: "Completed",
      progress: 100,
      dueDate: "Nov 30, 2024",
      team: 6,
      channel: "DRM Kids"
    }
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Content Projects</h1>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-muted-foreground mt-1">{project.channel}</p>
                </div>
                <Badge variant={project.status === "Completed" ? "default" :
                  project.status === "In Production" ? "secondary" : "outline"}>
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              <div className="flex gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {project.dueDate}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {project.team} team members
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function ChatPage() {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      user: {
        name: "John Doe",
        avatar: "/placeholder.svg"
      },
      content: "Hey team, the new episode is looking great!",
      timestamp: "2 min ago"
    },
    {
      id: "2",
      user: {
        name: "Sarah Wilson",
        avatar: "/placeholder.svg"
      },
      content: "Thanks! We've been working hard on the animations.",
      timestamp: "1 min ago"
    }
  ]);

  const channels = [
    { name: "General", members: 240, lastMessage: "Project updates shared", time: "2 min ago" },
    { name: "CreatorsOne Studios", members: 45, lastMessage: "Inspector Jamshed episode ready", time: "5 min ago" },
    { name: "C1 Fitness Team", members: 28, lastMessage: "New workout series approved", time: "1 hour ago" },
    { name: "DRM Kids Content", members: 32, lastMessage: "Animation review completed", time: "3 hours ago" }
  ];

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      user: {
        name: "You",
        avatar: "/placeholder.svg"
      },
      content: message,
      timestamp: "Just now"
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Team Chat</h1>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          New Channel
        </Button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Channels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {channels.map((channel, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${selectedChannel === channel.name
                    ? "bg-muted"
                    : "hover:bg-muted"
                  }`}
                onClick={() => setSelectedChannel(channel.name)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">#{channel.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {channel.members} members
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {channel.time}
                  </span>
                </div>
                <p className="text-sm mt-1 text-muted-foreground">
                  {channel.lastMessage}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="border-b">
            <CardTitle>
              {selectedChannel ? `#${selectedChannel}` : "Select a Channel"}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {selectedChannel ? (
              <>
                <ScrollArea className="h-[500px] p-4">
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div key={msg.id} className="flex gap-3">
                        <Avatar>
                          <AvatarImage src={msg.user.avatar} />
                          <AvatarFallback>
                            {msg.user.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{msg.user.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {msg.timestamp}
                            </span>
                          </div>
                          <p className="text-sm mt-1">{msg.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="border-t p-4">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      sendMessage();
                    }}
                    className="flex gap-2"
                  >
                    <Input
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button type="submit">
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>Select a channel to start chatting with your team</p>
                <p className="text-sm mt-2">
                  Real-time messaging will be available here
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="md:col-span-1 space-y-6">
          <TrendingNews />
          <QuickLinks />
        </div>
      </div>
    </div>
  );
}

export function AssetsPage() {
  const assetCategories = [
    { name: "Logos & Branding", count: 45, type: "Images" },
    { name: "Video Templates", count: 28, type: "Video" },
    { name: "Audio Packages", count: 67, type: "Audio" },
    { name: "Graphics Library", count: 156, type: "Graphics" }
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Brand Assets</h1>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Upload Asset
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {assetCategories.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{category.name}</h3>
              <p className="text-2xl font-bold text-primary mb-1">{category.count}</p>
              <p className="text-sm text-muted-foreground">{category.type}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                  <Play className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">DRM Logo Package 2024</p>
                  <p className="text-sm text-muted-foreground">Uploaded 2 hours ago</p>
                </div>
              </div>
              <Badge variant="outline">New</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function ContentPage() {
  const contentStats = [
    { label: "Total Videos", value: "15,420", change: "+245 this week" },
    { label: "Live Streams", value: "1,280", change: "+18 today" },
    { label: "Shorts Created", value: "8,945", change: "+127 this week" },
    { label: "Series Active", value: "89", change: "+5 this month" }
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Content Hub</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Content
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Content
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contentStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                </div>
                <Play className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recently Published</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted">
              <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center">
                <Play className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Inspector Jamshed Episode 12</p>
                <p className="text-sm text-muted-foreground">CreatorsOne Studios • 2 hours ago</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trending Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted">
              <div className="w-12 h-8 bg-green-500 rounded flex items-center justify-center">
                <Play className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium">C1 Fitness 30-Day Challenge</p>
                <p className="text-sm text-muted-foreground">C1 Fitness • 2.4M views</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function CampaignsPage() {
  const campaigns = [
    { name: "Holiday Content Series", status: "Active", budget: "Featured Content", duration: "30 days", channels: 15 },
    { name: "Fitness New Year Push", status: "Planning", budget: "Promotional", duration: "45 days", channels: 8 },
    { name: "Kids Winter Stories", status: "Completed", budget: "Content Partnership", duration: "60 days", channels: 12 }
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Marketing Campaigns</h1>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Campaign
        </Button>
      </div>

      <div className="grid gap-6">
        {campaigns.map((campaign, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{campaign.name}</h3>
                  <p className="text-muted-foreground">{campaign.budget}</p>
                </div>
                <Badge variant={campaign.status === "Active" ? "default" :
                  campaign.status === "Planning" ? "secondary" : "outline"}>
                  {campaign.status}
                </Badge>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{campaign.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{campaign.channels} channels</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="h-4 w-4 text-muted-foreground" />
                  <span>Multi-platform</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function PerformancePage() {
  const performanceMetrics = [
    { channel: "CreatorsOne Studios", growth: "+32%", engagement: "8.4%", reach: "Global" },
    { channel: "C1 Fitness", growth: "+45%", engagement: "12.1%", reach: "International" },
    { channel: "DRM Kids", growth: "+28%", engagement: "15.6%", reach: "Multi-language" },
    { channel: "C1 Shorts", growth: "+67%", engagement: "22.3%", reach: "Viral Content" }
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Performance Analytics</h1>
        <Button variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          Date Range
        </Button>
      </div>

      <div className="grid gap-6">
        {performanceMetrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{metric.channel}</h3>
                <Badge variant="outline">{metric.reach}</Badge>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Growth Rate</p>
                  <p className="text-2xl font-bold text-green-600">{metric.growth}</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Engagement</p>
                  <p className="text-2xl font-bold text-blue-600">{metric.engagement}</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Content Quality</p>
                  <p className="text-2xl font-bold text-purple-600">High</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function SettingsPage() {
  const settingsSections = [
    { title: "Account Management", desc: "Manage your DRM platform account and profile settings" },
    { title: "Channel Permissions", desc: "Configure access levels for different team members" },
    { title: "Notification Preferences", desc: "Customize how you receive updates and alerts" },
    { title: "Content Guidelines", desc: "Set content standards and approval workflows" },
    { title: "Analytics Tracking", desc: "Configure performance monitoring and reporting" },
    { title: "Integration Settings", desc: "Manage third-party connections and API access" }
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Platform Settings</h1>

      <div className="grid gap-6">
        {settingsSections.map((section, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                  <p className="text-muted-foreground">{section.desc}</p>
                </div>
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Button variant="outline">Export Data</Button>
          <Button variant="outline">Backup Settings</Button>
          <Button variant="outline">System Status</Button>
        </CardContent>
      </Card>
    </div>
  )
}