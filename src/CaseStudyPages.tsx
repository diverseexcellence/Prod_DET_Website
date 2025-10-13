import { ChevronRight, GraduationCap, HeartPulse, CheckCircle, Shield, TrendingUp, Building2, Users, Server, Lock } from 'lucide-react';

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
    <footer className="bg-slate-900 py-6">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <p className="text-slate-400 text-sm">
          Copyright © DE Technology 2025
        </p>
      </div>
    </footer>
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
    <footer className="bg-slate-900 py-6">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <p className="text-slate-400 text-sm">
          Copyright © DE Technology 2025
        </p>
      </div>
    </footer>
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
    <footer className="bg-slate-900 py-6">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <p className="text-slate-400 text-sm">
          Copyright © DE Technology 2025
        </p>
      </div>
    </footer>
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
    <footer className="bg-slate-900 py-6">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <p className="text-slate-400 text-sm">
          Copyright © DE Technology 2025
        </p>
      </div>
    </footer>
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
    <footer className="bg-slate-900 py-6">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <p className="text-slate-400 text-sm">
          Copyright © DE Technology 2025
        </p>
      </div>
    </footer>
  </div>
);
