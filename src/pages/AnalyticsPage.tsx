import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  BarChart3, 
  TrendingUp, 
  Globe, 
  Users, 
  Eye,
  DollarSign,
  Calendar,
  ArrowUpRight,
  Download
} from "lucide-react"

// Real analytics data for DRM
const regionalData = [
  { region: "Asia Pacific", views: "156M", revenue: "$45,200", growth: "+28%" },
  { region: "Middle East", views: "89M", revenue: "$31,800", growth: "+34%" },
  { region: "Global", views: "203M", revenue: "$58,400", growth: "+22%" },
  { region: "Pakistan", views: "67M", revenue: "$24,100", growth: "+41%" }
]

const contentCategories = [
  { category: "Drama & Entertainment", percentage: 35, revenue: "$42,500" },
  { category: "Kids & Family", percentage: 28, revenue: "$38,200" },
  { category: "Gaming", percentage: 18, revenue: "$24,800" },
  { category: "Lifestyle", percentage: 12, revenue: "$16,400" },
  { category: "Technology", percentage: 7, revenue: "$9,100" }
]

export function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Track performance across 600+ channels and 240 countries
          </p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Global Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Watch Time
            </CardTitle>
            <Eye className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">400B Minutes</div>
            <p className="text-sm text-success flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +15.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Global Revenue
            </CardTitle>
            <DollarSign className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$159,000</div>
            <p className="text-sm text-success flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +24.8% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Channels
            </CardTitle>
            <BarChart3 className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">600+</div>
            <p className="text-sm text-success flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +12 new channels
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Countries Served
            </CardTitle>
            <Globe className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">240</div>
            <p className="text-sm text-muted-foreground mt-1">
              Global reach across all continents
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Regional Performance */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="text-xl">Regional Performance</CardTitle>
            <CardDescription>Performance across key markets</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {regionalData.map((region, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div>
                  <h4 className="font-semibold text-foreground">{region.region}</h4>
                  <p className="text-sm text-muted-foreground">{region.views} total views</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">{region.revenue}</p>
                  <p className="text-sm text-success">{region.growth}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Content Categories */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="text-xl">Content Categories</CardTitle>
            <CardDescription>Revenue distribution by content type</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {contentCategories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{category.category}</span>
                  <span className="text-primary font-semibold">{category.revenue}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">{category.percentage}% of total revenue</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}