import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaUser,
  FaHome,
  FaTools,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Top */}
      <div className="sidebar-top">
        <div className="profile-container">
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={100}
            height={100}
          />
          <h2 className="profile-name">Jerwin Louise Peria</h2>
          <p className="profile-description">IT Service Management</p>
          {/* Button: View Resume */}
          <Button variant="outline" size="lg">
            View Resume
          </Button>
        </div>

        <nav className="nav">
          <a href="#overview">
            <FaHome size={16} style={{ marginRight: "8px" }} /> Overview
          </a>
          <a href="#about">
            <FaUser size={16} style={{ marginRight: "8px" }} /> About Me
          </a>
          <a href="#skills">
            <FaProjectDiagram size={16} style={{ marginRight: "8px" }} /> Skills
          </a>
          <a href="#projects">
            <FaBriefcase size={16} style={{ marginRight: "8px" }} /> Projects
          </a>
          <a href="#experience">
            <FaEnvelope size={16} style={{ marginRight: "8px" }} /> Experience
          </a>
        </nav>
      </div>

      {/* Bottom (Sidebar Footer) */}
      <div className="sidebar-footer">
        <div className="socials">
          <a
            href="https://github.com/jerwinIT"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/jerwinperia"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/jerwinlouise.peria"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>

        <p>© 2025 Jerwin Peria</p>
      </div>
    </aside>
  );
}
