
import ProfileHeader from '../components/ProfileHeader';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import EducationAndSkills from '../components/EducationAndSkills';
import ContactInfo from '../components/ContactInfo';
import ScrollHelper from '../components/ScrollHelper';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-blue-950 text-white transition-colors">
      <ProfileHeader />
      <AboutMe />
      <Projects />
      <EducationAndSkills />
      <ContactInfo />
      <ScrollHelper />
    </main>
  );
}
