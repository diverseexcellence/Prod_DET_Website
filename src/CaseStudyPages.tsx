import { ChevronRight, GraduationCap, HeartPulse, CheckCircle, Shield, TrendingUp, Building2, Users, Server, Lock, HardHat, Globe, Cpu, Zap, Monitor } from 'lucide-react';

interface CaseStudyPageProps {
  setCurrentPage: (page: string) => void;
}

export const CAREElementaryPage = ({ setCurrentPage }: CaseStudyPageProps) => (
  <div className="min-h-screen bg-slate-50 pt-24">
    <section className="py-20 px-8 bg-gradient-to-br from-[#DC2626] via-[#B91C1C] to-[#991B1B]">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => setCurrentPage('CaseStudies')}
          className="flex items-center text-white/80 hover:text-white mb-8 group font-semibold"
        >
          <ChevronRight className="h-5 w-5 mr-1 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </button>
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
          <GraduationCap className="h-4 w-4 text-white mr-2" />
          <span className="text-sm font-semibold text-white">Education</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Empowering CARE Elementary's Digital Future
        </h1>
        <p className="text-xl text-white/90 leading-relaxed">
          A comprehensive case study showcasing how Diverse Excellence Technology delivered Category 1 and Category 2 E-rate services to transform connectivity and network infrastructure for CARE Elementary School in Miami, Florida.
        </p>
      </div>
    </section>

    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">The Challenge: Supporting Growing Educational Needs</h2>
        <p className="text-lg text-slate-700 mb-8">
          CARE Elementary School, under the leadership of Principal Christopher Simmonds, faced increasing demands for reliable, high-speed internet connectivity to support modern educational technology and digital learning initiatives. With a student population qualifying for significant E-rate discounts (75-100% NSLP eligibility providing 90% urban discount), the school needed a cost-effective solution that wouldn't compromise on quality or performance.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-red-50 rounded-2xl border-2 border-red-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">24/7 Reliable Internet Access</h3>
            <p className="text-slate-600 text-sm">Consistent connectivity for students and staff to support digital curriculum</p>
          </div>
          <div className="p-6 bg-red-50 rounded-2xl border-2 border-red-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Scalable Bandwidth</h3>
            <p className="text-slate-600 text-sm">Infrastructure capable of growing with educational technology demands</p>
          </div>
          <div className="p-6 bg-red-50 rounded-2xl border-2 border-red-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Secure Network Infrastructure</h3>
            <p className="text-slate-600 text-sm">Managed network with minimal on-premise hardware maintenance</p>
          </div>
          <div className="p-6 bg-red-50 rounded-2xl border-2 border-red-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Comprehensive Monitoring</h3>
            <p className="text-slate-600 text-sm">Proactive support ensuring maximum uptime</p>
          </div>
          <div className="p-6 bg-red-50 rounded-2xl border-2 border-red-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Cost-Effective Solution</h3>
            <p className="text-slate-600 text-sm">Leverage E-rate funding for maximum value</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">The DET Solution: Cisco Meraki Innovation</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <div className="flex items-start">
              <div className="bg-red-100 text-red-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                01
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">E-Rate Category 2 Implementation</h3>
                <p className="text-slate-600">Comprehensive one-time implementation solution under the E-rate Category 2 program, providing CARE Elementary with modern network infrastructure using Cisco Meraki cloud-managed solutions.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <div className="flex items-start">
              <div className="bg-red-100 text-red-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                02
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Hybrid Cloud Architecture</h3>
                <p className="text-slate-600">Innovative hybrid on-premise and cloud approach powered by Cisco, eliminating the need for on-premise servers while reducing hardware and maintenance overhead. User management conducted through Cisco portal and CLI interface.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <div className="flex items-start">
              <div className="bg-red-100 text-red-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                03
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Comprehensive Project Management</h3>
                <p className="text-slate-600">Deployed dedicated project team including Executive Sponsor, Technical Project Manager, Network Engineer, Network Associate, and Systems Administrator to ensure seamless implementation and ongoing support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Service Excellence & Performance Guarantees</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-red-600 mb-2">99.99%</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Network Availability</h3>
            <p className="text-slate-600 text-sm">Less than 4.5 minutes total downtime per month with comprehensive monitoring</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-600 mb-2">&lt;2hr</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Priority 1 Response</h3>
            <p className="text-slate-600 text-sm">Critical service outage response within 2 hours for complete service restoration</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-600 mb-2">3yrs</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Contract Term</h3>
            <p className="text-slate-600 text-sm">Flexible 3-year E-rate contract</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Results: A Foundation for Educational Excellence</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border-2 border-red-200 text-center">
            <CheckCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Merit Based Excellence</h3>
            <p className="text-slate-600 text-sm">Best-in-class services with significant E-rate cost savings and eliminated expensive on-premise infrastructure maintenance</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border-2 border-red-200 text-center">
            <TrendingUp className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Scalable Partnership</h3>
            <p className="text-slate-600 text-sm">Three-year contract with flexible terms enables CARE Elementary to expand services as needs evolve</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border-2 border-red-200 text-center">
            <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Community Impact</h3>
            <p className="text-slate-600 text-sm">Supporting education, diversity, and inclusion while building sustainable partnerships in the community</p>
          </div>
        </div>
        <div className="mt-12 p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border-2 border-red-200">
          <p className="text-lg text-slate-700 text-center italic">
            Through Diverse Excellence Technology Corp's comprehensive E-rate services and innovative Cisco Meraki implementation, CARE Elementary School now has a robust, future-ready network infrastructure delivered by a trusted minority-owned partner committed to educational excellence and community development.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export const ObsidianworksPage = ({ setCurrentPage }: CaseStudyPageProps) => (
  <div className="min-h-screen bg-slate-50 pt-24">
    {/* Header */}
    <section className="py-20 px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => setCurrentPage('CaseStudies')}
          className="flex items-center text-white/80 hover:text-white mb-8 group font-semibold"
        >
          <ChevronRight className="h-5 w-5 mr-1 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </button>
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
          <Shield className="h-4 w-4 text-white mr-2" />
          <span className="text-sm font-semibold text-white">Cybersecurity & Infrastructure</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Obsidianworks: Securing Digital Sovereignty
        </h1>
        <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
          How a dynamic strategic agency achieved complete IT independence and security modernization with zero downtime, migrating from a massive global parent organization to a sovereign, agile environment.
        </p>
      </div>
    </section>

    {/* Challenge Section */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">The Challenge: Disentangling a Distributed Workforce</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-700 mb-6">
              Obsidianworks, operating with a distributed workforce across the United States (California, New York, Georgia, Tennessee, and Texas), faced the complexity of disentangling its digital operations from a heavy, enterprise-grade legacy infrastructure.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              The agency was burdened by a fragmented security stack consisting of redundant tools and restrictive corporate policies that hampered agility. The critical challenge was to migrate 46 users and terabytes of sensitive data to a sovereign environment without disrupting ongoing client campaigns.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">46</h3>
              <p className="text-slate-900 font-bold">Users</p>
              <p className="text-slate-600 text-sm">Distributed across 4 time zones </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">150+</h3>
              <p className="text-slate-900 font-bold">GB Storage</p>
              <p className="text-slate-600 text-sm">Critical file assets transferred </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">0</h3>
              <p className="text-slate-900 font-bold">Downtime</p>
              <p className="text-slate-600 text-sm">Minutes of lost productivity </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">60</h3>
              <p className="text-slate-900 font-bold">Days</p>
              <p className="text-slate-600 text-sm">Total transformation timeline </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Solution Section */}
    <section className="py-16 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">The Solution: "Lift, Shift, and Modernize"</h2>
        <p className="text-lg text-slate-700 mb-12">
          The Diverse Excellence Technology (DET) team executed a precision strategy. Rather than simply replicating the bloated legacy environment, the project focused on rightsizing the technology stack for agility and security.
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                01
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Architecture & Consolidation</h3>
                <p className="text-slate-600">
                  Audited the existing environment and identified 12 disparate software systems for consolidation. Shifted primary productivity from a restrictive Microsoft 365 tenant to a cloud-native Google Workspace environment, while retaining specific M365 licenses for finance compatibility.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                02
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">The "Zero-Downtime" Cutover</h3>
                <p className="text-slate-600">
                  Executed the migration over a strategically planned 48-hour weekend window to protect business continuity. This included transferring 113GB+ of email data and over 150GB of file storage, ensuring staff logged in on Monday with every file exactly where they expected it.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                03
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Unified Security Stack</h3>
                <p className="text-slate-600">
                  Replaced a fragmented security stack (CrowdStrike + Sophos + Zscaler) with a unified protection layer using Bitdefender EDR and Proofpoint Email Security. Implemented Endpoint Central for a "Single Pane of Glass" device management view.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Transformation Table */}
        <div className="mt-12 overflow-hidden rounded-2xl border-2 border-slate-200">
          <div className="grid grid-cols-2 bg-slate-100 p-4 font-bold text-slate-900">
            <div>Legacy Corporate Environment</div>
            <div>Modernized Independent State</div>
          </div>
          <div className="divide-y divide-slate-200 bg-white">
            <div className="grid grid-cols-2 p-4">
              <div className="text-red-500">Fragmented Security (CrowdStrike + Sophos + Zscaler)</div>
              <div className="text-emerald-600 font-semibold">Unified Protection (Bitdefender + Proofpoint)</div>
            </div>
            <div className="grid grid-cols-2 p-4">
              <div className="text-red-500">Complex Device Mgmt (Jamf + Intune + Armis)</div>
              <div className="text-emerald-600 font-semibold">Single Pane of Glass (Endpoint Central)</div>
            </div>
            <div className="grid grid-cols-2 p-4">
              <div className="text-red-500">Shared Corporate Tenant</div>
              <div className="text-emerald-600 font-semibold">Sovereign Google Workspace & Box Tenants</div>
            </div>
            <div className="grid grid-cols-2 p-4">
              <div className="text-red-500">Dependencies on Parent IT</div>
              <div className="text-emerald-600 font-semibold">Independent Management & Support</div>
            </div>
          </div>
          <div className="bg-slate-50 p-2 text-center text-xs text-slate-400">
             Comparison data source 
          </div>
        </div>

      </div>
    </section>

    {/* Impact Section */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Project Impact</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Data Integrity</h3>
            <p className="text-slate-600 text-sm">Complete success in data migration </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">12</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Systems Consolidated</h3>
            <p className="text-slate-600 text-sm">Legacy applications replaced or merged </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">Zero</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Disruption</h3>
            <p className="text-slate-600 text-sm">Productivity maintained throughout cutover </p>
          </div>
        </div>
        <div className="p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 rounded-2xl shadow-xl">
          <p className="text-lg text-white text-center italic leading-relaxed">
            "The migration achieved complete operational independence with absolute data integrity. We successfully transitioned a geographically distributed team across four time zones without a single minute of lost productivity." 
          </p>
        </div>
        <div className="mt-8 text-center">
           <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Project Completed | January 2026 </p>
        </div>
      </div>
    </section>
  </div>
);

