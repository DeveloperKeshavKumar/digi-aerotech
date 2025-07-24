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
  Utensils,
  Hotel,
  Stethoscope,
  Dumbbell,
  Shirt,
  Home,
  Briefcase,
  Store,
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
} from '@tabler/icons-react';
import { Companies } from '@/components/homepage/comapnies';
export default function Homepage() {
  return (
    <main>
      <Hero
        headlineKeywords={["Leads", "Sales", "Reach", "Growth", "Visibility", "Revenue", "Success"]}
        brandLine="Call Digi Aerotech"
        subheadline="We solve real business problems through smart, performance - first digital marketing and tech solutions."
        ctaButtons={[
          { icon: <IconFreeRights size={30} />, text: "Get a Free Strategy Call", link: "/" },
          { icon: <IconPhone size={30} />, text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
        ]}
        stats={[
          {
            icon: <IconUsersGroup size={34} className='fill-gray-600 dark:fill-gray-400' />,
            title: "140+ Clients",
            description: "Trusted by over 140 businesses"
          },
          {
            icon: <IconReportAnalytics size={34} />,
            title: "50 Lac+",
            description: "leads generated"
          },
          {
            icon: <IconSchool size={34} />,
            title: "10+ Years",
            description: "of experience in market"
          },
          {
            icon: <IconStarsFilled size={34} />,
            title: "4.9 Stars",
            description: "Avg. rating from happy clients"
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
          { text: '140+ Businesses', gradient:true, gradientClass: "from-purple-500 via-pink-500 to-red-500" }
        ]}
        description='We are grateful to work with incredible clients 💖' />

      <Struggles
        title={[
          { text: "We're Not Just a " },
          { text: 'Marketing Team', gradient: true, gradientClass: "from-purple-500 via-pink-500 to-red-500" },
          { text: " Team - We're the Fix for " },
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
            title: "Proven ROI Focus",
            description: "We track revenue-impacting metrics, not just vanity numbers"
          },
          {
            icon: <IconWorld size={40} />,
            title: "Global Expertise",
            description: "International experience with local market understanding"
          },
          {
            icon: <IconReportAnalytics size={40} />,
            title: "Transparent Reporting",
            description: "Real-time dashboards showing exactly how your budget performs"
          },
          {
            icon: <IconUsers size={40} />,
            title: "Dedicated Team",
            description: "In-house experts (no freelancers) working on your account"
          },
          {
            icon: <IconPuzzle size={40} />,
            title: "Custom Strategies",
            description: "Tailored solutions matching your unique business goals"
          },
          {
            icon: <IconTool size={40} />,
            title: "Full-Service Approach",
            description: "All digital marketing services under one roof"
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
          },
          {
            name: "Website Design & Development",
            icon: <Monitor size={24} />,
            gridClass: "md:col-span-6 lg:col-span-4",
            description: "Custom websites that convert visitors into customers.",
          },
          {
            name: "Local SEO & Google Business",
            icon: <MapPin size={24} />,
            gridClass: "md:col-span-2 lg:col-span-3",
            description: "Dominate local search results and get found by nearby customers."
          },
          {
            name: "Social Media Marketing",
            icon: <IconSocial size={24} />,
            gridClass: "md:col-span-2 lg:col-span-6",
            description: "Build brand awareness and engage with your audience across platforms.",
            tag: {
              icon: <TrendingUp size={14} />,
              text: "Fastest Growing",
              styles: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
            }
          },
          {
            name: "Landing Page Creation",
            icon: <Book size={24} />,
            gridClass: "md:col-span-2 lg:col-span-3",
            description: "High-converting landing pages designed for maximum results."
          },
          {
            name: "CRM/Lead Automation",
            icon: <Bot size={24} />,
            gridClass: "md:col-span-3 lg:col-span-6",
            description: "Streamline your sales process with intelligent automation.",
          },
          {
            name: "Branding & Design",
            icon: <Palette size={24} />,
            gridClass: "md:col-span-3 lg:col-span-3",
            description: "Create a memorable brand identity that stands out from the competition."
          },
          {
            name: "E-Commerce & Shopify",
            icon: <ShoppingCart size={24} />,
            gridClass: "md:col-span-6 lg:col-span-3",
            description: "Complete online store solutions to sell your products effectively.",
            tag: {
              icon: <IconFlame size={24} />,
              text: "Fastest Growing",
            }
          }
        ]}
        cta={{ text: "View All Services", link: "/services" }}
      />
      <WhoWeWorkWith
        title={[
          { text: "Who we " },
          { text: "work with?", gradient: true, gradientClass: "from-red-500 via-pink-500 to-yellow-500" }
        ]}
        description="We work with businesses across these industries"
        speed='fast'
        rows={3}
        industries={[
          {
            name: "Restaurants & Cafes",
            url: "/restaurants",
            icon: <Utensils className="w-5 h-5" />
          },
          {
            name: "Hotels & Resorts",
            url: "/hotels",
            icon: <Hotel className="w-5 h-5" />
          },
          {
            name: "Doctors & Clinics",
            url: "/clinics",
            icon: <Stethoscope className="w-5 h-5" />
          },
          {
            name: "Gyms & Fitness",
            url: "/gyms",
            icon: <Dumbbell className="w-5 h-5" />
          },
          {
            name: "Fashion Brands",
            url: "/brands",
            icon: <Shirt className="w-5 h-5" />
          },
          {
            name: "Real Estate",
            url: "/real-estate",
            icon: <Home className="w-5 h-5" />
          },
          {
            name: "Consultants",
            url: "/consultants",
            icon: <Briefcase className="w-5 h-5" />
          },
          {
            name: "Local Shops",
            url: "/locals",
            icon: <Store className="w-5 h-5" />
          },
          {
            name: "eCommerce",
            url: "/ecommerce",
            icon: <ShoppingCart className="w-5 h-5" />
          },
        ]}
      />
      <OurWork
        title={[
          { text: "Our Work " },
          { text: "Speaks Louder Than Words", gradient: true, gradientClass: "from-orange-400 via-pink-500 to-red-500" }
        ]}
        examples={[
          {
            title: "How We Generated 142 Travel Leads in 10 Days",
            link: "/case-studies/travel-leads"
          },
          {
            title: "Doctor in Gurgaon Ranked #1 on Google Maps in 21 Days",
            link: "/case-studies/doctor-seo"
          },
          {
            title: "From Zero to 7 ROAS in Shopify Store with Ads + Retargeting",
            link: "/case-studies/ecommerce-roas"
          }
        ]}
        cta={{ text: "🎥 View Case Studies / Client Results", link: "/case-studies" }}
      />
      <Testimonials
        title={[
          { text: "Client " },
          { text: "Success Stories", gradient: true, gradientClass: "from-red-500 via-pink-500 to-yellow-500" }
        ]}
        description="Hear what our partners say about us"
        columns={3}
        highlightColor="text-green-600 dark:text-green-400 font-medium"
        testimonials={[
          {
            id: "1",
            message: "I would like to share my experience working with Mr. Deepak. He has been a great support in helping me grow my business. He handled everything from designing my website to managing my social media and overall digital marketing.Thanks to Mr. Deepak, my business is running successfully now—much better than before I met him. I truly appreciate his efforts and the best work he has done for my business.",
            stars: 5,
            name: "Arun",
            designation: "Marketing Director",
            company: "SDS Tourism"
          },
          {
            id: "2",
            message: "I have been working on couple of projects with Digi Aerotech and the experience has been amazing. Their immense talent in building websites to marketing is truly outstanding. I would definitely recommend them for one stop solution for all your website and marketing needs.",
            highlight: "I have been working on couple of projects with Digi Aerotech and the experience has been amazing",
            stars: 4.5,
            name: "Sharath Tc",
            designation: "CTO",
          },
          {
            id: "3",
            image: '/logo.svg',
            message: "I have been associated with him for 4-5 months and I am getting my company's work done through him and I am very happy with his work. I don't have even 1% complaint with his work... The best part is that if you want to make any changes or additions or want to suggest something, let me know. The reply comes within 5 minutes. I liked this the most about him... and his team also keeps their work good...",
            stars: 5,
            name: "Abhishek Singh",
            designation: "Manager",
          },
          {
            id: "4",
            message: "We’re thrilled to announce our partnership with Digi Aerotech for all our digital marketing solutions. After working closely with their team, we truly believe they are one of the best agencies out there for growing startups looking to:✅ Boost online leads✅ Increase conversion rates✅ Establish a strong digital presence.If you’re a startup aiming to scale digitally, Digi Aerotech is the team you want by your side!",
            stars: 5,
            name: "Aman Kumar",
            designation: "Director",
          },
          {
            id: "5",
            message: "Mr. Deepak is professional and the best thing is he first understand the requirement of customer then he does best and authentic accordingly to his knowledge.",
            stars: 4.5,
            name: "Aman Sharma",
            designation: "Director",
          },
          {
            id: "6",
            message: "The best digital market agency one can trust.Very Effective Team & Absolutely amazing work🧿",
            stars: 4.5,
            name: "Priyanshi Lohia",
            designation: "Director",
            company: "Delta Co"
          },
          {
            id: "7",
            message: "I am connected with Deepak and he and his team are very good at their work. They are flexible and will support you as per your requirement. Highly recommend",
            stars: 4.5,
            name: "Priyanka Joshi",
            designation: "Director",
          },
          {
            id: "8",
            message: "The most important thing what a client looks for is mutual understanding with service provider and Digi Aerotech exactly showed their true customer service by working hand in hand patience.I will highly recommend their services for website development",
            stars: 4.5,
            name: "Gaurav Negi",
            designation: "Director",
          },
          {
            id: "9",
            message: "Good services and approach to cover the market, we are using their services from last 1 year and the result is very impressive from our all social handles & SEO level.",
            stars: 4.5,
            name: "Sahil Chopra",
            designation: "Owner",
          },
          {
            id: "10",
            message: "I have a such amazing service giving by Deepak goyal so I will inform my other friends to make there self brand items catalogue.",
            stars: 5,
            name: "Yuvi Bajaj",
            designation: "Director",
          },
          {
            id: "11",
            message: "Good service , they maintain good TAT.",
            image: '/logo.svg',
            stars: 5,
            name: "Mukaram",
            designation: "Owner",
          },
          {
            id: "11",
            message: "They are the best people for startup’s 👍",
            stars: 5,
            name: "Ankit Sehra",
            designation: "Director",
          },
        ]
        }
      />

      <BusinessGrowthSection
        growBizProps={{
          title: "We're Not Here to Just Impress You - We're Here to Grow You.",
          subheadline: "Let's get you leads, visibility, and revenue - without the stress.",
          highlights: [
            "Transparent Process",
            "Fast Turnaround",
            "Real Results",
            "Trusted by 100+ Businesses"
          ],
          ctaButtons: [
            {
              icon: <IconFreeRights size={30} />, text: "Get a Free Strategy Call", link: "/strategy-call"
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