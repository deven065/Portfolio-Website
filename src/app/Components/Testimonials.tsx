'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

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
        img: '/Vishal.png',
    },
    {
        name: 'Mayur Ahire',
        role: 'Elite Project Analyst, HUDL Inc.',
        message:
        'Working with Dev.Folio was a fantastic experience. The developer demonstrated deep technical knowledge and a proactive approach, ensuring our needs were met with precision. The end result significantly improved our operational efficiency.',
        img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        name: 'Dipen Rikame',
        role: 'Software Developer-DevOps, LogiNext',
        message:
        'I am extremely pleased with the development work provided by Dev.Folio. The project was completed on time, with excellent communication throughout. The final website is sleek, modern, and perfectly aligned with our brand identity.',
        img: '/Dipen.png',
    },
    {
        name: 'Rohit Singh',
        role: 'Founder-led B2B Marketing',
        message:
        'Our collaboration with Dev.Folio was outstanding. Their ability to deliver high-quality code under tight deadlines exceeded our expectations and helped us meet critical business goals.',
        img: 'https://randomuser.me/api/portraits/men/76.jpg',
    },
    {
        name: 'Ashok Choudhary',
        role: 'E-Commerece Executive, Renaissance Global Limited',
        message:
        'Deven did an excellent job creating my portfolio! He understood my vision clearly and delivered a clean, professional, and modern design. The communication was smooth, deadlines were met, and he even added creative touches that made it stand out. Highly recommend him for anyone wanting a high-quality portfolio.',
        img: '/Ashok-portfolio.png',
    }
];

export default function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        if (!sectionRef.current || !titleRef.current) return;

        // Animate title
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="bg-gray-100 dark:bg-black text-white dark:text-white py-20">
        <div className="text-center mb-14">
            <h2 ref={titleRef} className="text-5xl font-extrabold text-black dark:text-white">What Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">
            Hear from my satisfied clients and partners about my work and professionalism.
            </p>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
            {/* Swiper Carousel */}
            <Swiper
            modules={[Navigation, Pagination, Autoplay, FreeMode]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={false}
            pagination={{
                el: '.swiper-pagination-custom',
                clickable: true,
            }}
            navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true,
            }}
            speed={3000}
            freeMode={{
                enabled: true,
                momentum: true,
                momentumRatio: 0.5,
            }}
            effect="slide"
            grabCursor={true}
            breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            loop
            loopAdditionalSlides={2}
            slidesPerGroup={1}
            allowTouchMove={true}
            className="testimonials-swiper !pb-12"
            >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl flex flex-col justify-between h-full min-h-[350px] border border-gray-200 dark:border-gray-800">
                    <div>
                    <div className="text-yellow-400 dark:text-yellow-400 text-lg mb-4">{'★'.repeat(5)}</div>
                    <p className="text-gray-900 dark:text-white font-medium leading-relaxed mb-6">
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
                        <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div className="swiper-button-prev-custom absolute left-0 md:-left-6 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 z-10 shadow-lg">
            ←
            </div>
            <div className="swiper-button-next-custom absolute right-0 md:-right-6 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 z-10 shadow-lg">
            →
            </div>

            {/* Custom Pagination Dots */}
            <div className="swiper-pagination-custom mt-8 flex justify-center" />
        </div>

        {/* Custom Dot Styling */}
        <style jsx global>{`
            .testimonials-swiper {
                overflow: hidden;
                padding: 20px 0;
            }
            .testimonials-swiper .swiper-wrapper {
                align-items: stretch;
            }
            .testimonials-swiper .swiper-slide {
                height: auto;
                display: flex;
                transition: opacity 0.6s ease !important;
                opacity: 0.85;
            }
            .testimonials-swiper .swiper-slide > div {
                width: 100%;
            }
            .testimonials-swiper .swiper-slide-active {
                opacity: 1;
            }
            .testimonials-swiper .swiper-slide-next,
            .testimonials-swiper .swiper-slide-prev {
                opacity: 0.9;
            }
            .swiper-pagination-custom .swiper-pagination-bullet {
                background-color: #6b7280;
                opacity: 0.6;
                width: 10px;
                height: 10px;
                margin: 0 5px;
                border-radius: 50%;
                transition: all 0.3s ease;
            }
            body.dark-mode .swiper-pagination-custom .swiper-pagination-bullet {
                background-color: white;
                opacity: 0.4;
            }
            .swiper-pagination-custom .swiper-pagination-bullet-active {
                background-color: #3b82f6;
                opacity: 1;
                transform: scale(1.3);
            }
            body.dark-mode .swiper-pagination-custom .swiper-pagination-bullet-active {
                background-color: #facc15;
            }
            .testimonials-swiper .swiper-slide > div {
                transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            .testimonials-swiper .swiper-slide-active > div {
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
        `}</style>
        </section>
    );
}
