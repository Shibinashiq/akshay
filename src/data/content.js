import destKerala from '../assets/keralaall.png';
import destBhutan from '../assets/bhutan.png';
import destDubai from '../assets/dubai.png';
import destAzerbaijan from '../assets/azerbaijan.png';
import destGoa from '../assets/goa.png';
import destMaldives from '../assets/dest_maldives.png';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Holidays', href: '#packages', hasDropdown: true },
  { label: 'Destinations', href: '#destinations', hasDropdown: true },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const heroStats = [
  { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>', value: '150+', label: 'Destinations' },
  { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', value: '10K+', label: 'Happy Travellers' },
  { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>', value: '98%', label: 'Visa Approval' },
];

export const destinations = [
  {
    id: 1,
    name: 'Kerala',
    country: 'India',
    image: destKerala,
    description: 'Tranquil houseboat cruises in backwaters, tea plantations of Munnar, and tropical palm beaches.',
    price: 'From ₹18,999',
    rating: 4.9,
    duration: '5-7 Days',
  },
  {
    id: 2,
    name: 'Dubai',
    country: 'UAE',
    image: destDubai,
    description: 'Experience futuristic architecture, luxury shopping, desert safaris, and the iconic Burj Khalifa.',
    price: 'From ₹34,999',
    rating: 4.9,
    duration: '4-6 Days',
  },
  {
    id: 3,
    name: 'Bhutan',
    country: 'Himalayas',
    image: destBhutan,
    description: 'Land of the Thunder Dragon — discover Tiger’s Nest Monastery, ancient dzongs, and pristine mountain valleys.',
    price: 'From ₹24,999',
    rating: 4.9,
    duration: '5-7 Days',
  },
  {
    id: 4,
    name: 'Azerbaijan',
    country: 'Baku',
    image: destAzerbaijan,
    description: 'The Land of Fire — explore the historic Old City of Baku, Flame Towers, and Caspian Sea coastlines.',
    price: 'From ₹32,999',
    rating: 4.8,
    duration: '4-6 Days',
  },
  {
    id: 5,
    name: 'Goa',
    country: 'India',
    image: destGoa,
    description: 'Sun-kissed golden beaches, Portuguese heritage architecture, vibrant nightlife, and exciting watersports.',
    price: 'From ₹12,999',
    rating: 4.8,
    duration: '3-5 Days',
  },
  {
    id: 6,
    name: 'Maldives',
    country: 'Indian Ocean',
    image: destMaldives,
    description: 'Crystal-clear turquoise waters, overwater luxury villas, and vibrant coral reefs for the ultimate escape.',
    price: 'From ₹45,999',
    rating: 4.9,
    duration: '5-8 Days',
  },
];

export const packages = [
  {
    id: 1,
    title: 'Kerala Backwaters & Munnar Special',
    tier: 'Trending',
    price: '₹18,999',
    duration: '5 Days / 4 Nights',
    destination: 'Kerala, India',
    image: destKerala,
    highlights: [
      'Houseboat cruise with all meals',
      'Munnar tea plantation tours',
      'Alleppey backwater stays',
      'Airport & station transfers',
      'Daily breakfast & dinner',
    ],
    popular: true,
  },
  {
    id: 2,
    title: 'Dubai Luxury & Desert Safari Package',
    tier: 'Premium',
    price: '₹34,999',
    duration: '6 Days / 5 Nights',
    destination: 'Dubai, UAE',
    image: destDubai,
    highlights: [
      'Burj Khalifa 124th floor tickets',
      'Desert Safari with BBQ dinner',
      'Marina Dhow Dinner Cruise',
      '4-Star hotel stay with breakfast',
      'Express Dubai Visa assistance',
    ],
    popular: true,
  },
  {
    id: 3,
    title: 'Bhutan Himalayan Paradise Tour',
    tier: 'Exclusive',
    price: '₹24,999',
    duration: '6 Days / 5 Nights',
    destination: 'Bhutan',
    image: destBhutan,
    highlights: [
      'Paro Tiger’s Nest monastery trek',
      'Thimphu & Punakha sightseeing',
      'Traditional Bhutanese cultural show',
      'Full SDF & permit processing',
      '3-Star deluxe hotel & meals',
    ],
    popular: false,
  },
];

export const whyChooseUs = [
  {
    icon: '🗺️',
    title: 'Expert Guides',
    description: 'Our certified local guides bring destinations to life with authentic stories and insider knowledge.',
  },
  {
    icon: '💰',
    title: 'Best Prices',
    description: 'We guarantee competitive pricing without compromising on quality or experience.',
  },
  {
    icon: '🕐',
    title: '24/7 Support',
    description: 'Round-the-clock assistance ensures peace of mind throughout your entire journey.',
  },
  {
    icon: '🛡️',
    title: 'Safe Travel',
    description: 'Your safety is our priority with comprehensive travel insurance and vetted partners.',
  },
  {
    icon: '✏️',
    title: 'Custom Itineraries',
    description: 'Every trip is tailored to your preferences — from adventure-packed to relaxed getaways.',
  },
  {
    icon: '📋',
    title: 'Visa Assistance',
    description: 'Hassle-free visa processing with a 98% approval rate for all major destinations.',
  },
];

export const aboutStats = [
  { value: '12+', label: 'Years Experience' },
  { value: '50+', label: 'Countries Covered' },
  { value: '10K+', label: 'Happy Customers' },
  { value: '15+', label: 'Industry Awards' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    location: 'New York, USA',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Roamway Tours made our honeymoon absolutely magical! From the seamless visa process to the breathtaking Maldives resort, every detail was perfectly handled. Cannot recommend them enough!',
  },
  {
    id: 2,
    name: 'James Chen',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'I\'ve traveled with many agencies, but Roamway Tours stands out. Their attention to detail and personalized service transformed our family trip to Japan into an unforgettable adventure.',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'The visa assistance was incredibly smooth — approved in just 3 days! The Europe package exceeded all expectations. The guides were knowledgeable, and the hotels were stunning.',
  },
  {
    id: 4,
    name: 'Michael Torres',
    location: 'Sydney, Australia',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 4,
    text: 'Booked the Bali explorer package and it was worth every penny. The team handled everything perfectly, and the local experiences they arranged were the highlight of our trip.',
  },
  {
    id: 5,
    name: 'Emma Johansson',
    location: 'Stockholm, Sweden',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'As a solo traveler, I felt completely safe and looked after. The 24/7 support was reassuring, and my custom itinerary through Southeast Asia was perfectly planned.',
  },
];

export const footerLinks = {
  quickLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Packages', href: '#packages' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  destinations: [
    { label: 'Kerala, India', href: '#destinations' },
    { label: 'Dubai, UAE', href: '#destinations' },
    { label: 'Bhutan', href: '#destinations' },
    { label: 'Azerbaijan', href: '#destinations' },
    { label: 'Goa, India', href: '#destinations' },
    { label: 'Maldives', href: '#destinations' },
  ],
  contact: {
    address: 'Roamway Tours Plaza, Main Road, India',
    phone: '+91 8075571005',
    email: 'info@roamwaytours.com',
    hours: 'Mon - Sat: 9:00 AM - 8:00 PM',
  },
};
