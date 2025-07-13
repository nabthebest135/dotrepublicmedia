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

// Real Dot Republic Media channels - verified from search
const realCreators = [
  {
    name: "DRM News",
    handle: "@drmnews",
    category: "News & Current Affairs",
    status: "Featured",
    language: "English",
    country: "Global",
    description: "Live breaking news coverage including global politics, diplomatic summits, and international events"
  },
  {
    name: "CreatorsOne Studios", 
    handle: "@creatorsone",
    category: "Original Series & Entertainment",
    status: "Featured",
    language: "Urdu/English",
    country: "Pakistan/Global",
    description: "Premium digital content including Inspector Jamshed detective series and original productions"
  },
  {
    name: "C1 Shorts",
    handle: "@c1shorts", 
    category: "Music & Short Content",
    status: "Active",
    language: "Urdu/Punjabi",
    country: "Pakistan",
    description: "Music videos featuring Aima Baig, Asim Azhar and trending Pakistani artists"
  },
  {
    name: "Next Level Entertainment",
    handle: "@nextlevelentertainmentpk",
    category: "Music & Entertainment",
    status: "Active",
    language: "Urdu",
    country: "Pakistan", 
    description: "Music production and artist collaborations including Tasveer by Asim Azhar"
  },
  {
    name: "Play Entertainment TV",
    handle: "@playentertainment.tv",
    category: "Drama & TV Content",
    status: "Active",
    language: "Urdu",
    country: "Pakistan",
    description: "Broadcast partner for original series and entertainment programming"
  },
  {
    name: "Bajao Music",
    handle: "@bajaomusik",
    category: "Music Distribution",
    status: "Active",
    language: "Multiple",
    country: "Pakistan",
    description: "VOD partner for music content distribution and streaming"
  }
]

// Real partnerships and content deals - verified from research
const realDeals = [
  {
    title: "Inspector Jamshed Series",
    partner: "Ishtiaq Ahmed Estate",
    type: "Content Rights",
    status: "In Production",
    description: "Pakistan's biggest detective series adaptation featuring renowned author's stories"
  },
  {
    title: "Aima Baig Music Partnership", 
    partner: "Bajao Music",
    type: "Music Distribution",
    status: "Active",
    description: "Music distribution for hit songs like 'Aey Zindagi' through C1 Shorts"
  },
  {
    title: "Asim Azhar 'Tasveer' Production",
    partner: "Next Level Entertainment",
    type: "Music Production",
    status: "Released",
    description: "Official music video production and distribution collaboration"
  },
  {
    title: "C1 Fitness Network Launch",
    partner: "Fitness Industry Partners",
    type: "Content Network",
    status: "Launched 2020",
    description: "Pakistan's first digital fitness network for health and wellness content"
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

      {/* Active Deals & Partnerships */}
      <Card className="shadow-card border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Recent Deals & Partnerships</CardTitle>
              <CardDescription>Latest acquisitions and content partnerships</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">View All</Button>
              <Button variant="creative" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Deal
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {realDeals.map((deal, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border/30">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h4 className="font-semibold text-foreground">{deal.title}</h4>
                  <Badge variant="secondary">{deal.type}</Badge>
                  <Badge variant={deal.status.includes('Active') ? 'default' : 'outline'}>
                    {deal.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{deal.description}</p>
                <p className="text-sm">
                  <strong>Partner:</strong> {deal.partner}
                </p>
              </div>
              <Button variant="ghost" size="sm">
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

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
                  <p className="text-sm text-muted-foreground max-w-lg">{creator.description}</p>
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