"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeMediumTitles"
        background="aurora"
        cardStyle="solid"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Menu",          id: "menu"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="El Rinconcito Mexicano"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "plain"}}
      title="Authentic Mexican Flavors"
      description="Experience the true taste of Mexico in the heart of New Brunswick. Fresh, traditional recipes made with passion."
      buttons={[
        {
          text: "View Menu",          href: "#menu"},
        {
          text: "Directions",          href: "https://maps.google.com"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-street-food-still-life_23-2151535327.jpg",          imageAlt: "Authentic Tacos"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/sliced-apples-peaches-peers-served-large-mirror_1304-4688.jpg",          imageAlt: "Carne Asada"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-appetizing-pozole-bowl_23-2149248558.jpg",          imageAlt: "Pozole Rojo"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-mexican-food_23-2148140178.jpg",          imageAlt: "Fried Fish"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-couple-talking-while-eating-lunch-restaurant_637285-9017.jpg",          imageAlt: "Fresh Tortillas"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-view-churros-sugar-cubes_23-2148379606.jpg",          imageAlt: "Delicious Churros"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "Tradition in Every Bite"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/beautiful-mexican-party-decoration-with-food_23-2149317309.jpg",          alt: "Mexican Dining Atmosphere"},
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Tacos Al Pastor",          price: "$12.00",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-exotic-cocktail-embossed-glass-wooden-stand-green-wall_140725-12805.jpg"},
        {
          id: "p2",          name: "Carne Asada",          price: "$18.00",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-pears-with-green-apples-grapes-kiwi-basket-yellow-checkered-towel-with-colored-pancakes-stand-white-background_141793-53511.jpg"},
        {
          id: "p3",          name: "Pozole Rojo",          price: "$15.00",          imageSrc: "http://img.b2bpic.net/free-photo/nam-phrik-kapi-with-chili-lemon-wooden-floor_1150-25820.jpg"},
        {
          id: "p4",          name: "Fried Fish",          price: "$14.00",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-fish-chips-plate-with-lemon-slice_23-2148784867.jpg"},
        {
          id: "p5",          name: "Quesadillas",          price: "$10.00",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-smiley-people-with-drinks_23-2150124809.jpg"},
        {
          id: "p6",          name: "Churros",          price: "$6.00",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-delicious-tacos_23-2150831067.jpg"},
      ]}
      title="Our Signature Dishes"
      description="From sizzling carne asada to perfectly seasoned tacos al pastor, explore our traditional menu favorites."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Why Choose Us?"
      description="Authentic recipes that bring our community together with every visit."
      accordionItems={[
        {
          id: "a1",          title: "Fresh Ingredients Daily",          content: "Everything is prepared fresh to ensure the highest quality for your family meal."},
        {
          id: "a2",          title: "Traditional Recipes",          content: "Our recipes passed down through generations deliver an unmatched authentic taste."},
        {
          id: "a3",          title: "Friendly Staff",          content: "We pride ourselves on providing excellent service that makes everyone feel welcome."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-wild-berries-clay-pot-table_141793-3800.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="partners" data-section="partners">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Local Foodies",        "Community Favorites",        "Authentic Choice",        "Restaurant Pros",        "Top Rated Eats",        "City Hotspots",        "Food Network"]}
      title="Loved by Our Community"
      description="Proud to serve the wonderful people of New Brunswick."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Faith",          handle: "@foodie",          testimonial: "I love the tacos because they have a wide selection and yes the lengua tacos were delicious!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-chilling-out-classy-lifestyle-reserved-concept_53876-15896.jpg"},
        {
          id: "2",          name: "Josue",          handle: "@guide",          testimonial: "If you want food for the money you pay then this is the place to go plus the dishes are delicious.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-with-delicious-taco_23-2151048053.jpg"},
        {
          id: "3",          name: "Jessica",          handle: "@fan",          testimonial: "Food was excellent, as always! I will definitely continue to recommend this place.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-pizza-medium-shot_23-2149872407.jpg"},
        {
          id: "4",          name: "Michael",          handle: "@local",          testimonial: "Absolutely great authentic experience. Highly recommended for any Mexican food lover.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-eating-burger-fast-food-cheat-meal-woman-burger-restaurant_169016-67594.jpg"},
        {
          id: "5",          name: "Sarah",          handle: "@user",          testimonial: "Really clean place, service is great and food is really authentic.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/indoor-shot-happy-bearded-man-with-specific-appearance-uses-tablet-computer_273609-8927.jpg"},
      ]}
      showRating={true}
      title="What Our Guests Say"
      description="Real experiences from satisfied diners who keep coming back for more."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Do you offer takeout?",          content: "Yes, we offer both takeout and delivery services for your convenience."},
        {
          id: "q2",          title: "Are you open on weekends?",          content: "We are open daily to serve you our authentic Mexican dishes."},
        {
          id: "q3",          title: "Is there seating available?",          content: "Yes, we have comfortable dine-in seating for all our guests."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/delicious-mexican-food_23-2147640328.jpg"
      title="Frequently Asked Questions"
      description="Everything you need to know about dining with us."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      text="Come visit us at 234 Somerset St, New Brunswick, NJ or give us a call at (732) 246-2949 to place your order!"
      buttons={[
          {
              text: "Call for Takeout",              href: "tel:7322462949"
          }
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Navigation",          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "About",              href: "#about"},
            {
              label: "Menu",              href: "#menu"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Call Us",              href: "tel:7322462949"},
            {
              label: "Directions",              href: "https://maps.google.com"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      logoText="El Rinconcito Mexicano"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}