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
          name: "Experiencia",          id: "about"},
        {
          name: "Nuestro Menú",          id: "menu"},
        {
          name: "Reservar",          id: "contact"},
      ]}
      brandName="Simple Websites"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated"}}
      title="Simple Websites for Small Businesses

"
      description="I build clean, simple website that help small businesses get more customers.
"
      buttons={[
        {
          text: "View Our Work",          href: "#menu"},
      ]}
      carouselItems={[
        {
          id: "1",          imageSrc: "http://img.b2bpic.net/free-photo/woman-blue-hat-sits-windowsill-cafe_8353-194.jpg",          imageAlt: "Experiencia brunch gourmet"},
        {
          id: "2",          imageSrc: "http://img.b2bpic.net/free-photo/coffee-cup-table_23-2148164788.jpg",          imageAlt: "Pastelería artesanal"},
        {
          id: "3",          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-hot-coffee-cup_1150-10433.jpg",          imageAlt: "Café de especialidad"},
        {
          id: "4",          imageSrc: "http://img.b2bpic.net/free-photo/avocado-toast-with-poached-egg_23-2152010307.jpg",          imageAlt: "Diseño instagrameable"},
        {
          id: "5",          imageSrc: "http://img.b2bpic.net/free-photo/glass-cups-with-aromatic-wax_23-2147809206.jpg",          imageAlt: "Servicio exclusivo"},
        {
          id: "6",          imageSrc: "http://img.b2bpic.net/free-photo/hot-coffee-bean-smoked-deep-dark-background_633478-955.jpg",          imageAlt: "Atmósfera Luun"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Más que un desayuno, un destino lifestyle"
      description="Luun nace de la pasión por los detalles y la excelencia. Fusionamos ingredientes locales de alta gama con técnicas artesanales en un entorno diseñado para la conexión y la creatividad."
      imageSrc="http://img.b2bpic.net/free-photo/bakery_23-2148011524.jpg"
      imageAlt="Interior de Luun Brunch & Coffee"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Nuestra esencia artesanal"
      description="Descubre lo que nos hace únicos en el corazón de la ciudad."
      accordionItems={[
        {
          id: "f1",          title: "Café de Especialidad",          content: "Seleccionamos granos de las mejores regiones, tostados localmente para resaltar notas únicas."},
        {
          id: "f2",          title: "Brunch Gourmet",          content: "Platos que combinan técnica clásica con productos frescos de temporada."},
        {
          id: "f3",          title: "Diseño Estético",          content: "Cada rincón es un espacio curado para creadores y momentos instagrameables."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/tool-used-coffee-press_23-2149878072.jpg"
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
        {
          id: "p1",          brand: "Luun Signature",          name: "Eggs Benedict",          price: "$185 MXN",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-nutritious-breakfast-meal-assortment_23-2148833906.jpg"},
        {
          id: "p2",          brand: "Pastelería",          name: "Croissant Francés",          price: "$75 MXN",          rating: 5,
          reviewCount: "85",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-cake-slices-coffee-shop_23-2148027939.jpg"},
        {
          id: "p3",          brand: "Café",          name: "Flat White Especial",          price: "$65 MXN",          rating: 5,
          reviewCount: "200",          imageSrc: "http://img.b2bpic.net/free-photo/mockup-liquid-bottle-labels_53876-63374.jpg"},
        {
          id: "p4",          brand: "Luun Signature",          name: "Avocado Toast",          price: "$160 MXN",          rating: 4,
          reviewCount: "95",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-breakfast-plate-with-eggs-pancakes_23-2148297952.jpg"},
        {
          id: "p5",          brand: "Brunch",          name: "Yogurt Bowl",          price: "$140 MXN",          rating: 5,
          reviewCount: "70",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-different-fruits-composition-fresh-sliced-fruits-dark-background-health-ripe-fresh-fruit-mellow_140725-116448.jpg"},
        {
          id: "p6",          brand: "Luun Signature",          name: "Breakfast Sándwich",          price: "$175 MXN",          rating: 5,
          reviewCount: "110",          imageSrc: "http://img.b2bpic.net/free-photo/elevated-view-toast-fried-egg-bacon-salad-gray-plate-against-white-background_23-2148067188.jpg"},
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
        {
          id: "1",          name: "Sofía M.",          handle: "@sofia.lifestyle",          testimonial: "El lugar más estético de Mérida. Los huevos benedictinos son otro nivel.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-cup-coffee_23-2149003925.jpg"},
        {
          id: "2",          name: "Carlos E.",          handle: "@carlos.viajero",          testimonial: "Un oasis en Paseo Montejo. El café de especialidad es impecable.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-smiling_1149-584.jpg"},
        {
          id: "3",          name: "Lucía P.",          handle: "@lucia.gastronomia",          testimonial: "Cada rincón es perfecto para fotos. El servicio es de primera.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12307.jpg"},
        {
          id: "4",          name: "Diego R.",          handle: "@diego.foodie",          testimonial: "La calidad de los ingredientes se nota en cada bocado. Imprescindible.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/business-woman-green-suit-using-phone-outside-street_1303-29546.jpg"},
        {
          id: "5",          name: "Elena T.",          handle: "@elena.creativa",          testimonial: "Mi lugar favorito para empezar el día. Creatividad y buen brunch.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-with-hat-looking-away_23-2148276101.jpg"},
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
        {
          id: "q1",          title: "¿Tienen opciones vegetarianas?",          content: "Sí, contamos con una amplia variedad de opciones vegetarianas frescas y balanceadas."},
        {
          id: "q2",          title: "¿Se necesita reservar?",          content: "Recomendamos reservar los fines de semana a través de nuestro sitio web para asegurar tu lugar."},
        {
          id: "q3",          title: "¿Aceptan mascotas?",          content: "Somos un café pet-friendly en nuestra terraza al aire libre."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-minimal-concept-objects-shadows_23-2148835315.jpg"
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
        {
          name: "name",          type: "text",          placeholder: "Nombre completo",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Correo electrónico",          required: true,
        },
        {
          name: "date",          type: "date",          placeholder: "Fecha de reserva",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Detalles adicionales o alergias...",        rows: 3,
        required: false,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/vertical-shot-woman-fashionable-outfit-sitting-cafe-area-with-coffee-croissant-looking-away-street_197531-22726.jpg"
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
