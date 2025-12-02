'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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
        <section ref={sectionRef} className="relative bg-gradient-to-b from-gray-100 to-white dark:bg-gray-950 text-gray-900 dark:text-white py-28 px-4 overflow-hidden">
        
        <div className="text-center mb-20 max-w-4xl mx-auto relative z-10">
            <p className="text-sm md:text-base text-blue-600 dark:text-blue-400 font-mono tracking-wider mb-4 uppercase font-semibold">Client Success Stories</p>
            <h2 ref={titleRef} className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 drop-shadow-sm">What Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            Trusted by industry leaders and startups alike. Here&apos;s what my clients say about working together.
            </p>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
            {/* Swiper Carousel */}
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={false}
            pagination={{
                el: '.swiper-pagination-custom',
                clickable: true,
                dynamicBullets: true,
            }}
            navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                reverseDirection: false,
            }}
            speed={800}
            freeMode={true}
            effect="slide"
            grabCursor={true}
            watchSlidesProgress={true}
            breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 2.5, spaceBetween: 30 },
                1280: { slidesPerView: 3, spaceBetween: 30 },
            }}
            loop={true}
            slidesPerGroup={1}
            allowTouchMove={true}
            className="testimonials-swiper !pb-12"
            >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={`testimonial-${index}`}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border-2 border-gray-300 dark:border-gray-800 hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-600 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                    {/* Animated tech accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <div className="relative z-10 flex-1">
                    <div className="flex items-center justify-between mb-5">
                        <div className="text-yellow-500 dark:text-yellow-400 text-xl flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>
                        <div className="flex items-center gap-1 text-xs font-mono text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span>Verified Client</span>
                        </div>
                    </div>
                    <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6 text-base font-normal">
                        {testimonial.message}
                    </p>
                    </div>
                    <div className="flex items-center relative z-10 mt-auto pt-5 border-t border-gray-200 dark:border-gray-800 group-hover:border-blue-200 dark:group-hover:border-blue-900/50 transition-colors duration-300">
                    <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <Image
                            src={testimonial.img}
                            alt={testimonial.name}
                            width={56}
                            height={56}
                            className="rounded-full object-cover mr-4 border-2 border-gray-200 dark:border-gray-700 group-hover:border-blue-400 dark:group-hover:border-blue-600 transition-colors duration-300 relative z-10"
                        />
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white text-lg mb-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{testimonial.name}</p>
                        <p className="text-gray-700 dark:text-gray-400 text-sm font-mono">{testimonial.role}</p>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div className="swiper-button-prev-custom absolute left-0 md:-left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent hover:scale-110 z-10 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <span className="text-lg group-hover:-translate-x-0.5 transition-transform duration-200">←</span>
            </div>
            <div className="swiper-button-next-custom absolute right-0 md:-right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent hover:scale-110 z-10 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <span className="text-lg group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </div>

            {/* Custom Pagination Dots */}
            <div className="swiper-pagination-custom mt-8 flex justify-center" />
        </div>

        {/* Custom Dot Styling */}
        <style jsx global>{`
            .testimonials-swiper {
                overflow: visible;
                padding: 30px 0;
            }
            .testimonials-swiper .swiper-wrapper {
                align-items: stretch;
            }
            .testimonials-swiper .swiper-slide {
                height: auto;
                display: flex;
                transition: all 0.3s ease !important;
                opacity: 0.6;
            }
            .testimonials-swiper .swiper-slide > div {
                width: 100%;
            }
            .testimonials-swiper .swiper-slide-active {
                opacity: 1;
            }
            .testimonials-swiper .swiper-slide-next,
            .testimonials-swiper .swiper-slide-prev {
                opacity: 0.8;
            }
            .swiper-pagination-custom {
                display: flex;
                gap: 8px;
            }
            .swiper-pagination-custom .swiper-pagination-bullet {
                background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                opacity: 0.3;
                width: 10px;
                height: 10px;
                margin: 0;
                border-radius: 50%;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
            }
            body.dark-mode .swiper-pagination-custom .swiper-pagination-bullet {
                background: #60a5fa;
                opacity: 0.4;
            }
            .swiper-pagination-custom .swiper-pagination-bullet-active {
                opacity: 1;
                width: 28px;
                border-radius: 5px;
                box-shadow: 0 0 12px rgba(59, 130, 246, 0.6), 0 0 24px rgba(139, 92, 246, 0.4);
            }
            body.dark-mode .swiper-pagination-custom .swiper-pagination-bullet-active {
                opacity: 1;
            }
            .testimonials-swiper .swiper-slide > div {
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .testimonials-swiper .swiper-slide-active > div {
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
            }
            body.dark-mode .testimonials-swiper .swiper-slide-active > div {
                box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.2);
            }
        `}</style>
        </section>
    );
}
