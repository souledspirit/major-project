import React from "react";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNfcSymbol } from "@fortawesome/free-brands-svg-icons";
import {
  faFingerprint,
  faClockRotateLeft,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url('path/to/your/background-image.jpg')` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Bionite</h1>
            <p className="mb-5">
              The next generation of attendance systems using NFC and
              fingerprint technology.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {/* NFC Card Compatibility Card */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body flex flex-col items-center">
                <div className="text-center py-4">
                  <FontAwesomeIcon
                    icon={faNfcSymbol}
                    style={{ color: "#1662e3", fontSize: "3rem" }}
                  />
                </div>
                <h2 className="card-title ">NFC Card Compatibility</h2>
                <p>Seamless integration with NFC cards for easy attendance.</p>
              </div>
            </div>

            {/* Fingerprint Scanning Card */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body flex flex-col items-center">
                <div className="text-center py-4">
                  <FontAwesomeIcon
                    icon={faFingerprint}
                    style={{ color: "#1662e3", fontSize: "3rem" }}
                  />
                </div>
                <h2 className="card-title">Fingerprint Scanning</h2>
                <p>
                  Enhanced security with biometric fingerprint identification.
                </p>
              </div>
            </div>

            {/* Real-time Tracking Card */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body flex flex-col items-center">
                <div className="text-center py-4">
                  <FontAwesomeIcon
                    icon={faClockRotateLeft}
                    style={{ color: "#1662e3", fontSize: "3rem" }}
                  />
                </div>
                <h2 className="card-title">Real-time Tracking</h2>
                <p>Monitor attendance in real-time with instant updates.</p>
              </div>
            </div>

            {/* Top-notch Security Card */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body flex flex-col items-center">
                <div className="text-center py-4">
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    style={{ color: "#1662e3", fontSize: "3rem" }}
                  />
                </div>
                <h2 className="card-title">Top-notch Security</h2>
                <p>
                  Ensure the safety of your data with advanced security
                  protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">About Bionite</h2>
            <p className="max-w-xl mx-auto">
              Bionite revolutionizes attendance management by offering a secure,
              efficient, and user-friendly solution for organizations of all
              sizes.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-neutral text-neutral-content">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="mb-5">
            Contact us today to learn more about Bionite or to schedule a demo.
          </p>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

export default HomePage;
