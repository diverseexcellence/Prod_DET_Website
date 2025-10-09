import { ChevronRight, GraduationCap, HeartPulse, CheckCircle, Shield, TrendingUp } from 'lucide-react';

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
