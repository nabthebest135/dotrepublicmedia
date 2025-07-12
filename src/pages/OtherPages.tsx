// Simple placeholder pages for other routes

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <Card>
        <CardHeader>
          <CardTitle>Content Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Manage your content creation projects across all DRM channels.</p>
        </CardContent>
      </Card>
    </div>
  )
}

export function ChatPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Team Chat</h1>
      <Card>
        <CardHeader>
          <CardTitle>Creator Communication</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Collaborate with your global team of creators.</p>
        </CardContent>
      </Card>
    </div>
  )
}

export function AssetsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Brand Assets</h1>
      <Card>
        <CardHeader>
          <CardTitle>DRM Brand Kit</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Access brand guidelines, logos, and creative assets.</p>
        </CardContent>
      </Card>
    </div>
  )
}

export function ContentPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Content Hub</h1>
      <Card>
        <CardHeader>
          <CardTitle>Content Library</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Browse and manage content across 600+ channels.</p>
        </CardContent>
      </Card>
    </div>
  )
}

export function CampaignsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Campaigns</h1>
      <Card>
        <CardHeader>
          <CardTitle>Marketing Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Manage brand partnerships and promotional campaigns.</p>
        </CardContent>
      </Card>
    </div>
  )
}

export function PerformancePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Performance</h1>
      <Card>
        <CardHeader>
          <CardTitle>Creator Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Track individual creator and channel performance metrics.</p>
        </CardContent>
      </Card>
    </div>
  )
}

export function SettingsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Platform Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Configure your DRM platform preferences and account settings.</p>
        </CardContent>
      </Card>
    </div>
  )
}