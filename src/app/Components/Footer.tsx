import { FaCode, FaEnvelope, FaGithub, FaGoogle, FaHeart, FaLinkedin, FaMapMarkedAlt, FaPhone } from "react-icons/fa"
import { FaX } from "react-icons/fa6"

export default function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-700">
            <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-10">
                {/* Branding */}
                <div>
                    <h2 className="text-2xl font-bold text-blue-600">Dev.Folio</h2>
                    <p className="mt-4 text-sm">
                        Crafting digital experiences with passion. Full-stack developer dedicated to creating innovative and user-friendly web applications.
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-sm">
                        <FaCode />
                        <span>Made with</span>
                        <FaHeart className="text-red-500" />
                        <span>by Deven</span>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-blue-600">Home</li>
                        <li className="hover:text-blue-600">Projects</li>
                        <li className="hover:text-blue-600">Skills</li>
                        <li className="hover:text-blue-600">Contact</li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Services</h3>
                    <ul className="space-y-2 text-sm list-disc list-inside">
                        <li className="hover:text-blue-600">Web Development</li>
                        <li className="hover:text-blue-600">Mobile Apps</li>
                        <li className="hover:text-blue-600">UI/UX Design</li>
                        <li className="hover:text-blue-600">Backend Development</li>
                        <li className="hover:text-blue-600">Database Design</li>
                        <li className="hover:text-blue-600">API Integration</li>
                    </ul>
                </div>

                {/* Get in Touch */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2 hover:text-blue-600">
                            <FaEnvelope className="text-blue-600" /> devenrikame55@gmail.com
                        </li>
                        <li className="flex  items-center gap-2 hover:text-blue-600">
                            <FaPhone className="text-blue-600" /> +91 (983) 370-3389
                        </li>
                        <li className="flex items-center gap-2 hover:text-blue-600">
                            <FaMapMarkedAlt className="text-blue-600" /> Mumbai, India
                        </li>
                    </ul>

                    {/* Follow ME */}
                    <div className="mt-4">
                        <p className="font-semibold mb-2">Follow Me</p>
                        <div className="flex gap-3">
                            <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-blue-600 hover:text-white transition">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-black hover:text-white transition">
                                <FaGithub />
                            </a>
                            <a href="#" className="bg-gray-200 p-2 rounded-full  hover:bg-black hover:text-white transition">
                                <FaX />
                            </a>
                            <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 hover:text-red-700 transition">
                                <FaGoogle />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t py-4 text-sm text-center text-gray-500">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-4">
                    <p>© 2025 Dev.Folio. All rights reserved.</p>
                    <p>Built with Next.js & Tailwind CSS</p>
                    <div className="flex gap-4 justify-center mt-2 md:mt-0">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}