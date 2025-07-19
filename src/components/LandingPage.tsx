import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Globe, 
  PlayCircle, 
  Users, 
  Award, 
  ArrowRight, 
  Star,
  Zap,
  Shield,
  Rocket,
  TrendingUp,
  Languages,
  Network,
  Film,
  Tv,
  Radio,
  Smartphone,
  Monitor,
  CheckCircle,
  Quote
} from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global Distribution",
    description: "Reach audiences in 240+ countries with our extensive distribution network",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Languages,
    title: "Multilingual Content",
    description: "Support for 30+ languages ensuring your content reaches diverse audiences",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Network,
    title: "600+ Channel Network",
    description: "Leverage our vast network of premium channels and streaming platforms",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Content Protection",
    description: "Advanced DRM and content protection ensuring your IP is secure",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Rapid content deployment with our optimized distribution pipeline",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Comprehensive analytics to track performance across all platforms",
    gradient: "from-indigo-500 to-purple-500"
  }
]

const platforms = [
  { name: "Streaming Platforms", icon: Tv, count: "200+" },
  { name: "Mobile Apps", icon: Smartphone, count: "150+" },
  { name: "Web Portals", icon: Monitor, count: "100+" },
  { name: "Radio Networks", icon: Radio, count: "80+" },
  { name: "Cinema Chains", icon: Film, count: "50+" },
  { name: "OTT Services", icon: PlayCircle, count: "120+" }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Director",
    company: "Global Entertainment",
    content: "Dot Republic Media transformed our content distribution strategy. We've seen a 300% increase in global reach.",
    rating: 5
  },
  {
    name: "Ahmed Hassan",
    role: "CEO",
    company: "Middle East Productions",
    content: "The multilingual support and regional expertise helped us expand into markets we never thought possible.",
    rating: 5
  },
  {
    name: "Maria Rodriguez",
    role: "VP of Distribution",
    company: "Latin Content Hub",
    content: "Their analytics platform gives us insights that drive real business decisions. Absolutely game-changing.",
    rating: 5
  }
]

const stats = [
  { value: "400B+", label: "Minutes Distributed", icon: PlayCircle },
  { value: "240", label: "Countries Reached", icon: Globe },
  { value: "600+", label: "Channel Partners", icon: Network },
  { value: "30+", label: "Languages Supported", icon: Languages }
]

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2 text-sm font-medium">
                🚀 Global Content Distribution Leader
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
              Dot Republic Media
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of global content distribution. Connect your content with audiences 
              across 240 countries through our network of 600+ premium channels and platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold rounded-xl border-2 hover:bg-accent">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why Choose Dot Republic Media?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive solutions for content creators, distributors, and media companies 
              looking to expand their global reach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-100 to-blue-100 dark:from-slate-800 dark:to-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Distribution Platforms
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your content reaches audiences through our extensive network of premium platforms and channels.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                      <platform.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{platform.count}</div>
                    <div className="text-sm text-muted-foreground font-medium">{platform.name}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              What Our Partners Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by leading content creators and media companies worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-center">
                    <Quote className="h-8 w-8 text-primary/60" />
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-center italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex justify-center">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center space-y-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center space-y-8 text-white">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Go Global?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Join hundreds of content creators and media companies who trust Dot Republic Media 
            to distribute their content worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Start Your Journey
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-xl">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}