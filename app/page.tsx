import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MoreThanEnglish from "@/components/MoreThanEnglish";
import Courses from "@/components/Courses";
import CoursesByAge from "@/components/CoursesByAge";
import Philosophy from "@/components/Philosophy";
import WhyParentsChooseUs from "@/components/WhyParentsChooseUs";
import LearningJourney from "@/components/LearningJourney";
import BlogSection from "@/components/BlogSection";
import MockTestSection from "@/components/MockTestSection";
import Admissions from "@/components/Admissions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        Cambridge Academic Centre Chittagong | English, IELTS &amp; Personal
        Development Courses
      </h1>
      <Header />
      <main>
        <Hero />
        <MoreThanEnglish />
        <Courses />
        <CoursesByAge />
        <Philosophy />
        <WhyParentsChooseUs />
        <LearningJourney />
        <MockTestSection />
        <BlogSection />
        <Admissions />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
