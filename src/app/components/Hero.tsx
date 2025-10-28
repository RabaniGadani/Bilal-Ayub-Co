import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Justice. Integrity. Excellence.
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Providing exceptional legal services with unwavering commitment to your rights and interests. Trust in our expertise for comprehensive legal solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Book Consultation
                            </Link>
                            <Link
                                href="tel:+923052692482"
                                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Call Now
                            </Link>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <div className="relative z-10 w-72 h-72 sm:w-96 sm:h-96">
                            <Image
                                src="/Adv Bilal Ayub.jpg"
                                alt="Advocate Bilal Ayub"
                                fill
                                sizes="(max-width: 640px) 288px, 384px"
                                priority
                                className="object-cover rounded-full border-8 border-yellow-400 shadow-2xl"
                            />
                        </div>
                        <div className="absolute inset-0 bg-primary opacity-10 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}


