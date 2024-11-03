import React, { useState } from "react";
import PracticeAreaCard from "../component/PracticeAreaCard";
import Modal from "../component/Modal";
import {
  FaIndustry,
  FaUniversity,
  FaBuilding,
  FaGavel,
  FaHome,
  FaChartLine,
} from "react-icons/fa";

const practiceAreas = [
  {
    title: "Mining & Resources",
    Icon: FaIndustry,
    description:
      "We provide comprehensive legal services for the mining and resources sector, including regulatory compliance, environmental issues, and contract negotiations.",
  },
  {
    title: "Banking and Finance",
    Icon: FaUniversity,
    description:
      "Our banking and finance team offers expert advice on complex financial transactions, regulatory matters, and structuring of financial products.",
  },
  {
    title: "Corporate and Commercial",
    Icon: FaBuilding,
    description:
      "We assist businesses with a wide range of corporate and commercial matters, including mergers and acquisitions, corporate governance, and commercial contracts.",
  },
  {
    title: "Dispute Resolution",
    Icon: FaGavel,
    description:
      "Our dispute resolution team represents clients in litigation, arbitration, and mediation across various industries and jurisdictions.",
  },
  {
    title: "Real Estate",
    Icon: FaHome,
    description:
      "We provide comprehensive legal services for real estate transactions, development projects, leasing, and property disputes.",
  },
  {
    title: "Corporate Insolvency & Restructuring",
    Icon: FaChartLine,
    description:
      "Our team advises on all aspects of corporate insolvency and restructuring, helping businesses navigate financial difficulties and regulatory requirements.",
  },
];

const PracticeAreaPage: React.FC = () => {
  const [modalContent, setModalContent] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const handleCardClick = (area: typeof practiceAreas[0]) => {
    setModalContent(area);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold my-14 text-center">
        Our Practice Areas
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {practiceAreas.map((area, index) => (
          <PracticeAreaCard
            key={index}
            title={area.title}
            Icon={area.Icon}
            onClick={() => handleCardClick(area)}
          />
        ))}
      </div>
      <Modal
        isOpen={modalContent !== null}
        onClose={closeModal}
        title={modalContent?.title || ""}
        content={modalContent?.description || ""}
      />
    </div>
  );
};

export default PracticeAreaPage;
