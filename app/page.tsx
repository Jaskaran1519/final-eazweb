import Clients from "@/components/hero/Clients";
import { Description } from "@/components/hero/Description";
import Navbar from "@/components/hero/header/Navbar";
import HeroText from "@/components/hero/HeroText";
import { Services } from "@/components/hero/Services";
import Videos from "@/components/hero/Videos";
import { Work } from "@/components/hero/Work";
import Reviews from "@/components/hero/Reviews";
import Stats from "@/components/hero/Stats";
import Faq from "@/components/hero/Faq";
import Contact from "@/components/hero/Contact";
import Footer from "@/components/hero/Footer";
export default function page() {
  return (
    <>
    <div className="sticky top-8 z-50">
      <Navbar />
    </div>
      <HeroText/>
      <Clients />
      <Description /> 
      <Services />
      <Work /> 
      <Videos />   
      <Reviews />
      <Stats />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
