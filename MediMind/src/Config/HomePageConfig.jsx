import InfoIcon from "@mui/icons-material/Info";
import HealingIcon from "@mui/icons-material/Healing";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SendIcon from "@mui/icons-material/Send";
import LockIcon from "@mui/icons-material/Lock";

// All config data centralized here
const HomePageConfig = {
  nav: [
    { label: "Home", icon: <HomeIcon fontSize="small" />, link: "/" },
    { label: "Features", icon: <StarIcon fontSize="small" />, link: "/features" },
    { label: "About", icon: <InfoOutlinedIcon fontSize="small" />, link: "/about" },
    { label: "Contact", icon: <ContactMailIcon fontSize="small" />, link: "/contact" },
  ],

  hero: {
    title: "Your Smart\nHealth Assistant",
    subtitle: "AI-powered awareness for healthier lives.",
    cta: "Start Chatting",
    ctaIcon: <SendIcon fontSize="small" />,
  },

  features: [
    {
      id: "instant",
      title: "Instant Health Info",
      desc: "Get quick answers about your health concerns.",
      icon: <InfoIcon className="w-7 h-7 text-indigo-600" />,
    },
    {
      id: "symptom",
      title: "Symptom Checker",
      desc: "Identify potential health issues based on symptoms.",
      icon: <HealingIcon className="w-7 h-7 text-pink-600" />,
    },
    {
      id: "reminders",
      title: "Vaccination Reminders",
      desc: "Stay on top of vaccination schedules and reminders.",
      icon: <EventAvailableIcon className="w-7 h-7 text-emerald-600" />,
    },
  ],

  chatPreview: [
    { from: "user", text: "What are dengue symptoms?" },
    { from: "bot", text: "Fever, headache, joint pain, and rash. Seek medical care if severe." },
    { from: "user", text: "When is the next vaccination camp?" },
    { from: "bot", text: "Nearest camp is on Sept 15 📍" },
  ],

  footer: [
    { label: "About", icon: <InfoOutlinedIcon fontSize="small" />, href: "#about" },
    { label: "Contact", icon: <ContactMailIcon fontSize="small" />, href: "#contact" },
    { label: "Privacy", icon: <LockIcon fontSize="small" />, href: "#privacy" },
  ],
};

export default HomePageConfig;
