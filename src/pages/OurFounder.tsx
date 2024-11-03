import React from "react";

const OurFounder: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center my-14">Our Founder</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img
            src="waiting1.jpg"
            alt="Anuparna Bordoloi"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Anuparna Bordoloi</h2>
          <p className="mb-4">
            Meet the driving force behind AB Chambers - Ms. Anuparna Bordoloi, a
            legal luminary and the founder of our distinguished law firm
            established in the year 2020. With a rich tapestry of experiences
            and a commitment to excellence, Ms. Bordoloi has emerged as a
            prominent figure in the legal landscape.
          </p>
          <p className="mb-4">
            Ms. Bordoloi embarked on her legal journey by enrolling in the
            Karnataka Bar Council in 2008. Over the years, she has honed her
            skills and gained invaluable experience handling a diverse range of
            legal matters before esteemed courts such as the Supreme Court of
            India, Karnataka High Court, and various other courts throughout the
            country.
          </p>
          <p className="mb-4">
            Ms. Bordoloi's commitment to continuous learning and professional
            development is evident in her completion of the Fellowship
            Assessment Course-2023 conducted by the Singapore Institute of
            Arbitrators (SiArb).
          </p>
          <p className="mb-4">
            Specializing primarily in general litigation, Ms. Bordoloi brings a
            comprehensive skill set to the forefront. Her expertise extends
            across various domains, including Conveyancing, Title Search,
            Liaising, Due Diligence, Registration of Property, Drafting
            Documentations, Research, Negotiation, and Legal Counselling. Her
            proficiency in these areas has been demonstrated through her
            appearance and representation in more than 150 reported judgments,
            showcasing her adeptness in handling complex legal scenarios.
          </p>
          <p className="mb-4">
            At AB Chambers, Ms. Anuparna Bordoloi's leadership is the driving
            force behind our commitment to excellence, client satisfaction, and
            ethical legal practice. With a foundation grounded in her extensive
            experience and dedication to continuous improvement, AB Chambers
            stands as a trusted name in the legal sphere, offering unparalleled
            services to our valued clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurFounder;
