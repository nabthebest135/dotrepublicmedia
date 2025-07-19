
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
  Globe,
  Video,
  Zap,
  Award,
  Target,
  Tv,
  Radio,
  Smartphone,
  Monitor,
  Headphones,
  Film,
  Camera,
  Mic,
  PlayCircle,
  Clock,
  MapPin,
  Languages,
  Network,
  Sparkles
} from "lucide-react"

// Enhanced stats for Dot Republic Media with better visuals
const stats = [
  {
    title: "Global Reach",
    value: "240",
    change: "Countries",
    period: "worldwide distribution",
    icon: Globe,
    positive: true,
    gradient: "from-blue-500 to-cyan-500",
    progress: 95
  },
  {
    title: "Content Languages",
    value: "30+",
    change: "Languages",
    period: "multilingual content",
    icon: Languages,
    positive: true,
    gradient: "from-purple-500 to-pink-500",
    progress: 88
  },
  {
    title: "Distribution Network",
    value: "600+",
    change: "Channels",
    period: "active partnerships",
    icon: Network,
    positive: true,
    gradient: "from-green-500 to-emerald-500",
    progress: 92
  },
  {
    title: "Content Volume",
    value: "400B+",
    change: "Minutes",
    period: "total distributed",
    icon: PlayCircle,
    positive: true,
    gradient: "from-orange-500 to-red-500",
    progress: 97
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
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Enhanced Hero Section */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative h-80 flex items-center justify-between p-12 text-white">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Sparkles className="h-8 w-8 text-yellow-400" />
              </div>
              <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                Global Leader
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Dot Republic Media
            </h1>
            
            <p className="text-xl opacity-90 leading-relaxed">
              Pioneering the future of global content distribution across 600+ channels, 
              delivering premium entertainment to 240 countries in 30+ languages worldwide.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Plus className="h-5 w-5 mr-2" />
                Launch New Project
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <BarChart3 className="h-5 w-5 mr-2" />
                View Analytics
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <PlayCircle className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <Globe className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <Network className="h-8 w-8 text-purple-400" />
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <PlayCircle className="h-8 w-8 text-pink-400" />
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <Languages className="h-8 w-8 text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center text-sm">
                  <span className="text-muted-foreground">{stat.change}</span>
                  <span className="text-muted-foreground ml-2">• {stat.period}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Performance</span>
                  <span>{stat.progress}%</span>
                </div>
                <Progress value={stat.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Enhanced Active Projects */}
        <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Film className="h-5 w-5 text-primary" />
                  Active Projects
                </CardTitle>
                <CardDescription>Current content initiatives and productions</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                View All
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentProjects.map((project, index) => (
              <div key={index} className="group/item relative p-5 bg-gradient-to-r from-slate-50 to-blue-50/50 dark:from-slate-800 dark:to-slate-700 rounded-xl hover:shadow-md transition-all duration-300 border border-slate-200/50 dark:border-slate-600/50">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <h4 className="font-semibold text-foreground text-lg group-hover/item:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Camera className="h-4 w-4" />
                        by {project.creator}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="ml-4">
                      <PlayCircle className="h-8 w-8 text-primary/60 group-hover/item:text-primary transition-colors" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant={project.status === 'Live' ? 'default' : project.status === 'Active' ? 'secondary' : 'outline'}
                        className="font-medium"
                      >
                        {project.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {project.deadline}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Enhanced Content Partners */}
        <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Key Content Partners
                </CardTitle>
                <CardDescription>Strategic content creation networks</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                View All
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {topCreators.map((creator, index) => (
              <div key={index} className="group/creator relative p-5 bg-gradient-to-r from-purple-50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl hover:shadow-md transition-all duration-300 border border-purple-200/50 dark:border-purple-600/30">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover/creator:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {creator.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      {creator.status === 'Featured Partner' && (
                        <div className="absolute -top-2 -right-2 p-1 bg-yellow-400 rounded-full">
                          <Star className="h-3 w-3 text-yellow-800 fill-current" />
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground text-lg group-hover/creator:text-primary transition-colors">
                        {creator.name}
                      </h4>
                      <p className="text-sm text-muted-foreground font-medium">{creator.handle}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Target className="h-3 w-3" />
                        {creator.specialty}
                      </p>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <Badge 
                      variant={creator.status === 'Featured Partner' ? 'default' : 'secondary'}
                      className="font-medium"
                    >
                      {creator.status}
                    </Badge>
                    <div className="opacity-0 group-hover/creator:opacity-100 transition-opacity">
                      <Button variant="ghost" size="sm">
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Quick Actions */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="text-xl flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Quick Actions
              </CardTitle>
              <CardDescription>Streamline your workflow with one-click actions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="h-28 flex-col gap-3 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950 border-2 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Plus className="h-6 w-6 text-white" />
              </div>
              <span className="font-medium">New Campaign</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-28 flex-col gap-3 hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 dark:hover:from-green-950 dark:hover:to-emerald-950 border-2 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 text-white" />
              </div>
              <span className="font-medium">Add Creator</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-28 flex-col gap-3 hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 dark:hover:from-orange-950 dark:hover:to-red-950 border-2 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="font-medium">View Reports</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-28 flex-col gap-3 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950 dark:hover:to-pink-950 border-2 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <span className="font-medium">Schedule Content</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
