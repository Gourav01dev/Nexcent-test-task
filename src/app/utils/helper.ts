export const navItems = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#" },
  { name: "Community", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Pricing", href: "#" },
];
export const clientImages = [
  "/images/clients/client-1.svg",
  "/images/clients/client-2.svg",
  "/images/clients/client-3.svg",
  "/images/clients/client-4.svg",
  "/images/clients/client-5.svg",
  "/images/clients/client-6.svg",
  "/images/clients/client-3.svg",
];
export const slides = [
  {
    title: "Lessons and insights",
    highlightedText: "from 8 years",
    description:
      "Where to grow your business as a photographer: site or social media?",
    image: "/images/Illustration.png",
  },
  {
    title: "Lessons and insights",
    highlightedText: "from 8 years",
    description:
      "Where to grow your business as a photographer: site or social media?",
    image: "/images/Illustration.png",
  },
  {
    title: "Lessons and insights",
    highlightedText: "from 8 years",
    description:
      "Where to grow your business as a photographer: site or social media?",
    image: "/images/Illustration.png",
  },
];
export const features = [
  {
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: "/images/features/icon-1.svg",
  },
  {
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: "/images/features/icon-2.svg",
  },
  {
    title: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: "/images/features/icon-3.svg",
  },
];
export const stats = [
  {
    number: "2,245,341",
    label: "Members",
    image: "/images/statsSection/Icons-1.svg",
  },
  {
    number: "46,328",
    label: "Clubs",
    image: "/images/statsSection/Icons-2.svg",
  },
  {
    number: "828,867",
    label: "Event Bookings",
    image: "/images/statsSection/Icons-3.svg",
  },
  {
    number: "1,926,436",
    label: "Payments",
    image: "/images/statsSection/Icons-4.svg",
  },
];
export const partnerLogos = [
  "/images/partners/logo.svg",
  "/images/clients/client-2.svg",
  "/images/clients/client-3.svg",
  "/images/clients/client-4.svg",
  "/images/clients/client-5.svg",
];
export const blogPosts = [
  {
    image: "/images/blog/blog1.svg",
    imageAlt: "Blog 1",
    description: "Creating Streamlined Safeguarding Processes with OneRen",
    link: "#",
  },
  {
    image: "/images/blog/blog2.svg",
    imageAlt: "Blog 2",
    description: "What are your safeguarding responsibilities and how can you manage them?",
    link: "#",
  },
  {
    image: "/images/blog/blog3.svg",
    imageAlt: "Blog 3",
    description: "Revamping the Membership Model with Triathlon Australia",
    link: "#",
  },
];
export  const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};