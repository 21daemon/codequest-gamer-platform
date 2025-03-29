
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CodeQuestHeader from "./components/CodeQuestHeader";
import Index from "./pages/Index";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Layout component to consistently apply header across pages
const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <CodeQuestHeader />
    {children}
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/dashboard" 
            element={<Index />} 
          />
          <Route 
            path="/login" 
            element={<Login />} 
          />
          <Route 
            path="/register" 
            element={<Register />} 
          />
          <Route 
            path="/leaderboard" 
            element={
              <MainLayout>
                <div className="container mx-auto px-4 py-8">
                  <h1 className="text-3xl font-bold mb-8">Leaderboard</h1>
                  <p className="text-xl">Leaderboard content coming soon...</p>
                </div>
              </MainLayout>
            } 
          />
          <Route 
            path="/community" 
            element={
              <MainLayout>
                <div className="container mx-auto px-4 py-8">
                  <h1 className="text-3xl font-bold mb-8">Community</h1>
                  <p className="text-xl">Community forums and content coming soon...</p>
                </div>
              </MainLayout>
            } 
          />
          <Route 
            path="/resources" 
            element={
              <MainLayout>
                <div className="container mx-auto px-4 py-8">
                  <h1 className="text-3xl font-bold mb-8">Learning Resources</h1>
                  <p className="text-xl">Learning resources and materials coming soon...</p>
                </div>
              </MainLayout>
            } 
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
