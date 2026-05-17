"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
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
        { name: "Contact", id: "contact" },
      ]}
      brandName="Simple Websites"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{ variant: "rotated-rays-animated" }}
      title="Simple Websites for Small Businesses"
      description="I build clean, simple website that help small businesses get more customers.\n"
      buttons={[
        { text: "View Our Work", href: "#features" },
      ]}
      carouselItems={[
        { id: "1", imageAlt: "Computer hardware", imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&h=600" },
        { id: "2", imageAlt: "Technology setup", imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&h=600" },
        { id: "3", imageAlt: "Empty item 3" },
        { id: "4", imageAlt: "Empty item 4" },
        { id: "5", imageAlt: "Empty item 5" },
        { id: "6", imageAlt: "Empty item 6" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="About Our Team"
      description=" Hi, we create simple and professional websites for  small businesses in the USA. \n\n Our goal is to help local businesses get more clients with a clean online presence."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Our Work"
      description="3 examples of our websites."
      accordionItems={[
        { id: "f1", title: "Custom Development", content: "We build fully responsive websites tailored to your unique business needs." },
        { id: "f2", title: "Performance Focused", content: "Optimized loading speeds and modern infrastructure for the best user experience." },
        { id: "f3", title: "Professional Design", content: "Each site is designed with conversion in mind, ensuring your clients find what they need easily." },
      ]}
      mediaAnimation="slide-up"
      videoSrc="https://assets.mixkit.co/videos/preview/mixkit-coffee-being-poured-in-a-cup-4017-large.mp4"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sofía M.", handle: "@sofia.lifestyle", testimonial: "The website build process was seamless and incredibly professional.", rating: 5 },
        { id: "2", name: "Carlos E.", handle: "@carlos.viajero", testimonial: "Our new online presence has significantly increased our customer reach.", rating: 5 },
        { id: "3", name: "Lucía P.", handle: "@lucia.gastronomia", testimonial: "Every detail was carefully thought out to match our brand identity.", rating: 5 },
        { id: "4", name: "Diego R.", handle: "@diego.foodie", testimonial: "Highly recommended for any small business looking to modernize their site.", rating: 5 },
        { id: "5", name: "Elena T.", handle: "@elena.creativa", testimonial: "Excellent service and quick turnaround times. Simply the best.", rating: 5 },
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
        "Tech Weekly",        "Local Innovators",        "Small Biz Alliance",        "Digital Growth",        "Startup News"]}
      title="Trusted by growing brands"
      description="Companies and platforms that trust our development expertise."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Do you support existing sites?", content: "Yes, we can help you refresh or completely rebuild your existing online presence." },
        { id: "q2", title: "How long does a build take?", content: "Typically, we deliver high-quality, professional sites within 2 to 4 weeks depending on scope." },
        { id: "q3", title: "Is maintenance included?", content: "We offer flexible maintenance plans to keep your site running smoothly after launch." },
      ]}
      title="Frequently asked questions"
      description="Everything you need to know about working with our team."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Start your project"
      description="Tell us about your business goals and we'll help you get online."
      inputs={[
        { name: "name", type: "text", placeholder: "Name", required: true },
        { name: "email", type: "email", placeholder: "Email", required: true },
        { name: "project", type: "text", placeholder: "Project type", required: true },
      ]}
      textarea={{ name: "message", placeholder: "Tell us about your requirements...", rows: 3, required: false }}
    />
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