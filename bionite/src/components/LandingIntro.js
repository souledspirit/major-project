import React from "react";
import hiveLogo from "../assets/hive.png"; // Ensure this path matches the location of your image in the project

function LandingIntro() {
  return (
    <div className="hero min-h-full rounded-l-xl bg-gray-900">
      <div className="hero-content text-white py-12">
        <div className="max-w-md mx-auto">
          {/* Adjusted section for logo and text alignment */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center">
              <img src={hiveLogo} className="w-12 h-12" alt="Bionite logo" />
              <h1 className="text-4xl font-bold ml-2">Bionite</h1>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-primary text-center">
            Welcome to Bionite
          </h2>
          <div className="mt-6 text-left">
            <p className="py-2">
              ✓
              <span className="font-semibold text-primary">
                NFC and Fingerprint
              </span>{" "}
              authentication for secure access
            </p>
            <p className="py-2">
              ✓ Integrated
              <span className="font-semibold text-primary">
                real-time attendance tracking
              </span>{" "}
              system
            </p>
            <p className="py-2">
              ✓ Advanced
              <span className="font-semibold text-primary">
                data analytics
              </span>{" "}
              for insights on attendance patterns
            </p>
            <p className="py-2">
              ✓ Comprehensive
              <span className="font-semibold text-primary">
                user management
              </span>{" "}
              capabilities
            </p>
            <p className="py-2 mb-4">
              ✓ Built with
              <span className="font-semibold text-primary">React</span> and
              <span className="font-semibold text-primary">DaisyUI</span> for a
              modern, responsive UI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingIntro;
