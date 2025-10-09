import React, { useState, useEffect } from 'react';
import { CAREElementaryPage, HHCHealthcarePage } from './CaseStudyPages';
import DETLogo from './assets/DETlogoV3.png';
import ArionnePhoto from './assets/ArionnePhotoEdited.png';
import KevinPhoto from './assets/KevinPhotoEdited.png';
import JohnathanPhoto from './assets/JohnathanPhotoEdited.png';
import BernardoPhoto from './assets/BernardoPhotoEdited.png';
import SandipPhoto from './assets/SandipPhotoedited.png';
import JillPhoto from './assets/JillPhotoEdited.png';
import MichaelPhoto from './assets/MichaelGreyPhoto.png';
import LouisPhoto from './assets/LouisColemanPhoto.png';
import BrandonPhoto from './assets/BrandonTramelPhoto.png';
import GemarPhoto from './assets/GemarBoothePhotoEdited.png';
import ClayPhoto from './assets/ClayHamptonPhotoEdited.png';
import BackgroundVideo from './assets/V6.mp4';
import {
  Menu,
  X,
  ChevronRight,
  Brain,
  Monitor,
  Zap,
  Shield,
  CheckCircle,
  Users,
  Target,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  Send,
  Heart,
  Award,
  Globe,
  Building,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Workflow,
  Database,
  BarChart3,
  Landmark,
  GraduationCap,
  HeartPulse
} from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigationItems = [
    { name: 'Home', id: 'Home', icon: Sparkles },
    { name: 'Services', id: 'Services', icon: Target },
    { name: 'Case Studies', id: 'CaseStudies', icon: Award },
    { name: 'About', id: 'About', icon: Users },
    { name: 'Contact', id: 'Contact', icon: Send }
  ];

  const TopNav = () => (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo -- Now Clickable */}
            <div 
              onClick={() => setCurrentPage('Home')} 
              className="flex items-center cursor-pointer"
            >
              <img src={DETLogo} alt="DET Logo" className="h-10 w-auto mr-3" />
              <div>
                <div className="text-xl font-bold text-slate-900">
                  DE<span className="text-[#3B82F6]">T</span>
                </div>
                <div className="text-xs text-slate-500 font-medium">Technology</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`relative px-2 py-2 font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-[#3B82F6]'
                      : 'text-slate-700 hover:text-[#3B82F6]'
                  }`}
                >
                  {item.name}
                  {currentPage === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#6366F1]"></div>
                  )}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage('Contact')}
                className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white px-6 py-2 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 font-semibold"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden p-2"
            >
              {isSidebarOpen ? <X className="h-6 w-6 text-slate-900" /> : <Menu className="h-6 w-6 text-slate-900" />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isSidebarOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white shadow-lg'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setCurrentPage('Contact');
                  setIsSidebarOpen(false);
                }}
                className="w-full bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white px-4 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 font-semibold"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 mt-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section with Video Background */}
      {/* FIX 1: Changed h-screen to min-h-screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={BackgroundVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-blue-900/70"></div>
        </div>

        {/* Hero Content */}
        {/* FIX 2: Adjusted padding for mobile and to account for the nav bar */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-blue-400 mr-2" />
            <span className="text-sm font-semibold text-white">Digital Excellence Since 2017</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Partner for
            <span className="block bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#06B6D4] bg-clip-text text-transparent pb-2 lg:pb-4">
              Digital Growth
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            We enhance your capabilities with cutting-edge AI, data analytics, and managed IT services—complementing your team without disruption.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button
              onClick={() => setCurrentPage('Services')}
              className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 font-semibold flex items-center group"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setCurrentPage('Contact')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 font-semibold"
            >
              Get in Touch
            </button>
          </div>

          {/* Stats on Hero */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">100%</div>
              <div className="text-white/90 mt-2">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">50+</div>
              <div className="text-white/90 mt-2">Projects Delivered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] bg-clip-text text-transparent">15+</div>
              <div className="text-white/90 mt-2">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4">
              <Target className="h-4 w-4 text-[#3B82F6] mr-2" />
              <span className="text-sm font-semibold text-blue-700">What We Offer</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Service Offerings</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to complement your existing capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI & Data Analytics',
                desc: 'Transform your data into actionable insights with comprehensive AI and analytics solutions',
                color: 'from-[#3B82F6] to-[#6366F1]',
                bgColor: 'bg-blue-50',
                borderColor: 'border-blue-200'
              },
              {
                icon: Monitor,
                title: 'Managed IT Services',
                desc: 'Comprehensive IT support with tiered help desk and proactive infrastructure management',
                color: 'from-[#6366F1] to-[#8B5CF6]',
                bgColor: 'bg-indigo-50',
                borderColor: 'border-indigo-200'
              },
              {
                icon: Zap,
                title: 'Strategic Change Management',
                desc: 'Driving project success and ensuring seamless adoption with certified expertise in both project and change management.',
                color: 'from-[#0EA5E9] to-[#06B6D4]',
                bgColor: 'bg-sky-50',
                borderColor: 'border-sky-200'
              }
            ].map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`relative p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer ${
                  hoveredService === index
                    ? 'bg-gradient-to-br from-white to-slate-50 border-[#3B82F6] shadow-2xl shadow-blue-500/20 -translate-y-2'
                    : `${service.bgColor} ${service.borderColor}`
                }`}
              >
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 transition-transform duration-300 ${
                  hoveredService === index ? 'scale-110' : ''
                }`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <button
                  onClick={() => setCurrentPage('Services')}
                  className="text-[#3B82F6] font-semibold hover:text-[#2563EB] flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-20 px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] rounded-3xl p-12 shadow-2xl shadow-blue-500/30">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <Heart className="h-4 w-4 text-white mr-2" />
                  <span className="text-sm font-semibold text-white">Our Philosophy</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">We Enhance, Not Replace</h2>
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  Partnership, not displacement. We complement and strengthen your existing team and vendor relationships, never disrupting them.
                </p>
                <p className="text-white/80 mb-8">
                  Our collaborative approach integrates seamlessly with your organization, building internal capabilities that last beyond our engagement.
                </p>
                <button
                  onClick={() => setCurrentPage('About')}
                  className="bg-white text-[#3B82F6] px-8 py-3 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold flex items-center group"
                >
                  Learn About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Partnership"
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  
                  {/* FIX: The grid is now responsive. It will be 1 column on mobile and 3 columns on larger screens. */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { value: '100%', label: 'Satisfaction' },
                      { value: '50+', label: 'Projects' },
                      { value: '15+', label: 'Years Exp' }
                    ].map((stat, i) => (
                      <div key={i} className="text-center p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/20">
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-white/80 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4">
              <Globe className="h-4 w-4 text-[#3B82F6] mr-2" />
              <span className="text-sm font-semibold text-blue-700">Our Reach</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-slate-600">Trusted across diverse sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' },
              { name: 'Government', icon: Building, color: 'from-[#3B82F6] to-[#6366F1]' },
              { name: 'Non-Profit', icon: Users, color: 'from-[#8B5CF6] to-[#A78BFA]' },
              { name: 'Education', icon: Award, color: 'from-amber-500 to-orange-500' },
              { name: 'Technology', icon: Globe, color: 'from-[#0EA5E9] to-[#06B6D4]' }
            ].map(({ name, icon: Icon, color }) => (
              <div key={name} className="group text-center">
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 group-hover:text-[#3B82F6] transition-colors">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="h-16 w-16 text-[#60A5FA] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how we can enhance your capabilities and drive results.
          </p>
          <button
            onClick={() => setCurrentPage('Contact')}
            className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white px-10 py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 font-semibold text-lg inline-flex items-center group"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );

  const ServicesPage = () => (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Header */}
      <section className="py-20 px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6">
            <Target className="h-4 w-4 text-[#3B82F6] mr-2" />
            <span className="text-sm font-semibold text-blue-700">What We Do</span>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Core Service Offerings</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to complement your existing capabilities
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* AI, Data & Application Modernization */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">AI, Data Analytics & Digital Modernization</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Transform your organization with comprehensive data solutions and AI-powered insights
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Digital Transformation', icon: Workflow, desc: 'A successful digital transformation starts with a clear vision. We partner with you to conduct a thorough Assessment of your capabilities and define a strategic Roadmap aligned with your core business outcomes. This data-driven plan then guides every step, from modernizing legacy systems to enhancing customer experiences, ensuring your transformation is not just implemented, but delivers measurable and sustainable growth.' },
                { title: 'Data Governance', icon: Shield, desc: 'Establish a foundation of trust and security for your data assets with our comprehensive governance frameworks. We implement robust policies and controls for data quality, access, and compliance, ensuring your information is both reliable and protected across its entire lifecycle.' },
                { title: 'Data Management', icon: Database, desc: 'Build a reliable and scalable data foundation to power your entire organization. Our data management services focus on creating a single source of truth—from designing robust data pipelines and implementing unified Data Lakehouse platforms to ensuring your data is secure, accessible, and always ready for analysis. We manage the complexity so you can focus on the insights.' },
                { title: 'Data Analytics', icon: BarChart3, desc: 'Go beyond raw data and discover the stories it can tell. Our advanced data analytics services transform complex datasets into clear, actionable insights. We create powerful visualizations and business intelligence dashboards that empower your team to track performance, identify trends, and make strategic, data-driven decisions with confidence.' },
                { title: 'AI Solutions', icon: Brain, desc: 'Unlock the full potential of your data with our end-to-end AI services. We go beyond basic analytics to develop and deploy custom machine learning models, including state-of-the-art Large Language Models (LLMs), and ensure their reliability in production through robust MLOps practices. This approach drives intelligent automation, generates predictive insights, and empowers your team to make smarter, faster decisions.' },
                { title: 'Public Sector Solutions', icon: Landmark, desc: 'Our Public Sector solutions are designed to deliver one thing: measurable, positive Outcomes for the communities you serve. We achieve this with a disciplined approach that begins with strong Governance to ensure all solutions are secure, compliant, and built on a foundation of public trust. Crucially, we empower your staff through comprehensive change management, ensuring new solutions are fully adopted to realize their maximum benefit.' },
              ].map((item, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-3xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#3B82F6] to-[#6366F1] w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#3B82F6] transition-colors duration-300">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Managed IT Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-500/30">
                <Monitor className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Managed IT Services</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive IT support with tiered help desk services and proactive infrastructure management
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-indigo-50 p-8 rounded-3xl border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Tiered Help Desk Support</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#6366F1] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Level 1: Basic Support</div>
                      <div className="text-slate-600 text-sm">Password resets, software installations, basic troubleshooting</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#6366F1] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Level 2: Technical Support</div>
                      <div className="text-slate-600 text-sm">Hardware diagnostics, network issues, application problems</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#6366F1] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Level 3: Expert Support</div>
                      <div className="text-slate-600 text-sm">Complex system issues, custom development, architecture</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-sky-50 p-8 rounded-3xl border-2 border-sky-200 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Proactive Infrastructure Management</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-[#0EA5E9] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">24/7 Monitoring</div>
                      <div className="text-slate-600 text-sm">Continuous system health monitoring and alerting</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-[#0EA5E9] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Preventive Maintenance</div>
                      <div className="text-slate-600 text-sm">Regular updates, patches, and system optimization</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-[#0EA5E9] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Security Management</div>
                      <div className="text-slate-600 text-sm">Threat detection, vulnerability assessments, compliance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project-Based Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-sky-500/30">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Project-Based Services</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Strategic planning and execution for digital transformation initiatives
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-8 bg-blue-50 rounded-3xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <Lightbulb className="h-12 w-12 text-[#3B82F6] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">Strategic Planning</h3>
                <p className="text-slate-600 text-sm">
                  Comprehensive technology roadmap development and strategic guidance for digital initiatives.
                </p>
              </div>

              <div className="text-center p-8 bg-sky-50 rounded-3xl border-2 border-sky-200 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-300">
                <Zap className="h-12 w-12 text-[#0EA5E9] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">Infrastructure Upgrades</h3>
                <p className="text-slate-600 text-sm">
                  Modernization of legacy systems and infrastructure to support current and future needs.
                </p>
              </div>

              <div className="text-center p-8 bg-indigo-50 rounded-3xl border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
                <Users className="h-12 w-12 text-[#6366F1] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">Digital Transformation</h3>
                <p className="text-slate-600 text-sm">
                  End-to-end transformation consulting with change management and training support.
                </p>
              </div>
            </div>
          </div>

          {/* Certified Project & Change Management */}
          <div>
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/30">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Certified Project & Change Management</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                PMP and Prosci certified expertise ensuring successful project delivery and organizational adoption
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-3xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-[#3B82F6] mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">PMP Certified Project Management</h3>
                </div>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li>• Structured project planning and execution</li>
                  <li>• Risk management and mitigation strategies</li>
                  <li>• Stakeholder communication and reporting</li>
                  <li>• Quality assurance and control processes</li>
                  <li>• Resource optimization and budget management</li>
                </ul>
              </div>

              <div className="bg-sky-50 p-8 rounded-3xl border-2 border-sky-200 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-[#0EA5E9] mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">Prosci Change Management</h3>
                </div>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li>• ADKAR methodology implementation</li>
                  <li>• Change impact assessment and planning</li>
                  <li>• Training and communication strategies</li>
                  <li>• Resistance management and coaching</li>
                  <li>• Sustainability and reinforcement planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

const AboutPage = () => (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Header */}
      <section className="py-20 px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6">
            <Users className="h-4 w-4 text-[#3B82F6] mr-2" />
            <span className="text-sm font-semibold text-blue-700">Our Story</span>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">About DE Technology</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A woman-owned, merit-based professional services firm built on partnership and excellence
          </p>
        </div>
      </section>
      
      {/* Who We Are */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                DE Technology architects transformative data solutions and AI-powered insights through a model of integrated partnership.
              </p>
              <p className="text-slate-600 mb-6">
                As a woman-owned, merit-based firm, our philosophy is to amplify your team's existing strengths. 
              </p>
              <p className="text-slate-600 mb-8">
                We seamlessly enhance your current capabilities to deliver measurable outcomes, ensuring that our solutions build lasting value and empower your organization from within.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-2xl border border-blue-200">
                  <div className="text-3xl font-bold text-[#3B82F6]">2017</div>
                  <div className="text-xs text-slate-600 mt-1">Founded</div>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-2xl border border-indigo-200">
                  <div className="text-3xl font-bold text-[#6366F1]">50+</div>
                  <div className="text-xs text-slate-600 mt-1">Projects</div>
                </div>
                <div className="text-center p-4 bg-sky-50 rounded-2xl border border-sky-200">
                  <div className="text-3xl font-bold text-[#0EA5E9]">100%</div>
                  <div className="text-xs text-slate-600 mt-1">Woman-Owned</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-4 rounded-3xl shadow-2xl border-2 border-slate-200">
                <img
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4">
              <Award className="h-4 w-4 text-[#3B82F6] mr-2" />
              <span className="text-sm font-semibold text-blue-700">Meet Our Leadership Team</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-slate-200 hover:border-[#3B82F6] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 text-center">
              {/* CHANGED HERE: w-24 h-24 is now w-32 h-32 */}
              <div className="w-32 h-32 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/50">
                <img
                  src={ArionnePhoto}
                  alt="Arionne Allen"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Arionne Allen</h3>
              <p className="text-[#3B82F6] font-semibold mb-4 text-sm">Chief Executive Officer</p>
              <p className="text-slate-600 mb-6 text-sm">
                Visionary leader driving strategic growth and innovation with a focus on delivering exceptional client value.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-slate-200 hover:border-[#3B82F6] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 text-center">
              {/* CHANGED HERE: w-24 h-24 is now w-32 h-32 */}
              <div className="w-32 h-32 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/50">
                <img
                  src={KevinPhoto}
                  alt="Kevin Mullin"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Kevin Mullin</h3>
              <p className="text-[#3B82F6] font-semibold mb-4 text-sm">President</p>
              <p className="text-slate-600 mb-6 text-sm">
                Operations leader focused on scalable service delivery and client success with extensive experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-slate-200 hover:border-[#3B82F6] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 text-center">
              {/* CHANGED HERE: w-24 h-24 is now w-32 h-32 */}
              <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/50">
                <img
                  src={JohnathanPhoto}
                  alt="Johnathan Wynn"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Johnathan Wynn</h3>
              <p className="text-[#3B82F6] font-semibold mb-4 text-sm">VP of Business Development</p>
              <p className="text-slate-600 mb-6 text-sm">
                Strategic business development executive specializing in client relationships and market expansion.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-slate-200 hover:border-[#3B82F6] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 text-center">
              {/* CHANGED HERE: w-24 h-24 is now w-32 h-32 */}
              <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/50">
                <img
                  src={BernardoPhoto}
                  alt="Bernardo Unzueta"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Bernardo Unzueta</h3>
              <p className="text-[#3B82F6] font-semibold mb-4 text-sm">Chief Technology Officer</p>
              <p className="text-slate-600 mb-6 text-sm">
                With over 25 years of experience, specializes in architecting data-driven enterprise solutions and steering digital transformations on modern, secure cloud platforms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-slate-200 hover:border-[#3B82F6] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 text-center">
              {/* CHANGED HERE: w-24 h-24 is now w-32 h-32 */}
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/50">
                <img
                  src={GemarPhoto}
                  alt="Gemar Boothe"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Gemar Boothe</h3>
              <p className="text-[#3B82F6] font-semibold mb-4 text-sm">Chief Financial Officer</p>
              <p className="text-slate-600 mb-6 text-sm">
                Experienced financial executive overseeing fiscal operations, compliance, and strategic resource management.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4">
              <Award className="h-4 w-4 text-[#3B82F6] mr-2" />
              <span className="text-sm font-semibold text-blue-700">Meet Our Team</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1: Sandip Biswas */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
              {/* CHANGED HERE: w-24 h-24 is now w-32 h-32 */}
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-black-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/50">
                <img
                  src={SandipPhoto}
                  alt="Sandip Biswas"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Sandip Biswas, Ph.D.</h3>
              <p className="text-[#3B82F6] font-semibold mb-4 text-sm">Senior AI Solutions Architect</p>
              <p className="text-slate-600 mb-6 text-sm">
                A leading AI researcher and practitioner, specializing in translating cutting-edge ML & GenAI research into scalable, production-grade intelligent systems that solve complex business challenges.
              </p>
            </div>

            {/* Card 2: Jill Crehan */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
              {/* CHANGED HERE: w-24 h-24 is now w-32 h-32 */}
              <div className="w-32 h-32 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/50">
                <img
                  src={JillPhoto}
                  alt="Jill Crehan"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Jill Crehan</h3>
              <p className="text-[#3B82F6] font-semibold mb-4 text-sm">Enterprise Change Manager</p>
              <p className="text-slate-600 mb-6 text-sm">
                A Prosci-certified change management expert specializing in ensuring the seamless adoption of new technologies. She excels at bridging the gap between complex solutions and the people who use them.
              </p>
            </div>

             {/* Card 3: Clay Hampton */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
              {/* CHANGED HERE: w-24 h-24 is now w-32 h-32 */}
              <div className="w-32 h-32 bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-sky-500/50">
                <img
                  src={ClayPhoto}
                  alt="Clay Hampton"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Clay Hampton</h3>
              <p className="text-[#3B82F6] font-semibold mb-4 text-sm">Cyber Security Practice Lead</p>
              <p className="text-slate-600 mb-6 text-sm">
                Architects strategic security blueprints, blending technology and policy to build resilient defenses for our clients' digital future.
              </p>
            </div>

            {/* Card 4: Michael Grey */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
              {/* CHANGED HERE: w-24 h-24 is now w-32 h-32 */}
              <div className="w-32 h-32 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/50">
                <img
                  src={MichaelPhoto}
                  alt="Michael Grey"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Michael Grey</h3>
              <p className="text-[#3B82F6] font-semibold mb-4 text-sm">Senior Program Manager</p>
              <p className="text-slate-600 mb-6 text-sm">
                A strategic program leader who transforms complex business objectives into tangible results by expertly guiding cross-functional teams through large-scale change initiatives.
              </p>
            </div>

            {/* Card 5: Louis Coleman */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
              {/* CHANGED HERE: w-24 h-24 is now w-32 h-32 */}
              <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/50">
                <img
                  src={LouisPhoto}
                  alt="Louis Coleman"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Louis Coleman</h3>
              <p className="text-[#3B82F6] font-semibold mb-4 text-sm">UI/UX Designer, Data Visualization</p>
              <p className="text-slate-600 mb-6 text-sm">
                A passionate advocate for the user who specializes in making complex information simple and accessible. Bridging the gap between information and the people who use it, ensuring a seamless and frustration-free experience.
              </p>
            </div>

             {/* Card 6: Brandon Tramel */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
              {/* CHANGED HERE: w-24 h-24 is now w-32 h-32 */}
              <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/50">
                <img
                  src={BrandonPhoto}
                  alt="Brandon Tramel"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Brandon Tramel</h3>
              <p className="text-[#3B82F6] font-semibold mb-4 text-sm">Senior Software Developer</p>
              <p className="text-slate-600 mb-6 text-sm">
                A seasoned software developer dedicated to solving client challenges by engineering elegant and efficient solutions. He specializes in bringing data-intensive applications to life, ensuring they are scalable, secure, and production-ready.
              </p>
            </div>

            {/* Card 7: Nelli Benson - Now with Initials */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
              {/* The circular div that used to hold the image now holds the initials */}
              <div className="w-32 h-32 bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-sky-500/50">
                <span className="text-5xl font-bold text-white tracking-wider">NB</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Nelli Benson</h3>
              <p className="text-[#3B82F6] font-semibold mb-4 text-sm">Senior Recruiter</p>
              <p className="text-slate-600 mb-6 text-sm">
                Strategic leader in talent acquisition, focused on discovering and attracting top-tier professionals to fuel our growth.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* Our Collaborative Approach */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4">
              <Heart className="h-4 w-4 text-[#3B82F6] mr-2" />
              <span className="text-sm font-semibold text-blue-700">How We Work</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Approach</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful outcomes and lasting partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-3xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#3B82F6] to-[#6366F1] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Flexible Engagement</h3>
              <p className="text-slate-600 text-sm">
                We adapt to your existing processes and team dynamics, providing the right level of support where and when you need it most.
              </p>
            </div>

            <div className="text-center p-8 bg-indigo-50 rounded-3xl border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/30">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Dedicated Partnership</h3>
              <p className="text-slate-600 text-sm">
                We become an extension of your team, working closely with your staff to ensure knowledge transfer and sustainable success.
              </p>
            </div>

            <div className="text-center p-8 bg-sky-50 rounded-3xl border-2 border-sky-200 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-sky-500/30">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Scalable Support</h3>
              <p className="text-slate-600 text-sm">
                Our services scale with your needs, from strategic consulting to hands-on implementation and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20 px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4">
              <Globe className="h-4 w-4 text-[#3B82F6] mr-2" />
              <span className="text-sm font-semibold text-blue-700">Partnerships</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Strategic Partners</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Collaborating with industry leaders to deliver world-class solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {/* Google Cloud */}
            <div className="flex items-center justify-center p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <img
                src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
                alt="Google"
                className="h-8 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Microsoft */}
            <div className="flex items-center justify-center p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                alt="Microsoft"
                className="h-8 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* AWS */}
            <div className="flex items-center justify-center p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                alt="AWS"
                className="h-8 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Snowflake */}
            <div className="flex items-center justify-center p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg"
                alt="Snowflake"
                className="h-8 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Oracle */}
            <div className="flex items-center justify-center p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
                alt="Oracle"
                className="h-8 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      company: '',
      email: '',
      service: '',
      message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Handle form submission here
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const naicsCodes = [
      "541511 - Custom Computer Programming Services",
      "541512 - Computer Systems Design Services",
      "541513 - Computer Facilities Management Services",
      "541519 - Other Computer Related Services",
      "541611 - Administrative Management and General Management Consulting Services",
      "541612 - Human Resources Consulting Services",
      "541613 - Marketing Consulting Services",
      "541618 - Other Management Consulting Services",
      "541690 - Other Scientific and Technical Consulting Services",
      "561110 - Office Administrative Services",
      "611420 - Computer Training"
    ];

    return (
      <div className="min-h-screen bg-slate-50 pt-24">
        {/* Header */}
        <section className="py-20 px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6">
              <Send className="h-4 w-4 text-[#3B82F6] mr-2" />
              <span className="text-sm font-semibold text-blue-700">Get In Touch</span>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Let's Connect</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to enhance your organization's capabilities? We're here to help you succeed.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Get Started Today</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-300 bg-white text-slate-900 rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-slate-300 bg-white text-slate-900 rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-300 bg-white text-slate-900 rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-slate-300 bg-white text-slate-900 rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-data">AI, Data Analytics & Digital Modernization</option>
                      <option value="managed-it">Managed IT Services</option>
                      <option value="project-based">Project-Based Services</option>
                      <option value="change-management">Project & Change Management</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-slate-300 bg-white text-slate-900 rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors duration-200 resize-none"
                      placeholder="Tell us about your project and how we can help..."
                      style={{ resize: 'none' }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 font-semibold text-lg flex items-center justify-center group"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>

                <div className="bg-blue-50 p-8 rounded-3xl mb-8 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Primary Contact</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-[#3B82F6] mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900">Johnathan Wynn</div>
                        <div className="text-slate-600">(317) 909-0707</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-[#3B82F6] mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <div className="text-slate-600">jwynn@diverseexcellence.com</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-[#3B82F6] mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <div className="text-slate-600">Indianapolis, Indiana</div>
                        <div className="text-sm text-slate-500">Headquarters</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 p-8 rounded-3xl border-2 border-indigo-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Response Time</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#6366F1] mr-3" />
                      <span className="text-slate-600">Initial response within 24 hours</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#6366F1] mr-3" />
                      <span className="text-slate-600">Proposal delivery within 5 business days</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#6366F1] mr-3" />
                      <span className="text-slate-600">Free consultation available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NAICS Codes */}
        <section className="py-20 px-8 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4">
                <Award className="h-4 w-4 text-[#3B82F6] mr-2" />
                <span className="text-sm font-semibold text-blue-700">Certifications</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">NAICS Codes</h2>
              <p className="text-lg text-slate-600">
                Our certified capabilities across multiple service classifications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {naicsCodes.map((code, index) => (
                <div key={index} className="bg-white p-4 rounded-2xl shadow-sm border-2 border-slate-200 hover:border-[#3B82F6] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="text-sm font-mono text-[#3B82F6] mb-1 font-semibold">
                    {code.split(' - ')[0]}
                  </div>
                  <div className="text-sm text-slate-600">
                    {code.split(' - ')[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };

  const CaseStudiesPage = () => (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Header */}
      <section className="py-20 px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6">
            <Award className="h-4 w-4 text-[#3B82F6] mr-2" />
            <span className="text-sm font-semibold text-blue-700">Client Success Stories</span>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Case Studies</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real results from strategic partnerships driving digital transformation and operational excellence
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">

            {/* CARE Elementary Case Study */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200 hover:border-[#EF4444] hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-56 bg-gradient-to-br from-[#EF4444] to-[#DC2626] flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                <div className="text-white text-center relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <GraduationCap className="h-10 w-10" />
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
                    <span className="text-xs font-bold tracking-wider">EDUCATION</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  Empowering CARE Elementary's Digital Future
                </h2>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Comprehensive E-rate Category 1 and 2 services transforming connectivity and network infrastructure for Miami elementary school
                </p>
                <button
                  onClick={() => setCurrentPage('CAREElementary')}
                  className="flex items-center text-[#EF4444] hover:text-[#DC2626] font-semibold group text-sm"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* HHC Healthcare Case Study */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200 hover:border-[#14B8A6] hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-56 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                <div className="text-white text-center relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <HeartPulse className="h-10 w-10" />
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
                    <span className="text-xs font-bold tracking-wider">HEALTHCARE</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  Transforming Healthcare IT: HHC Success Story
                </h2>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Expert SAP integration modernizing operations for a 5,500-employee healthcare system with complex ERP and EHR requirements
                </p>
                <button
                  onClick={() => setCurrentPage('HHCHealthcare')}
                  className="flex items-center text-[#14B8A6] hover:text-[#0D9488] font-semibold group text-sm"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Philbrook Museum Case Study */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200 hover:border-[#3B82F6] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-56 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                <div className="text-white text-center relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Building className="h-10 w-10" />
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
                    <span className="text-xs font-bold tracking-wider">ARTS & CULTURE</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  Technology Assessment & Strategic Roadmap
                </h2>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Philbrook Museum transformed its fragmented technology environment into a structured, forward-looking technology strategy
                </p>
                <button
                  onClick={() => setCurrentPage('Philbrook')}
                  className="flex items-center text-[#3B82F6] hover:text-[#2563EB] font-semibold group text-sm"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Newfields Case Study */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200 hover:border-[#10B981] hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-56 bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                <div className="text-white text-center relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Globe className="h-10 w-10" />
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
                    <span className="text-xs font-bold tracking-wider">ARTS & CULTURE</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  Strategic Technology Planning & Infrastructure Modernization
                </h2>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Multi-phase initiative delivering critical infrastructure upgrades and comprehensive strategic planning
                </p>
                <button
                  onClick={() => setCurrentPage('Newfields')}
                  className="flex items-center text-[#10B981] hover:text-[#059669] font-semibold group text-sm"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* JR Automation Case Study */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200 hover:border-[#F59E0B] hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-56 bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                <div className="text-white text-center relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Zap className="h-10 w-10" />
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
                    <span className="text-xs font-bold tracking-wider">MANUFACTURING</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  Guiding Global Software Strategy
                </h2>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Strategic ERP evaluation achieving $4M-$5M in cost savings while maintaining corporate compliance
                </p>
                <button
                  onClick={() => setCurrentPage('JRAutomation')}
                  className="flex items-center text-[#F59E0B] hover:text-[#D97706] font-semibold group text-sm"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how we can help you achieve similar results and drive measurable impact.
          </p>
          <button
            onClick={() => setCurrentPage('Contact')}
            className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white px-10 py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 font-semibold text-lg inline-flex items-center group"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );

  const PhilbrookPage = () => (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Header */}
      <section className="py-20 px-8 bg-gradient-to-br from-[#1E40AF] via-[#1E3A8A] to-[#1E293B]">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setCurrentPage('CaseStudies')}
            className="flex items-center text-white/80 hover:text-white mb-8 group font-semibold"
          >
            <ChevronRight className="h-5 w-5 mr-1 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </button>
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
            <Building className="h-4 w-4 text-white mr-2" />
            <span className="text-sm font-semibold text-white">Arts & Culture</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Philbrook Museum - Technology Assessment & Strategic Roadmap
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Philbrook Museum of Art, a renowned cultural institution, has long delivered world-class exhibitions, educational programs, and community experiences. However, after more than a decade without significant IT investment, Philbrook's technology environment had become fragmented, outdated, and increasingly difficult to manage.
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">The Challenge</h2>
          <p className="text-lg text-slate-700 mb-8">
            Philbrook needed a holistic IT strategy, not just hardware replacement, to create a secure, scalable, and cost-predictable technology foundation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Aging Infrastructure</h3>
              <p className="text-slate-600 text-sm">Many core systems, servers, and network devices were beyond end-of-life, creating security and reliability risks.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Fragmented Systems</h3>
              <p className="text-slate-600 text-sm">Disparate tools and processes led to inefficiency, manual work, and inconsistent user experiences across departments.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Reactive IT Support</h3>
              <p className="text-slate-600 text-sm">The IT function was primarily focused on firefighting rather than planning or enabling long-term improvements.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Staff Frustrations</h3>
              <p className="text-slate-600 text-sm">Employee feedback revealed pain points ranging from slow remote access to lack of intranet resources and limited Wi-Fi coverage.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Cybersecurity Gaps</h3>
              <p className="text-slate-600 text-sm">The absence of formal policies, asset management processes, and proactive monitoring left the organization exposed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">DET's Comprehensive Approach</h2>
          <p className="text-lg text-slate-700 mb-8">
            DET partnered with Philbrook leadership and staff to perform a multi-phase assessment:
          </p>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Employee & Department Interviews</h3>
                  <p className="text-slate-600">Gathered insights on pain points, workflows, and long-term technology expectations. Identified gaps in collaboration, ticketing, and fundraising processes.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Comprehensive Asset & Systems Review</h3>
                  <p className="text-slate-600">Inventoried 22 servers, 111 desktops/laptops, 31 access points, and other network devices. Found major inconsistencies in records, outdated configurations, and unsupported software.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  03
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Security & Compliance Assessment</h3>
                  <p className="text-slate-600">Highlighted the urgent need for a formal Information Security Policy (ISP), stronger governance, and endpoint detection/response capabilities.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  04
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Strategic Roadmap Development</h3>
                  <p className="text-slate-600">Built a multi-year roadmap prioritizing critical fixes (server updates, network upgrades, IT policies), followed by value-add initiatives (collaboration tools, SharePoint, training, AI feasibility studies).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Results & Impact</h2>
          <p className="text-lg text-slate-700 mb-8">
            Through DET's assessment and strategic roadmap, Philbrook:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Gained Clarity</h3>
              <p className="text-slate-600">A complete picture of IT assets, risks, and gaps for the first time in over a decade.</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Reduced Risk</h3>
              <p className="text-slate-600">Identified and prioritized 10 urgent cybersecurity and governance initiatives to protect sensitive data and operations.</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Aligned IT with Business Goals</h3>
              <p className="text-slate-600">Shifted IT strategy from reactive maintenance to proactive enablement of growth, visitor engagement, and revenue expansion.</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Positioned for the Future</h3>
              <p className="text-slate-600">Built a roadmap for cloud adoption, collaboration modernization (Microsoft 365), and potential AI integration to support long-term innovation.</p>
            </div>
          </div>
          <div className="mt-12 p-8 bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] rounded-3xl shadow-2xl shadow-blue-500/30">
            <p className="text-lg text-white leading-relaxed">
              DET helped Philbrook transform its fragmented IT environment into a structured, forward-looking technology strategy. By prioritizing critical security fixes, modernizing infrastructure, and planning for future cloud and AI initiatives, DET positioned Philbrook to operate more securely, efficiently, and collaboratively.
            </p>
          </div>
        </div>
      </section>
    </div>
  );

  const NewfieldsPage = () => (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Header */}
      <section className="py-16 px-8 bg-gradient-to-br from-emerald-600 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setCurrentPage('CaseStudies')}
            className="flex items-center text-white/80 hover:text-white mb-8 group"
          >
            <ChevronRight className="h-5 w-5 mr-1 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </button>
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
            <Globe className="h-4 w-4 text-white mr-2" />
            <span className="text-sm font-semibold text-white">Arts & Culture</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Long-Term Strategic Technology Planning and Infrastructure Modernization at Newfields
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Newfields, a nationally recognized cultural institution, faced significant technology challenges stemming from years of underinvestment. Recognizing the need for both immediate modernization and long-term strategic direction, Newfields partnered with Diverse Excellence Technology (DE Tech) to lead a multi-phase initiative.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Challenge</h2>
          <p className="text-lg text-slate-700 mb-8">The challenges spanned two levels:</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-emerald-50 rounded-2xl border-2 border-emerald-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Immediate Technology Risks (2019-2020)</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>End-of-life network, server, and storage systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Failing wireless network impacting staff, visitors, and donor engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Limited capacity for modern applications and digital initiatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Global pandemic (COVID-19) disrupting supply chains and equipment delivery</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-slate-100 rounded-2xl border-2 border-slate-300">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Strategic Gaps (2022-2025)</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-slate-600 mr-2">•</span>
                  <span>Lack of cohesive governance and policies for technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-2">•</span>
                  <span>Fragmented organizational structures with unclear roles and accountability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-2">•</span>
                  <span>Cybersecurity risks and insufficient disaster recovery planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-2">•</span>
                  <span>Redundant systems and siloed processes leading to inefficiencies and higher costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-slate-200">
              <div className="bg-emerald-100 text-emerald-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Phase 1: Infrastructure Modernization (2019-2020)</h3>
              <p className="text-slate-700 mb-4">DE Tech implemented a modern Enterprise Infrastructure, including:</p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Core Network Refresh with a 10Gb backbone</li>
                <li>• Replacement of all switching, routing, and wireless infrastructure</li>
                <li>• Deployment of Dell VxRail hyperconverged infrastructure and Dell EMC Unity SAN</li>
                <li>• Migration of servers and applications to new virtualized environments</li>
              </ul>
              <p className="text-slate-700 mt-4 text-sm italic">Despite pandemic-related delays, our vendor relationships ensured Newfields received equipment on time.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-slate-200">
              <div className="bg-emerald-100 text-emerald-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Phase 2: Strategic Technology Planning (2025)</h3>
              <p className="text-slate-700 mb-4">DE Tech designed a comprehensive Technology Strategic Plan (2025-2027) built on four pillars:</p>
              <div className="space-y-3">
                <div className="p-3 bg-emerald-50 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Governance & Policy</h4>
                  <p className="text-xs text-slate-600">Formalized technology policies, governance committee, cost allocation, and vendor management</p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Cybersecurity & Risk Management</h4>
                  <p className="text-xs text-slate-600">Zero Trust architecture, 24x7 monitoring, comprehensive disaster recovery plans</p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Innovation & Digitalization</h4>
                  <p className="text-xs text-slate-600">Rationalized application portfolio, cloud-first adoption, visitor-focused innovations</p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Organizational Alignment</h4>
                  <p className="text-xs text-slate-600">Realigned technology roles, succession planning, training and upskilling programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Results & Key Takeaway</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border-2 border-emerald-200">
              <div className="text-5xl font-bold text-emerald-600 mb-3">50%+</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Application Redundancy Reduction</h3>
              <p className="text-sm text-slate-600">Streamlined systems for improved efficiency</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border-2 border-emerald-200">
              <div className="text-5xl font-bold text-emerald-600 mb-3">25%</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Staff Efficiency Improvement</h3>
              <p className="text-sm text-slate-600">Through optimized systems and training</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border-2 border-emerald-200">
              <div className="text-5xl font-bold text-emerald-600 mb-3">30%</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Visitor Digital Satisfaction Increase</h3>
              <p className="text-sm text-slate-600">Enhanced digital experiences across the institution</p>
            </div>
          </div>
          <div className="p-8 bg-gradient-to-r from-emerald-600 to-slate-800 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Key Takeaway</h3>
            <p className="text-lg text-white leading-relaxed">
              DE Tech's partnership with Newfields demonstrates our dual capability: delivering critical infrastructure modernization under pressure while also guiding institutions through long-term strategic planning at the C-Suite and governance level. This holistic approach positioned Newfields as a future-ready cultural institution, leveraging technology as a strategic advantage for growth and resilience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );

  const JRAutomationPage = () => (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Header */}
      <section className="py-16 px-8 bg-gradient-to-br from-orange-600 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setCurrentPage('CaseStudies')}
            className="flex items-center text-white/80 hover:text-white mb-8 group"
          >
            <ChevronRight className="h-5 w-5 mr-1 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </button>
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
            <Zap className="h-4 w-4 text-white mr-2" />
            <span className="text-sm font-semibold text-white">Manufacturing</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Guiding JR Automation's Global Software Strategy
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            How DE Tech helped JR Automation, a Hitachi Group Company, navigate a critical decision following its acquisition - align with Hitachi's corporate systems or explore alternatives better suited for its industry-specific manufacturing needs.
          </p>
        </div>
      </section>

      {/* Background & Challenge */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Background & Challenge</h2>
          <p className="text-lg text-slate-700 mb-8">
            JR Automation, a Hitachi Group Company, faced a critical decision following its acquisition: align with Hitachi's corporate systems or explore alternatives better suited for its industry-specific manufacturing needs. With a global footprint and a mandate to streamline operations across multiple regions, JR Automation needed a clear strategy to evaluate, adopt, and integrate the right enterprise software platform.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-orange-50 rounded-3xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
              <CheckCircle className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">Support global financial consolidation and reporting</h3>
            </div>
            <div className="p-6 bg-orange-50 rounded-3xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
              <CheckCircle className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">Enable seamless integration with Hitachi's corporate environment</h3>
            </div>
            <div className="p-6 bg-orange-50 rounded-3xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
              <CheckCircle className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">Deliver manufacturing-specific functionality tailored to their operations</h3>
            </div>
            <div className="p-6 bg-orange-50 rounded-3xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
              <CheckCircle className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">Balance total cost of ownership with flexibility and scalability</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Approach</h2>
          <p className="text-lg text-slate-700 mb-8">
            Diverse Excellence Technology (DE Tech) partnered with JR Automation to lead the vision mapping, evaluation, and implementation strategy. Using our proven methodologies, we:
          </p>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
              <div className="flex items-start">
                <div className="bg-orange-100 text-orange-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Mapped SAP Wave 1 Rollout</h3>
                  <p className="text-slate-600">Delivered configuration, group reporting, financial data migration, and security role assignments for SAP S/4HANA. Supported JR Automation's User Acceptance Testing (UAT), month/year-end closure processes, and provided hypercare support post-go-live.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
              <div className="flex items-start">
                <div className="bg-orange-100 text-orange-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Evaluated Alternative Solutions</h3>
                  <p className="text-slate-600">Benchmarked SAP S/4HANA against other ERP systems, including Epicor, which is known for industry-specific manufacturing functionality and typically offers a lower cost of ownership. Demonstrated that while SAP is excellent for highly complex global businesses, Epicor's industry-focused capabilities could not only match but sometimes exceed JR Automation's needs in terms of operational alignment and cost efficiency.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200">
              <div className="flex items-start">
                <div className="bg-orange-100 text-orange-600 font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  03
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Balanced Integration with Innovation</h3>
                  <p className="text-slate-600">Recommended a hybrid approach that allowed JR Automation to meet Hitachi's corporate compliance requirements while adopting complementary solutions better suited for their manufacturing operations. Ensured seamless integration between systems, reducing disruption and enabling JR Automation to leverage both corporate standards and specialized tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Cost Savings */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Results & Cost Savings</h2>
          <p className="text-lg text-slate-700 mb-8">
            Through our vision mapping and software evaluation, DE Tech helped JR Automation avoid significant long-term costs while still aligning with Hitachi's corporate systems.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-orange-50 rounded-3xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Projected SAP Costs</h3>
              <p className="text-slate-700 mb-2 text-sm">Full SAP S/4HANA rollout:</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• $3.5M-$5M implementation</li>
                <li>• $600K-$750K annually</li>
                <li>• <strong className="text-slate-900">$10M+ 10-year TCO</strong></li>
              </ul>
            </div>
            <div className="p-6 bg-emerald-50 rounded-3xl border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Epicor Cost Profile</h3>
              <p className="text-slate-700 mb-2 text-sm">Epicor ERP deployment:</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• $1.8M-$2.2M implementation</li>
                <li>• $300K-$400K annually</li>
                <li>• <strong className="text-slate-900">$5M-$6M 10-year TCO</strong></li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-100 to-emerald-100 rounded-3xl border-2 border-orange-300 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Cost Savings Realized</h3>
              <p className="text-2xl font-bold text-orange-600 mb-2">$4M-$5M</p>
              <p className="text-sm text-slate-700">Long-term cost avoidance achieved while maintaining corporate compliance and operational excellence</p>
            </div>
          </div>
          <div className="p-8 bg-gradient-to-br from-[#F59E0B] via-[#D97706] to-[#B45309] rounded-3xl shadow-2xl shadow-orange-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Key Takeaways</h3>
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div>
                <h4 className="font-bold mb-2">SAP Strengths</h4>
                <p className="text-sm text-white/90">Scalability, global compliance, partner ecosystem</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Epicor Advantages</h4>
                <p className="text-sm text-white/90">Industry-specific manufacturing focus, faster deployment, lower total cost of ownership</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">DE Tech Value</h4>
                <p className="text-sm text-white/90">Independent, strategic guidance that aligned corporate standards with industry-driven innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'Services':
        return <ServicesPage />;
      case 'CaseStudies':
        return <CaseStudiesPage />;
      case 'CAREElementary':
        return <CAREElementaryPage setCurrentPage={setCurrentPage} />;
      case 'HHCHealthcare':
        return <HHCHealthcarePage setCurrentPage={setCurrentPage} />;
      case 'Philbrook':
        return <PhilbrookPage />;
      case 'Newfields':
        return <NewfieldsPage />;
      case 'JRAutomation':
        return <JRAutomationPage />;
      case 'About':
        return <AboutPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main>
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;
