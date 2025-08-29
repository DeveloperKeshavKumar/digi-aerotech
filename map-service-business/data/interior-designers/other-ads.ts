import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconBrandPinterest,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandSnapchat,
  IconArrowRight,
  IconBrush,
  IconHome,
  IconUsers,
  IconTrendingUp,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "other-ads",
  business: "interior-designers",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant2",
    process: "variant3",
    testimonials: "variant1",
  },
  data: {
    slug: "other-ads-interior-designers",
    showSections: {
      hero: true,
      whyChooseUs: true,
      process: true,
      testimonials: true,
      cta: true,
    },
    customSections: [
      {
        component: Struggles,
        position: "beforeWhyChooseUs",
        props: {
          title: [
            { text: "Why Interior Designers", gradient: false },
            { text: "Need Other Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Design inspiration is consumed daily on YouTube, Pinterest, LinkedIn, TikTok, and Snapchat. If your business isn’t advertising there, you’re missing premium clients and viral growth opportunities.",
          painPoints: [
            "Low online visibility beyond Facebook & Google",
            "Struggling to attract high-value projects",
            "Competitors gaining traction with video ads",
            "No presence on Pinterest or TikTok where clients explore design ideas",
            "Wasted budget on unoptimized ad campaigns",
          ],
          solutionPoints: [
            "Run Pinterest Ads to showcase design boards & inspirations",
            "Leverage YouTube Ads for immersive design walkthroughs",
            "Use LinkedIn Ads for B2B interior design projects",
            "Tap into TikTok & Snapchat for viral design content",
            "Precise targeting that maximizes ROI & leads",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Start My Ad Campaigns",
          },
        },
      },
      {
        component: FaqSection,
        position: "afterTestimonials",
        props: {
          faqs: [
            {
              id: "faq-1",
              question: "Which platforms work best for interior design ads?",
              answer:
                "Pinterest, YouTube, and TikTok are highly effective for showcasing visual design inspiration, while LinkedIn helps target corporate projects.",
              icon: React.createElement(IconBrandPinterest, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can video ads really bring interior clients?",
              answer:
                "Yes! YouTube & TikTok ads showcasing transformations, 3D tours, or before-after projects drive strong engagement & client inquiries.",
              icon: React.createElement(IconBrandYoutube, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do small studios benefit from these ads?",
              answer:
                "Absolutely. Even independent designers gain visibility, build trust, and win projects by running well-targeted campaigns on visual platforms.",
              icon: React.createElement(IconBrandTiktok, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Expand Your Reach Beyond Google & Facebook",
      headlineKeywords: ["YouTube Ads", "Pinterest Ads", "TikTok Ads"],
      brandLine: [
        {
          text: "🎥 Show Designs. Inspire Audiences. Win Projects.",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help interior designers launch high-impact ad campaigns across YouTube, Pinterest, TikTok, LinkedIn & Snapchat — capturing attention, driving inquiries, and winning premium projects.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Launch My Ad Campaigns",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconBrandPinterest, { size: 32 }),
          title: "Pinterest Reach",
          description: "65% of users search for home & office design inspiration.",
        },
        {
          icon: React.createElement(IconBrandYoutube, { size: 32 }),
          title: "Video Impact",
          description: "Video ads double client engagement compared to static posts.",
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "High-Value Clients",
          description: "Target homeowners, offices & builders actively seeking design.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Other Ads?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrandPinterest, { size: 28 }),
          title: "Pinterest Ad Expertise",
          description: "Drive inspiration-led inquiries with stunning ad creatives.",
        },
        {
          icon: React.createElement(IconBrandYoutube, { size: 28 }),
          title: "YouTube Walkthroughs",
          description: "Engage clients with before-after projects & 3D tours.",
        },
        {
          icon: React.createElement(IconBrandLinkedin, { size: 28 }),
          title: "LinkedIn B2B Ads",
          description: "Attract real estate builders, offices, and corporate projects.",
        },
      ],
      cta: {
        text: "Run My Campaigns",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Other Ads Process",
      subtitle: "VISUAL • TARGET • CONVERT",
      description:
        "We create performance-driven ad campaigns across visual & professional platforms that inspire, engage, and convert into leads for interior designers.",
      steps: [
        {
          id: 1,
          title: "Market Research",
          description: "Identify where your ideal design clients spend their time — Pinterest, YouTube, TikTok, or LinkedIn.",
        },
        {
          id: 2,
          title: "Creative Production",
          description: "Design stunning videos, graphics & story ads that showcase your interior expertise.",
        },
        {
          id: 3,
          title: "Targeting & Setup",
          description: "Run ads with precision targeting — homeowners, businesses, architects, and builders.",
        },
        {
          id: 4,
          title: "Optimization",
          description: "Track engagement, optimize budget, and scale ads that perform best.",
        },
        {
          id: 5,
          title: "Reporting",
          description: "Deliver detailed insights into ad performance, leads, and ROI.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Interior Designers", gradient: false },
        { text: "Winning with Other Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "From Pinterest boards to YouTube tours, our ad strategies help interior designers inspire audiences, build credibility, and attract more clients.",
      testimonials: [
        {
          id: "1",
          message:
            "Our YouTube ad showcasing a living room transformation went viral and brought in 20+ new inquiries within a week!",
          highlight: "Video Ads Success",
          stars: 5,
          name: "Ananya Rao",
          designation: "Founder",
          company: "Studio Aura Interiors",
        },
        {
          id: "2",
          message:
            "Pinterest ads helped us showcase our portfolio directly to homeowners searching for design inspiration. Highly recommended!",
          highlight: "Pinterest Growth",
          stars: 5,
          name: "Kunal Sharma",
          designation: "Creative Director",
          company: "Elite Interiors",
        },
      ],
    },
    cta: {
      title: "Run High-Impact Ads Beyond Google & Facebook",
      subtitle: "INSPIRE • ENGAGE • CONVERT",
      description:
        "Your next big project could come from a client scrolling Pinterest, YouTube, or TikTok. Let’s make sure they find and choose your interior design brand.",
    },
  },
};
