import { useState } from "react";
import Slideshow from "@/components/slideshow";
import BookingForm from "@/components/booking-form";
import ContactForm from "@/components/contact-form";
import { Card } from "@/components/ui/card";
import { Star, Wifi, Car, Shield } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("gallery");

  const exteriorImages = [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    "https://pixabay.com/get/gf49460d6ff6cf6e70b3efd04b0b7891aa376dc76d3ca78aee1dd0ade770dc7d13fc14f4db9a0ec993cfa97b313908a6510cd23b46349a4c24626ef044b223f56_1280.jpg"
  ];

  const interiorImages = [
    { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", title: "Living Room", description: "Open-concept design with panoramic views" },
    { url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", title: "Master Suite", description: "King bed with stunning ocean views" },
    { url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", title: "Gourmet Kitchen", description: "Professional-grade appliances" },
    { url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", title: "Spa Bathroom", description: "Marble finishes and soaking tub" },
    { url: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", title: "Dining Room", description: "Seats 10 guests comfortably" },
    { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", title: "Home Office", description: "Perfect for remote work" },
    { url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", title: "Guest Suite", description: "Comfortable accommodations" },
    { url: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", title: "Media Room", description: "85\" screen and surround sound" }
  ];

  const amenityImages = [
    { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", title: "Infinity Pool & Spa", description: "Relax in our stunning infinity pool with panoramic ocean views, complete with integrated spa jets and underwater lighting for evening swims." },
    { url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", title: "Private Fitness Center", description: "Stay active in our fully equipped private gym featuring state-of-the-art cardio and strength training equipment with mountain views." },
    { url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", title: "Outdoor Entertainment", description: "Dine al fresco on our expansive terrace featuring a professional-grade BBQ, outdoor kitchen, and dining for 12 guests with stunning sunset views." },
    { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", title: "Private Wine Cellar", description: "Discover our curated collection in the climate-controlled wine cellar, complete with tasting area and sommelier service upon request." }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-secondary">LuxeStay</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-secondary hover:text-primary transition-colors"
                data-testid="nav-gallery"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('amenities')}
                className="text-secondary hover:text-primary transition-colors"
                data-testid="nav-amenities"
              >
                Amenities
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="text-secondary hover:text-primary transition-colors"
                data-testid="nav-booking"
              >
                Book Now
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-secondary hover:text-primary transition-colors"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slideshow */}
      <section id="gallery" className="relative h-screen overflow-hidden">
        <Slideshow images={exteriorImages} />
        
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="hero-title">
              Luxury Villa Retreat
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light" data-testid="hero-subtitle">
              Experience unparalleled comfort in our stunning contemporary villa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('booking')}
                className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                data-testid="button-book-stay"
              >
                Book Your Stay
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-semibold transition-colors"
                data-testid="button-virtual-tour"
              >
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6" data-testid="text-property-title">
                  Modern Luxury Villa
                </h2>
                <div className="flex items-center space-x-6 mb-8 text-muted">
                  <div className="flex items-center space-x-2">
                    <span className="text-primary">🛏️</span>
                    <span data-testid="text-bedrooms">5 Bedrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-primary">🛁</span>
                    <span data-testid="text-bathrooms">4 Bathrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-primary">👥</span>
                    <span data-testid="text-guests">Up to 10 Guests</span>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-6">
                    Discover the perfect blend of modern luxury and natural beauty in our stunning contemporary villa. 
                    Perched on a hillside with breathtaking panoramic views, this architectural masterpiece offers an 
                    unparalleled vacation experience.
                  </p>
                  
                  <p className="mb-6">
                    The villa features expansive living spaces with floor-to-ceiling windows that blur the line between 
                    indoor and outdoor living. Each of the five beautifully appointed bedrooms offers stunning views and 
                    en-suite bathrooms, ensuring privacy and comfort for all guests.
                  </p>
                  
                  <p>
                    Whether you're seeking a romantic getaway, family vacation, or corporate retreat, our villa provides 
                    the perfect sanctuary with world-class amenities and personalized service.
                  </p>
                </div>
              </div>

              {/* Booking Form */}
              <div className="lg:col-span-1" id="booking">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4" data-testid="text-interior-title">
              Interior Spaces
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Explore the beautifully designed interior spaces that make our villa truly exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interiorImages.map((image, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-48 object-cover"
                  data-testid={`img-interior-${index}`}
                />
                <div className="p-4">
                  <h3 className="font-semibold text-secondary" data-testid={`text-interior-title-${index}`}>
                    {image.title}
                  </h3>
                  <p className="text-sm text-muted" data-testid={`text-interior-description-${index}`}>
                    {image.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-white" id="amenities">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4" data-testid="text-amenities-title">
              Premium Amenities
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Every detail has been carefully considered to ensure your comfort and enjoyment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {amenityImages.map((amenity, index) => (
              <div key={index} className="space-y-6">
                <img 
                  src={amenity.url} 
                  alt={amenity.title} 
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                  data-testid={`img-amenity-${index}`}
                />
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-3" data-testid={`text-amenity-title-${index}`}>
                    {amenity.title}
                  </h3>
                  <p className="text-muted" data-testid={`text-amenity-description-${index}`}>
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Amenities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-secondary mb-2" data-testid="text-wifi-title">High-Speed WiFi</h4>
              <p className="text-sm text-muted">Gigabit internet throughout</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-secondary mb-2" data-testid="text-parking-title">Private Parking</h4>
              <p className="text-sm text-muted">Secure garage for 4 vehicles</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary">🛎️</span>
              </div>
              <h4 className="font-semibold text-secondary mb-2" data-testid="text-concierge-title">Concierge Service</h4>
              <p className="text-sm text-muted">24/7 personalized assistance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-secondary mb-2" data-testid="text-security-title">Security System</h4>
              <p className="text-sm text-muted">Advanced monitoring & access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4" data-testid="text-reviews-title">
              Guest Reviews
            </h2>
            <p className="text-xl text-muted">See what our guests say about their experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                review: "Absolutely stunning property with incredible views. The amenities exceeded our expectations and the service was impeccable. Will definitely be returning!",
                name: "Sarah Johnson",
                date: "March 2024"
              },
              {
                review: "Perfect for our family vacation. The kids loved the pool and we appreciated the spacious layout. Every detail was thoughtfully designed.",
                name: "Michael Chen",
                date: "February 2024"
              },
              {
                review: "Luxury at its finest! The villa is even more beautiful in person. The concierge service made our stay effortless and memorable.",
                name: "Emma Rodriguez",
                date: "January 2024"
              }
            ].map((review, index) => (
              <Card key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4" data-testid={`text-review-${index}`}>
                  "{review.review}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-secondary" data-testid={`text-reviewer-name-${index}`}>
                      {review.name}
                    </div>
                    <div className="text-sm text-muted" data-testid={`text-review-date-${index}`}>
                      {review.date}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-secondary text-white" id="contact">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-title">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300">
                Have questions? We're here to help plan your perfect getaway
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-accent text-xl">📞</span>
                    <span data-testid="text-phone">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-accent text-xl">✉️</span>
                    <span data-testid="text-email">reservations@luxestay.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-accent text-xl">📍</span>
                    <span data-testid="text-address">123 Coastal Highway, Malibu, CA 90265</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <button className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
                      data-testid="button-facebook"
                    >
                      📘
                    </button>
                    <button className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
                      data-testid="button-instagram"
                    >
                      📷
                    </button>
                    <button className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
                      data-testid="button-twitter"
                    >
                      🐦
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-secondary font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold">LuxeStay</span>
            </div>
            <div className="text-center md:text-right text-gray-400">
              <p>&copy; 2024 LuxeStay. All rights reserved.</p>
              <p className="text-sm">Privacy Policy | Terms of Service</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
