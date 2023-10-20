import './MainPage.scss';
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import React from "react"
import InvitationSection from "./components/InvitationSection";

export type MainPageProps = {}

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <InvitationSection/>
    </>
  )
}

export default MainPage