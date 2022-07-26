import React from "react";
import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/Hero.js";
import FeatureStats from "components/FeatureStats.js";
import Features from "components/Features.js";
import MainFeature from "components/MainFeature.js";
import MainFeature2 from "components/MainFeature2.js";
import FeatureWithSteps from "components/FeatureWithSteps.js";
// import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/Testimonial.js";
import FAQ from "components/FAQ.js";
import GetStarted from "components/GetStarted";
import Footer from "components/Footer.js";
import heroScreenshotImageSrc from "images/about.svg";
import macHeroScreenshotImageSrc from "images/phone.png";
import prototypeIllustrationImageSrc from "images/join.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import DownloadApp from "components/DownloadApp";

// import ContactUs from "pages/ContactUs";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      
        
     
      <FeatureStats/>
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
      />
      <MainFeature
        subheading={<Subheading>Quality Work</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      />
      {/* <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      /> */}
      <DownloadApp/>
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            We Always Abide by Our <HighlightedText>Principles.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Affordable",
            description: "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description: "We assure you that our Doctor are verified through a robust process.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
      />
      {/* <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
          </>
        }
        plans={[
          {
            name: "Personal",
            price: "$17.99",
            duration: "Monthly",
            mainFeature: "For Individuals",
            features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"]
          },
          {
            name: "Business",
            price: "$37.99",
            duration: "Monthly",
            mainFeature: "For Small Businesses",
            features: ["60 Templates", "15 Landing Pages", "22 Internal Pages", "Priority Assistance"],
            featured: true
          },
          {
            name: "Enterprise",
            price: "$57.99",
            duration: "Monthly",
            mainFeature: "For Large Companies",
            features: ["90 Templates", "27 Landing Pages", "37 Internal Pages", "Personal Assistance"]
          }
        ]}
      /> */}
      <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing User Experience",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            customerName: "Charlotte Hale",
            customerTitle: "Director, Delos Inc."
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Love the Developer Experience and Design Principles !",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, EventsNYC"
          }
        ]}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: " How to setup Libero Health Account ?",
            answer:
              "VIDEO"
          },
          {
            question: "What is connected health ?",
            answer:
              "Connected health is a technology enabled patient centered care using digital, cloud computing and artificial intelligence;technologies to empower patients by giving them more control over their own health. Connected health;has the potential to increase productivity for healthcare provider, deliver cost savings, less reliance on experts, improve effective personal behaviour and prevention of disease for patients. Connected health also improves patient's experience by bringing business partners integrated into the patient centred ecosystem such as health insurance, pharmaceutical, medical accommodation and transportation into the holistic patient care journey."
          },
          {
            question: "Are there any subscription plans ?",
            answer:
              "It is free to register an account with Libero Health and you only pay for cost of service you use as a pay-as-you-go payment. We do not charge any recurring subscription payments."
          },
          {
            question: "How to maintain my Electronic health record ?",
            answer:
              "We offer a secure storage for your past and current medical records, you can upload and access your health records and medical history from anywhere, anytime. We also allow your Healthcare providers to upload your electronic health records after your medical appointment. We also offer for you to share your medical records and history with your healthcare providers as read only prior to your appointment."
          },
          {
            question: "How do I book an appointment ?",
            answer:
              "Make an appointment by going to Doctor's Profile and clicking on the “Book Appointment"
          },
          {
            question: " When should I choose “Individual” vs “Organization” for a provider/partner type ?",
            answer:
              "Individual should be chosen for those registering up for themselves who doesn’t have their own registered business name. The individual may choose to link the company/organization they work for. Organization should be chosen if you own a business. Organization can be self-employed/small, medium, corporate/enterprise. Organization can link their provider/partner who works for them."
          }
        ]}
      />
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}
