import React from "react";

const About = () => {
  return (
    <div
      data-name="about"
      className="w-full md:h-screen bg-gray-900 text-gray-500"
      id="about"
    >
      <div className="max-w-screen-lg py-10 px-5 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-lg text-gray-500">
          I am a passionate and results-driven software developer with a focus
          on building scalable and high-performance applications. Over the
          years, I&apos;ve become comfortable working with modern technologies like
          Go (Golang) and Node.js, specializing in microservices architecture to
          build robust and maintainable systems. My experience includes
          developing production-ready applications that leverage gRPC for
          optimized API calls, ensuring low-latency communication between
          services.
        </p>

        <br />

        <p className="text-lg text-gray-500">
          I&apos;ve also gained hands-on expertise with Redis for implementing
          background jobs and caching, which improves system performance and
          scalability. I take pride in containerizing applications using Docker,
          and I am well-versed in CI/CD practices, having set up pipelines using
          GitHub Actions to automate the deployment of containers to AWS ECR.
        </p>

        <br />
        
        <p className="text-lg text-gray-500">
        In addition to my expertise with scalable and high-performance applications, I have also worked with real-time technologies, including WebSockets, to build applications that require low-latency, full-duplex communication. This has been particularly useful in building chat systems, live dashboards, and real-time notifications. I&apso;ve integrated WebSockets with microservices for seamless communication between frontend and backend, optimizing for minimal delay and maximum throughput.
        </p>

        <br />

        <p className="text-lg text-gray-500">
          My journey in software development has been built on a strong
          foundation of programming principles, and I continually strive to stay
          at the cutting edge of industry trends and technologies. Beyond my
          technical skills, I excel in problem-solving and communicating complex
          technical concepts clearly, bridging the gap between technical teams
          and non-technical stakeholders. I am always eager to explore new tools
          and methodologies to drive innovation and ensure that the systems I
          build are both efficient and future-proof.
        </p>
      </div>
    </div>
  );
};

export default About;
