import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { JSX } from "react";

interface ContactItemProps {
  icon: JSX.Element;
  label: string;
  value: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value }) => (
  <div className="flex items-start space-x-3">
    <div className="bg-blue-50 p-2 rounded-full">{icon}</div>
    <div>
      <p className="text-sm font-semibold text-gray-800">{label}</p>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  </div>
);

const ContactCard: React.FC = () => {
  return (
    <div className="max-w-md bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Contact Information</h2>
      <div className="space-y-6">
        <ContactItem
          icon={<Mail className="w-5 h-5 text-blue-500" />}
          label="Email"
          value="devenrikame55@gmail.com"
        />
        <ContactItem
          icon={<Phone className="w-5 h-5 text-blue-500" />}
          label="Phone"
          value="+91-9833703389"
        />
        <ContactItem
          icon={<MapPin className="w-5 h-5 text-blue-500" />}
          label="Location"
          value="Mumbai, India"
        />
        <ContactItem
          icon={<Clock className="w-5 h-5 text-blue-500" />}
          label="Response Time"
          value="Usually within 24 hours"
        />
      </div>
    </div>
  );
};

export default ContactCard;