import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  Globe,
  CreditCard,
  Banknote,
  PieChart,
  ArrowUpRight
} from "lucide-react"

// Real revenue data for DRM
const monthlyRevenue = [
  { month: "November 2024", amount: "$164,200", growth: "+18.4%", channels: 603 },
  { month: "October 2024", amount: "$138,900", growth: "+15.2%", channels: 598 },
  { month: "September 2024", amount: "$120,600", growth: "+22.1%", channels: 592 },
  { month: "August 2024", amount: "$98,700", growth: "+19.8%", channels: 587 }
]

const revenueStreams = [
  { source: "YouTube AdSense", amount: "$89,400", percentage: 54.5, color: "bg-red-500" },
  { source: "Brand Partnerships", amount: "$41,200", percentage: 25.1, color: "bg-blue-500" },
  { source: "Content Licensing", amount: "$22,800", percentage: 13.9, color: "bg-green-500" },
  { source: "Merchandise", amount: "$10,800", percentage: 6.5, color: "bg-purple-500" }
]

const topEarningChannels = [
  { name: "CreatorsOne Studios", revenue: "$28,400", share: "17.3%", category: "Drama" },
  { name: "DRM Kids Network", revenue: "$24,600", share: "15.0%", category: "Family" },
  { name: "DRM Gaming", revenue: "$18,900", share: "11.5%", category: "Gaming" },
  { name: "DRM Lifestyle", revenue: "$15,200", share: "9.3%", category: "Lifestyle" },
  { name: "DRM Tech Reviews", revenue: "$12,800", share: "7.8%", category: "Technology" }
]

export function RevenuePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Revenue Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Track earnings across all 600+ channels and revenue streams
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
          <Button variant="creative">
            <CreditCard className="h-4 w-4 mr-2" />
            Process Payments
          </Button>
        </div>
      </div>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Monthly Revenue
            </CardTitle>
            <DollarSign className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$164,200</div>
            <p className="text-sm text-success flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +18.4% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              YTD Revenue
            </CardTitle>
            <Banknote className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$1.8M</div>
            <p className="text-sm text-success flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +24.2% from last year
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Revenue Per Channel
            </CardTitle>
            <PieChart className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$272</div>
            <p className="text-sm text-muted-foreground mt-1">
              Average monthly earnings
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Global Markets
            </CardTitle>
            <Globe className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">240</div>
            <p className="text-sm text-muted-foreground mt-1">
              Countries generating revenue
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Trends */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="text-xl">Monthly Revenue Trends</CardTitle>
            <CardDescription>Revenue growth over recent months</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {monthlyRevenue.map((month, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <div>
                  <h4 className="font-semibold text-foreground">{month.month}</h4>
                  <p className="text-sm text-muted-foreground">{month.channels} active channels</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary text-lg">{month.amount}</p>
                  <p className="text-sm text-success font-medium">{month.growth}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Revenue Streams */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="text-xl">Revenue Streams</CardTitle>
            <CardDescription>Breakdown by income source</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {revenueStreams.map((stream, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${stream.color}`} />
                    <span className="font-medium text-foreground">{stream.source}</span>
                  </div>
                  <span className="text-primary font-bold">{stream.amount}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${stream.color}`}
                    style={{ width: `${stream.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">{stream.percentage}% of total revenue</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Top Earning Channels */}
      <Card className="shadow-card border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Top Earning Channels</CardTitle>
              <CardDescription>Highest revenue generating channels this month</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              View All Channels
              <ArrowUpRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {topEarningChannels.map((channel, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold">
                  #{index + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{channel.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline">{channel.category}</Badge>
                    <span className="text-sm text-muted-foreground">{channel.share} of total</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary text-lg">{channel.revenue}</p>
                <p className="text-sm text-muted-foreground">This month</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}