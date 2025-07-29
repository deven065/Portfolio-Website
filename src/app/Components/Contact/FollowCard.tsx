import { ExternalLink, Code2, MessageCircle } from "lucide-react";

const FollowCard: React.FC = () => {
  return (
    <div className="max-w-md bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Follow Me</h2>

      {/* Icons Row */}
      <div className="flex space-x-6 mb-6">
        <div className="bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-gray-200 transition">
          <ExternalLink className="w-5 h-5 text-gray-700" />
        </div>
        <div className="bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-gray-200 transition">
          <Code2 className="w-5 h-5 text-gray-700" />
        </div>
        <div className="bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-gray-200 transition">
          <MessageCircle className="w-5 h-5 text-gray-700" />
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600">
        Connect with me on social media for updates on my latest projects and
        insights into web development.
      </p>
    </div>
  );
};

export default FollowCard;  