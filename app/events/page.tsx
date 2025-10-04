'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, Clock, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SpotlightCard from '@/components/SpotlightCard';
import Footer from '@/components/Footer';

export default function EventsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Featured Events for Carousel
  const featuredEvents = [
    {
      title: "Power BI & AI Summit 2025 – Delhi Edition",
      date: "Saturday, May 24, 2025",
      time: "10:00 AM – 6:00 PM IST",
      location: "Microsoft Office, Gurugram",
      description: "India's Premier AI & Data Analytics Learning Experience",
      image: "https://secure.meetupstatic.com/photos/event/9/d/3/b/highres_528220251.jpeg",
      attendees: 130,
      featured: true
    },
    {
      title: "Microsoft Power BI Post Birthday Showcase",
      date: "Thursday , July 31, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Microsoft Office, Gurugram",
      description: "UP Power BI Club presents a showcase with expert talks, networking, prizes, and community celebration in Gurugram",
      image: "https://secure.meetupstatic.com/photos/event/4/8/0/5/clean_528318437.webp",
      attendees: 271,
      featured: true
    },
    {
      title: "ML without Code",
      date: "Sunday , September 21, 2025",
      time: "5:30 PM - 8:00 PM",
      location: "Online",
      description: "1 Year Free No Code Software License for Students! Supports coding for advanced users :)",
      image: "/images/event3.jpg",
      attendees: 13,
      featured: true
    }
  ];

  // All Upcoming Events
  const upcomingEvents = [
    {
      title: "Microsoft Fabric Thursday Expert Series - 2025",
      date: "October 2, 2025",
      time: "8:30 PM IST",
      location: "Online",
      description: "AI-Powered Observability for Cloud-Native Systems: Leveraging Large Language Models in Platform-as-a-Service.",
      attendees: 20,
      type: "Workshop",
      image: "https://secure.meetupstatic.com/photos/event/b/1/7/4/highres_530505428.webp?w=640",
      meetupUrl: "https://www.meetup.com/up-powerbiclub/events/310629474/?eventOrigin=group_events_list"
    },
    {
      title: "Microsoft Fabric Thursday Expert Series - 2025",
      date: "September, 2025",
      time: "8:30 PM",
      location: "Online",
      description: "Decoupling Compute and Storage: Enabling Intelligent, Scalable Data Platforms.",
      attendees: 17,
      type: "Workshop",
      image: "https://secure.meetupstatic.com/photos/event/a/e/e/e/highres_530384782.webp?w=640",
      meetupUrl: "https://www.meetup.com/up-powerbiclub/events/310629471/?eventOrigin=group_events_list"
    },
    {
      title: "Sunday Dive Into Tech With Experts - 2025",
      date: "January 8, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "Online",
      description: "Learn how to create compelling narratives using data visualization best practices.",
      attendees: 13,
      type: "Workshop",
      image: "https://secure.meetupstatic.com/photos/event/d/8/2/d/highres_529735341.webp?w=640",
      meetupUrl: "https://www.meetup.com/up-powerbiclub/events/310611944/?eventOrigin=group_events_list"
    },
    {
      title: "Sunday Dive Into Tech With Experts - 2025",
      date: "January 25, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Online",
      description: "Connect with fellow data professionals in a casual networking environment.",
      attendees: 17,
      type: "Networking",
      image: "https://secure.meetupstatic.com/photos/event/d/8/2/9/highres_529735337.webp?w=640",
      meetupUrl: "https://www.meetup.com/up-powerbiclub/events/310611937/?eventOrigin=group_events_list"
    },
    {
      title: "ML without Code",
      date: "September 21, 2025",
      time: "5:30 PM",
      location: "Online",
      description: "1 Year Free No Code Software License for Students! Supports coding for advanced users :)",
      attendees: 13,
      type: "Workshop",
      image: "https://secure.meetupstatic.com/photos/event/c/3/2/7/highres_530269959.webp?w=640",
      meetupUrl: "https://www.meetup.com/up-powerbiclub/events/311116805/?eventOrigin=group_events_list"
    },
    {
      title: "Microsoft Fabric Thursday Expert Series - 2025",
      date: "September 18, 2025",
      time: "8:30 PM",
      location: "Online",
      description: "Agentic AI in Action: Scalable Architectures and Workflows for the Enterprise Session",
      attendees: 14,
      type: "Workshop",
      image: "https://secure.meetupstatic.com/photos/event/9/7/4/3/highres_530258723.webp?w=640",
      meetupUrl: "https://www.meetup.com/up-powerbiclub/events/310629470/?eventOrigin=group_events_list"
    },
    {
      title: "Power Query Masterclass",
      date: "March 20, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Lucknow, UP",
      description: "Master data transformation and preparation techniques using Power Query.",
      attendees: 16,
      type: "Workshop",
      image: "/images/event-query.jpg",
      meetupUrl: "https://www.meetup.com/your-event-link"
    },
    {
      title: "Real-time Analytics with Power BI",
      date: "April 10, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Noida, Uttar Pradesh",
      description: "Build real-time dashboards and streaming analytics solutions.",
      attendees: 23,
      type: "Seminar",
      image: "/images/event-realtime.jpg",
      meetupUrl: "https://www.meetup.com/your-event-link"
    },
    {
      title: "Power BI & Azure Integration",
      date: "April 25, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Kanpur, UP",
      description: "Learn how to integrate Power BI with Azure services for enterprise solutions.",
      attendees: 14,
      type: "Workshop",
      image: "/images/event-azure.jpg",
      meetupUrl: "https://www.meetup.com/your-event-link"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length);

  // Filter events based on search query
  const filteredEvents = upcomingEvents.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Determine which events to display
  const displayedEvents = showAllEvents ? filteredEvents : filteredEvents.slice(0, 6);
  const hasMoreEvents = filteredEvents.length > 6;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Featured Events Carousel - Reduced height on mobile */}
      <section className="relative w-full h-[350px] sm:h-[500px] md:h-[600px] overflow-hidden bg-gray-900">
        {featuredEvents.map((event, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center px-4 sm:px-8 lg:px-16">
              <div className="max-w-2xl text-white">
                <span className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-blue-500 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-4">
                  Featured Event
                </span>
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight">{event.title}</h2>
                <p className="text-sm sm:text-lg md:text-xl mb-3 sm:mb-6 text-white/90 line-clamp-2">{event.description}</p>
                
                <div className="flex flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-6 text-xs sm:text-base">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Calendar className="w-3 h-3 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">{event.date}</span>
                    <span className="sm:hidden">{event.date.split(',')[1]}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Clock className="w-3 h-3 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">{event.time}</span>
                    <span className="sm:hidden">{event.time.split('–')[0]}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <MapPin className="w-3 h-3 sm:w-5 sm:h-5" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Users className="w-3 h-3 sm:w-5 sm:h-5" />
                    <span>{event.attendees}</span>
                  </div>
                </div>

                <button className="px-4 py-2 sm:px-8 sm:py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-md transition-all duration-300 text-white z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-md transition-all duration-300 text-white z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {featuredEvents.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index ? 'w-6 sm:w-8 h-2 bg-white' : 'w-2 h-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Events and Meetups
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
              Join us at our upcoming workshops, meetups, and seminars
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search events by title, location, or type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-10 sm:pl-14 pr-4 text-sm sm:text-base border-2 border-blue-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors duration-300 bg-white shadow-sm"
                />
                <Search className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              </div>
            </div>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg sm:text-xl text-gray-500">No events found matching your search.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {displayedEvents.map((event, index) => (
                  <a
                    key={index}
                    href={event.meetupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full transform transition-transform duration-300 hover:scale-105"
                  >
                    <SpotlightCard 
                      className="h-full !bg-white border border-gray-200 rounded-xl overflow-hidden" 
                      spotlightColor="rgba(59, 130, 246, 0.5)"
                    >
                      <div className="h-full flex flex-col bg-white">
                        {/* Event Image */}
                        <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-gray-100">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                            <span className="px-2 sm:px-3 py-1 bg-blue-500 text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                              {event.type}
                            </span>
                          </div>
                          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                            <span className="text-xs sm:text-sm font-semibold text-gray-800">{event.attendees}</span>
                          </div>
                        </div>

                        {/* Event Content */}
                        <div className="p-4 sm:p-6 flex-grow flex flex-col bg-white">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                            {event.title}
                          </h3>

                          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 flex-grow line-clamp-3">
                            {event.description}
                          </p>

                          <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                            <div className="flex items-center gap-2 text-gray-700">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                              <span className="text-xs sm:text-sm font-medium">{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                              <span className="text-xs sm:text-sm font-medium">{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                              <span className="text-xs sm:text-sm font-medium">{event.location}</span>
                            </div>
                          </div>

                          <button className="w-full py-2.5 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm sm:text-base font-semibold transition-colors duration-300">
                            View on Meetup
                          </button>
                        </div>
                      </div>
                    </SpotlightCard>
                  </a>
                ))}
              </div>

              {/* View More Button */}
              {hasMoreEvents && (
                <div className="mt-8 sm:mt-12 text-center">
                  <button
                    onClick={() => setShowAllEvents(!showAllEvents)}
                    className="px-6 sm:px-10 py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {showAllEvents ? 'Show Less' : `View More Events (${filteredEvents.length - 6} more)`}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}