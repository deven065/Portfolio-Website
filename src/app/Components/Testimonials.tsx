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
        <section ref={sectionRef} className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 dark:from-gray-950 dark:via-blue-950/20 dark:to-black text-white dark:text-white py-28 px-4 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="text-center mb-20 max-w-4xl mx-auto relative z-10">
            <p className="text-sm md:text-base text-blue-600 dark:text-blue-400 font-mono tracking-wider mb-4 uppercase font-semibold">Client Success Stories</p>
            <h2 ref={titleRef} className="text-5xl md:text-7xl font-extrabold text-black dark:text-white mb-6 gradient-text">What Clients Say</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
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
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: false,
            }}
            speed={600}
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
                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl flex flex-col justify-between h-full min-h-[440px] border border-gray-200/60 dark:border-gray-700/60 hover:shadow-blue-500/30 dark:hover:shadow-blue-400/40 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
                    {/* Gradient accent bar */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    
                    {/* Animated background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>
                    
                    {/* Quote icon */}
                    <div className="absolute top-8 right-8 text-7xl text-blue-500/10 dark:text-blue-400/10 font-serif leading-none group-hover:text-blue-500/20 dark:group-hover:text-blue-400/20 transition-all duration-300">&ldquo;</div>
                    
                    <div className="relative z-10 flex-1">
                    <div className="text-yellow-400 dark:text-yellow-300 text-2xl mb-6 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="drop-shadow-sm">★</span>
                        ))}
                    </div>
                    <p className="text-gray-800 dark:text-gray-100 font-normal leading-relaxed mb-6 text-base md:text-lg">
                        {testimonial.message}
                    </p>
                    </div>
                    <div className="flex items-center relative z-10 mt-auto pt-6 border-t border-gray-200/60 dark:border-gray-700/60">
                    <div className="relative flex-shrink-0">
                        <Image
                            src={testimonial.img}
                            alt={testimonial.name}
                            width={68}
                            height={68}
                            className="rounded-full object-cover mr-4 ring-4 ring-blue-500/20 dark:ring-blue-400/20 group-hover:ring-blue-500/40 dark:group-hover:ring-blue-400/40 transition-all duration-300"
                        />
                    </div>
                    <div>
                        <p className="font-bold text-gray-900 dark:text-white text-xl mb-1">{testimonial.name}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-snug">{testimonial.role}</p>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div className="swiper-button-prev-custom absolute left-0 md:-left-6 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg text-gray-900 dark:text-white border border-gray-300/50 dark:border-gray-700/50 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 hover:border-blue-500 z-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110">
            <span className="text-xl font-bold">←</span>
            </div>
            <div className="swiper-button-next-custom absolute right-0 md:-right-6 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg text-gray-900 dark:text-white border border-gray-300/50 dark:border-gray-700/50 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 hover:border-blue-500 z-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110">
            <span className="text-xl font-bold">→</span>
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
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
                opacity: 0.7;
                transform: scale(0.95);
            }
            .testimonials-swiper .swiper-slide > div {
                width: 100%;
            }
            .testimonials-swiper .swiper-slide-active {
                opacity: 1;
                transform: scale(1);
            }
            .testimonials-swiper .swiper-slide-next,
            .testimonials-swiper .swiper-slide-prev {
                opacity: 0.85;
                transform: scale(0.97);
            }
            .swiper-pagination-custom {
                display: flex;
                gap: 8px;
            }
            .swiper-pagination-custom .swiper-pagination-bullet {
                background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                opacity: 0.3;
                width: 12px;
                height: 12px;
                margin: 0;
                border-radius: 50%;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                border: 2px solid transparent;
            }
            body.dark-mode .swiper-pagination-custom .swiper-pagination-bullet {
                background: linear-gradient(135deg, #60a5fa, #a78bfa);
                opacity: 0.4;
            }
            .swiper-pagination-custom .swiper-pagination-bullet-active {
                opacity: 1;
                transform: scale(1.4);
                box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
            }
            body.dark-mode .swiper-pagination-custom .swiper-pagination-bullet-active {
                box-shadow: 0 0 20px rgba(96, 165, 250, 0.8);
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
