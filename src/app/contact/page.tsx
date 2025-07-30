import ContactCard from "../Components/Contact/ContactCard";
import ContactFormCard from "../Components/Contact/ContactFormCard";
import FollowCard from "../Components/Contact/FollowCard";
import GetInTouchSection from "../Components/Contact/GetInTouchSection";
import FAQCard from "../Components/Contact/FAQCard";

export default function ContactPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Top Section */}
      <GetInTouchSection />

      {/* Main Content */}
      <section
        className="
            max-w-6xl mx-auto 
            px-6 lg:px-4 
            mt-15
            pb-20
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