'use client';

import { useTranslations } from 'next-intl';
import Contact from '@/components/ContactForm-NoBg';
import Footer from '@/components/ui/footer';

export default function ContactPage() {
    const t = useTranslations('Contact');

    return (
        <div className="flex flex-col min-h-screen overflow-hidden bg-[#07112B]">
            <main className="flex-grow">
                <div className="h-16 md:h-24 lg:h-32"></div>
                <Contact />
            </main>
            <Footer />
        </div>
    );
}