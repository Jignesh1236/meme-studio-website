import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Prerequisites from "@/components/Prerequisites";
import InstallationSteps from "@/components/InstallationSteps";
import SuccessBox from "@/components/SuccessBox";
import Troubleshooting from "@/components/Troubleshooting";
import Footer from "@/components/Footer";

export default function Install() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main className="flex-1">
        <Hero />
        <Prerequisites />
        <InstallationSteps />
        <SuccessBox />
        <Troubleshooting />
      </main>
      <Footer />
    </div>
  );
}
