import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ServicesPage } from "./components/ServicesPage";
import { TeamPage } from "./components/TeamPage";
import { PortfolioPage } from "./components/PortfolioPage";
import { ContactPage } from "./components/ContactPage";
import { ConsultationPage } from "./components/ConsultationPage";
import { GetStartedPage } from "./components/GetStartedPage";
import { OpenPositionsPage } from "./components/OpenPositionsPage";
import { SubmitResearchPage } from "./components/SubmitResearchPage";
import { ProjectSelectionPage } from "./components/ProjectSelectionPage";
import { JobApplicationPage } from "./components/JobApplicationPage";
import { FlutterServicePage } from "./components/services/FlutterServicePage";
import { WebsiteServicePage } from "./components/services/WebsiteServicePage";
import { UIUXServicePage } from "./components/services/UIUXServicePage";
import { AIServicePage } from "./components/services/AIServicePage";
import { BlockchainServicePage } from "./components/services/BlockchainServicePage";
import { SEOServicePage } from "./components/services/SEOServicePage";
import { HireDeveloperPage } from "./components/services/HireDeveloperPage";
import { ShopifyServicePage } from "./components/services/ShopifyServicePage";
import { SocialMediaServicePage } from "./components/services/SocialMediaServicePage";
import { FlutterServiceRequestPage } from "./components/services/FlutterServiceRequestPage";
import { WebsiteServiceRequestPage } from "./components/services/WebsiteServiceRequestPage";
import { ShopifyServiceRequestPage } from "./components/services/ShopifyServiceRequestPage";
import { AIServiceRequestPage } from "./components/services/AIServiceRequestPage";
import { BlockchainServiceRequestPage } from "./components/services/BlockchainServiceRequestPage";
import { UIUXServiceRequestPage } from "./components/services/UIUXServiceRequestPage";
import { SEOServiceRequestPage } from "./components/services/SEOServiceRequestPage";
import { HireDeveloperRequestPage } from "./components/services/HireDeveloperRequestPage";
import { SocialMediaServiceRequestPage } from "./components/services/SocialMediaServiceRequestPage";
import { RecruitmentPage } from "./components/RecruitmentPage";
import { ProjectDetailPage } from "./components/ProjectDetailPage";
import { ProductsPage } from "./components/ProductsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage onNavigate={handleNavigate} />;
      case "team":
        return <TeamPage onNavigate={handleNavigate} />;
      case "products":
        return <ProductsPage onNavigate={handleNavigate} />;
      case "portfolio":
        return <PortfolioPage onNavigate={handleNavigate} />;
      case "contact":
        return <ContactPage onNavigate={handleNavigate} />;
      case "consultation":
        return <ConsultationPage onNavigate={handleNavigate} />;
      case "get-started":
        return <GetStartedPage onNavigate={handleNavigate} />;
      case "open-positions":
        return <OpenPositionsPage onNavigate={handleNavigate} />;
      case "submit-research":
        return <SubmitResearchPage onNavigate={handleNavigate} />;
      case "project-selection":
        return <ProjectSelectionPage onNavigate={handleNavigate} />;
      case "job-application":
        return <JobApplicationPage onNavigate={handleNavigate} />;
      case "service-flutter":
        return <FlutterServicePage onNavigate={handleNavigate} />;
      case "service-website":
        return <WebsiteServicePage onNavigate={handleNavigate} />;
      case "service-uiux":
        return <UIUXServicePage onNavigate={handleNavigate} />;
      case "service-ai":
        return <AIServicePage onNavigate={handleNavigate} />;
      case "service-blockchain":
        return <BlockchainServicePage onNavigate={handleNavigate} />;
      case "service-seo":
        return <SEOServicePage onNavigate={handleNavigate} />;
      case "service-hire":
        return <HireDeveloperPage onNavigate={handleNavigate} />;
      case "service-shopify":
        return <ShopifyServicePage onNavigate={handleNavigate} />;
      case "service-social":
        return <SocialMediaServicePage onNavigate={handleNavigate} />;
      case "service-flutter-request":
        return <FlutterServiceRequestPage onNavigate={handleNavigate} />;
      case "service-website-request":
        return <WebsiteServiceRequestPage onNavigate={handleNavigate} />;
      case "service-shopify-request":
        return <ShopifyServiceRequestPage onNavigate={handleNavigate} />;
      case "service-ai-request":
        return <AIServiceRequestPage onNavigate={handleNavigate} />;
      case "service-blockchain-request":
        return <BlockchainServiceRequestPage onNavigate={handleNavigate} />;
      case "service-uiux-request":
        return <UIUXServiceRequestPage onNavigate={handleNavigate} />;
      case "service-seo-request":
        return <SEOServiceRequestPage onNavigate={handleNavigate} />;
      case "service-hire-request":
        return <HireDeveloperRequestPage onNavigate={handleNavigate} />;
      case "service-social-request":
        return <SocialMediaServiceRequestPage onNavigate={handleNavigate} />;
      case "recruitment":
        return <RecruitmentPage onNavigate={handleNavigate} />;
      default:
        // Handle project detail pages
        if (currentPage.startsWith("project-")) {
          return <ProjectDetailPage onNavigate={handleNavigate} projectId={currentPage} />;
        }
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}