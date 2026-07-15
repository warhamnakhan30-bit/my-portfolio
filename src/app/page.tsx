import AboutMe from "./components/home/about-me"
import Contact from "./components/home/contact"
import EducationSkills from "./components/home/education-skills"
import ExperienceSec from "./components/home/experience-sec"
import HeroSection from "./components/home/hero-section"
import ContactBar from "./components/home/hero-section/contact-bar"
import LatestWork from "./components/home/latest-work"
import QuickLinks from "./components/home/quick-links"
import SkillsSection from "./components/home/skills-section"

const page = () => {
  return (
    <>
      <main>
        <HeroSection />
        <QuickLinks />
        <ContactBar />
        <AboutMe />
        <SkillsSection />
        <ExperienceSec />
        <EducationSkills />
        <LatestWork />
        {/* <Contact /> */}
      </main>
    </>
  )
}

export default page