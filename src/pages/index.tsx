import Hero from "@/sections/home/hero";
import Template from "./_template";
import QualitysSection from "@/sections/home/qualitys";
import MomentsSection from "@/sections/home/moments";
import CitySection from "@/sections/home/city";
import SuitesSection from "@/sections/home/suites";
import AssessmentSection from "@/sections/home/assessment";
import EventSection from "@/sections/home/event";

export default function Home() {
  return <Template>
    <Hero/>
    <QualitysSection/>
    <MomentsSection />    
    <CitySection />
    <SuitesSection />
    <AssessmentSection />
    <EventSection />
  </Template>
}
       