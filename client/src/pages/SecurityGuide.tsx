import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle2, Key, Globe, Server, FileText, ChevronRight, ChevronDown, BookOpen, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function SecurityGuide() {
  const [, setLocation] = useLocation();
  const [openSection, setOpenSection] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Website Security Guide - AxiomHost | Protect Your Website from Threats";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Complete website security guide: SSL certificates, malware protection, firewall setup, WordPress security, password best practices, and more. Protect your Nigerian business online.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  const securityTopics = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "SSL Certificates & HTTPS",
      description: "Encrypt data between your website and visitors",
      content: `
        <h4>What is SSL?</h4>
        <p>SSL (Secure Sockets Layer) creates an encrypted connection between a web server and a browser. This ensures that all data passed between the server and browser remains private and secure.</p>
        
        <h4>Why You Need SSL</h4>
        <ul>
          <li><strong>Data Protection:</strong> Encrypts sensitive information like passwords, credit cards, and personal data</li>
          <li><strong>SEO Boost:</strong> Google ranks HTTPS sites higher than HTTP sites</li>
          <li><strong>Trust Indicator:</strong> Shows padlock icon in browser, building customer trust</li>
          <li><strong>Required for E-commerce:</strong> Essential for accepting online payments</li>
          <li><strong>Browser Warnings:</strong> Chrome marks HTTP sites as "Not Secure"</li>
        </ul>
        
        <h4>How to Install SSL on AxiomHost</h4>
        <ol>
          <li>Log in to cPanel</li>
          <li>Navigate to "SSL/TLS Status" under Security</li>
          <li>Click "Run AutoSSL" to install free Let's Encrypt certificate</li>
          <li>Wait 5-10 minutes for installation</li>
          <li>Verify by visiting your site with https://</li>
        </ol>
        
        <h4>Force HTTPS Redirect</h4>
        <p>Add this code to your .htaccess file:</p>
        <pre>
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
        </pre>
      `
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Firewall & DDoS Protection",
      description: "Block malicious traffic and prevent attacks",
      content: `
        <h4>Understanding Web Firewalls</h4>
        <p>A Web Application Firewall (WAF) monitors and filters HTTP traffic between a web application and the Internet. It protects against common attacks like SQL injection, cross-site scripting (XSS), and more.</p>
        
        <h4>AxiomHost Security Features</h4>
        <ul>
          <li><strong>ModSecurity WAF:</strong> Industry-standard firewall protecting against OWASP Top 10 threats</li>
          <li><strong>DDoS Protection:</strong> Automatic mitigation of distributed denial-of-service attacks</li>
          <li><strong>IP Blocking:</strong> Block suspicious IP addresses and ranges</li>
          <li><strong>Rate Limiting:</strong> Prevent brute force attacks by limiting login attempts</li>
        </ul>
        
        <h4>Configuring Firewall in cPanel</h4>
        <ol>
          <li>Go to cPanel → Security → ModSecurity</li>
          <li>Ensure ModSecurity is enabled for all domains</li>
          <li>Review blocked requests in the logs</li>
          <li>Whitelist legitimate requests if needed</li>
        </ol>
        
        <h4>Additional DDoS Protection</h4>
        <p>For enhanced protection, consider using CloudFlare CDN which provides:</p>
        <ul>
          <li>Advanced DDoS mitigation at network edge</li>
          <li>Challenge pages for suspicious traffic</li>
          <li>Rate limiting rules</li>
          <li>Bot management</li>
        </ul>
      `
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Password Security",
      description: "Create and manage strong passwords",
      content: `
        <h4>Strong Password Guidelines</h4>
        <ul>
          <li>Minimum 12 characters (longer is better)</li>
          <li>Mix of uppercase, lowercase, numbers, and symbols</li>
          <li>Avoid dictionary words and personal information</li>
          <li>Use unique passwords for each account</li>
          <li>Consider using passphrases (e.g., "Coffee-Mountain-Running-2024!")</li>
        </ul>
        
        <h4>Two-Factor Authentication (2FA)</h4>
        <p>Enable 2FA for an extra layer of security. Even if someone gets your password, they can't access your account without the second factor.</p>
        
        <h4>Setting Up 2FA in cPanel</h4>
        <ol>
          <li>Log in to cPanel</li>
          <li>Go to Security → Two-Factor Authentication</li>
          <li>Click "Set Up Two-Factor Authentication"</li>
          <li>Scan QR code with Google Authenticator or Authy</li>
          <li>Enter the 6-digit code to verify</li>
          <li>Save backup codes in a secure location</li>
        </ol>
        
        <h4>Password Manager Recommendations</h4>
        <ul>
          <li><strong>Bitwarden:</strong> Free and open-source</li>
          <li><strong>1Password:</strong> Excellent for teams</li>
          <li><strong>LastPass:</strong> User-friendly interface</li>
          <li><strong>Dashlane:</strong> Built-in VPN feature</li>
        </ul>
      `
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Malware Protection",
      description: "Prevent, detect, and remove malicious code",
      content: `
        <h4>Common Types of Website Malware</h4>
        <ul>
          <li><strong>Backdoors:</strong> Hidden access points for attackers</li>
          <li><strong>Pharma Hacks:</strong> Inject spam links for pharmaceuticals</li>
          <li><strong>Malicious Redirects:</strong> Send visitors to harmful sites</li>
          <li><strong>Cryptominers:</strong> Use visitor's CPU for cryptocurrency mining</li>
          <li><strong>Defacement:</strong> Alter website appearance with hacker messages</li>
        </ul>
        
        <h4>Prevention Best Practices</h4>
        <ol>
          <li>Keep all software updated (CMS, plugins, themes)</li>
          <li>Use strong, unique passwords</li>
          <li>Remove unused plugins and themes</li>
          <li>Limit file upload permissions</li>
          <li>Use security plugins (Wordfence, Sucuri)</li>
          <li>Regular security scans</li>
        </ol>
        
        <h4>If Your Site Gets Infected</h4>
        <ol>
          <li>Don't panic - act quickly but carefully</li>
          <li>Restore from a clean backup if available</li>
          <li>Scan all files with malware scanner</li>
          <li>Remove infected files manually if needed</li>
          <li>Update all passwords</li>
          <li>Request review from Google if blacklisted</li>
          <li>Monitor closely for re-infection</li>
        </ol>
        
        <h4>ImunifyAV Scanning</h4>
        <p>AxiomHost includes ImunifyAV for automatic malware scanning. Access it through cPanel → Security → ImunifyAV to view scan results and clean infected files.</p>
      `
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "WordPress Security",
      description: "Specific security measures for WordPress sites",
      content: `
        <h4>WordPress Security Checklist</h4>
        <ul>
          <li>✓ Keep WordPress core updated</li>
          <li>✓ Update all plugins and themes</li>
          <li>✓ Delete unused plugins and themes</li>
          <li>✓ Use strong admin username (not "admin")</li>
          <li>✓ Limit login attempts</li>
          <li>✓ Hide WordPress version</li>
          <li>✓ Disable file editing in dashboard</li>
          <li>✓ Use security headers</li>
          <li>✓ Regular backups</li>
        </ul>
        
        <h4>Essential Security Plugins</h4>
        <ul>
          <li><strong>Wordfence:</strong> Firewall + malware scanner (Free version excellent)</li>
          <li><strong>Sucuri Security:</strong> Auditing, malware scanner, security hardening</li>
          <li><strong>iThemes Security:</strong> 30+ security measures in one plugin</li>
          <li><strong>All In One WP Security:</strong> User-friendly, comprehensive</li>
        </ul>
        
        <h4>Secure wp-config.php</h4>
        <p>Add these lines to wp-config.php for enhanced security:</p>
        <pre>
// Disable file editing
define('DISALLOW_FILE_EDIT', true);

// Limit post revisions
define('WP_POST_REVISIONS', 3);

// Auto-save interval
define('AUTOSAVE_INTERVAL', 300);
        </pre>
        
        <h4>Protect Login Page</h4>
        <ol>
          <li>Change default login URL (plugins available)</li>
          <li>Enable CAPTCHA on login</li>
          <li>Limit login attempts to 3</li>
          <li>Use 2FA for admin accounts</li>
          <li>Whitelist admin IP addresses if possible</li>
        </ol>
      `
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Monitoring & Auditing",
      description: "Track security events and detect threats early",
      content: `
        <h4>Why Monitor Your Website?</h4>
        <p>Early detection of security issues can prevent major damage. Regular monitoring helps you:</p>
        <ul>
          <li>Detect unauthorized changes quickly</li>
          <li>Identify attack patterns</li>
          <li>Meet compliance requirements</li>
          <li>Respond to incidents faster</li>
        </ul>
        
        <h4>What to Monitor</h4>
        <ul>
          <li><strong>File Changes:</strong> Detect modified, added, or deleted files</li>
          <li><strong>Login Attempts:</strong> Failed logins, successful admin logins</li>
          <li><strong>User Activity:</strong> New user registrations, role changes</li>
          <li><strong>Database Changes:</strong> Unusual queries or modifications</li>
          <li><strong>Traffic Patterns:</strong> Sudden spikes, suspicious requests</li>
        </ul>
        
        <h4>Setting Up Monitoring</h4>
        <ol>
          <li>Install security plugin with activity logging</li>
          <li>Set up email alerts for critical events</li>
          <li>Review logs weekly at minimum</li>
          <li>Use uptime monitoring (UptimeRobot, Pingdom)</li>
          <li>Enable Google Search Console for security alerts</li>
        </ol>
        
        <h4>cPanel Access Logs</h4>
        <p>View raw access logs in cPanel:</p>
        <ol>
          <li>Go to cPanel → Metrics → Raw Access</li>
          <li>Download and analyze access logs</li>
          <li>Look for suspicious patterns (many 404s, unusual user agents)</li>
        </ol>
      `
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Email Security",
      description: "Protect your email from spoofing and phishing",
      content: `
        <h4>Email Authentication Records</h4>
        <p>Protect your domain from email spoofing with these DNS records:</p>
        
        <h4>SPF (Sender Policy Framework)</h4>
        <p>Specifies which servers can send email for your domain.</p>
        <pre>v=spf1 +a +mx +ip4:YOUR_SERVER_IP ~all</pre>
        
        <h4>DKIM (DomainKeys Identified Mail)</h4>
        <p>Adds a digital signature to verify emails are authentic.</p>
        <ol>
          <li>Go to cPanel → Email → Email Deliverability</li>
          <li>Click "Manage" for your domain</li>
          <li>Copy the DKIM record and add to DNS</li>
        </ol>
        
        <h4>DMARC (Domain-based Message Authentication)</h4>
        <p>Tells receiving servers what to do with failed SPF/DKIM checks.</p>
        <pre>v=DMARC1; p=quarantine; rua=mailto:admin@yourdomain.com</pre>
        
        <h4>Email Security Best Practices</h4>
        <ul>
          <li>Use strong passwords for all email accounts</li>
          <li>Enable 2FA for email access</li>
          <li>Be cautious of phishing emails</li>
          <li>Don't click suspicious links</li>
          <li>Verify sender addresses carefully</li>
          <li>Report spam and phishing attempts</li>
        </ul>
      `
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Backup Strategies",
      description: "Your last line of defense against disasters",
      content: `
        <h4>The 3-2-1 Backup Rule</h4>
        <ul>
          <li><strong>3 copies</strong> of your data (original + 2 backups)</li>
          <li><strong>2 different storage types</strong> (e.g., server + cloud)</li>
          <li><strong>1 off-site backup</strong> (different physical location)</li>
        </ul>
        
        <h4>AxiomHost Backup Options</h4>
        <ul>
          <li><strong>JetBackup:</strong> Automatic daily backups with 30-day retention</li>
          <li><strong>cPanel Backup:</strong> Create full or partial backups anytime</li>
          <li><strong>Remote Backup:</strong> Store backups on external FTP/SFTP</li>
        </ul>
        
        <h4>Creating Manual Backup in cPanel</h4>
        <ol>
          <li>Go to cPanel → Files → Backup</li>
          <li>Click "Download a Full Account Backup"</li>
          <li>Select destination (Home Directory)</li>
          <li>Click "Generate Backup"</li>
          <li>Download when ready</li>
        </ol>
        
        <h4>WordPress Backup Plugins</h4>
        <ul>
          <li><strong>UpdraftPlus:</strong> Free, easy cloud backup to Google Drive, Dropbox</li>
          <li><strong>BlogVault:</strong> Real-time backups, staging, migration</li>
          <li><strong>BackupBuddy:</strong> Comprehensive paid solution</li>
          <li><strong>Duplicator:</strong> Great for migrations</li>
        </ul>
        
        <h4>Backup Schedule Recommendations</h4>
        <ul>
          <li><strong>Daily:</strong> Databases for active sites</li>
          <li><strong>Weekly:</strong> Full site backup including files</li>
          <li><strong>Monthly:</strong> Archive copy to off-site storage</li>
          <li><strong>Before updates:</strong> Always backup before major changes</li>
        </ul>
      `
    }
  ];

  const securityChecklist = [
    { task: "Install and configure SSL certificate", priority: "Critical" },
    { task: "Force HTTPS redirect on all pages", priority: "Critical" },
    { task: "Update all CMS, plugins, and themes", priority: "Critical" },
    { task: "Use strong, unique passwords", priority: "Critical" },
    { task: "Enable Two-Factor Authentication", priority: "High" },
    { task: "Set up automated daily backups", priority: "High" },
    { task: "Install security plugin (Wordfence/Sucuri)", priority: "High" },
    { task: "Configure firewall rules", priority: "High" },
    { task: "Set up SPF, DKIM, DMARC for email", priority: "Medium" },
    { task: "Limit login attempts", priority: "Medium" },
    { task: "Remove unused plugins and themes", priority: "Medium" },
    { task: "Set up uptime and security monitoring", priority: "Medium" },
    { task: "Review file permissions (644/755)", priority: "Medium" },
    { task: "Hide CMS version information", priority: "Low" },
    { task: "Implement security headers", priority: "Low" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1E2C]">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#1D1E2C] via-[#2D2E3C] to-[#1D1E2C] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#00D4AA] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#673DE6] rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4AA]/20 text-[#00D4AA] text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Complete Security Guide
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Website Security Guide
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Protect your website from hackers, malware, and data breaches. A comprehensive guide covering all aspects of website security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setLocation("/ssl-certificates")}
                  className="px-8 py-4 bg-[#00D4AA] text-[#1D1E2C] font-bold rounded-full hover:bg-[#00B090] transition-colors"
                >
                  Get SSL Certificate
                </button>
                <button
                  onClick={() => setLocation("/tutorials")}
                  className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  Watch Security Tutorials
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-red-50 border-b border-red-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <h2 className="text-xl font-bold text-red-700">Why Security Matters</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "30,000+", label: "Websites hacked daily" },
                { number: "43%", label: "Attacks target small businesses" },
                { number: "$200K", label: "Average data breach cost" },
                { number: "60%", label: "Small businesses close after attack" }
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-2xl md:text-3xl font-black text-red-600">{stat.number}</p>
                  <p className="text-sm text-red-700 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Topics */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-black text-[#1D1E2C] mb-4">
                Security Topics
              </h2>
              <p className="text-lg text-[#545775]">
                Click each topic to learn more about protecting your website
              </p>
            </motion.div>

            <div className="space-y-4">
              {securityTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenSection(openSection === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="bg-[#673DE6]/10 p-3 rounded-xl text-[#673DE6]">
                      {topic.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-lg font-bold text-[#1D1E2C]">{topic.title}</h3>
                      <p className="text-sm text-[#545775]">{topic.description}</p>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-400 transition-transform ${openSection === index ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {openSection === index && (
                    <div className="px-6 pb-6 border-t border-slate-100">
                      <div 
                        className="prose prose-sm max-w-none mt-4 text-[#545775]
                          prose-headings:text-[#1D1E2C] prose-headings:font-bold prose-headings:mt-6 prose-headings:mb-3
                          prose-h4:text-base
                          prose-ul:my-3 prose-ul:pl-5
                          prose-ol:my-3 prose-ol:pl-5
                          prose-li:my-1
                          prose-pre:bg-slate-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:text-sm prose-pre:overflow-x-auto
                          prose-strong:text-[#1D1E2C]"
                        dangerouslySetInnerHTML={{ __html: topic.content }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Checklist */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-black text-[#1D1E2C] mb-4">
                Website Security Checklist
              </h2>
              <p className="text-lg text-[#545775]">
                Use this checklist to ensure your website is properly secured
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-slate-100 font-bold text-sm text-[#1D1E2C]">
                <div className="col-span-1"></div>
                <div className="col-span-8">Security Task</div>
                <div className="col-span-3 text-center">Priority</div>
              </div>
              {securityChecklist.map((item, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-slate-100 last:border-0 hover:bg-slate-50"
                >
                  <div className="col-span-1 flex items-center">
                    <div className="w-5 h-5 rounded border-2 border-slate-300 hover:border-[#673DE6] cursor-pointer transition-colors" />
                  </div>
                  <div className="col-span-8 text-[#1D1E2C]">{item.task}</div>
                  <div className="col-span-3 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                      item.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                      item.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {item.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1D1E2C] mb-8">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "SSL Certificate Installation Tutorial", link: "/tutorials", icon: <Lock className="w-5 h-5" />, type: "Video" },
                { title: "WordPress Security Best Practices", link: "/kb/wordpress-security", icon: <Shield className="w-5 h-5" />, type: "Article" },
                { title: "Backup and Restore Guide", link: "/kb/jetbackup-setup", icon: <FileText className="w-5 h-5" />, type: "Guide" }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setLocation(resource.link)}
                  className="bg-slate-50 rounded-xl p-6 hover:shadow-lg hover:bg-white transition-all cursor-pointer group border border-slate-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#673DE6]/10 p-3 rounded-xl text-[#673DE6]">
                      {resource.icon}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold text-[#673DE6] mb-1 block">{resource.type}</span>
                      <h3 className="font-bold text-[#1D1E2C] group-hover:text-[#673DE6] transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#673DE6]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#00B090] to-[#00D4AA] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Zap className="w-12 h-12 mx-auto mb-6" />
              <h2 className="text-4xl font-black mb-6">
                Need Help Securing Your Website?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Our security experts are available 24/7 to help you protect your online presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setLocation("/contact")}
                  className="px-8 py-4 bg-white text-[#00B090] font-bold rounded-full hover:bg-slate-100 transition-colors"
                >
                  Contact Security Team
                </button>
                <button
                  onClick={() => setLocation("/ssl-certificates")}
                  className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  Get SSL Certificate
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
