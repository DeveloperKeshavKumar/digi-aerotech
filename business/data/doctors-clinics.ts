import { BusinessData } from '@/types/business.types';
import {
  IconBrandMeta,
  IconBrandGoogle,
  IconBrandInstagram,
  IconBrandYoutube,
  IconMapSearch,
  IconShoppingCart,
  IconCode,
  IconSeo,
  IconDeviceMobile,
  IconCalendar,
  IconUsers,
  IconUsersGroup,
  IconRobot,
  IconChartArea,
  IconAd,
  IconTrophy,
  IconSettings,
  IconMapPin,
  IconBrandGooglePlay,
  IconTarget,
  IconStar,
  IconStethoscope,
  IconMail,
  IconPlanet,
  IconHeartbeat,
  IconTrendingUp,
  IconShield,
  IconUserCheck,
  IconMedicalCross
} from '@tabler/icons-react';
import React from 'react';

export const doctorsClinics: BusinessData = {
  id: '12',
  image: '/business/doctors-clinics-digital-marketing.webp',
  slug: 'doctors-clinics-digital-marketing',
  name: 'Doctors & Clinics Digital Marketing Agency',
  
  hero: {
    name: 'Healthcare Marketing Experts',
    initial: 'Grow Your Medical Practice with',
    headlineKeywords: [
      'Expert Medical Digital Marketing',
      'Patient Acquisition Strategies',
      'Healthcare Brand Building'
    ],
    brandLine: 'Get 4X More Patients & Build Medical Authority Online',
    subheadline: 'Our proven healthcare marketing strategies help doctors, clinics, and medical practices in India increase patient bookings by 380%, build medical authority, and enhance online reputation through compliant digital campaigns that attract quality patients seeking healthcare services.',
    ctaButtons: [
      {
        text: 'Get Free Medical Marketing Audit',
        link: '/free-medical-marketing-audit',
        variant: 'primary',
        icon: React.createElement(IconChartArea, { size: 20 })
      },
      {
        text: 'View Medical Success Stories',
        link: '/healthcare-marketing-case-studies',
        variant: 'secondary',
        icon: React.createElement(IconTrophy, { size: 20 })
      }
    ],
    backgroundImage: '/business/modern-medical-clinic.webp'
  },

  services: {
    title: 'Complete Medical & Healthcare Digital Marketing Services',
    subtitle: 'Everything Your Medical Practice Needs to Attract More Patients',
    description: 'Comprehensive digital marketing solutions designed specifically for doctors, clinics, hospitals, and healthcare professionals. Our patient-focused strategies help medical practices increase visibility, attract quality patients, build trust, and grow their practice through ethical and compliant healthcare marketing[1][2].',
    items: [
      {
        id: '360-digital-marketing',
        title: 'Complete Medical Digital Marketing',
        description: 'Integrated omnichannel marketing campaigns combining medical SEO, patient education content, reputation management, and healthcare-compliant advertising to maximize medical practice visibility and patient acquisition[3].',
        icon: React.createElement(IconPlanet, { size: 30 }),
        link: '/services/360-digital-marketing'
      },
      {
        id: 'meta-ads',
        title: 'Facebook & Instagram Medical Advertising',
        description: 'Targeted Meta advertising campaigns focusing on local patients, health awareness, and medical education with HIPAA-compliant content that builds trust and drives appointment bookings[4].',
        icon: React.createElement(IconBrandMeta, { size: 30 }),
        link: '/services/meta-ads'
      },
      {
        id: 'google-ads',
        title: 'Google Ads for Doctors',
        description: 'Strategic PPC campaigns targeting high-intent medical searches like "doctor near me", "specialist consultation", and symptom-based keywords that connect with patients actively seeking healthcare[5].',
        icon: React.createElement(IconBrandGoogle, { size: 30 }),
        link: '/services/google-ads'
      },
      {
        id: 'other-ads',
        title: 'YouTube & Healthcare Platform Advertising',
        description: 'Educational video content and medical advertising on YouTube and healthcare platforms to demonstrate expertise, share health tips, and attract patients through informative content[6].',
        icon: React.createElement(IconBrandYoutube, { size: 30 }),
        link: '/services/other-ads'
      },
      {
        id: 'local-seo',
        title: 'Medical Local SEO',
        description: 'Dominate "doctor near me" searches and location-based medical keywords like "[specialty] in [city]", "clinic near me" to ensure local patients find your practice first online[7].',
        icon: React.createElement(IconMapSearch, { size: 30 }),
        link: '/services/local-seo'
      },
      {
        id: 'ecommerce-marketing',
        title: 'Medical Appointment Booking Optimization',
        description: 'Conversion-optimized online appointment systems, telemedicine platforms, health packages, and patient portal integration that streamlines healthcare service delivery and booking processes.',
        icon: React.createElement(IconShoppingCart, { size: 30 }),
        link: '/services/ecommerce-marketing'
      },
      {
        id: 'web-design-development',
        title: 'Medical Website Development',
        description: 'HIPAA-compliant medical websites with appointment booking, patient portals, medical credentials showcase, health resources, and trust-building elements that convert visitors into patients[8].',
        icon: React.createElement(IconCode, { size: 30 }),
        link: '/services/web-design-development'
      },
      {
        id: 'social-media-marketing',
        title: 'Healthcare Social Media Marketing',
        description: 'Strategic medical social media management across Facebook, Instagram, and LinkedIn with health education content, patient testimonials, and community building that enhances medical authority[9].',
        icon: React.createElement(IconBrandInstagram, { size: 30 }),
        link: '/services/social-media-marketing'
      },
      {
        id: 'seo-services',
        title: 'Medical SEO Services',
        description: 'Comprehensive SEO for healthcare professionals targeting medical specialties, health conditions, treatment keywords, and local medical searches to increase organic patient acquisition[10].',
        icon: React.createElement(IconSeo, { size: 30 }),
        link: '/services/seo-services'
      },
      {
        id: 'gmb-services',
        title: 'Google Business Profile for Doctors',
        description: 'Optimized Google My Business profiles with medical credentials, patient reviews, clinic photos, appointment booking, and regular health tips to dominate local medical searches[11].',
        icon: React.createElement(IconMapPin, { size: 30 }),
        link: '/services/gmb-services'
      },
      {
        id: 'aso-services',
        title: 'Medical App Store Optimization',
        description: 'Improve visibility for healthcare and medical apps in app stores by optimizing for "doctor consultation", "health tracker", and "medical appointment" searches that patients use.',
        icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
        link: '/services/aso-services'
      },
      {
        id: 'mobile-apps-development',
        title: 'Custom Medical Mobile Applications',
        description: 'HIPAA-compliant healthcare apps with telemedicine capabilities, appointment scheduling, patient records, health monitoring, and secure communication for enhanced patient care.',
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        link: '/services/mobile-apps-development'
      },
      {
        id: 'website-maintenance',
        title: 'Medical Website Maintenance',
        description: 'Ongoing healthcare website support including medical content updates, appointment system maintenance, patient portal management, and HIPAA compliance monitoring.',
        icon: React.createElement(IconSettings, { size: 30 }),
        link: '/services/website-maintenance'
      },
      {
        id: 'leads-generation',
        title: 'Patient Lead Generation',
        description: 'Multi-channel patient acquisition using health screenings, medical webinars, symptom checkers, and conversion-optimized campaigns that attract patients seeking quality healthcare[12].',
        icon: React.createElement(IconUsers, { size: 30 }),
        link: '/services/leads-generation'
      },
      {
        id: 'marketing-automation',
        title: 'Healthcare Marketing Automation',
        description: 'Automated patient communication, appointment reminders, follow-up care messages, health tips delivery, and patient retention campaigns designed for medical practice workflows[13].',
        icon: React.createElement(IconRobot, { size: 30 }),
        link: '/services/marketing-automation'
      }
    ]
  },

  stats: {
    title: "Proven Healthcare Marketing Results",
    subtitle: "Data-Driven Success for Medical Practices",
    items: [
      {
        icon: React.createElement(IconTrendingUp, { size: 30 }),
        title: 'Patient Growth',
        value: '380%',
        description: 'Average increase in new patient appointments within 120 days of our healthcare marketing campaigns',
      },
      {
        icon: React.createElement(IconTarget, { size: 30 }),
        title: 'Appointment Bookings',
        value: '4.5X',
        description: 'Improvement in online appointment booking rates and patient conversion through optimized medical funnels',
      },
      {
        icon: React.createElement(IconShield, { size: 30 }),
        title: 'Online Reputation',
        value: '320%',
        description: 'Growth in positive patient reviews and medical practice reputation scores across all platforms',
      },
      {
        icon: React.createElement(IconStar, { size: 30 }),
        title: 'Patient Satisfaction',
        value: '4.9/5',
        description: 'Average improvement in patient experience and medical service recommendation rates',
      },
    ]
  },

  testimonials: {
    title: [
      { text: "Medical Practice " },
      { text: "Success Stories", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
    ],
    subtitle: "How We've Helped Doctors & Clinics Grow Their Patient Base",
    description: "Read testimonials from successful doctors, medical specialists, and clinic owners who have transformed their patient acquisition with our healthcare-focused digital marketing expertise.",
    items: [
      {
        id: '1',
        message: 'Our cardiology clinic\'s patient bookings increased by 420% within 6 months of working with this team. Their Google My Business optimization and medical SEO strategies got us ranking #1 for "cardiologist Mumbai" and we now have a 3-week waiting list.',
        highlight: 'patient bookings increased by 420% and #1 ranking',
        stars: 5,
        name: 'Dr. Rajesh Sharma',
        designation: 'Cardiologist',
        company: 'Heart Care Clinic Mumbai'
      },
      {
        id: '2',
        message: 'The Facebook and Instagram campaigns they created for our dental practice brought in 240 new patients in 4 months. The educational content about oral health they produce has positioned us as the go-to dental experts in our area.',
        highlight: '240 new patients in 4 months',
        stars: 5,
        name: 'Dr. Priya Patel',
        designation: 'Dental Surgeon',
        company: 'Smile Dental Care Ahmedabad'
      },
      {
        id: '3',
        message: 'As a dermatologist, visual content is crucial for my practice. Their social media marketing showcasing before/after results and skin care tips increased my consultation bookings by 350% and established my authority in cosmetic dermatology.',
        highlight: 'consultation bookings increased by 350%',
        stars: 5,
        name: 'Dr. Kavya Reddy',
        designation: 'Dermatologist',
        company: 'Glow Skin Clinic Hyderabad'
      },
      {
        id: '4',
        message: 'Their patient lead generation system for our multi-specialty clinic has been phenomenal. We now receive 150+ qualified patient inquiries monthly, and our appointment booking rate improved by 80% through their automated systems.',
        highlight: '150+ qualified inquiries monthly and 80% better booking rate',
        stars: 5,
        name: 'Dr. Suresh Kumar',
        designation: 'Medical Director',
        company: 'City Hospital Bangalore'
      },
      {
        id: '5',
        message: 'The telemedicine app they developed for our clinic during COVID became our biggest revenue generator. Patient consultations increased by 500% and we now serve patients across 3 states through the platform.',
        stars: 4,
        name: 'Dr. Meera Gupta',
        designation: 'General Physician',
        company: 'HealthFirst Clinic Delhi'
      },
      {
        id: '6',
        message: 'Their healthcare marketing automation has streamlined our patient communication. Appointment no-shows reduced by 60% and patient satisfaction scores reached 4.8/5 through personalized follow-ups and health reminders.',
        highlight: '60% reduction in no-shows and 4.8/5 satisfaction',
        stars: 5,
        name: 'Dr. Vikram Singh',
        designation: 'Orthopedic Surgeon',
        company: 'Joint Care Center Pune'
      }
    ],
  },

  cta: {
    title: 'Ready to Transform Your Medical Practice?',
    subtitle: 'Get More Patients, Build Medical Authority, Grow Your Healthcare Business',
    description: 'Schedule your free healthcare marketing consultation today. Our medical marketing experts will analyze your current patient acquisition strategies and show you exactly how to attract more quality patients while maintaining medical ethics and compliance.',
    backgroundColor: 'bg-gradient-to-r from-gray-900 to-black',
  },

  showSections: {
    hero: true,
    companies: false,
    services: true,
    stats: true,
    testimonials: true,
    cta: true,
  }
};