export const HHCHealthcarePage = ({ setCurrentPage }: CaseStudyPageProps) => (
  <div className="min-h-screen bg-slate-50 pt-24">
    <section className="py-20 px-8 bg-gradient-to-br from-[#0D9488] via-[#0F766E] to-[#115E59]">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => setCurrentPage('CaseStudies')}
          className="flex items-center text-white/80 hover:text-white mb-8 group font-semibold"
        >
          <ChevronRight className="h-5 w-5 mr-1 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </button>
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
          <HeartPulse className="h-4 w-4 text-white mr-2" />
          <span className="text-sm font-semibold text-white">Healthcare</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Transforming Healthcare IT: HHC Success Story
        </h1>
        <p className="text-xl text-white/90 leading-relaxed">
          A comprehensive case study showcasing how DET delivered expert SAP integration resources to modernize operations for Health & Hospital Corporation of Marion County's 5,500-employee healthcare system.
        </p>
      </div>
    </section>

    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">About Eskenazi Health & HHC</h2>
        <p className="text-lg text-slate-700 mb-8">
          Eskenazi Health is a major healthcare system operated by the Health & Hospital Corporation of Marion County (HHC), a public health organization committed to providing high-quality, accessible healthcare to all Marion County residents, especially the underserved and vulnerable. The organization manages a comprehensive network of facilities serving the community with excellence and compassion.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-teal-50 rounded-2xl border-2 border-teal-200 text-center">
            <h3 className="text-2xl font-bold text-teal-600 mb-2">336</h3>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Bed Hospital</h4>
            <p className="text-slate-600 text-sm">Sidney & Lois Eskenazi Hospital providing acute care</p>
          </div>
          <div className="p-6 bg-teal-50 rounded-2xl border-2 border-teal-200 text-center">
            <h3 className="text-2xl font-bold text-teal-600 mb-2">10</h3>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Health Centers</h4>
            <p className="text-slate-600 text-sm">Primary care clinic network across Marion County</p>
          </div>
          <div className="p-6 bg-teal-50 rounded-2xl border-2 border-teal-200 text-center">
            <h3 className="text-2xl font-bold text-teal-600 mb-2">EMS</h3>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Services</h4>
            <p className="text-slate-600 text-sm">Indianapolis emergency ambulance operations</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">The Challenge: Complex Integration Requirements</h2>
        <p className="text-lg text-slate-700 mb-8">
          HHC needed qualified IT services for SAP/ERP and Epic/EHR systems implementation across 4 divisions with approximately 5,500 personnel records. The ambitious timeline: 4 months to go live with multiple critical interfaces including payroll, benefits, time tracking, and peripheral applications.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Expert Integration Specialists</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• 8+ years SAP PI/PO experience</li>
              <li>• SAP CPI (HCI) expertise</li>
              <li>• Custom process integration</li>
              <li>• SuccessFactors integration</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Technical Depth Required</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• GROOVY/Java scripting</li>
              <li>• SOAP, ODATA, SFTP, LDAP</li>
              <li>• SSL certificates & SSH tokens</li>
              <li>• HANA Cloud Connector</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Specialized Experience</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Healthcare & HR systems</li>
              <li>• ADP & SuccessFactors</li>
              <li>• MS Active Directory</li>
              <li>• ABAP coding knowledge</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">DET's Solution: Expert Team Deployment</h2>
        <p className="text-lg text-slate-700 mb-8">
          DET assembled a specialized team of 10 certified SAP platform experts to address HHC's complex requirements, meeting strict vendor qualification standards and technical expertise demands.
        </p>
        <div className="space-y-6 mb-12">
          <div className="bg-teal-50 p-6 rounded-2xl border-2 border-teal-200">
            <div className="flex items-start">
              <div className="bg-teal-600 text-white font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                01
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Interfaces Lead Consultant</h3>
                <p className="text-slate-600">Managed interface completion including payroll, benefits, time tracking, and peripheral applications. Developed functional specifications, conducted end-to-end testing, and secured vendor sign-offs.</p>
              </div>
            </div>
          </div>
          <div className="bg-teal-50 p-6 rounded-2xl border-2 border-teal-200">
            <div className="flex items-start">
              <div className="bg-teal-600 text-white font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                02
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">EC Consultant</h3>
                <p className="text-slate-600">Configured portlets, XML, MDF Objects, workflows, business rules, and associations. Executed data loads, created reports using ORD, and resolved issues during iteration testing and UAT.</p>
              </div>
            </div>
          </div>
          <div className="bg-teal-50 p-6 rounded-2xl border-2 border-teal-200">
            <div className="flex items-start">
              <div className="bg-teal-600 text-white font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                03
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">HCI/CPI Consultant</h3>
                <p className="text-slate-600">Developed interfaces between SuccessFactors and vendor systems (ADP, Kronos, Benefit Focus) using WebUI/Eclipse. Created technical design documents and conducted comprehensive testing.</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-6">Implementation Scope</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-200">
            <h4 className="text-lg font-bold text-slate-900 mb-2">Recruitment Marketing & Management</h4>
            <p className="text-slate-600 text-sm">Complete recruitment lifecycle implementation with modern candidate experience</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-200">
            <h4 className="text-lg font-bold text-slate-900 mb-2">Onboarding</h4>
            <p className="text-slate-600 text-sm">Streamlined new hire processes across all four divisions</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-200">
            <h4 className="text-lg font-bold text-slate-900 mb-2">Employee Central</h4>
            <p className="text-slate-600 text-sm">Centralized HR system for 5,500 personnel records</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-200">
            <h4 className="text-lg font-bold text-slate-900 mb-2">Benefit Focus</h4>
            <p className="text-slate-600 text-sm">Integrated benefits administration across the organization</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Results: Successful Transformation</h2>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-teal-600 mb-2">10</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Certified Experts</h3>
            <p className="text-slate-600 text-sm">SAP platform specialists deployed</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-teal-600 mb-2">5.5K</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Personnel Records</h3>
            <p className="text-slate-600 text-sm">Successfully migrated and managed</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-teal-600 mb-2">4</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Divisions</h3>
            <p className="text-slate-600 text-sm">Integrated across the organization</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-teal-600 mb-2">4</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Months</h3>
            <p className="text-slate-600 text-sm">Aggressive timeline met successfully</p>
          </div>
        </div>
        <div className="p-8 bg-white rounded-2xl border-2 border-teal-200">
          <p className="text-lg text-slate-700 mb-4">
            The successful SAP ERP implementation streamlined operations across all HHC facilities, meeting the aggressive 4-month timeline. DET's team of certified experts delivered high-quality IT staffing services for this complex healthcare system transformation.
          </p>
          <div className="p-6 bg-teal-50 rounded-xl border-l-4 border-teal-600">
            <p className="text-slate-700 italic">
              "DET's capability in delivering expert SAP integration resources with 8+ years of PI/PO experience and deep technical expertise proved instrumental in modernizing our healthcare operations and meeting our ambitious implementation timeline."
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const CitizensEnergyPage = ({ setCurrentPage }: CaseStudyPageProps) => (
  <div className="min-h-screen bg-slate-50 pt-24">
    <section className="py-20 px-8 bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => setCurrentPage('CaseStudies')}
          className="flex items-center text-white/80 hover:text-white mb-8 group font-semibold"
        >
          <ChevronRight className="h-5 w-5 mr-1 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </button>
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
          <Lock className="h-4 w-4 text-white mr-2" />
          <span className="text-sm font-semibold text-white">Energy & Utilities</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Citizens Energy Server Security Hardening Project
        </h1>
        <p className="text-xl text-white/90 leading-relaxed">
          Implementing industry-tested security baselines to harden systems, protect against malicious threats, and bring consistency to server builds and configurations across development, testing, and production environments.
        </p>
      </div>
    </section>

    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">The Challenge</h2>
        <p className="text-lg text-slate-700 mb-8">
          Prior to this engagement, Citizens Energy did not have a standardized server build or hardening process. Configurations were mostly manual and inconsistent, leaving gaps in security. While Microsoft security baselines were already in use for Windows 10 desktops, the same discipline had not yet been extended to the server infrastructure.
        </p>
      </div>
    </section>

    <section className="py-16 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Scope of Services Delivered</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <div className="flex items-start">
              <div className="bg-violet-100 text-violet-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                01
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Active Directory Re-Design</h3>
                <p className="text-slate-600">Assisted in the creation of a new OU structure aligned with Microsoft best practices and Citizens' business requirements.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <div className="flex items-start">
              <div className="bg-violet-100 text-violet-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                02
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Group Policy Implementation</h3>
                <p className="text-slate-600">Helped develop and implement new GPOs to apply Microsoft Security Baselines on servers. Adjusted policies for compatibility with client requirements.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <div className="flex items-start">
              <div className="bg-violet-100 text-violet-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                03
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Server Migrations</h3>
                <p className="text-slate-600">Migrated approximately 242 servers into the new OU structure with standardized security settings. 133 servers migrated during business hours, 109 servers migrated after hours/weekends.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <div className="flex items-start">
              <div className="bg-violet-100 text-violet-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                04
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Testing & Validation</h3>
                <p className="text-slate-600">Ensured applications functioned properly post-move and troubleshot issues in real time.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <div className="flex items-start">
              <div className="bg-violet-100 text-violet-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                05
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Compliance & Continuous Improvement</h3>
                <p className="text-slate-600">Conducted Qualys compliance scans on all Windows servers. Tuned GPOs as required in collaboration with Citizens.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <div className="flex items-start">
              <div className="bg-violet-100 text-violet-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                06
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Documentation & Knowledge Transfer</h3>
                <p className="text-slate-600">Delivered a back-out strategy, migration strategy, and detailed documentation. Conducted a knowledge transfer session with Citizens staff.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Results</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-violet-600 mb-2">242</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Servers Migrated</h3>
            <p className="text-slate-600 text-sm">Successfully hardened with Microsoft Security Baselines</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-violet-600 mb-2">100%</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Compliance</h3>
            <p className="text-slate-600 text-sm">All Windows servers scanned and validated with Qualys</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-violet-600 mb-2">Zero</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Downtime</h3>
            <p className="text-slate-600 text-sm">Seamless migration with real-time troubleshooting</p>
          </div>
        </div>
        <div className="mt-12 p-8 bg-gradient-to-br from-violet-50 to-white rounded-2xl border-2 border-violet-200">
          <p className="text-lg text-slate-700 text-center">
            Through close collaboration with Citizens Energy stakeholders via project planning sessions, technical working sessions, and weekly status reports, DET ensured full transparency, accountability, and smooth coordination throughout the security hardening initiative.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export const MCPHDPage = ({ setCurrentPage }: CaseStudyPageProps) => (
  <div className="min-h-screen bg-slate-50 pt-24">
    <section className="py-20 px-8 bg-gradient-to-br from-[#059669] via-[#047857] to-[#065F46]">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => setCurrentPage('CaseStudies')}
          className="flex items-center text-white/80 hover:text-white mb-8 group font-semibold"
        >
          <ChevronRight className="h-5 w-5 mr-1 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </button>
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
          <Users className="h-4 w-4 text-white mr-2" />
          <span className="text-sm font-semibold text-white">Public Health</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Recovery Assist Platform: Transforming Substance Use Disorder Coordination
        </h1>
        <p className="text-xl text-white/90 leading-relaxed">
          Marion County Public Health Department partnered with DET to design and develop a digital platform that connects fragmented substance use disorder services into a unified continuum of care through human-centered design and digital innovation.
        </p>
      </div>
    </section>

    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">The Challenge</h2>
        <p className="text-lg text-slate-700 mb-8">
          Prior to the Recovery Assist Platform (RAP), agencies supporting persons with substance use disorder operated in fragmented silos. Systemic barriers created a disjointed continuum of care, making it difficult for individuals to access timely, coordinated treatment and recovery services.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Centralized Directory Gap</h3>
            <p className="text-slate-600 text-sm">Lack of a centralized directory left agencies operating without knowledge of available resources</p>
          </div>
          <div className="p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Standardization Void</h3>
            <p className="text-slate-600 text-sm">Absence of universal referral forms created confusion and inefficiency</p>
          </div>
          <div className="p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Visibility Issues</h3>
            <p className="text-slate-600 text-sm">Limited visibility into capacity and resources prevented effective allocation</p>
          </div>
          <div className="p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Communication Breakdown</h3>
            <p className="text-slate-600 text-sm">Inconsistent communication led to delays and dropped referrals</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">The Solution: UX/UI and Design Leadership</h2>
        <p className="text-lg text-slate-700 mb-8">
          DET's developer and UX/UI lead spearheaded the design of an intuitive, scalable, and accessible web application tailored to providers, case managers, and clients navigating the recovery ecosystem.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Human-Centered Experience</h3>
            <p className="text-slate-600 text-sm">Empathize with users through design workshops ensuring accessibility and ease of navigation</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Unified Referral Process</h3>
            <p className="text-slate-600 text-sm">Digitized workflows maintaining HIPAA and 42 CFR Part 2 compliance</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Real-Time Service Directory</h3>
            <p className="text-slate-600 text-sm">Searchable database with filters by location, services, and payment types</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Data Visualization</h3>
            <p className="text-slate-600 text-sm">Administrator dashboards visualizing referral volumes and service gaps</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Iterative Testing</h3>
            <p className="text-slate-600 text-sm">Usability testing refining layout, accessibility, and workflows</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Scalable Foundation</h3>
            <p className="text-slate-600 text-sm">Architecture supporting future state system integrations</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Impact</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-600 mb-2">100+</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Provider Agencies</h3>
            <p className="text-slate-600 text-sm">Connected through standardized workflows</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-600 mb-2">1</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Unified Platform</h3>
            <p className="text-slate-600 text-sm">Connecting fragmented systems</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-600 mb-2">5</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Core Objectives</h3>
            <p className="text-slate-600 text-sm">Design principles guiding every feature</p>
          </div>
        </div>
        <div className="p-8 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border-2 border-emerald-200">
          <p className="text-lg text-slate-700 text-center mb-4">
            The Recovery Assist Platform has established a new standard for digital collaboration in public health within Marion County, transforming how agencies coordinate care and how individuals access life-saving services.
          </p>
          <p className="text-slate-600 text-center italic">
            "The Recovery Assist Platform doesn't just connect systems—it connects people to hope, providers to resources, and communities to solutions."
          </p>
        </div>
      </div>
    </section>
  </div>
);

