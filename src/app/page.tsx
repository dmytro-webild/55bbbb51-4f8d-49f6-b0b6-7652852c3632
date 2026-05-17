"use client";

import { useState } from 'react';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import ContactText from '@/components/sections/contact/ContactText';

export default function LandingPage() {
  const [showNumbers, setShowNumbers] = useState(false);

  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="floatingGradient"
        cardStyle="outline"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Our Work", id: "about" },
      ]}
      brandName="Simple Websites"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{ variant: "rotated-rays-animated" }}
      title="Simple Websites for Small Businesses"
      description="I build clean, simple website that help small businesses get more customers."
      buttons={[
        { text: "View Our Work", href: "#features" },
      ]}
      autoPlay={false}
      carouselItems={[
        { id: "1", imageAlt: "Computer technology workspace", imageSrc: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&h=600" },
        { id: "2", imageAlt: "Modern laptop and coding setup", imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&h=600" },
        { id: "3", imageAlt: "Circuit board technology", imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&h=600" },
        { id: "4", imageAlt: "Software development monitor", imageSrc: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&h=600" },
        { id: "5", imageAlt: "Digital communication network", imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=600" },
        { id: "6", imageAlt: "Advanced computing system", imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&h=600" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="About Our Team"
      description=" Hi, we create simple and professional websites for  small businesses in the USA.  Our goal is to help local businesses get more clients with a clean online presence."
      imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&h=600"
      imageAlt="Team working with technology"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Our Work"
      description="3 examples of our websites."
      buttons={[{ text: "View Demo", onClick: () => {} }, { text: "View Demo", onClick: () => {} }, { text: "View Demo", onClick: () => {} }]}
      accordionItems={[
        { id: "f1", title: "Barbershop Website", content: "Modern design for a local barbershop with services, location, and contact. " },
        { id: "f2", title: "Restaurant Website", content: "Clean layout with menu, photos, and easy contact options. " },
        { id: "f3", title: "Cleaning Service Website", content: "Professional design focused on getting more leads and calls. " },
      ]}
      mediaAnimation="slide-up"
      imageSrc="https://img.b2bpic.net/free-photo/businessman-using-mobile-phone_107420-74340.jpg?id=8897942"
      imageAlt="Professional web design services"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sofía M.", handle: "@sofia.lifestyle", testimonial: "The website build process was seamless and incredibly professional.", rating: 5, imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150" },
        { id: "2", name: "Carlos E.", handle: "@carlos.viajero", testimonial: "Our new online presence has significantly increased our customer reach.", rating: 5, imageSrc: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&h=150" },
        { id: "3", name: "Lucía P.", handle: "@lucia.gastronomia", testimonial: "Every detail was carefully thought out to match our brand identity.", rating: 5, imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150" },
      ]}
      showRating={true}
      title="What our clients say"
      description="Experiences shared by local business owners we've worked with."
    />
  </div>

  <div id="proof" data-section="proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Made for small businesses ", "Easy to use ", "Fast delivery", "One-time payment ", "Simple and professional design "]}
      title="Why You Choose Us"
      description=""
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&h=600&_wi=2"
      imageAlt="Tech FAQ"
      faqs={[
        { id: "q1", title: "How would it take to have my website ready?", content: " 1 week " },
        { id: "q2", title: "And what do I gain in having a website?", content: "A good website helps your business get more customers, look more professional, and receive calls or messages every day." },
        { id: "q3", title: "Is maintenance included?", content: "No we only offer the website " },
      ]}
      title="Pricing "
      description="Websites starting at $300-$500"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact-btn-section" data-section="contact-btn-section">
      <ContactText
      text="Ready to get started?"
      background={{ variant: "plain" }}
      useInvertedBackground={false}
      buttons={[{
        text: "Contact us",        onClick: () => setShowNumbers(!showNumbers)
      }]}
    />
    {showNumbers && (
        <div style={{ textAlign: "center", fontSize: "0.9rem", marginTop: "1rem", color: "var(--foreground)" }}>
            <p>+52 9999490647</p>
            <p>+52 9997664077</p>
        </div>
    )}
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="SIMPLE WEBSITES"
      leftLink={{ text: "Instagram", href: "https://instagram.com" }}
      rightLink={{ text: "Privacy Policy", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
