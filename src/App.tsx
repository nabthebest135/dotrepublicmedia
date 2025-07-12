import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import { CreatorsPage } from "./pages/CreatorsPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { RevenuePage } from "./pages/RevenuePage";
import { CalendarPage } from "./pages/CalendarPage";
import { 
  ProjectsPage, 
  ChatPage, 
  AssetsPage, 
  ContentPage, 
  CampaignsPage, 
  PerformancePage, 
  SettingsPage 
} from "./pages/OtherPages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="revenue" element={<RevenuePage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="chat" element={<ChatPage />} />
            <Route path="assets" element={<AssetsPage />} />
            <Route path="content" element={<ContentPage />} />
            <Route path="creators" element={<CreatorsPage />} />
            <Route path="campaigns" element={<CampaignsPage />} />
            <Route path="performance" element={<PerformancePage />} />
            <Route path="settings" element={<SettingsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
