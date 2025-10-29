import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
  HiCog,
  HiCube,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiPython,
  SiPhp,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiDotnet,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiBootstrap,
  SiTailwindcss,
  SiJquery,
  SiFlutter,
  SiMysql,
  SiFirebase,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiPostman,
  SiSelenium,
  SiTypescript,
  SiC,
} from "react-icons/si";

import {
  FaDiscord,
  FaLinkedin,
  FaX,
  FaThreads,
  FaXTwitter,
  FaFacebook,
  FaPinterest,
  FaWhatsapp,
  FaReddit,
  FaTelegram,
  FaJava,
  FaMicrosoft,
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  // Basic UI Icons
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: SiGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  
  // Programming Languages
  javascript: SiJavascript,
  typescript: SiTypescript,
  csharp: SiDotnet, // Using .NET icon for C#
  java: FaJava, // Using FontAwesome Java icon
  python: SiPython,
  php: SiPhp,
  cpp: SiCplusplus,
  c: SiC, // Using SiC for C language
  html: SiHtml5,
  css: SiCss3,
  
  // Frameworks & Libraries
  nextjs: SiNextdotjs,
  dotnet: SiDotnet,
  react: SiReact,
  angular: SiAngular,
  vue: SiVuedotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  laravel: SiLaravel,
  bootstrap: SiBootstrap,
  tailwind: SiTailwindcss,
  jquery: SiJquery,
  flutter: SiFlutter,
  
  // Microsoft Power Platform
  powerapps: FaMicrosoft, // Using Microsoft icon for Power Apps
  powerautomate: FaMicrosoft, // Using Microsoft icon for Power Automate
  powerbi: FaMicrosoft, // Using Microsoft icon for Power BI
  sharepoint: FaMicrosoft, // Using Microsoft icon for SharePoint
  dataverse: FaMicrosoft, // Using Microsoft icon for Dataverse
  
  // Databases & Cloud
  database: HiCube, // Using cube icon for database
  mysql: SiMysql,
  sqlite: HiCube, // Using cube icon for SQLite
  firebase: SiFirebase,
  azure: FaMicrosoft, // Using Microsoft icon for Azure
  gcp: SiGooglecloud,
  
  // Tools & Development Environments
  git: SiGit,
  gitlab: SiGitlab,
  docker: SiDocker,
  vscode: HiCog, // Using cog icon for VS Code
  postman: SiPostman,
  
  // Testing & Methodologies
  selenium: SiSelenium,
  agile: HiOutlineRocketLaunch, // Using rocket as agile icon
  
  // Social Media
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  
  // Others
  figma: SiFigma,
  supabase: SiSupabase,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;

// Import a pre-defined template for config and content options
export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
} from "./content";

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  socialSharing,
  effects,
  dataStyle,
} from "./once-ui.config";