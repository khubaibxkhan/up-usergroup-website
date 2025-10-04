'use client';

import { Linkedin, Youtube, Instagram, Users } from 'lucide-react';

export default function Welcome() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/microsoft-user-group-uttar-pradesh-power-bi-club/',
      color: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      name: 'Meetup',
      icon: Users,
      url: 'https://www.meetup.com/up-powerbiclub/',
      color: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      name: 'WhatsApp',
      icon: () => (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      url: 'https://chat.whatsapp.com/J1rtCGX70r37ukBG4u2i0f',
      color: 'hover:from-green-500 hover:to-green-600'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@powerbiclub-up',
      color: 'hover:from-red-500 hover:to-red-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/up_powerbi_club',
      color: 'hover:from-pink-500 hover:to-purple-600'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto text-center">
        
        {/* Title */}
         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            Welcome to the <br />
            <span className="text-blue-500">Uttar Pradesh Power BI Club!</span>
          </h2>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            Your premier community for data professionals and enthusiasts. While our roots are in Power BI & Fabrics, the Club is a dynamic hub for all things data and tech.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Whether you're a seasoned developer, a curious analyst, ML engineer or just starting your journey, this is the place to connect, learn, and grow.
          </p>
        </div>

        {/* Social Icons - Inline */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full border-2 border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-110 overflow-hidden bg-gradient-to-br ${social.color}`}
                aria-label={`Visit our ${social.name}`}
              >
                <Icon className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-blue-500 group-hover:text-white transition-colors duration-300" />
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div>
          <button 
            onClick={() => window.location.href = '/connect'}
            className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold text-base sm:text-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Join the Community
          </button>
        </div>
      </div>
    </section>
  );
}