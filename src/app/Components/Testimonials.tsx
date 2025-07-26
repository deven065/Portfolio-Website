"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Alex Johnson",
        role: "Senior Project Manager, Innovatech Solutions",
        message:
        "TechPortfolio has consistently delivered innovative solutions that exceeded our expectations. The project management was seamless, and the final product was both functional and visually impressive. Highly recommended for any tech-driven project.",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Maria Lopez",
        role: "CTO, FutureSoft Inc.",
        message:
        "Working with TechPortfolio was a fantastic experience. The developer demonstrated deep technical knowledge and a proactive approach, ensuring our needs were met with precision. The end result significantly improved our operational efficiency.",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Sophie Turner",
        role: "Marketing Director, BrightWave",
        message:
        "I am extremely pleased with the development work provided by TechPortfolio. The project was completed on time, with excellent communication throughout. The final website is sleek, modern, and perfectly aligned with our brand identity.",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        name: "David Miller",
        role: "CEO, Horizon Tech",
        message:
        "Our collaboration with TechPortfolio was outstanding. Their ability to deliver high-quality code under tight deadlines exceeded our expectations and helped us meet critical business goals.",
        img: "https://randomuser.me/api/portraits/men/76.jpg",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-black text-white py-20">
        {/* Heading */}
        <div className="text-center mb-14">
            <h2 className="text-5xl font-extrabold">What Clients Say</h2>
            <p className="text-gray-400 mt-3 text-lg">
            Hear from my satisfied clients and partners about my work and professionalism.
            </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-[80%] mx-auto">
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
                clickable: true,
                el: ".swiper-pagination-custom",
            }}
            navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
            }}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            loop
            >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                <div className="bg-gray-900 rounded-3xl p-8 shadow-xl flex flex-col h-full justify-between">
                    <div>
                    <div className="flex text-yellow-400 mb-4 text-lg">
                        {"★".repeat(5)}
                    </div>
                    <p className="text-white font-semibold leading-relaxed mb-6">
                        {testimonial.message}
                    </p>
                    </div>
                    <div className="flex items-center mt-6">
                    <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full mr-4"
                    />
                    <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>

            {/* Custom Arrows */}
            <div className="swiper-button-prev-custom absolute left-[-3rem] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700">
            ←
            </div>
            <div className="swiper-button-next-custom absolute right-[-3rem] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700">
            →
            </div>

            {/* Dots */}
            <div className="swiper-pagination-custom flex justify-center mt-6 space-x-2"></div>
        </div>
        </section>
    );
}