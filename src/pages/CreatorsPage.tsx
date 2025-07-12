import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  Users, 
  Eye, 
  PlayCircle,
  Globe,
  Languages,
  Star,
  ArrowUpRight,
  Plus,
  Clock
} from "lucide-react"

// Real data based on Dot Republic Media
const realCreators = [
  {
    name: "CreatorsOne Studios",
    handle: "@creatorsone",
    category: "Drama & Entertainment",
    subscribers: "2.4M",
    revenue: "$24,800",
    growth: "+32%",
    status: "Active",
    language: "Multiple",
    country: "Global"
  },
  {
    name: "DRM Gaming Network",
    handle: "@drmgaming",
    category: "Gaming",
    subscribers: "1.8M",
    revenue: "$18,200",
    growth: "+28%",
    status: "Active", 
    language: "English",
    country: "APAC"
  },
  {
    name: "DRM Kids",
    handle: "@drmkids",
    category: "Kids & Family",
    subscribers: "3.2M",
    revenue: "$31,500",
    growth: "+45%",
    status: "Featured",
    language: "Multiple",
    country: "Global"
  },
  {
    name: "DRM Lifestyle",
    handle: "@drmlifestyle",
    category: "Lifestyle & Vlogs",
    subscribers: "892K",
    revenue: "$12,400",
    growth: "+19%",
    status: "Active",
    language: "Arabic",
    country: "MENA"
  },
  {
    name: "DRM Tech Reviews",
    handle: "@drmtech",
    category: "Technology",
    subscribers: "1.1M",
    revenue: "$15,600",
    growth: "+24%",
    status: "Active",
    language: "English",
    country: "Global"
  },
  {
    name: "DRM Cooking Masters",
    handle: "@drmcooking",
    category: "Food & Cooking",
    subscribers: "756K",
    revenue: "$9,800",
    growth: "+16%",
    status: "Active",
    language: "Urdu",
    country: "Pakistan"
  }
]

const realStats = [
  {
    title: "Total Channels",
    value: "600+",
    description: "Active channels worldwide",
    icon: PlayCircle
  },
  {
    title: "Global Reach",
    value: "240",
    description: "Countries served",
    icon: Globe
  },
  {
    title: "Languages",
    value: "30+",
    description: "Content languages",
    icon: Languages
  },
  {
    title: "Watch Time",
    value: "400B",
    description: "Minutes distributed",
    icon: Clock
  }
]

export function CreatorsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Creators Network</h1>
          <p className="text-muted-foreground mt-2">
            Manage your global network of content creators across 600+ channels
          </p>
        </div>
        <Button variant="creative">
          <Plus className="h-4 w-4 mr-2" />
          Add Creator
        </Button>
      </div>

      {/* Real DRM Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {realStats.map((stat, index) => (
          <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Creators List */}
      <Card className="shadow-card border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Active Creators</CardTitle>
              <CardDescription>Manage your content creator network</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Filter</Button>
              <Button variant="outline" size="sm">Export</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {realCreators.map((creator, index) => (
            <div key={index} className="flex items-center justify-between p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-all duration-200 border border-border/50">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {creator.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  {creator.status === 'Featured' && (
                    <Star className="absolute -top-2 -right-2 h-5 w-5 fill-warning text-warning" />
                  )}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-foreground text-lg">{creator.name}</h4>
                    <Badge 
                      variant={creator.status === 'Featured' ? 'default' : 'secondary'}
                      className={creator.status === 'Featured' ? 'bg-gradient-primary text-white' : ''}
                    >
                      {creator.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{creator.handle}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">
                      <strong>Category:</strong> {creator.category}
                    </span>
                    <span className="text-muted-foreground">
                      <strong>Language:</strong> {creator.language}
                    </span>
                    <span className="text-muted-foreground">
                      <strong>Region:</strong> {creator.country}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right space-y-2">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Subscribers</p>
                    <p className="font-semibold text-foreground">{creator.subscribers}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Revenue</p>
                    <p className="font-semibold text-primary">{creator.revenue}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Growth</p>
                    <p className="font-semibold text-success flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {creator.growth}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}