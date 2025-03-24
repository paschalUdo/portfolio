import React from "react";

const Experience = () => {
  return (
    <div
      data-name="experience"
      className="py-32 w-full bg-white"
      id="experience"
    >
      <div className="bg-gray-900 text-gray-200 py-12 md:py-24">
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience</h2>
          <p className="text-gray-400 mb-12">
            Discover my journey through the tech realm:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-200">
                  Peerbill
                </h3>
                <p className="text-gray-400 mb-2">
                  Fullstack Developer - Contract
                </p>
                <p className="text-gray-400 mb-2">Contract Ongoing</p>
              </div>
              <div className="px-6 py-4 bg-gray-700">
                <p className="text-gray-400 mb-2">
                  1. Enabled users to pay for utility bills directly through
                  their connected crypto wallet addresses, integrating seamless
                  blockchain payment functionality.
                </p>
                <p className="text-gray-400 mb-2">
                  2. Allowed users to purchase airtime and data bundles using
                  their connected wallet addresses, providing a convenient way
                  to pay with crypto.
                </p>
                <p className="text-gray-400 mb-2">
                  3. Facilitated user onboarding for traders by creating a
                  registration flow, enabling them to sign up on Peerbill&apos;s
                  platform.
                </p>
                <p className="text-gray-400 mb-2">
                  4. Developed a crypto/fiat trade matching system that connects
                  users to available traders for seamless peer-to-peer (P2P)
                  transactions.
                </p>
                <p className="text-gray-400 mb-2">
                  5. Deployed the application to AWS Elastic Container Registry
                  (ECR) for efficient container management and automated the
                  CI/CD pipeline for smooth updates.
                </p>
                <p className="text-gray-400 mb-2">
                  6. Utilized AWS Elastic Kubernetes Service (EKS) for container
                  orchestration, ensuring high availability and scalability of
                  the application across multiple environments.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-200">
                  Hackpiy Blockchain Solutions
                </h3>
                <p className="text-gray-400 mb-2">
                    Blockchain Integration Engineer
                </p>
                <p className="text-gray-400 mb-2">October 2022 - July 2023</p>
              </div>
              <div className="px-6 py-4 bg-gray-700">
                <p className="text-gray-400 mb-2">
                  1. Built and maintained multiple servers using Node.js and
                  Golang, ensuring robust, scalable backend solutions to meet
                  business requirements.
                </p>
                <p className="text-gray-400 mb-2">
                  2. Contributed to frontend development by integrating
                  blockchain-based functionalities, enhancing user experience
                  with seamless interaction between the frontend and backend.
                </p>
                <p className="text-gray-400 mb-2">
                  3. Wrote comprehensive technical documentation for various
                  subjects, including blockchain fundamentals, Node.js, and
                  Golang, making complex topics accessible for developers and
                  non-technical stakeholders alike.
                </p>
                <p className="text-gray-400 mb-2">
                  4. Documented best practices and architectural patterns for
                  blockchain development, guiding myself and other software
                  developers to build secure and efficient decentralized
                  applications.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-200">
                  Applied Technologies
                </h3>
                <p className="text-gray-400 mb-2">
                  Instructor for JavaScript/TypeScript
                </p>
                <p className="text-gray-400 mb-2">April 2021 - August 2021</p>
              </div>
              <div className="px-6 py-4 bg-gray-700">
                <p className="text-gray-400 mb-2">
                  1. Taught students the fundamentals of Node.js, covering
                  topics such as setting up development environments, working
                  with modules, and building RESTful APIs, which laid the
                  foundation for my career in full-stack development.
                </p>
                <p className="text-gray-400 mb-2">
                  2. Introduced students to TypeScript, teaching them the power
                  of strong typing and how to integrate it with JavaScript
                  projects, helping them build more maintainable and scalable
                  applications.
                </p>
                <p className="text-gray-400 mb-2">
                  3. Fostered a passion for programming in students, delivering
                  practical examples and guiding them in developing hands-on
                  projects that aligned with real-world development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