export const NMAPage = ({ setCurrentPage }: CaseStudyPageProps) => (
  <div className="min-h-screen bg-slate-50 pt-24">
    <section className="py-20 px-8 bg-gradient-to-br from-[#0891B2] via-[#0E7490] to-[#155E75]">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => setCurrentPage('CaseStudies')}
          className="flex items-center text-white/80 hover:text-white mb-8 group font-semibold"
        >
          <ChevronRight className="h-5 w-5 mr-1 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </button>
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
          <Building2 className="h-4 w-4 text-white mr-2" />
          <span className="text-sm font-semibold text-white">Healthcare Association</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Modernizing the National Medical Association's Technology & Workspace
        </h1>
        <p className="text-xl text-white/90 leading-relaxed">
          An eight-year partnership transforming the nation's oldest organization representing African American physicians through cloud infrastructure, security hardening, and culturally-inspired workspace design.
        </p>
      </div>
    </section>

    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">The Challenge</h2>
        <p className="text-lg text-slate-700 mb-8">
          By 2016, the NMA's IT systems were running on outdated, end-of-life infrastructure including servers, switches, and storage platforms well beyond their useful lifespan. These legacy systems limited performance, posed security risks, and constrained remote access for staff and members.
        </p>
      </div>
    </section>

    <section className="py-16 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Three-Phase Transformation</h2>
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl border-2 border-slate-200">
            <div className="flex items-center mb-4">
              <div className="bg-cyan-100 text-cyan-600 font-bold text-xl w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                2016
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Phase 1: Foundational Server Modernization</h3>
            </div>
            <ul className="space-y-2 text-slate-600 ml-20">
              <li>• Replaced legacy physical servers with modern virtualized environment</li>
              <li>• Upgraded storage and security systems</li>
              <li>• Implemented structured backup and redundancy processes</li>
              <li>• Established foundation for future cloud migration</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-slate-200">
            <div className="flex items-center mb-4">
              <div className="bg-cyan-100 text-cyan-600 font-bold text-xl w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                2023
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Phase 2: Cloud Infrastructure Transformation</h3>
            </div>
            <ul className="space-y-2 text-slate-600 ml-20">
              <li>• Migrated all user data to Microsoft OneDrive and SharePoint Online</li>
              <li>• Deployed Cisco Meraki firewalls, switches, and wireless access points</li>
              <li>• Performed comprehensive cybersecurity assessments and penetration testing</li>
              <li>• Achieved 100% cloud migration eliminating physical servers</li>
              <li>• Reduced IT overhead and maintenance costs by over 40%</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-slate-200">
            <div className="flex items-center mb-4">
              <div className="bg-cyan-100 text-cyan-600 font-bold text-xl w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                2024
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Phase 3: Cultural and Workspace Modernization</h3>
            </div>
            <ul className="space-y-2 text-slate-600 ml-20">
              <li>• Designed complete low-voltage and data cabling infrastructure</li>
              <li>• Integrated Samsung Frame displays as digital art canvases</li>
              <li>• Installed Shure ceiling microphones, Yealink 4K cameras, Barco ClickShare</li>
              <li>• Implemented sound masking system for speech privacy</li>
              <li>• Created art-infused technology design reflecting cultural pride</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Results</h2>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-600 mb-2">8</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Year Partnership</h3>
            <p className="text-slate-600 text-sm">2016-2024 transformation journey</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-600 mb-2">100%</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Cloud Migration</h3>
            <p className="text-slate-600 text-sm">No physical servers required</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-600 mb-2">40%</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Cost Reduction</h3>
            <p className="text-slate-600 text-sm">IT overhead savings achieved</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-600 mb-2">3</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Major Phases</h3>
            <p className="text-slate-600 text-sm">Comprehensive modernization</p>
          </div>
        </div>
        <div className="p-8 bg-gradient-to-br from-cyan-50 to-white rounded-2xl border-2 border-cyan-200">
          <p className="text-lg text-slate-700 text-center">
            The National Medical Association's multi-year transformation demonstrates how thoughtful modernization can bridge technology, culture, and community—from server upgrades to full cloud adoption and a visually inspiring, art-integrated headquarters that embodies the NMA's mission of excellence, innovation, and inclusivity.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export const CorGroupPage = ({ setCurrentPage }: CaseStudyPageProps) => (
  <div className="min-h-screen bg-slate-50 pt-24">
    {/* Header */}
    <section className="py-20 px-8 bg-gradient-to-br from-[#92400E] via-[#B45309] to-[#F59E0B]">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => setCurrentPage('CaseStudies')}
          className="flex items-center text-white/80 hover:text-white mb-8 group font-semibold"
        >
          <ChevronRight className="h-5 w-5 mr-1 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </button>
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
          <HardHat className="h-4 w-4 text-white mr-2" />
          <span className="text-sm font-semibold text-white">Construction & Web Development</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          CorGroup: Revamping a 40-Year Legacy in 3 Weeks
        </h1>
        <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
          How Diverse Excellence Technology partnered with a 40-year Indianapolis construction firm to capture the CEO's vision, modernize their digital identity, and deliver a production-ready web presence — all within a single AI-accelerated sprint.
        </p>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="py-12 px-8 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-[#F59E0B] mb-2">3</div>
            <div className="text-sm font-semibold text-slate-700">Week Sprint</div>
            <div className="text-xs text-slate-500 mt-1">Concept to production</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#F59E0B] mb-2">40+</div>
            <div className="text-sm font-semibold text-slate-700">Years in Business</div>
            <div className="text-xs text-slate-500 mt-1">Legacy brand, modern future</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#F59E0B] mb-2">5</div>
            <div className="text-sm font-semibold text-slate-700">Key Meetings</div>
            <div className="text-xs text-slate-500 mt-1">On-site &amp; remote</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#F59E0B] mb-2">100%</div>
            <div className="text-sm font-semibold text-slate-700">CEO Vision Realized</div>
            <div className="text-xs text-slate-500 mt-1">AI-era brand identity</div>
          </div>
        </div>
      </div>
    </section>

    {/* The Challenge */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">The Challenge: A 40-Year Brand Stuck in a Legacy Web Era</h2>
        <p className="text-lg text-slate-700 mb-6">
          CorGroup Construction &amp; Engineering has been a cornerstone of Indianapolis' built environment for over four decades. From underground civil infrastructure for Citizens Energy Group to joint ventures with AECOM Hunt at the Indianapolis International Airport, the firm's portfolio speaks for itself — but their digital presence did not.
        </p>
        <p className="text-lg text-slate-700 mb-8">
          The existing website was hosted on Wix, cluttered with outdated copy, and failed to convey the sophistication, certifications, and breadth of services that CorGroup brings to every engagement. In a marketplace where even heavy construction firms are expected to project digital credibility, the gap between CorGroup's real-world reputation and their online presence had become a liability.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-amber-50 rounded-2xl border-2 border-amber-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Outdated Digital Identity</h3>
            <p className="text-slate-600 text-sm">Legacy Wix site no longer reflected 40+ years of proven project delivery, MBE certification, and multi-state licensure</p>
          </div>
          <div className="p-6 bg-amber-50 rounded-2xl border-2 border-amber-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">No AI-Era Positioning</h3>
            <p className="text-slate-600 text-sm">The CEO recognized every industry — including construction — now requires an AI-forward narrative to attract partners, clients, and talent</p>
          </div>
          <div className="p-6 bg-amber-50 rounded-2xl border-2 border-amber-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Speed-to-Market Pressure</h3>
            <p className="text-slate-600 text-sm">Active bids, partnerships, and business development created urgency for a credible presence in weeks — not months</p>
          </div>
        </div>
      </div>
    </section>

    {/* The Partnership Evolution */}
    <section className="py-16 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">From DC Partners to Full-Service Technology Supplier</h2>
        <p className="text-lg text-slate-700 mb-6">
          The DET–CorGroup relationship didn't begin with a web project — it began with a shared commitment to excellence in the Washington, D.C. marketplace. The two firms first collaborated as construction partners on federal and commercial projects in the DMV area, building a working relationship grounded in trust, execution, and mutual respect.
        </p>
        <p className="text-lg text-slate-700 mb-8">
          That partnership evolved dramatically. As CorGroup expanded its Indianapolis operations, DET transitioned from a project partner into a strategic technology supplier — providing IT Managed Services, Network Services, application development hosting, and ultimately web development. The relationship is a textbook example of how a technology partner can grow alongside a client's ambitions.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl border-2 border-amber-200 shadow-sm">
            <div className="bg-amber-100 text-amber-700 font-bold text-sm w-10 h-10 rounded-xl flex items-center justify-center mb-4">DC</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Phase 1: Construction Partners</h3>
            <p className="text-slate-600">DET and CorGroup first collaborated as construction partners on projects in the Washington, D.C. area — building a foundation of operational trust and shared delivery standards that would define the partnership for years to come.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border-2 border-amber-200 shadow-sm">
            <div className="bg-amber-100 text-amber-700 font-bold text-sm w-10 h-10 rounded-xl flex items-center justify-center mb-4">IT</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Phase 2: Managed IT Supplier</h3>
            <p className="text-slate-600">As CorGroup's Indianapolis footprint grew, DET became their go-to supplier for IT Managed Services and Network Services — ensuring uptime, security, and infrastructure reliability across field and office operations.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border-2 border-amber-200 shadow-sm">
            <div className="bg-amber-100 text-amber-700 font-bold text-sm w-10 h-10 rounded-xl flex items-center justify-center mb-4">☁</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Phase 3: App Hosting &amp; Infrastructure</h3>
            <p className="text-slate-600">DET extended its scope to include application development hosting — providing the cloud infrastructure backbone supporting CorGroup's internal systems and digital operations at scale.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border-2 border-amber-200 shadow-sm">
            <div className="bg-amber-100 text-amber-700 font-bold text-sm w-10 h-10 rounded-xl flex items-center justify-center mb-4">🌐</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Phase 4: Web Development &amp; Deployment</h3>
            <p className="text-slate-600">The web revamp represents the latest evolution — DET taking full ownership of CorGroup's digital identity, from design and content strategy to production deployment and DNS management.</p>
          </div>
        </div>
      </div>
    </section>

    {/* The Sprint */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">The Solution: A CEO-Led Vision Sprint</h2>
        <p className="text-lg text-slate-700 mb-8">
          Rather than a drawn-out agency engagement, CorGroup's CEO chose to leverage DET's AI-accelerated development capabilities for speed without sacrificing quality. The engagement was structured as an intensive 3-week sprint — lean, focused, and CEO-directed. A handful of on-site and remote meetings were all it took to align on vision, scope, and deliverables.
        </p>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm">
            <div className="flex items-start">
              <div className="bg-amber-100 text-amber-700 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">01</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Vision Capture Sessions</h3>
                <p className="text-slate-600">DET conducted focused on-site and remote sessions directly with the CEO to extract his vision for the brand — how CorGroup should be perceived in 2026 and beyond. The CEO was direct: the site needed to project confidence, technical competency, and a forward-looking awareness that matched the firm's real-world capabilities. No fluff. No filler. Just results.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm">
            <div className="flex items-start">
              <div className="bg-amber-100 text-amber-700 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">02</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">AI-Accelerated Development</h3>
                <p className="text-slate-600">DET leveraged AI-assisted development tooling to dramatically compress the build timeline. What would traditionally take 8–12 weeks with a conventional agency was delivered in 3 weeks — without cutting corners on design quality, mobile responsiveness, or content depth. The CEO recognized early that DET's AI capabilities were the lever that made this timeline possible, and he intentionally structured the engagement around that advantage.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm">
            <div className="flex items-start">
              <div className="bg-amber-100 text-amber-700 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">03</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Content &amp; Brand Modernization</h3>
                <p className="text-slate-600">DET worked through the CEO's project portfolio, certifications, client roster, and service lines to craft copy that accurately represented CorGroup's full scope — including MBE certification, DOT Unified Certification, licensed civil engineering across Illinois, Indiana, Washington D.C., and Missouri, and key client relationships including Citizens Energy Group and AECOM Hunt.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm">
            <div className="flex items-start">
              <div className="bg-amber-100 text-amber-700 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">04</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Infrastructure &amp; Go-Live</h3>
                <p className="text-slate-600">DET handled the full technical stack — from VM-hosted production deployment on cloud infrastructure to DNS management, SSL certificate provisioning via Let's Encrypt, and Caddy reverse proxy configuration. The legacy Wix site was decommissioned and corgroup.us was pointed to DET's managed infrastructure, going live with zero downtime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Impact */}
    <section className="py-16 px-8 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Project Impact</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-[#F59E0B] mb-2">3</div>
            <div className="text-lg font-semibold text-slate-700">Weeks Delivered</div>
            <p className="text-slate-500 text-sm mt-2">Concept to live production site</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#F59E0B] mb-2">0</div>
            <div className="text-lg font-semibold text-slate-700">Downtime</div>
            <p className="text-slate-500 text-sm mt-2">Seamless DNS cutover from Wix</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#F59E0B] mb-2">4x</div>
            <div className="text-lg font-semibold text-slate-700">Faster Than Traditional</div>
            <p className="text-slate-500 text-sm mt-2">AI-accelerated vs. typical agency timeline</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl border-2 border-amber-200 shadow-sm">
          <p className="text-slate-700 text-lg italic leading-relaxed mb-4">
            "DET understood exactly what we needed — not just a website, but a representation of who we are and where we're going. They captured our story, our certifications, our clients, and our work in a way that a traditional agency never could have done this quickly. The fact that they could use AI to speed up the process while keeping the quality high was exactly why we knew they were the right partner."
          </p>
          <p className="text-sm font-semibold text-slate-500">CorGroup Leadership — Indianapolis, IN &nbsp;|&nbsp; Project Completed July 2026</p>
        </div>
      </div>
    </section>

    {/* Services Delivered */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">DET Services Delivered</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="bg-amber-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Monitor className="h-5 w-5 text-amber-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Web Design &amp; Development</h3>
            <p className="text-slate-600 text-sm">Full custom site built from scratch — responsive, modern, and AI-era ready with a gallery, certifications, and client showcase</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="bg-amber-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Globe className="h-5 w-5 text-amber-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">DNS &amp; Hosting Management</h3>
            <p className="text-slate-600 text-sm">Full DNS cutover, SSL provisioning via Let's Encrypt, and VM-hosted production deployment on DET infrastructure</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="bg-amber-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Server className="h-5 w-5 text-amber-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">IT Managed Services</h3>
            <p className="text-slate-600 text-sm">Ongoing infrastructure management ensuring uptime, security, and operational continuity across CorGroup's systems</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="bg-amber-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Cpu className="h-5 w-5 text-amber-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">AI-Accelerated Development</h3>
            <p className="text-slate-600 text-sm">Leveraged DET's AI toolchain to compress a 12-week traditional project into a 3-week production sprint</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="bg-amber-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Users className="h-5 w-5 text-amber-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Network Services</h3>
            <p className="text-slate-600 text-sm">Network infrastructure supporting field operations, office connectivity, and application hosting for CorGroup's teams</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="bg-amber-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Zap className="h-5 w-5 text-amber-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Brand Strategy &amp; Content</h3>
            <p className="text-slate-600 text-sm">CEO-aligned messaging, service positioning, certification showcase, and portfolio storytelling crafted for 2026 and beyond</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const VenerationWearPage = ({ setCurrentPage }: CaseStudyPageProps) => (
  <div className="min-h-screen bg-slate-50 pt-24">
    {/* Header */}
    <section className="py-20 px-8 bg-gradient-to-br from-slate-900 via-[#312E81] to-[#6366F1]">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => setCurrentPage('CaseStudies')}
          className="flex items-center text-white/80 hover:text-white mb-8 group font-semibold"
        >
          <ChevronRight className="h-5 w-5 mr-1 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </button>
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
          <Server className="h-4 w-4 text-white mr-2" />
          <span className="text-sm font-semibold text-white">E-Commerce & Managed Hosting</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Veneration Wear: Rescuing and Re-Platforming a Live E-Commerce Business
        </h1>
        <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
          How Diverse Excellence Technology consolidated a distributed e-commerce architecture onto a modern edge-hosting platform, migrated the production database with zero downtime and zero data loss, and became the brand's ongoing development, management, and hosting partner.
        </p>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="py-12 px-8 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-[#6366F1] mb-2">0</div>
            <div className="text-sm font-semibold text-slate-700">Minutes of Downtime</div>
            <div className="text-xs text-slate-500 mt-1">During production database migration</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#6366F1] mb-2">100%</div>
            <div className="text-sm font-semibold text-slate-700">Records Verified</div>
            <div className="text-xs text-slate-500 mt-1">Every record checked against the original</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#6366F1] mb-2">4</div>
            <div className="text-sm font-semibold text-slate-700">Weeks: Discovery to Cutover</div>
            <div className="text-xs text-slate-500 mt-1">Structured, low-risk sequence</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#6366F1] mb-2">1</div>
            <div className="text-sm font-semibold text-slate-700">Accountable Platform Team</div>
            <div className="text-xs text-slate-500 mt-1">Development, management &amp; hosting under DET</div>
          </div>
        </div>
      </div>
    </section>

    {/* The Challenge */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">The Challenge: A Scaling Brand That Outgrew Its Original Architecture</h2>
        <p className="text-lg text-slate-700 mb-6">
          Veneration Wear is an established e-commerce apparel brand with a custom-built storefront processing orders around the clock — checkout, customer accounts, order management, and storefront integrations all running live, every day. Like many brands that scale quickly, its platform had grown organically: the application ran on one provider, the production database on another cloud, and integrations and credentials were spread across separate accounts.
        </p>
        <p className="text-lg text-slate-700 mb-8">
          That distributed architecture had served the brand well through its growth phase, but it created structural risk at scale: a single point of failure in the database tier, credentials that couldn't be rotated cleanly across environments, and no isolated environment for testing changes against a revenue-generating store. Leadership recognized the moment for what it was — time to consolidate the platform under one accountable engineering partner, on modern infrastructure, without disrupting a single order.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-indigo-50 rounded-2xl border-2 border-indigo-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Single Point of Failure</h3>
            <p className="text-slate-600 text-sm">The production database lived in a separate cloud account from the application — one dependency outside the platform meant one outage could take order management down</p>
          </div>
          <div className="p-6 bg-indigo-50 rounded-2xl border-2 border-indigo-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">No Isolated Staging Path</h3>
            <p className="text-slate-600 text-sm">A 24/7 revenue-generating store deserves a safe place to rehearse changes — the architecture needed a full working replica before any production work</p>
          </div>
          <div className="p-6 bg-indigo-50 rounded-2xl border-2 border-indigo-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Fragmented Access &amp; Credentials</h3>
            <p className="text-slate-600 text-sm">Integrations, environment settings, and secrets were spread across multiple provider accounts — consolidation required careful mapping before anything could move</p>
          </div>
        </div>
      </div>
    </section>

    {/* The Approach */}
    <section className="py-16 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">The Approach: Discovery First, Then a Bloodless Migration</h2>
        <p className="text-lg text-slate-700 mb-10 max-w-4xl">
          DET treated a live, revenue-generating store with the discipline it deserves: nothing moved until the full architecture was documented. The engagement ran as a four-phase sequence — each phase de-risking the next, with Veneration Wear leadership approving every step in writing.
        </p>
        <div className="space-y-6">
          <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="bg-[#6366F1] text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Discovery &amp; Findings Report</h3>
              <p className="text-slate-600">DET mapped the complete platform — application code, database tier, storefront integrations, forms, and environment configuration — verified the codebase builds cleanly, and delivered a formal Discovery Findings Report. Every architectural constraint was reproduced and confirmed with a verified fix before it went in the report. Veneration Wear received a complete blueprint of their platform and a costed, sequenced path to consolidation.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="bg-[#6366F1] text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Isolated Working Prototype</h3>
              <p className="text-slate-600">A fully working replica of the platform went up in an isolated environment with its own database — zero connection to the live store. Storefront, content pages, admin, and contact flows were proven there first. Weekly status notes gave leadership a precise, no-surprises view: what was verified, what was dark by design, and exactly what would light up each remaining feature.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="bg-[#6366F1] text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Rehearsed Zero-Downtime Migration</h3>
              <p className="text-slate-600">The production database move was rehearsed end-to-end before the real thing. The cutover window was proposed in writing, approved by leadership, and executed at dawn: completed ahead of schedule with checkout and signups never pausing, and every single record verified against the original. No application code changed — only the database address.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="bg-[#6366F1] text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">One Platform, Client-Owned, DET-Managed</h3>
              <p className="text-slate-600">Application and database now run side-by-side in Veneration Wear's own platform account, under their control, with DET holding a single named seat for engineering support. The single point of failure is gone, credential governance is clean, and DET continues under a managed retainer — maintaining the platform, resolving storefront issues, and building new features as the brand grows.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* The Platform */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">The Platform: Modern Edge Hosting, Built for What's Next</h2>
        <p className="text-lg text-slate-700 mb-10 max-w-4xl">
          DET consolidated Veneration Wear onto a modern edge-native hosting platform — the same class of infrastructure powering many of today's fastest e-commerce and AI products. It's a fundamentally different model from traditional server hosting, and it changes what a brand of this size can do.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">⚡ Global Edge Delivery</h3>
            <p className="text-slate-600 text-sm">The storefront is served from a global edge network, close to every shopper — fast page loads and resilient checkout whether traffic comes from Indianapolis or overseas, with automatic scaling for product drops and seasonal spikes.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">🔁 Preview Deployments &amp; Instant Rollback</h3>
            <p className="text-slate-600 text-sm">Every change deploys first to its own preview URL — leadership can click and approve exactly what will ship. Production releases are atomic, and any release can be rolled back in seconds. No maintenance windows, no midnight FTP.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">🗄 Serverless Data Tier, Side-by-Side</h3>
            <p className="text-slate-600 text-sm">The production database now runs as a managed serverless service inside the same platform account as the application — one bill, one access model, integrated backups, and the cross-cloud single point of failure eliminated.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">🤖 AI-Ready by Design</h3>
            <p className="text-slate-600 text-sm">The platform is a first-class home for AI workloads — serverless functions and edge runtimes that can power product recommendations, AI shopping assistants, and personalization as Veneration Wear's roadmap grows, without re-architecting a thing.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonial */}
    <section className="py-16 px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-indigo-50 p-8 rounded-2xl border-2 border-indigo-200 shadow-sm">
          <p className="text-slate-700 text-lg italic leading-relaxed mb-4">
            "This is great news! Thanks for all your help."
          </p>
          <p className="text-sm font-semibold text-slate-500">Veneration Wear leadership, on receiving word that the production migration completed with zero downtime and every record verified &nbsp;|&nbsp; September 2026</p>
        </div>
      </div>
    </section>

    {/* Services Delivered */}
    <section className="py-16 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">DET Services Delivered</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200">
            <div className="bg-indigo-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-5 w-5 text-indigo-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Platform Discovery &amp; Audit</h3>
            <p className="text-slate-600 text-sm">Complete architecture mapping — application, data tier, integrations, and credentials — delivered as a formal findings report with a costed consolidation path</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200">
            <div className="bg-indigo-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Server className="h-5 w-5 text-indigo-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Zero-Downtime Data Migration</h3>
            <p className="text-slate-600 text-sm">Rehearsed production database move with 100% record verification — checkout and signups never paused</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200">
            <div className="bg-indigo-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Lock className="h-5 w-5 text-indigo-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Ownership &amp; Access Governance</h3>
            <p className="text-slate-600 text-sm">Consolidated every asset into client-owned accounts with least-privilege DET access — clean credential governance and no single point of failure</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200">
            <div className="bg-indigo-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Monitor className="h-5 w-5 text-indigo-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">E-Commerce Development</h3>
            <p className="text-slate-600 text-sm">Ongoing storefront work — resolving legacy cart and checkout defects and building new features under the managed retainer</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200">
            <div className="bg-indigo-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Globe className="h-5 w-5 text-indigo-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Managed Edge Hosting</h3>
            <p className="text-slate-600 text-sm">Modern edge-platform hosting with preview deployments, instant rollback, environment configuration, and credential management for the live store</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200">
            <div className="bg-indigo-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="h-5 w-5 text-indigo-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Ongoing Platform Retainer</h3>
            <p className="text-slate-600 text-sm">A standing DET engagement for maintenance, incident response, and roadmap work — the brand focuses on apparel, DET runs the platform</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const PPSATPage = ({ setCurrentPage }: CaseStudyPageProps) => (
  <div className="min-h-screen bg-slate-50 pt-24">
    {/* Header */}
    <section className="py-20 px-8 bg-gradient-to-br from-slate-900 via-[#4C1D95] to-[#7C3AED]">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => setCurrentPage('CaseStudies')}
          className="flex items-center text-white/80 hover:text-white mb-8 group font-semibold"
        >
          <ChevronRight className="h-5 w-5 mr-1 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </button>
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
          <HeartPulse className="h-4 w-4 text-white mr-2" />
          <span className="text-sm font-semibold text-white">Healthcare · Enterprise IT, BI &amp; AI Assessment</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          From Enterprise Assessment to Reporting as a Service: A Multi-State Healthcare Transformation
        </h1>
        <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
          How Diverse Excellence Technology assessed the complete technology estate of a nonprofit healthcare network spanning 14 locations across North Carolina, South Carolina, Virginia, and West Virginia — and earned an ongoing analytics partnership inside one of healthcare's most demanding data environments.
        </p>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="py-12 px-8 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-[#7C3AED] mb-2">14</div>
            <div className="text-sm font-semibold text-slate-700">Locations Assessed</div>
            <div className="text-xs text-slate-500 mt-1">Across four states, seven legal entities</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#7C3AED] mb-2">63%</div>
            <div className="text-sm font-semibold text-slate-700">Staff Participation</div>
            <div className="text-xs text-slate-500 mt-1">64 of 102 staff across 8 departments</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#7C3AED] mb-2">3,800+</div>
            <div className="text-sm font-semibold text-slate-700">Survey Data Points</div>
            <div className="text-xs text-slate-500 mt-1">Quantitative + qualitative evidence base</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#7C3AED] mb-2">9</div>
            <div className="text-sm font-semibold text-slate-700">Assessment Domains</div>
            <div className="text-xs text-slate-500 mt-1">IT · security · BI · ERP · CRM · AI · HR · governance · staffing</div>
          </div>
        </div>
      </div>
    </section>

    {/* The Challenge */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">The Challenge: A Mission-Driven Network That Outgrew Its Systems</h2>
        <p className="text-lg text-slate-700 mb-6">
          A nonprofit healthcare network operating 14 locations across North Carolina, South Carolina, Virginia, and West Virginia had grown into a complex enterprise: multiple legal entities, an Epic electronic health record environment, enterprise CRM and ERP platforms, a lean IT team fielding thousands of tickets a year, and a workforce doing mission-critical work on systems that no longer talked to each other.
        </p>
        <p className="text-lg text-slate-700 mb-8">
          Leadership knew the symptoms: talented staff compensating manually for disconnected systems, reporting requests queuing behind a small analytics function, and artificial intelligence tools quietly entering the workplace faster than policy could govern them. What they needed was a single, evidence-based picture of the whole estate — and a partner who could assess a politically and operationally sensitive environment with discretion.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-violet-50 rounded-2xl border-2 border-violet-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Fragmented Estate</h3>
            <p className="text-slate-600 text-sm">Clinical, financial, donor, and HR systems operating as islands across seven legal entities — with no enterprise data strategy connecting them</p>
          </div>
          <div className="p-6 bg-violet-50 rounded-2xl border-2 border-violet-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Analytics Bottleneck</h3>
            <p className="text-slate-600 text-sm">Enterprise reporting concentrated in a handful of specialists, with demand far outpacing capacity and no governed self-service path</p>
          </div>
          <div className="p-6 bg-violet-50 rounded-2xl border-2 border-violet-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Ungoverned AI Adoption</h3>
            <p className="text-slate-600 text-sm">Staff were already adopting AI tools on their own, ahead of any policy, training, or safeguards — a compliance question that needed answers, not slogans</p>
          </div>
        </div>
      </div>
    </section>

    {/* The Approach */}
    <section className="py-16 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">The Approach: Evidence First, Across Every Layer of the Enterprise</h2>
        <p className="text-lg text-slate-700 mb-10 max-w-4xl">
          DET ran the assessment the way we run every engagement: no findings without evidence, no recommendations without owners. Over the engagement we combined structured discovery, an all-staff survey instrument, leadership interviews, and document review into a maturity-scored picture of nine technology domains.
        </p>
        <div className="space-y-6">
          <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="bg-[#7C3AED] text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise-Wide Listening</h3>
              <p className="text-slate-600">A structured survey reached 64 of 102 staff across eight departments — a 63 percent response rate producing more than 3,800 individual data points. Combined with leadership interviews across finance, people and culture, IT, clinical analytics, and development, the evidence base captured both the quantitative scores and the lived experience of the people doing the work, at every location in all four states.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="bg-[#7C3AED] text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Nine-Domain Technical Assessment</h3>
              <p className="text-slate-600">DET mapped and maturity-scored the full estate: IT operations and service delivery, security and governance posture, Epic clinical analytics, enterprise BI, ERP and financial systems, CRM, HR systems, data governance, and organizational structure. Every finding traced to a documented artifact, and every gap landed in a register with a severity, an owner, and a recommended sequence.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="bg-[#7C3AED] text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">AI Readiness, Measured Honestly</h3>
              <p className="text-slate-600">Rather than selling AI enthusiasm, DET measured AI reality: a dimension-scored readiness assessment found 38 percent of surveyed staff already using AI tools in their daily work — ahead of any governance framework. The survey also surfaced something most assessments miss: a workforce genuinely divided on AI, with sincere ethical and values-based concerns. DET's response treated both findings as first-class requirements.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="bg-[#7C3AED] text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">A Roadmap Built to Be Executed</h3>
              <p className="text-slate-600">The assessment closed with a 36-month transformation vision grounded in 30-to-60-day critical actions: an enterprise AI governance policy, a three-tier AI literacy program, analytics role restructuring to remove single points of failure, governed Power BI delivery, and a staffing roadmap with clear hiring triggers — each recommendation costed, sequenced, and assigned.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* AI Assessment Deep Dive */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">The AI Assessment: Governance Before Glamour</h2>
        <p className="text-lg text-slate-700 mb-10 max-w-4xl">
          AI readiness work is where this assessment distinguished itself. DET's position: in a regulated healthcare environment, the first AI deliverable is not a chatbot — it is a governance framework that makes every subsequent AI decision safe.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="bg-violet-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Cpu className="h-5 w-5 text-violet-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Shadow AI, Quantified</h3>
            <p className="text-slate-600 text-sm">The survey measured actual AI adoption rather than assuming it: 38 percent of staff were already using generative AI tools in their work, with no policy, approved tooling, or data-handling guardrails. DET framed this as an active governance priority with a concrete remediation path, not a reason for alarm or a sales hook.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="bg-violet-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-5 w-5 text-violet-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Policy and Protection First</h3>
            <p className="text-slate-600 text-sm">DET recommended a unified AI governance policy as a 30-day action, paired with activation of data-protection tooling the organization already licensed — classification, loss prevention, and usage monitoring — so compliant AI use became the easy path rather than the forbidden one.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="bg-violet-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Users className="h-5 w-5 text-violet-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">A Divided Workforce, Respected</h3>
            <p className="text-slate-600 text-sm">Survey voice revealed staff with sincere ethical, environmental, and mission-based reservations about AI alongside enthusiastic adopters. DET's change framework answered with human-in-the-loop design, opt-out accommodations where feasible, and a three-tier literacy program spanning all staff, managers, and power users.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="bg-violet-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="h-5 w-5 text-violet-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Sequenced, Not Hyped</h3>
            <p className="text-slate-600 text-sm">The phased AI roadmap put governance and literacy ahead of deployment, and tied every future AI initiative to measurable operational value. The result: leadership can say yes to AI with confidence, because the guardrails exist before the experiments do.</p>
          </div>
        </div>
      </div>
    </section>

    {/* The Outcome */}
    <section className="py-16 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">The Outcome: From Assessment to Ongoing Analytics Partnership</h2>
        <p className="text-lg text-slate-700 mb-6">
          The strongest endorsement of an assessment is what the client does next. On the strength of the engagement, the organization executed a master Reporting Services agreement with DET — a Reporting-as-a-Service model covering clinical analytics in the Epic environment, enterprise Power BI analytics, and data governance advisory.
        </p>
        <p className="text-lg text-slate-700 mb-10">
          DET consultants now operate inside the client's Epic analytics environment under formally executed vendor access agreements, building recurring production reports directly against the clinical data warehouse — with HIPAA, minimum-necessary access, and US-based personnel disciplines contractually embedded. Each report follows a fixed four-stage delivery structure from definition through validated handoff, and full ownership of report logic and documentation transfers to the client at delivery.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 text-center">
            <div className="text-3xl font-bold text-[#7C3AED] mb-2">Epic</div>
            <div className="text-sm font-semibold text-slate-700">Certified Analytics Access</div>
            <div className="text-xs text-slate-500 mt-1">Clarity and Caboodle data warehouse roles under executed Epic access agreements</div>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200 text-center">
            <div className="text-3xl font-bold text-[#7C3AED] mb-2">4-Stage</div>
            <div className="text-sm font-semibold text-slate-700">Delivery Discipline</div>
            <div className="text-xs text-slate-500 mt-1">Definition → build → validation → ownership handoff, per report</div>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200 text-center">
            <div className="text-3xl font-bold text-[#7C3AED] mb-2">100%</div>
            <div className="text-sm font-semibold text-slate-700">Client Ownership at Handoff</div>
            <div className="text-xs text-slate-500 mt-1">Report logic, documentation, and data dictionary transfer with every delivery</div>
          </div>
        </div>
        <div className="p-8 bg-gradient-to-br from-[#4C1D95] to-[#7C3AED] rounded-3xl text-white">
          <h3 className="text-xl font-bold mb-3">Why It Worked</h3>
          <p className="text-white/90 leading-relaxed">
            Fourteen locations, four states, seven legal entities, nine technology domains, and one of the most sensitive data environments in healthcare — assessed with evidence discipline, scored with honesty, and reported with discretion. The assessment did not end with a document on a shelf; it converted directly into an operating analytics partnership, because the client trusted both the findings and the people who delivered them. Precision, discretion, delivery.
          </p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready for an honest picture of your technology estate?</h2>
        <p className="text-lg text-slate-600 mb-8">
          From multi-state enterprise assessments to embedded analytics delivery, DET meets your organization where it is — and shows you exactly where it can go.
        </p>
        <button
          onClick={() => setCurrentPage('Contact')}
          className="bg-[#7C3AED] text-white px-10 py-4 rounded-full hover:bg-[#6D28D9] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
        >
          Start the Conversation
        </button>
      </div>
    </section>
  </div>
);
