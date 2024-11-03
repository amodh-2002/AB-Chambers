import React, { useState, useEffect } from "react";

const Cookie: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkCookieAgreement = () => {
    const hasAgreed = localStorage.getItem("cookieAgreed");
    setIsVisible(!hasAgreed);
  };

  useEffect(() => {
    checkCookieAgreement();
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        checkCookieAgreement();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleAgree = () => {
    localStorage.setItem("cookieAgreed", "true");
    setIsVisible(false);
  };

  const handleDisagree = () => {
    window.location.href = "https://www.google.com";
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-md mx-auto p-6 mt-12">
        {" "}
        {/* Add mt-12 here */}
        <h2 className="text-xl font-bold mb-4">Cookie Disclaimer</h2>
        <p className="mb-4">
          As per the Bar Council Of India, AB Chambers is not permitted to
          solicit work or advertising in any manner to the general public.
          Therefore, it is constrained to provide any further information on
          this website.
        </p>
        <p className="mb-4">
          By clicking on "I AGREE" below, the user acknowledges the following:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            There has been no solicitation, advertisement, or any form of direct
            or persuasive interaction or inducement towards the user by AB
            Chambers or its members.
          </li>
          <li>
            The user willfully wishes to gain more information about AB Chambers
            Office Bengaluru, its contact details, its area of expertise and
            practice, and its associates, for the user's own information and
            use.
          </li>
          <li>
            The information is made available only on the user's specific
            request, and any information downloaded from this website is
            completely of the user's volition.
          </li>
        </ul>
        <p className="mb-4">
          The information provided should not be interpreted as legal advice.
          For any legal concerns, users should seek independent legal advice.
        </p>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            onClick={handleDisagree}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Disagree
          </button>
          <button
            onClick={handleAgree}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookie;
