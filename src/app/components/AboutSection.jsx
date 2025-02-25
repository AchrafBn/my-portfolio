"use client";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="lg:px-16">
        <div className="flex items-center flex-col pb-8">
          <Image
            alt="portrait"
            src="/images/about-image.png"
            width={100}
            className="mb-6"
            priority
            height={90}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
          <h4 className="text-3xl text-center font-bold text-white">
            About Me
          </h4>
        </div>

        <div className="md:px-36">
          <p className="text-base    leading-10   my-4 ">
            My name is Achraf, I am a Full Stack Developer with 5 years of
            experience, skilled in a variety of technologies including React,
            React Native/Expo ,Apollo client, Typescript and NodeJS for creating
            backend services using REST APIs and GraphQL
          </p>
          <p className="text-base     leading-10 my-4">
            My expertise with these tools enables me to efficiently build and
            manage both the front-end and back-end components of web and mobile
            applications across various tools and frameworks within the
            JavaScript ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
