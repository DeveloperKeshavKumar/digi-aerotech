"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { inView } from 'motion';
import { ArrowRight } from 'lucide-react';
import { StatsSection } from "@/components/stats-section";
import { IconFreeRights, IconPhone, IconReportAnalytics, IconSchool, IconStars, IconStarsFilled, IconUsersGroup } from "@tabler/icons-react";
import { Hero } from '@/components/homepage/hero';
import { ServiceList } from '@/components/services/service-list';
import { CTA } from '@/components/services/cta-section';
import { Companies } from '@/components/homepage/companies';
import { Struggles } from '@/components/homepage/struggles';

export default function ServicesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => setVisible(true), { margin: '-100px' });
    }
  }, []);

  const servicesData = [
    {
      id: 1,
      title: "360 Digital Marketing",
      description: "End-to-end digital marketing solutions covering all channels for holistic brand growth and maximum ROI.",
      image: "/services/digital-marketing.png",
      url: "360-digital-marketing"
    },
    {
      id: 2,
      title: "Meta Ads",
      description: "Targeted advertising campaigns across Facebook, Instagram, and WhatsApp to reach your ideal audience.",
      image: "/services/meta-ads.png",
      url: "meta-ads"
    },
    {
      id: 3,
      title: "Google Ads",
      description: "Performance-driven Google Search, Display, and YouTube ads that convert visitors into customers.",
      image: "/services/google-ads.png",
      url: "google-ads"
    },
    {
      id: 4,
      title: "Other Ads",
      description: "Specialized advertising on LinkedIn, Twitter, Snapchat, and emerging platforms to diversify your reach.",
      image: "/services/social-ads.webp",
      url: "other-ads"
    },
    {
      id: 5,
      title: "Local SEO",
      description: "Dominate local search results and Google Maps to drive foot traffic and local online visibility.",
      image: "/services/local-seo.png",
      url: "local-seo"
    },
    {
      id: 6,
      title: "Ecommerce Marketing",
      description: "Boost online store sales with conversion-optimized product listings, ads, and remarketing strategies.",
      image: "/services/ecommerce.jpeg",
      url: "ecommerce-marketing"
    },
    {
      id: 7,
      title: "Web Design & Development",
      description: "Custom, high-performance websites that blend stunning design with seamless functionality.",
      image: "/services/web-dev.png",
      url: "web-design-development"
    },
    {
      id: 8,
      title: "Social Media Marketing",
      description: "Strategic content and engagement plans to build brand loyalty and organic growth across platforms.",
      image: "/services/social-media.jpeg",
      url: "social-media-marketing"
    },
    {
      id: 9,
      title: "SEO Services",
      description: "Sustainable organic growth through technical optimization, content strategy, and authoritative backlinks.",
      image: "/services/seo.png",
      url: "seo-services"
    },
    {
      id: 10,
      title: "GMB Services",
      description: "Optimize and manage your Google Business Profile to enhance local discoverability and credibility.",
      image: "/services/gmb.webp",
      url: "gmb-services"
    },
    {
      id: 11,
      title: "ASO Services",
      description: "Increase app store visibility and downloads through keyword optimization and conversion-focused listings.",
      image: "/services/aso.jpeg",
      url: "aso-services"
    },
    {
      id: 12,
      title: "Mobile App Development",
      description: "Build intuitive, scalable mobile applications for iOS and Android with cutting-edge technologies.",
      image: "/services/mobile-app.jpg",
      url: "mobile-apps-development"
    },
    {
      id: 13,
      title: "Website Maintenance",
      description: "Ongoing updates, security patches, and performance tuning to keep your site running flawlessly.",
      image: "/services/maintenance.jpg",
      url: "website-maintenance"
    },
    {
      id: 14,
      title: "Leads Generation",
      description: "Data-driven campaigns to capture high-quality leads and fill your sales pipeline consistently.",
      image: "/services/leads.jpg",
      url: "leads-generation"
    },
    {
      id: 15,
      title: "Marketing Automation",
      description: "Streamline workflows with automated email sequences, chatbots, and CRM integrations for scalable growth.",
      image: "/services/automation.jpg",
      url: "marketing-automation"
    }
  ];

  return (
    <section ref={sectionRef} className="">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
        transition={{ duration: 0.6 }}
      >
        <Hero
          headlineKeywords={["Innovation", "Excellence", "Expertise", "Performance"]}
          brandLine="Elevate Your Brand"
          subheadline="Expert solutions for modern digital challenges. From strategy to execution, we drive results that matter."
          ctaButtons={[
        { icon: <IconFreeRights size={30} />, text: "Get a Consultation", link: "/" },
        { icon: <IconPhone size={30} />, text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
          ]}
          stats={[
        {
          icon: <IconUsersGroup size={34} />,
          title: "200+ Projects",
          description: "Successful campaigns"
        },
        {
          icon: <IconReportAnalytics size={34} />,
          title: "500K+ ",
          description: "Impressions done"
        },
        {
          icon: <IconStars size={34} />,
          title: "4.9/5 Rating",
          description: "Client satisfaction"
        },
        {
          icon: <IconSchool size={34} />,
          title: "10+ Years",
          description: "Industry experience"
        }
          ]}
        />
      </motion.div>

      <Companies />

      <Struggles
        title={[
          { text: "Struggling with " },
          { text: "Fragmented Digital Services?", gradient: true, gradientClass: "from-purple-500 via-pink-500 to-red-500" }
        ]}
        subheadline="In today's fast-paced digital world, disjointed strategies can stall your growth. Our services are designed to address the full spectrum of your digital needs."
        painPoints={[
          "Fragmented marketing strategy across channels",
          "Inefficient ad spend and underperforming campaigns",
          "Non-responsive or outdated website design",
          "Low online visibility and poor local SEO",
          "Difficulty in tracking and measuring ROI",
          "Overwhelmed by countless digital service options"
        ]}
        solutionPoints={[
          "Unified strategy across digital channels",
          "Conversion-optimized ad campaigns",
          "Modern, responsive web designs",
          "Robust local SEO and online presence",
          "Transparent performance tracking",
          "Tailored solutions that drive measurable growth"
        ]}
        cta={{ icon: <ArrowRight />, text: "Discover Our Services", link: "/contact" }}
      />

      <div className=" mx-auto bg-gray-50 dark:bg-gray-950">
        <ServiceList
          title={[
            { text: "Explore " },
            { text: "Our Digital Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
          ]}
          services={servicesData}
        />
      </div>

      <CTA
        title="Want to accelerate your digital growth?"
        subtitle="Your success is our priority"
        description="Reach out to us for tailored strategies that guarantee results."
      />
    </section>
  );
}