import destBali from '../assets/dest_bali.png';
import destMaldives from '../assets/dest_maldives.png';
import destSantorini from '../assets/dest_santorini.png';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Holidays', href: '#packages', hasDropdown: true },
  { label: 'Destinations', href: '#destinations', hasDropdown: true },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const heroStats = [
  { icon: '🌍', value: '150+', label: 'Destinations' },
  { icon: '🧳', value: '10K+', label: 'Happy Travellers' },
  { icon: '✅', value: '98%', label: 'Visa Approval' },
];

export const destinations = [
  {
    id: 1,
    name: 'Bali',
    country: 'Indonesia',
    image: destBali,
    description: 'Discover ancient temples, lush rice terraces, and pristine beaches in this tropical paradise.',
    price: 'From $899',
    rating: 4.8,
    duration: '5-7 Days',
  },
  {
    id: 2,
    name: 'Paris',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop',
    description: 'The city of love awaits with iconic landmarks, world-class cuisine, and timeless charm.',
    price: 'From $1,299',
    rating: 4.9,
    duration: '4-6 Days',
  },
  {
    id: 3,
    name: 'Maldives',
    country: 'Maldives',
    image: destMaldives,
    description: 'Crystal-clear waters, overwater villas, and vibrant coral reefs for the ultimate escape.',
    price: 'From $1,599',
    rating: 4.9,
    duration: '5-8 Days',
  },
  {
    id: 4,
    name: 'Dubai',
    country: 'UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop',
    description: 'Experience futuristic architecture, luxury shopping, and desert adventures in one city.',
    price: 'From $999',
    rating: 4.7,
    duration: '4-5 Days',
  },
  {
    id: 5,
    name: 'Santorini',
    country: 'Greece',
    image: destSantorini,
    description: 'White-washed villages perched on cliffs overlooking the stunning Aegean Sea.',
    price: 'From $1,199',
    rating: 4.8,
    duration: '4-6 Days',
  },
  {
    id: 6,
    name: 'Tokyo',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop',
    description: 'A captivating blend of ancient tradition and cutting-edge technology awaits.',
    price: 'From $1,099',
    rating: 4.8,
    duration: '5-7 Days',
  },
];

export const packages = [
  {
    id: 1,
    title: 'Explorer Essentials',
    tier: 'Budget',
    price: '$599',
    duration: '4 Days / 3 Nights',
    destination: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&h=350&fit=crop',
    highlights: [
      'Guided city tours',
      'Airport transfers',
      '3-star accommodation',
      'Daily breakfast',
      'Local experiences',
    ],
    popular: false,
  },
  {
    id: 2,
    title: 'Premium Getaway',
    tier: 'Premium',
    price: '$1,299',
    duration: '6 Days / 5 Nights',
    destination: 'Europe',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=350&fit=crop',
    highlights: [
      'Private guided tours',
      'Business class transfers',
      '4-star boutique hotel',
      'All meals included',
      'Cultural workshops',
      'Travel insurance',
    ],
    popular: true,
  },
  {
    id: 3,
    title: 'Luxury Escape',
    tier: 'Luxury',
    price: '$2,999',
    duration: '8 Days / 7 Nights',
    destination: 'Maldives & Dubai',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=350&fit=crop',
    highlights: [
      'Personal concierge',
      'First-class flights',
      '5-star luxury resort',
      'Fine dining experiences',
      'Spa & wellness package',
      'Private excursions',
      'Yacht tour',
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
    { label: 'Bali, Indonesia', href: '#' },
    { label: 'Paris, France', href: '#' },
    { label: 'Maldives', href: '#' },
    { label: 'Dubai, UAE', href: '#' },
    { label: 'Santorini, Greece', href: '#' },
    { label: 'Tokyo, Japan', href: '#' },
  ],
  contact: {
    address: '123 Travel Avenue, Suite 400, New York, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'hello@roamwaytours.com',
    hours: 'Mon - Sat: 9:00 AM - 8:00 PM',
  },
};
