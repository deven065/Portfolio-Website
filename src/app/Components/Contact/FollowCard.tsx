import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const FollowCard: React.FC = () => {
  return (
    <div className="max-w-md bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Follow Me</h2>

      {/* Icons Row */}
      <div className="flex space-x-6 mb-6">
        <a
          href="https://www.linkedin.com/in/dev55"
          target="_blank"
          rel="noopener noreferrer"
          title="View my LinkedIn profile"
          className="bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>

        <a
          href="https://github.com/deven065"
          target="_blank"
          rel="noopener noreferrer"
          title="View my GitHub profile"
          className="bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-black hover:text-white transition"
        >
          <FaGithub className="w-5 h-5" />
        </a>

        <a
          href="https://x.com/rikame_deven"
          target="_blank"
          rel="noopener noreferrer"
          title="View my X profile"
          className="bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-black hover:text-white transition"
        >
          <FaX className="w-5 h-5" />
        </a>

        <a
          href="mailto:devenrikame55@gmail.com"
          title="Send me an email"
          className="bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition"
        >
          <FaGoogle className="w-5 h-5" />
        </a>
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
