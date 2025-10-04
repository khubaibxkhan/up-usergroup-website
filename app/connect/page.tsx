'use client';

import { Linkedin, Youtube, Instagram, Users, Mail, Globe, Calendar, BookOpen, Github } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function ConnectPage() {
  const links = [
    {
      title: 'LinkedIn Community',
      description: 'Follow our official LinkedIn page for updates',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/microsoft-user-group-uttar-pradesh-power-bi-club/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'LinkedIn Group',
      description: 'Join our LinkedIn group for discussions and networking',
      icon: Users,
      url: 'https://www.linkedin.com/groups/15519026',
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'LinkedIn Newsletter',
      description: 'Subscribe to our newsletter for weekly insights',
      icon: Mail,
      url: 'https://www.linkedin.com/newsletters/the-up-power-bi-club-bulletin-7359640234231291906',
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Meetup Events',
      description: 'Attend workshops, seminars and networking events',
      icon: Calendar,
      url: 'https://www.meetup.com/',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'WhatsApp Community',
      description: 'Join our active discussion group',
      icon: () => (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      url: 'https://chat.whatsapp.com/J1rtCGX70r37ukBG4u2i0f',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'YouTube Channel',
      description: 'Watch tutorials, webinars and event recordings',
      icon: Youtube,
      url: 'https://www.youtube.com/@powerbiclub-up',
      color: 'from-red-600 to-red-700'
    },
    {
      title: 'Instagram',
      description: 'Follow us for updates, tips and community highlights',
      icon: Instagram,
      url: 'https://instagram.com/your-powerbi-club',
      color: 'from-pink-500 to-purple-600'
    },
    {
      title: 'Learning Resources',
      description: 'Explore curated tutorials and documentation',
      icon: BookOpen,
      url: '#resources',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Official Website',
      description: 'Visit our main website for more information',
      icon: Globe,
      url: 'http://uppowerbiclub.com',
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Navbar */}
        <Navbar />
        
        {/* Header Section */}
        <div className="pt-6 pb-6 px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            {/* Profile Avatar */}
            <div className="mb-4 flex justify-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-4 border-blue-100 shadow-xl overflow-hidden">
                <img src="/logo.jpg" alt="UP Power BI Club Logo" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Connect With Us
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4">
              Join the Uttar Pradesh Power BI Community
            </p>

            {/* Quote Card */}
            <div className="backdrop-blur-sm bg-blue-50/80 rounded-2xl border border-blue-200 p-5 sm:p-6 shadow-lg mb-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3">
                Have questions about our community? Want to collaborate or suggest an event? We're here to help and would love to connect with you!
              </p>
              <a 
                href="mailto:uppowerbiclub@gmail.com"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 font-semibold"
              >
                <Mail className="w-5 h-5" />
                <span className="text-base sm:text-lg">uppowerbiclub@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex-1 px-4 sm:px-6 pb-12">
          <div className="max-w-2xl mx-auto space-y-4">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group block backdrop-blur-sm bg-white hover:bg-blue-50 rounded-2xl border-2 border-blue-100 hover:border-blue-300 p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon with gradient background */}
                    <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {link.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {link.description}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <div className="flex-shrink-0">
                      <svg 
                        className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 bg-blue-50 border-t border-blue-200 py-6 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-700 text-sm sm:text-base mb-2">
              © 2024 Uttar Pradesh Power BI Club. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm">
              Empowering data professionals across Uttar Pradesh
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}