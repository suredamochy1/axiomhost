import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import GlobalSEO from "@/components/GlobalSEO";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import Dashboard from "@/pages/Dashboard";
import FileManagerPage from "@/pages/FileManagerPage";
import VpsHosting from "@/pages/VpsHosting";
import BusinessEmail from "@/pages/BusinessEmail";
import DomainSearch from "@/pages/DomainSearch";
import DomainTransfer from "@/pages/DomainTransfer";
import CpanelHosting from "@/pages/CpanelHosting";
import DirectAdminHosting from "@/pages/DirectAdminHosting";
import WordPressHosting from "@/pages/WordPressHosting";
import WebDevelopment from "@/pages/WebDevelopment";
import ResellerHosting from "@/pages/ResellerHosting";
import ManagedHosting from "@/pages/ManagedHosting";
import PremiumVPN from "@/pages/PremiumVPN";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import CloudHosting from "@/pages/CloudHosting";
import HelpCenter from "@/pages/HelpCenter";
import WebsiteBuilder from "@/pages/WebsiteBuilder";
import WooCommerceHosting from "@/pages/WooCommerceHosting";
import EmailMarketing from "@/pages/EmailMarketing";
import GoogleWorkspace from "@/pages/GoogleWorkspace";
import WebsiteMigration from "@/pages/WebsiteMigration";
import Tutorials from "@/pages/Tutorials";
import ClientStories from "@/pages/ClientStories";
import FeaturesRoadmap from "@/pages/FeaturesRoadmap";
import AffiliateProgram from "@/pages/AffiliateProgram";
import Careers from "@/pages/Careers";
import OffshoreHosting from "@/pages/OffshoreHosting";
import PleskHosting from "@/pages/PleskHosting";
import WindowsHosting from "@/pages/WindowsHosting";
import EnhanceHosting from "@/pages/EnhanceHosting";
import AWSHosting from "@/pages/AWSHosting";
import GoogleCloudHosting from "@/pages/GoogleCloudHosting";
import SoftwareLicenses from "@/pages/SoftwareLicenses";
import DomainReseller from "@/pages/DomainReseller";
import WhoisLookup from "@/pages/WhoisLookup";
import SSLCertificates from "@/pages/SSLCertificates";
import KnowledgeBase from "@/pages/KnowledgeBase";
import WebHostingGuide from "@/pages/WebHostingGuide";
import SecurityGuide from "@/pages/SecurityGuide";
import SEOGuide from "@/pages/SEOGuide";
import CpanelGuide from "@/pages/CpanelGuide";
import WordPressGuide from "@/pages/WordPressGuide";
import BackupsGuide from "@/pages/BackupsGuide";
import DNSGuide from "@/pages/DNSGuide";
import DomainEmailGuide from "@/pages/DomainEmailGuide";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/vps-hosting" component={VpsHosting} />
      <Route path="/business-email" component={BusinessEmail} />
      <Route path="/domain-search" component={DomainSearch} />
      <Route path="/domain-transfer" component={DomainTransfer} />
      <Route path="/cpanel-hosting" component={CpanelHosting} />
      <Route path="/direct-admin-hosting" component={DirectAdminHosting} />
      <Route path="/wordpress-hosting" component={WordPressHosting} />
      <Route path="/web-development" component={WebDevelopment} />
      <Route path="/reseller-hosting" component={ResellerHosting} />
      <Route path="/managed-hosting" component={ManagedHosting} />
      <Route path="/premium-vpn" component={PremiumVPN} />
      <Route path="/cloud-hosting" component={CloudHosting} />
      <Route path="/website-builder" component={WebsiteBuilder} />
      <Route path="/woocommerce-hosting" component={WooCommerceHosting} />
      <Route path="/email-marketing" component={EmailMarketing} />
      <Route path="/google-workspace" component={GoogleWorkspace} />
      <Route path="/website-migration" component={WebsiteMigration} />
      <Route path="/tutorials" component={Tutorials} />
      <Route path="/client-stories" component={ClientStories} />
      <Route path="/features-roadmap" component={FeaturesRoadmap} />
      <Route path="/features" component={FeaturesRoadmap} />
      <Route path="/affiliate" component={AffiliateProgram} />
      <Route path="/careers" component={Careers} />
      <Route path="/offshore-hosting" component={OffshoreHosting} />
      <Route path="/plesk-hosting" component={PleskHosting} />
      <Route path="/windows-hosting" component={WindowsHosting} />
      <Route path="/enhance-hosting" component={EnhanceHosting} />
      <Route path="/aws-hosting" component={AWSHosting} />
      <Route path="/google-cloud-hosting" component={GoogleCloudHosting} />
      <Route path="/software-licenses" component={SoftwareLicenses} />
      <Route path="/domain-reseller" component={DomainReseller} />
      <Route path="/whois" component={WhoisLookup} />
      <Route path="/ssl-certificates" component={SSLCertificates} />
      <Route path="/knowledge-base" component={KnowledgeBase} />
      <Route path="/web-hosting-guide" component={WebHostingGuide} />
      <Route path="/security-guide" component={SecurityGuide} />
      <Route path="/seo-guide" component={SEOGuide} />
      <Route path="/cpanel-guide" component={CpanelGuide} />
      <Route path="/wordpress-guide" component={WordPressGuide} />
      <Route path="/backups-guide" component={BackupsGuide} />
      <Route path="/dns-guide" component={DNSGuide} />
      <Route path="/domain-email-guide" component={DomainEmailGuide} />
      <Route path="/kb/:slug" component={KnowledgeBase} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route path="/help" component={HelpCenter} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/dashboard/files" component={FileManagerPage} />
      {/* Fallback routes for demo purposes - can route back to dashboard or not found */}
      <Route path="/dashboard/:any*" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <GlobalSEO />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;