
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Eye, 
  Play, 
  Calendar,
  BarChart3,
  Star,
  ArrowUpRight,
  Plus,
  Globe
} from "lucide-react"
import heroImage from "@/assets/hero-creators.jpg"

// Real verified stats for Dot Republic Media
const stats = [
  {
    title: "Global Reach",
    value: "240",
    change: "Countries",
    period: "worldwide distribution",
    icon: Globe,
    positive: true
  },
  {
    title: "Content Languages",
    value: "30+",
    change: "Languages",
    period: "multilingual content",
    icon: Users,
    positive: true
  },
  {
    title: "Distribution Network",
    value: "600+",
    change: "Channels",
    period: "active partnerships",
    icon: Eye,
    positive: true
  },
  {
    title: "Content Volume",
    value: "400B+",
    change: "Minutes",
    period: "total distributed",
    icon: TrendingUp,
    positive: true
  }
]

// Real DRM projects based on actual content
const recentProjects = [
  {
    title: "Inspector Jamshed Series",
    creator: "CreatorsOne Studios",
    status: "In Production",
    deadline: "Ongoing Series",
    description: "Pakistan's biggest detective series adaptation"
  },
  {
    title: "C1 Fitness Network",
    creator: "DRM Fitness",
    status: "Live",
    deadline: "Launched 2020",
    description: "Digital fitness and wellness content"
  },
  {
    title: "DRM Kids Content Hub",
    creator: "DRM Kids",
    status: "Active",
    deadline: "Multi-year plan",
    description: "Children's educational and entertainment content"
  }
]

// Real top DRM content networks
const topCreators = [
  {
    name: "CreatorsOne Studios",
    handle: "@creatorsone",
    specialty: "Original Series & Detective Content",
    status: "Featured Partner"
  },
  {
    name: "DRM News", 
    handle: "@drmnews",
    specialty: "Live News & Current Affairs",
    status: "Primary Channel"
  },
  {
    name: "C1 Shorts",
    handle: "@c1shorts", 
    specialty: "Music Videos & Short Content",
    status: "Active Partner"
  }
]

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-elegant">
        <div 
          className="h-64 bg-cover bg-center bg-gradient-primary"
          style={{ backgroundImage: `linear-gradient(135deg, rgba(138, 43, 226, 0.8), rgba(30, 144, 255, 0.8)), url(${heroImage})` }}
        >
          <div className="h-full flex items-center justify-between p-8 text-white">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">
                Dot Republic Media
              </h1>
              <p className="text-xl opacity-90 max-w-lg">
                Leading global content distribution across 600+ channels, serving content in 240 countries and 30+ languages worldwide.
              </p>
              <div className="flex gap-4">
                <Button variant="premium" className="font-semibold">
                  <Plus className="h-4 w-4 mr-2" />
                  New Project
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  View Analytics
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center text-sm mt-1">
                <span className="text-muted-foreground">{stat.change}</span>
                <span className="text-muted-foreground ml-2">{stat.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Projects */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Active Projects</CardTitle>
                <CardDescription>Current content initiatives</CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                View All
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentProjects.map((project, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">{project.title}</h4>
                  <p className="text-sm text-muted-foreground">by {project.creator}</p>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant={project.status === 'Live' ? 'default' : project.status === 'Active' ? 'secondary' : 'outline'}>
                      {project.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{project.deadline}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Content Networks */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Key Content Partners</CardTitle>
                <CardDescription>Major content creation networks</CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                View All
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {topCreators.map((creator, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                      {creator.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {creator.status === 'Featured Partner' && (
                      <Star className="absolute -top-1 -right-1 h-4 w-4 fill-warning text-warning" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{creator.name}</h4>
                    <p className="text-sm text-muted-foreground">{creator.handle}</p>
                    <p className="text-xs text-muted-foreground">{creator.specialty}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={creator.status === 'Featured Partner' ? 'default' : 'secondary'}>
                    {creator.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-card border-0">
        <CardHeader>
          <CardTitle className="text-xl">Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-24 flex-col gap-2 hover:bg-accent">
              <Plus className="h-6 w-6" />
              <span>New Campaign</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-2 hover:bg-accent">
              <Users className="h-6 w-6" />
              <span>Add Creator</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-2 hover:bg-accent">
              <BarChart3 className="h-6 w-6" />
              <span>View Reports</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-2 hover:bg-accent">
              <Calendar className="h-6 w-6" />
              <span>Schedule Content</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
