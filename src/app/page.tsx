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
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
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
        {
          name: "Our Work",          id: "about"},
        {
          name: "About Us",          id: "menu"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Simple Websites"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated"}}
      title="Simple Websites for Small Businesses"
      description="I build clean, simple website that help small businesses get more customers.\n"
      buttons={[
        {
          text: "View Our Work",          href: "#menu"},
      ]}
      carouselItems={[
        { id: "1", imageSrc: "https://img.b2bpic.net/free-vector/blue-technology-digital-landscape-futuristic-background_1017-24919.jpg?id=7887838&_wi=1", imageAlt: "Atmósfera Luun" },
        { id: "2", imageSrc: "https://img.b2bpic.net/free-photo/female-hand-typing-keyboard-laptop_1150-15742.jpg?id=5432778", imageAlt: "Pastelería artesanal" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Más que un desayuno, un destino lifestyle"
      description="Luun nace de la pasión por los detalles y la excelencia. Fusionamos ingredientes locales de alta gama con técnicas artesanales en un entorno diseñado para la conexión y la creatividad."
      imageSrc="https://img.b2bpic.net/free-vector/blue-technology-digital-landscape-futuristic-background_1017-24919.jpg?id=7887838&_wi=6"
      imageAlt="Interior de Luun Brunch & Coffee"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Nuestra esencia artesanal"
      description="Descubre lo que nos hace únicos en el corazón de la ciudad."
      accordionItems={[
        { id: "f1", title: "Café de Especialidad", content: "Seleccionamos granos de las mejores regiones, tostados localmente para resaltar notas únicas." },
        { id: "f2", title: "Brunch Gourmet", content: "Platos que combinan técnica clásica con productos frescos de temporada." },
        { id: "f3", title: "Diseño Estético", content: "Cada rincón es un espacio curado para creadores y momentos instagrameables." },
      ]}
      imageSrc="https://img.b2bpic.net/free-vector/blue-technology-digital-landscape-futuristic-background_1017-24919.jpg?id=7887838&_wi=7"
      imageAlt="Preparación de café de especialidad"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", brand: "Luun Signature", name: "Eggs Benedict", price: "$185 MXN", rating: 5, reviewCount: "120", imageSrc: "https://img.b2bpic.net/free-vector/blue-technology-digital-landscape-futuristic-background_1017-24919.jpg?id=7887838&_wi=8" },
        { id: "p2", brand: "Pastelería", name: "Croissant Francés", price: "$75 MXN", rating: 5, reviewCount: "85", imageSrc: "https://img.b2bpic.net/free-vector/blue-technology-digital-landscape-futuristic-background_1017-24919.jpg?id=7887838&_wi=9" },
        { id: "p3", brand: "Café", name: "Flat White Especial", price: "$65 MXN", rating: 5, reviewCount: "200", imageSrc: "https://img.b2bpic.net/free-vector/blue-technology-digital-landscape-futuristic-background_1017-24919.jpg?id=7887838&_wi=10" },
        { id: "p4", brand: "Luun Signature", name: "Avocado Toast", price: "$160 MXN", rating: 4, reviewCount: "95", imageSrc: "https://img.b2bpic.net/free-vector/blue-technology-digital-landscape-futuristic-background_1017-24919.jpg?id=7887838&_wi=11" },
        { id: "p5", brand: "Brunch", name: "Yogurt Bowl", price: "$140 MXN", rating: 5, reviewCount: "70", imageSrc: "https://img.b2bpic.net/free-vector/blue-technology-digital-landscape-futuristic-background_1017-24919.jpg?id=7887838&_wi=12" },
        { id: "p6", brand: "Luun Signature", name: "Breakfast Sándwich", price: "$175 MXN", rating: 5, reviewCount: "110", imageSrc: "https://img.b2bpic.net/free-vector/blue-technology-digital-landscape-futuristic-background_1017-24919.jpg?id=7887838&_wi=13" },
      ]}
      title="Selección de brunch"
      description="Una cuidada carta de especialidades que celebran los ingredientes."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sofía M.", handle: "@sofia.lifestyle", testimonial: "El lugar más estético de Mérida. Los huevos benedictinos son otro nivel.", rating: 5, imageSrc: "https://img.b2bpic.net/free-vector/blue-technology-digital-landscape-futuristic-background_1017-24919.jpg?id=7887838&_wi=14" },
        { id: "2", name: "Carlos E.", handle: "@carlos.viajero", testimonial: "Un oasis en Paseo Montejo. El café de especialidad es impecable.", rating: 5, imageSrc: "https://img.b2bpic.net/free-vector/blue-technology-digital-landscape-futuristic-background_1017-24919.jpg?id=7887838&_wi=15" },
        { id: "3", name: "Lucía P.", handle: "@lucia.gastronomia", testimonial: "Cada rincón es perfecto para fotos. El servicio es de primera.", rating: 5, imageSrc: "https://img.b2bpic.net/free-vector/blue-technology-digital-landscape-futuristic-background_1017-24919.jpg?id=7887838&_wi=16" },
        { id: "4", name: "Diego R.", handle: "@diego.foodie", testimonial: "La calidad de los ingredientes se nota en cada bocado. Imprescindible.", rating: 5, imageSrc: "https://img.b2bpic.net/free-vector/blue-technology-digital-landscape-futuristic-background_1017-24919.jpg?id=7887838&_wi=17" },
        { id: "5", name: "Elena T.", handle: "@elena.creativa", testimonial: "Mi lugar favorito para empezar el día. Creatividad y buen brunch.", rating: 5, imageSrc: "https://img.b2bpic.net/free-vector/blue-technology-digital-landscape-futuristic-background_1017-24919.jpg?id=7887838&_wi=18" },
      ]}
      showRating={true}
      title="Lo que dicen de nosotros"
      description="Experiencias compartidas por nuestra comunidad de locales y viajeros."
    />
  </div>

  <div id="proof" data-section="proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Lifestyle Mag",        "Gastronomy Awards",        "Turismo Mérida",        "Foodie Guide",        "Premium Dining"]}
      title="Reconocidos por nuestra excelencia"
      description="Colaboraciones y menciones que avalan nuestra calidad."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "¿Tienen opciones vegetarianas?", content: "Sí, contamos con una amplia variedad de opciones vegetarianas frescas y balanceadas." },
        { id: "q2", title: "¿Se necesita reservar?", content: "Recomendamos reservar los fines de semana a través de nuestro sitio web para asegurar tu lugar." },
        { id: "q3", title: "¿Aceptan mascotas?", content: "Somos un café pet-friendly en nuestra terraza al aire libre." },
      ]}
      imageSrc="https://img.b2bpic.net/free-vector/blue-technology-digital-landscape-futuristic-background_1017-24919.jpg?id=7887838&_wi=19"
      title="Preguntas frecuentes"
      description="Todo lo que necesitas saber antes de tu próxima visita."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Reserva tu momento Luun"
      description="Déjanos tus datos para asegurar tu mesa en el brunch más solicitado de Mérida."
      inputs={[
        { name: "name", type: "text", placeholder: "Nombre completo", required: true },
        { name: "email", type: "email", placeholder: "Correo electrónico", required: true },
        { name: "date", type: "date", placeholder: "Fecha de reserva", required: true },
      ]}
      textarea={{ name: "message", placeholder: "Detalles adicionales o alergias...", rows: 3, required: false }}
      imageSrc="https://img.b2bpic.net/free-vector/blue-technology-digital-landscape-futuristic-background_1017-24919.jpg?id=7887838&_wi=20"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="LUUN"
      leftLink={{
        text: "Instagram",        href: "https://instagram.com"}}
      rightLink={{
        text: "Política de Privacidad",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}