import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Globe, 
  Users, 
  Award, 
  Target, 
  Zap, 
  Shield,
  TrendingUp,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  Building,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Linkedin,
  Twitter
} from "lucide-react"

const milestones = [
  {
    year: "2015",
    title: "Company Founded",
    description: "Dot Republic Media was established with a vision to revolutionize global content distribution."
  },
  {
    year: "2017",
    title: "100 Channel Milestone",
    description: "Reached our first major milestone of 100+ distribution channels worldwide."
  },
  {
    year: "2019",
    title: "Global Expansion",
    description: "Expanded operations to cover 150+ countries with multilingual content support."
  },
  {
    year: "2021",
    title: "500+ Channel Network",
    description: "Built one of the largest content distribution networks in the industry."
  },
  {
    year: "2023",
    title: "240 Countries Reached",
    description: "Achieved global coverage across 240 countries and territories."
  },
  {
    year: "2024",
    title: "600+ Channel Partners",
    description: "Established partnerships with 600+ premium channels and platforms."
  }
]

const team = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    bio: "15+ years in media distribution with expertise in global content strategy.",
    image: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "Former Netflix engineer specializing in scalable content delivery systems.",
    image: "MC"
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Global Partnerships",
    bio: "International business expert with deep relationships across 50+ countries.",
    image: "ER"
  },
  {
    name: "David Kim",
    role: "Head of Content Strategy",
    bio: "Award-winning content strategist with 12+ years at major studios.",
    image: "DK"
  }
]

const values = [
  {
    icon: Globe,
    title: "Global Vision",
    description: "We believe great content should reach every corner of the world, breaking down barriers and connecting cultures."
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Your content is protected with enterprise-grade security and comprehensive rights management."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We continuously invest in cutting-edge technology to deliver the best distribution experience."
  },
  {
    icon: Heart,
    title: "Creator Focused",
    description: "Every decision we make is centered around empowering creators and maximizing their success."
  }
]

const achievements = [
  { metric: "400B+", label: "Minutes Distributed", icon: PlayCircle },
  { metric: "240", label: "Countries Served", icon: Globe },
  { metric: "600+", label: "Channel Partners", icon: Users },
  { metric: "30+", label: "Languages Supported", icon: Target },
  { metric: "99.9%", label: "Uptime Guarantee", icon: Shield },
  { metric: "24/7", label: "Global Support", icon: Heart }
]

export function AboutPage() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-12 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            About Dot Republic Media
          </Badge>
          <h1 className="text-5xl font-bold mb-6 font-display">
            Pioneering the Future of Global Content Distribution
          </h1>
          <p className="text-xl opacity-90 leading-relaxed mb-8">
            Since 2015, we've been on a mission to connect creators with global audiences, 
            building the world's most comprehensive content distribution network that spans 
            240 countries and 600+ premium channels.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                <Target className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To democratize global content distribution by providing creators and media companies 
              with the tools, technology, and network they need to reach audiences worldwide, 
              regardless of their size or budget.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                <Star className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To create a world where every story can find its audience, where cultural barriers 
              dissolve through shared content experiences, and where creators are empowered to 
              build global communities around their work.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Achievements Grid */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Our Achievements
          </CardTitle>
          <CardDescription>
            Numbers that reflect our commitment to excellence and global reach
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{achievement.metric}</div>
                  <div className="text-sm text-muted-foreground font-medium">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Company Values */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold font-display">Our Core Values</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide every decision we make and every relationship we build
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex-shrink-0">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Company Timeline */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold font-display">Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From startup to global leader - the milestones that shaped our story
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {milestone.year.slice(-2)}
                </div>
                <Card className="flex-1 border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary">{milestone.year}</Badge>
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold font-display">Leadership Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionaries driving our mission to transform global content distribution
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                  {member.image}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700">
        <CardContent className="p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold font-display mb-4">Get in Touch</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ready to take your content global? Our team is here to help you navigate 
                  the world of international distribution.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-primary" />
                  <span>Dot Republic Media Headquarters</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Global Operations Center</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>hello@dotrepublicmedia.com</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                Download Media Kit
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                Partnership Opportunities
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}