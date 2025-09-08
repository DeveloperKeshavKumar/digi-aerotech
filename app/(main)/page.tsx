'use client';
import { Hero } from '@/components/homepage/hero';
import { Struggles } from '@/components/homepage/struggles';
import { WhyChooseUs } from '@/components/homepage/why-choose-us';
import { OurServices } from '@/components/homepage/our-services';
import { WhoWeWorkWith } from '@/components/homepage/who-we-work-with';
import { OurWork } from '@/components/homepage/our-work';
import { Testimonials } from '@/components/homepage/testimonials';
import { BusinessGrowthSection } from '@/components/homepage/business-growth';
import {
  ArrowRight,
  Smartphone,
  Search,
  Monitor,
  MapPin,
  Bot,
  Palette,
  ShoppingCart,
  TrendingUp,
  Book,
  Phone,
} from 'lucide-react';
import {
  IconChartLine,
  IconWorld,
  IconReportAnalytics,
  IconUsers,
  IconPuzzle,
  IconTool,
  IconFreeRights,
  IconPhone,
  IconFlame,
  IconStar,
  IconSocial,
  IconStarsFilled,
  IconUsersGroup,
  IconSchool,
  IconDeviceMobileX,
  IconDeviceMobileCode,
} from '@tabler/icons-react';
import { Companies } from '@/components/homepage/companies';
export default function Homepage() {
  return (
    <main>
      <Hero
        headlineKeywords={["Leads?", "Sales?", "Reach?", "Growth?", "Visibility?", "Revenue?", "Success?"]}
        brandLine="Call Digi Aerotech"
        subheadline="We solve real business problems through smart, performance - first digital marketing and tech solutions."
        ctaButtons={[
          { icon: <IconFreeRights size={30} />, text: "Get a Free Strategy Call", },
          { icon: <IconPhone size={30} />, text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
        ]}
        stats={[
          {
            icon: <IconUsersGroup size={34} className="fill-gray-600 dark:fill-gray-400" />,
            title: "140+ Clients",
            description: "Web solutions delivered"
          },
          {
            icon: <IconReportAnalytics size={34} />,
            title: "50L+ Leads",
            description: "Generated for our clients"
          },
          {
            icon: <IconSchool size={34} />,
            title: "10+ Years",
            description: "Expertise in market"
          },
          {
            icon: <IconStarsFilled size={34} />,
            title: "4.9/5 Rating",
            description: "From happy clients"
          }
        ]}
      />

      <Companies logos={[
        {
          image: '/logos/1.png',
        },
        {
          image: '/logos/2.png',
        },
        {
          image: '/logos/3.png',
        },
        {
          image: '/logos/4.png',
        },
        {
          image: '/logos/5.png',
        },
        {
          image: '/logos/6.png',
        },
        {
          image: '/logos/7.png',
        },
        {
          image: '/logos/8.png',
        },
        {
          image: '/logos/9.png',
        },
        {
          image: '/logos/10.png',
        },
        {
          image: '/logos/11.png',
        },
        {
          image: '/logos/12.png',
        },
        {
          image: '/logos/13.png',
        },
        {
          image: '/logos/14.png',
        },
        {
          image: '/logos/15.png',
        },
        {
          image: '/logos/16.png',
        },
        {
          image: '/logos/17.png',
        },
        {
          image: '/logos/18.png',
        },
        {
          image: '/logos/19.png',
        },
        {
          image: '/logos/20.png',
        },
        {
          image: '/logos/21.png',
        },
        {
          image: '/logos/22.png',
        },
        {
          image: '/logos/23.png',
        },
        {
          image: '/logos/24.png',
        },
        {
          image: '/logos/25.png',
        },
      ]}
        rows={2}
        speed="fast"
        title={[
          { text: 'Trusted By ' },
          { text: '140+ Businesses', gradient: true, gradientClass: "from-purple-500 via-pink-500 to-red-500" }
        ]}
        description='We are grateful to work with incredible clients 💖' />

      <Struggles
        title={[
          { text: "We're Not Just a " },
          { text: 'Marketing Team', gradient: true, gradientClass: "from-purple-500 via-pink-500 to-red-500" },
          { text: " - We're the Fix for " },
          { text: "What's Broken", gradient: true, gradientClass: "from-red-500 via-pink-500 to-yellow-500" }
        ]}
        subheadline="Most agencies sell you dreams. We solve real-world problems - the kind that cost you leads, sales, and growth."
        painPoints={[
          "No leads or poor-quality inquiries",
          "Non-converting website",
          "Poor local visibility on Google",
          "Dead social media pages",
          "Burnt by unreliable freelancers",
          "Wearing too many hats as a founder"
        ]}
        solutionPoints={[
          "High-quality leads through targeted ad campaigns",
          "Conversion-optimized websites with clear CTAs",
          "Dominant local SEO & Google Maps ranking",
          "Engaging social content that builds community",
          "Reliable, results-driven team with proven track record",
          "End-to-end marketing handled by experts"
        ]}
        cta={{ icon: <ArrowRight />, text: " Let's Solve This Together", link: "/contact" }}
      />

      <WhyChooseUs
        title={[
          { text: "Why " },
          { text: "Top Brands & Local Businesses", gradient: true, gradientClass: "from-purple-500 via-pink-500 to-red-500" },
          { text: " Trust " },
          { text: "Digi Aerotech", gradient: true, gradientClass: "from-red-500 via-pink-500 to-yellow-500" }
        ]}
        trustPoints={[
          {
            icon: <IconChartLine size={40} />,
            title: "Proven Results",
            description: "We don’t just promise, we deliver. From startups to established brands, Digi Aerotech has helped businesses achieve higher visibility, more leads, and measurable growth."
          },
          {
            icon: <IconWorld size={40} />,
            title: "Tailored Digital Strategies",
            description: "Every business is unique. Our team creates customized digital marketing solutions that match your goals, industry, and target audience for maximum ROI."
          },
          {
            icon: <IconReportAnalytics size={40} />,
            title: "End-to-End Services",
            description: "From Google Ads, Meta Ads, SEO, and Social Media Management to Website Development and GMB Optimization — we cover it all under one roof."
          },
          {
            icon: <IconUsers size={40} />,
            title: "Trusted by Brands & SMEs",
            description: "Whether it’s a top brand or a local business, clients trust us for consistency, transparency, and result-driven campaigns that scale with their growth."
          },
          {
            icon: <IconPuzzle size={40} />,
            title: "Data-Driven Marketing",
            description: "Our strategies are powered by in-depth analytics and performance tracking, ensuring your business gets the best value for every marketing investment."
          },
          {
            icon: <IconTool size={40} />,
            title: "Expert Team & Support",
            description: "With a skilled team of marketers, designers, and strategists, Digi Aerotech provides 24/7 support and expertise that businesses rely on for long-term success."
          }
        ]}
        cta={{
          text: "Book a Free Strategy Session",
          link: "/strategy-session",
          icon: <IconChartLine size={20} />
        }}
      />
      <OurServices
        title={[
          { text: "All-in-One " },
          { text: "Digital Growth Solutions", gradient: true, gradientClass: "from-red-500 via-pink-500 to-yellow-500" }
        ]}
        subheadline="From building your website to driving leads and managing your reputation — we do it all, so you don't have to."
        services={[
          {
            name: "Meta Ads (Facebook & Instagram)",
            icon: <Smartphone size={24} />,
            gridClass: "md:col-span-3 lg:col-span-4",
            description: "Reach your target audience with precision-targeted social media advertising campaigns.",
            tag: {
              icon: <IconFlame size={14} />,
              text: "Most Wanted",
              styles: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
            },
            url: "/meta-ads"
          },
          {
            name: "Google Ads (Search + Call)",
            icon: <Search size={24} />,
            gridClass: "md:col-span-3 lg:col-span-4",
            description: "Drive qualified leads with strategic search engine advertising.",
            tag: {
              icon: <IconStar size={14} />,
              text: "Top Rated"
            },
            url: "/google-ads"
          },
          {
            name: "Website Design & Development",
            icon: <Monitor size={24} />,
            gridClass: "md:col-span-6 lg:col-span-4",
            description: "Custom websites that convert visitors into customers.",
            url: "/web-design-development"
          },
          {
            name: "Local SEO & Google Business",
            icon: <MapPin size={24} />,
            gridClass: "md:col-span-2 lg:col-span-3",
            description: "Dominate local search results and get found by nearby customers.",
            url: "/local-seo"
          },
          {
            name: "Social Media Marketing",
            icon: <IconSocial size={24} />,
            gridClass: "md:col-span-2 lg:col-span-6",
            description: "Build brand awareness and engage with your audience across platforms. Our comprehensive social media services include content creation, community management, paid advertising, and analytics reporting. We help you establish a strong social presence on platforms to drive engagement and conversions.",
            tag: {
              icon: <TrendingUp size={14} />,
              text: "Fastest Growing",
              styles: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
            },
            url: "/social-media-marketing"
          },
          {
            name: "Landing Page Creation",
            icon: <Book size={24} />,
            gridClass: "md:col-span-2 lg:col-span-3",
            description: "High-converting landing pages designed for maximum results."
          },
          {
            name: "Mobile App Development",
            icon: <IconDeviceMobileCode size={24} />,
            gridClass: "md:col-span-3 lg:col-span-6",
            description: "Build powerful mobile apps that engage users. From native iOS and Android apps to cross-platform solutions, we deliver scalable, user-friendly applications that drive business growth. Expert in React Native and Flutter development.",
            url: "/mobile-apps-development"
          },
          {
            name: "Branding & Design",
            icon: <Palette size={24} />,
            gridClass: "md:col-span-3 lg:col-span-3",
            description: "Create a memorable brand identity that stands out from the competition.",
            url: "/gmb-services"
          },
          {
            name: "E-Commerce & Shopify",
            icon: <ShoppingCart size={24} />,
            gridClass: "md:col-span-6 lg:col-span-3",
            description: "Complete online store solutions to sell your products effectively.",
            tag: {
              icon: <IconFlame size={24} />,
              text: "Fastest Growing",
            },
            url: "/ecommerce-marketing"
          }
        ]}
        cta={{ text: "View All Services", link: "/services" }}
      />
      <WhoWeWorkWith
      />
      <OurWork
        title={[
          { text: "Our Work " },
          { text: "Speaks Louder Than Words", gradient: true, gradientClass: "from-orange-400 via-pink-500 to-red-500" }
        ]}
        videos={[
          {
            title: "Why Clients Trust Digi Aerotech 💼",
            youtubeId: "vLZW6BhFWrg"
          },
          {
            title: "Client Feedback for Digi Aerotech 🚀",
            youtubeId: "sN09gj21nTw"
          },
          {
            title: "What Our Clients Say 💬 | Digi Aerotech",
            youtubeId: "B3FnhScIp4E"
          },
          {
            title: "Real Testimonials from Real Clients 🎯",
            youtubeId: "g9Ut0rA1drg"
          },
        ]}
      // cta={{ text: "View Client Results", link: "/case-studies" }}
      />
      <Testimonials
        title={[
          { text: "Client " },
          { text: "Success Stories", gradient: true, gradientClass: "from-red-500 via-pink-500 to-yellow-500" }
        ]}
        description="Hear what our partners say about us"
        columns={3}
        highlightColor="text-green-600 dark:text-green-400 font-medium"
      />

      <BusinessGrowthSection
        growBizProps={{
          title: [
            { text: "We're Not Here to Just " },
            { text: "Impress You", gradient: true, gradientClass: "from-purple-500 via-pink-500 to-red-500" },
            { text: " - We're Here to " },
            { text: "Grow You.", gradient: true, gradientClass: "from-red-500 via-pink-500 to-yellow-500" }],
          subheadline: "Let's get you leads, visibility, and revenue - without the stress.",
          highlights: [
            "Transparent Process",
            "Fast Turnaround",
            "Real Results",
            "Trusted by 100+ Businesses"
          ],
          ctaButtons: [
            {
              icon: <IconFreeRights size={30} />, text: "Get a Free Strategy Call",
            },
            { icon: <Phone />, text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
          ]
        }}
        quickFormProps={{
          headline: "Ready to Get Started?",
          fields: [
            { name: "name", label: "Your Name", type: "text", required: true },
            { name: "business", label: "Business Name", type: "text", required: true },
            { name: "website", label: "Your Website / Instagram (if any)", type: "text" },
            {
              name: "services",
              label: "What Services Are You Interested In?",
              type: "select",
              options: [
                "Meta Ads",
                "Google Ads",
                "Website Development",
                "SEO",
                "Social Media",
                "Multiple Services"
              ]
            },
            { name: "phone", label: "Phone Number / WhatsApp", type: "tel", required: true },
            { name: "time", label: "Preferred Time to Contact You", type: "datetime-local" }
          ],
          cta: { text: "Book Free Strategy Call", action: "/submit-lead" }
        }}
      />
    </main>
  );
}