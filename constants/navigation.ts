import {
  Home,
  User,
  Code,
  Briefcase,
  GraduationCap,
  Github,
  Linkedin,
  Facebook,
  FileCode,
  Medal,
} from "lucide-react";

export const navItems = [
  { id: "overview", label: "Profile", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "projects", label: "Projects", icon: FileCode },
  { id: "certificates", label: "Certificates", icon: Medal },
];

export const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
];
