import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar, 
  Clock, 
  Video, 
  Users,
  Globe,
  Plus,
  Filter,
  ArrowRight
} from "lucide-react"

// Real content calendar for DRM
const upcomingContent = [
  {
    title: "Holiday Drama Special",
    channel: "CreatorsOne Studios", 
    date: "Dec 15, 2024",
    time: "8:00 PM PKT",
    type: "Premiere",
    status: "Scheduled",
    audience: "Global",
    language: "Urdu"
  },
  {
    title: "Year End Gaming Tournament",
    channel: "DRM Gaming",
    date: "Dec 20, 2024", 
    time: "6:00 PM GMT",
    type: "Live Stream",
    status: "Confirmed",
    audience: "APAC",
    language: "English"
  },
  {
    title: "Kids Winter Stories",
    channel: "DRM Kids",
    date: "Dec 22, 2024",
    time: "4:00 PM EST",
    type: "Series",
    status: "In Production",
    audience: "Global",
    language: "Multiple"
  },
  {
    title: "New Year Lifestyle Tips",
    channel: "DRM Lifestyle",
    date: "Dec 28, 2024",
    time: "2:00 PM AST",
    type: "Series",
    status: "Planning",
    audience: "MENA",
    language: "Arabic"
  }
]

const contentStats = [
  {
    title: "Scheduled Content",
    value: "47",
    description: "This month",
    icon: Calendar
  },
  {
    title: "Live Streams",
    value: "12",
    description: "Upcoming",
    icon: Video
  },
  {
    title: "Global Premieres", 
    value: "8",
    description: "Next 30 days",
    icon: Globe
  },
  {
    title: "Total Hours",
    value: "156",
    description: "Planned content",
    icon: Clock
  }
]

export function CalendarPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Content Calendar</h1>
          <p className="text-muted-foreground mt-2">
            Schedule and manage content across all 600+ channels globally
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="creative">
            <Plus className="h-4 w-4 mr-2" />
            Schedule Content
          </Button>
        </div>
      </div>

      {/* Content Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contentStats.map((stat, index) => (
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

      {/* Upcoming Content */}
      <Card className="shadow-card border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Upcoming Content</CardTitle>
              <CardDescription>Scheduled releases across all channels</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              View Full Calendar
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingContent.map((content, index) => (
            <div key={index} className="flex items-center justify-between p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-all duration-200 border border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                  {content.type === 'Live Stream' ? (
                    <Video className="h-8 w-8 text-white" />
                  ) : content.type === 'Premiere' ? (
                    <Globe className="h-8 w-8 text-white" />
                  ) : (
                    <Calendar className="h-8 w-8 text-white" />
                  )}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-foreground text-lg">{content.title}</h4>
                    <Badge 
                      variant={content.status === 'Scheduled' ? 'default' : 
                              content.status === 'Confirmed' ? 'secondary' : 
                              content.status === 'In Production' ? 'outline' : 'secondary'}
                      className={content.status === 'Scheduled' ? 'bg-gradient-primary text-white' : ''}
                    >
                      {content.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{content.channel}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">
                      <strong>Date:</strong> {content.date} at {content.time}
                    </span>
                    <span className="text-muted-foreground">
                      <strong>Type:</strong> {content.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">
                      <strong>Audience:</strong> {content.audience}
                    </span>
                    <span className="text-muted-foreground">
                      <strong>Language:</strong> {content.language}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right space-y-2">
                <Button variant="outline" size="sm">
                  Edit Schedule
                </Button>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}