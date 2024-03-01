import { CC } from "@/app/[cc]/page";
import type { FooterItem, MainNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Laoshi Village",
  nameCn: "海头老市村",
  heroSlogan: "Hello from 海头老市村",
  heroSubSlogan: "For justice, love thy neighbor, wise living, be the best you",
  heroSubSloganCn: "为正义，爱邻居，明智生活，做最好的自己",
  description: "The best place to visit",
  descriptionCn: "最好的参观地方",
  url: "https://alan-webpage.vercel.app",
  ogImage: "https://alan-webpage.vercel.app/opengraph-image.png",
  mainNav: [
    {
      title: "About",
      titleCn: "关于我们",
      items: [
        {
          title: "Travel Information",
          titleCn: "交通信息",
          href: "/travel-information",
          description: "How to get to Laoshi",
          items: [],
        },
        {
          title: "Article",
          titleCn: "文章",
          href: "/article",
          description: "Article",
          items: [],
        },
        {
          title: "Policy Plan",
          titleCn: "政策计划",
          href: "/policy-plan",
          description: "老市 Policy Plan.",
          items: [],
        },
        {
          title: "Contact",
          titleCn: "联系我们",
          href: "/contact",
          description: "Contact 老市.",
          items: [],
        },
        {
          title: "Appointment",
          titleCn: "预约参观",
          href: "/appointment",
          description: "Visitor Appointment",
          items: [],
        },
      ],
    },
    {
      title: "Events",
      titleCn: "最新活动与公告",
      items: [
        {
          title: "Events",
          titleCn: "最新活动",
          href: "/events",
          description: "Events",
          items: [],
        },
        {
          title: "Announcements",
          titleCn: "最新公告",
          href: "/announcements",
          description: "Announcements",
          items: [],
        },
      ],
    },
    {
      title: "Programs",
      titleCn: "社区营造项目",
      items: [
        {
          title: "Education Hub",
          titleCn: "教育中心",
          href: "/education-hub",
          description: "The education hub of the community",
          items: [],
        },
        {
          title: "Elder Care",
          titleCn: "老人关怀",
          href: "/elder-care",
          description: "Elder Care",
          items: [],
        },
        {
          title: "Kid Care",
          titleCn: "儿童关怀",
          href: "/kid-care",
          description: "Kid Care",
          items: [],
        },
        {
          title: "Mental Care",
          titleCn: "心理关怀",
          href: "/mental-care",
          description: "Mental Care",
          items: [],
        },
        {
          title: "Historical Background of Salt",
          titleCn: "历史背景",
          href: "/history-en",
          description: "Historical Background of Salt",
          items: [],
        },
        {
          title: "Seasalt Making Process",
          titleCn: "制盐过程",
          href: "/seasalt-making-process-en",
          description: "Seasalt Making Process",
          items: [],
        },
        {
          title: "Health Benefit of Sea Salt",
          titleCn: "盐对健康的益处",
          href: "/health-benefit-en",
          description: "Health Benefit of Sea Salt",
          items: [],
        },
        {
          title: "Laoshi Salt Conservation Center",
          titleCn: "老市挝石盐保护中心",
          href: "/salt-conservation-center-en",
          description: "Laoshi Salt Conservation Center",
          items: [],
        },
      ],
    },
    {
      title: "Nature School",
      titleCn: "老市自然学校",
      items: [
        {
          title: "Nature School",
          titleCn: "自然学校",
          href: "/nature-school",
          description: "Nature School",
          items: [],
        },
        {
          title: "Ecologic and Diversity Livelihoods",
          titleCn: "生态与多元生计",
          href: "/ecology-diversity",
          description: "Ecologic and Diversity Livelihoods",
          items: [],
        },
        {
          title: "Library",
          titleCn: "图书馆",
          href: "/library",
          description: "Library",
          items: [],
        },
      ],
    },
    {
      title: "Support Us",
      titleCn: "支持我们",
      items: [
        {
          title: "Donate",
          titleCn: "捐款",
          href: "/donate",
          description: "Donate",
          items: [],
        },
        {
          title: "Volunteer",
          titleCn: "志愿者",
          href: "/volunteer",
          description: "Volunteer",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "老市",
      items: [
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
      ],
    },
  ] satisfies FooterItem[],
};
