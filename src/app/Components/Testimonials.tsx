'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Testimonial = {
    name: string;
    role: string;
    message: string;
    img: string;
};

const testimonials: Testimonial[] = [
    {
        name: 'Vishal Mishra',
        role: 'Software Developer, Yoeki Soft Private Limited',
        message:
        'Dev.Folio has consistently delivered innovative solutions that exceeded our expectations. The project management was seamless, and the final product was both functional and visually impressive. Highly recommended for any tech-driven project.',
        img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        name: 'Maria Lopez',
        role: 'CTO, FutureSoft Inc.',
        message:
        'Working with Dev.Folio was a fantastic experience. The developer demonstrated deep technical knowledge and a proactive approach, ensuring our needs were met with precision. The end result significantly improved our operational efficiency.',
        img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        name: 'Sophie Turner',
        role: 'Marketing Director, BrightWave',
        message:
        'I am extremely pleased with the development work provided by Dev.Folio. The project was completed on time, with excellent communication throughout. The final website is sleek, modern, and perfectly aligned with our brand identity.',
        img: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
        name: 'Rohit Singh',
        role: 'Founder-led B2B Marketing',
        message:
        'Our collaboration with Dev.Folio was outstanding. Their ability to deliver high-quality code under tight deadlines exceeded our expectations and helped us meet critical business goals.',
        img: 'https://randomuser.me/api/portraits/men/76.jpg',
    },
];

export default function Testimonials() {
    return (
        <section className="bg-black text-white py-20">
        <div className="text-center mb-14">
            <h2 className="text-5xl font-extrabold">What Clients Say</h2>
            <p className="text-gray-400 mt-3 text-lg">
            Hear from my satisfied clients and partners about my work and professionalism.
            </p>
        </div>

        <div className="relative max-w-[90%] md:max-w-[80%] mx-auto">
            {/* Swiper Carousel */}
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
                el: '.swiper-pagination-custom',
                clickable: true,
            }}
            navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            loop
            >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                <div className="bg-gray-900 rounded-3xl p-8 shadow-xl flex flex-col justify-between h-full min-h-[350px]">
                    <div>
                    <div className="text-yellow-400 text-lg mb-4">{'★'.repeat(5)}</div>
                    <p className="text-white font-medium leading-relaxed mb-6">
                        {testimonial.message}
                    </p>
                    </div>
                    <div className="flex items-center">
                    <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover mr-4"
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

            {/* Navigation Arrows */}
            <div className="swiper-button-prev-custom absolute -left-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 z-10">
            ←
            </div>
            <div className="swiper-button-next-custom absolute -right-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 z-10">
            →
            </div>

            {/* Custom Pagination Dots */}
            <div className="swiper-pagination-custom mt-8 flex justify-center" />
        </div>

        {/* Custom Dot Styling */}
        <style jsx global>{`
            .swiper-pagination-custom .swiper-pagination-bullet {
            background-color: white;
            opacity: 0.4;
            width: 10px;
            height: 10px;
            margin: 0 5px;
            border-radius: 50%;
            transition: all 0.3s ease;
            }
            .swiper-pagination-custom .swiper-pagination-bullet-active {
            background-color: #facc15;
            opacity: 1;
            transform: scale(1.3);
            }
        `}</style>
        </section>
    );
}
