import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Trophy, Calendar, MapPin, Phone, Mail, Menu, X, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://github.com/user-attachments/assets/c2663386-227e-43e0-b578-4224f86c9968" 
                alt="Cricket Club Logo" 
                className="w-14 h-14 rounded-full object-cover shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-blue-400 transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-blue-400 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('features')} className="text-white hover:text-blue-400 transition-colors font-medium">Features</button>
              <button onClick={() => scrollToSection('sponsors')} className="text-white hover:text-blue-400 transition-colors font-medium">Sponsors</button>
              
              {/* Social Media Icons */}
              <div className="flex items-center space-x-3 ml-4 border-l border-white/20 pl-4">
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-red-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-red-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-red-400 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
              
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/80 backdrop-blur-sm border-t border-white/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-white hover:text-blue-400">Home</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-white hover:text-blue-400">About</button>
                <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-white hover:text-blue-400">Features</button>
                <button onClick={() => scrollToSection('sponsors')} className="block w-full text-left px-3 py-2 text-white hover:text-blue-400">Sponsors</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-white hover:text-blue-400">Contact</button>
                
                {/* Mobile Social Media */}
                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-white/20 mt-4">
                  <a href="#" className="text-white hover:text-blue-400 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-white hover:text-red-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-white hover:text-red-400 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-white hover:text-red-400 transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cricket Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://github.com/user-attachments/assets/37bf757c-bf35-4fd9-824a-f767398f4e43" 
            alt="Cricket Match" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-red-800/40"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-20 left-10 w-4 h-4 bg-blue-400/60 rounded-full animate-bounce"
            style={{ animationDelay: '0s', animationDuration: '3s' }}
          ></div>
          <div 
            className="absolute top-40 right-20 w-6 h-6 bg-red-300/60 rounded-full animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div 
            className="absolute bottom-40 left-20 w-8 h-8 bg-blue-400/60 rounded-full animate-bounce"
            style={{ animationDelay: '2s', animationDuration: '4s' }}
          ></div>
          <div 
            className="absolute bottom-20 right-10 w-5 h-5 bg-red-300/60 rounded-full animate-pulse"
            style={{ animationDelay: '0.5s' }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-white drop-shadow-lg">Veterans Cricket</span>
              <span className="block text-blue-400 animate-pulse drop-shadow-lg">Nepal</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Celebrating the spirit of cricket with experienced players who continue to inspire and compete with passion and dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Learn More
                <ChevronRight className="w-5 h-5 inline ml-2" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Join Us Today
              </button>
            </div>
          </div>
        </div>

        {/* Floating Cricket Ball */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
          <div className="w-16 h-16 bg-red-500 rounded-full animate-spin-slow relative shadow-lg">
            <div className="absolute inset-2 border-2 border-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Achievements Bar */}
      <section className="py-8 bg-blue-600 overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {/* First set of achievements */}
            <div className="flex items-center space-x-16 px-8">
              <div className="flex items-center space-x-3 text-white">
                <Trophy className="w-6 h-6 text-yellow-300" />
                <span className="text-lg font-semibold">State Champions 2023</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Users className="w-6 h-6 text-yellow-300" />
                <span className="text-lg font-semibold">500+ Active Members</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Calendar className="w-6 h-6 text-yellow-300" />
                <span className="text-lg font-semibold">25 Years of Excellence</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Trophy className="w-6 h-6 text-yellow-300" />
                <span className="text-lg font-semibold">Regional Cup Winners</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Users className="w-6 h-6 text-yellow-300" />
                <span className="text-lg font-semibold">100+ Tournaments Played</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Trophy className="w-6 h-6 text-yellow-300" />
                <span className="text-lg font-semibold">Best Sportsmanship Award</span>
              </div>
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-16 px-8">
              <div className="flex items-center space-x-3 text-white">
                <Trophy className="w-6 h-6 text-yellow-300" />
                <span className="text-lg font-semibold">State Champions 2023</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Users className="w-6 h-6 text-yellow-300" />
                <span className="text-lg font-semibold">500+ Active Members</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Calendar className="w-6 h-6 text-yellow-300" />
                <span className="text-lg font-semibold">25 Years of Excellence</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Trophy className="w-6 h-6 text-yellow-300" />
                <span className="text-lg font-semibold">Regional Cup Winners</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Users className="w-6 h-6 text-yellow-300" />
                <span className="text-lg font-semibold">100+ Tournaments Played</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Trophy className="w-6 h-6 text-yellow-300" />
                <span className="text-lg font-semibold">Best Sportsmanship Award</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Veterans Cricket Nepal</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Where experience meets excellence. Our community brings together cricket veterans who share a passion for the game and the wisdom of years on the field.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To create a platform where experienced cricketers can continue to play, compete, and share their knowledge with the next generation while maintaining the highest standards of sportsmanship.
                </p>
              </div>
              
              <div className="transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the premier destination for veteran cricketers, fostering a community that celebrates experience, promotes healthy competition, and preserves the rich traditions of cricket.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 transform hover:rotate-2 transition-all duration-300">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Trophy className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">Excellence in Experience</h4>
                  <p className="text-gray-600 text-center">
                    Over 25 years of combined cricket expertise in our community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive facilities and programs designed specifically for veteran cricketers
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Community Network",
                description: "Connect with fellow cricket veterans from around the region"
              },
              {
                icon: Trophy,
                title: "Tournaments",
                description: "Regular competitive tournaments and friendly matches"
              },
              {
                icon: Calendar,
                title: "Regular Events",
                description: "Weekly training sessions and monthly social gatherings"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section id="board-members" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Board Members</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced leaders who guide our cricket community with passion and dedication
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                position: "President",
                experience: "Former State Captain"
              },
              {
                name: "Amit Sharma",
                position: "Vice President",
                experience: "25 Years Experience"
              },
              {
                name: "Vikash Singh",
                position: "Secretary",
                experience: "Cricket Coach"
              },
              {
                name: "Suresh Patel",
                position: "Treasurer",
                experience: "Tournament Director"
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden"
              >
                {/* Main Card */}
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                  {/* Photo Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={[
                        "https://github.com/user-attachments/assets/b80f5186-6a89-415b-8e42-af081dcedebc",
                        "https://github.com/user-attachments/assets/c5fb8547-4ba9-497f-b9df-bb7f21099a3f",
                        "https://github.com/user-attachments/assets/f723771d-8c3c-4a68-a250-d831a4bf6ca5",
                        "https://github.com/user-attachments/assets/287507ae-4e38-4719-ad53-72595753ea9a"
                      ][index]}
                      alt={member.name}
                      className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                      <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <Trophy className="w-6 h-6 mx-auto mb-1" />
                        <p className="text-sm font-semibold">{member.experience}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 text-center relative">
                    {/* Decorative Element */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                      <div className="absolute inset-1 bg-white rounded-full"></div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 transform transition-all duration-300 group-hover:text-blue-600">
                      {member.name}
                    </h3>
                    <p className="text-red-600 font-semibold mb-1 transform transition-all duration-300 group-hover:scale-105">
                      {member.position}
                    </p>
                    
                    {/* Animated Underline */}
                    <div className="w-0 h-0.5 bg-blue-600 mx-auto transition-all duration-500 group-hover:w-12"></div>
                  </div>
                </div>
                
                {/* Floating Shadow Effect */}
                <div className="absolute inset-0 bg-blue-600/10 rounded-2xl transform translate-x-2 translate-y-2 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-lg text-gray-600">Moments from our cricket community</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://github.com/user-attachments/assets/ec4c5251-def0-47ba-a870-51003cebeea9",
              "https://github.com/user-attachments/assets/f774b02b-18c6-4662-a48c-2dbea0a95031",
              "https://github.com/user-attachments/assets/2dbaee8c-f44f-422e-84a9-1ec2daed9ebc",
              "https://github.com/user-attachments/assets/2b6ee6fa-ad62-49a6-a749-c5426aa513b0",
              "https://github.com/user-attachments/assets/5bad5478-9558-4d5c-bc04-5c1ff543c426",
              "https://github.com/user-attachments/assets/415aa902-6dfe-4b98-a97e-8595f6a5a2c7"
            ].map((imageUrl, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-xl aspect-square hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <img 
                  src={imageUrl}
                  alt={`Cricket moment ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proud partners who support our cricket community and help us achieve excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
              "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
              "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
              "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
              "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
              "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
            ].map((logoUrl, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group-hover:scale-105">
                  <img 
                    src={logoUrl}
                    alt={`Sponsor ${index + 1}`}
                    className="w-full h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                
                {/* Floating effect */}
                <div className="absolute inset-0 bg-blue-600/5 rounded-xl transform translate-x-1 translate-y-1 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Interested in becoming a sponsor?</p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-red-100 max-w-2xl mx-auto">
              Ready to join our cricket community? Contact us today and become part of something special.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-red-100">Cricket Ground Complex<br />Sports City, India</p>
            </div>

            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-red-100">+91 98765 43210<br />+91 98765 43211</p>
            </div>

            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-red-100">info@veteranscricket.com<br />join@veteranscricket.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img 
                src="https://github.com/user-attachments/assets/7885a36f-f059-4fd6-a5f3-24c18c80a22f" 
                alt="Cricket Club Logo" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-xl font-bold">Veterans Cricket Nepal</span>
            </div>
            <p className="text-gray-400 mb-6">Celebrating cricket excellence through experience</p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500">&copy; 2025 Veterans Cricket Nepal. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;