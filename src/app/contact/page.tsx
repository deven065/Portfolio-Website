import ContactCard from "../Components/Contact/ContactCard";
import ContactFormCard from "../Components/Contact/ContactFormCard";
import FollowCard from "../Components/Contact/FollowCard";
import GetInTouchSection from "../Components/Contact/GetInTouchSection";
import FAQCard from "../Components/Contact/FAQCard";

export default function ContactPage() {
  return (
    <main className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      {/* Top Section */}
      <GetInTouchSection />

      {/* Main Content */}
      <section
        className="
            max-w-6xl mx-auto
            px-6 lg:px-4
            py-20
            grid lg:grid-cols-3 gap-10
        "
        >
        {/* Left Column */}
        <div className="lg:col-span-2">
          <ContactFormCard />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <ContactCard />
          <FollowCard />
          <FAQCard />
        </div>
      </section>
    </main>
  );
}