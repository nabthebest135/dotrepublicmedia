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
  Plus
} from "lucide-react"
import heroImage from "@/assets/hero-creators.jpg"

const stats = [
  {
    title: "Total Revenue",
    value: "$24,890",
    change: "+12.3%",
    period: "vs last month",
    icon: DollarSign,
    positive: true
  },
  {
    title: "Active Creators",
    value: "47",
    change: "+3",
    period: "new this month",
    icon: Users,
    positive: true
  },
  {
    title: "Total Views",
    value: "2.1M",
    change: "+18.7%",
    period: "vs last month",
    icon: Eye,
    positive: true
  },
  {
    title: "Avg. Performance",
    value: "94.2%",
    change: "+2.1%",
    period: "engagement rate",
    icon: TrendingUp,
    positive: true
  }
]

const recentProjects = [
  {
    title: "Summer Campaign 2024",
    creator: "Sarah Johnson",
    status: "In Progress",
    deadline: "Dec 15, 2024",
    revenue: "$4,200",
    completion: 75
  },
  {
    title: "Gaming Content Series",
    creator: "Mike Chen",
    status: "Review",
    deadline: "Dec 10, 2024",
    revenue: "$3,800",
    completion: 90
  },
  {
    title: "Beauty Tutorial Collection",
    creator: "Emma Wilson",
    status: "Planning",
    deadline: "Dec 20, 2024",
    revenue: "$2,100",
    completion: 25
  }
]

const topCreators = [
  {
    name: "Sarah Johnson",
    handle: "@sarahcreates",
    subscribers: "245K",
    revenue: "$8,400",
    growth: "+24%"
  },
  {
    name: "Mike Chen",
    handle: "@mikegaming",
    subscribers: "189K",
    revenue: "$6,800",
    growth: "+18%"
  },
  {
    name: "Emma Wilson",
    handle: "@beautybyemma",
    subscribers: "156K",
    revenue: "$5,200",
    growth: "+31%"
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
                Welcome to Creator Studio
              </h1>
              <p className="text-xl opacity-90 max-w-lg">
                Manage your content creators, track performance, and grow your network with powerful collaboration tools.
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
                <span className={`flex items-center ${stat.positive ? 'text-success' : 'text-destructive'}`}>
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change}
                </span>
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
                <CardTitle className="text-xl">Recent Projects</CardTitle>
                <CardDescription>Latest content creation projects</CardDescription>
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
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground">{project.title}</h4>
                  <p className="text-sm text-muted-foreground">by {project.creator}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant={project.status === 'In Progress' ? 'default' : project.status === 'Review' ? 'secondary' : 'outline'}>
                      {project.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">Due {project.deadline}</span>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <p className="font-semibold text-primary">{project.revenue}</p>
                  <div className="text-xs text-muted-foreground">{project.completion}% complete</div>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div 
                      className="h-2 bg-gradient-primary rounded-full transition-all duration-300"
                      style={{ width: `${project.completion}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Top Performers</CardTitle>
                <CardDescription>Highest earning creators this month</CardDescription>
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
                    {index < 3 && (
                      <Star className="absolute -top-1 -right-1 h-4 w-4 fill-warning text-warning" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{creator.name}</h4>
                    <p className="text-sm text-muted-foreground">{creator.handle}</p>
                    <p className="text-xs text-muted-foreground">{creator.subscribers} subscribers</p>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <p className="font-semibold text-primary">{creator.revenue}</p>
                  <p className="text-sm text-success">{creator.growth}</p>
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