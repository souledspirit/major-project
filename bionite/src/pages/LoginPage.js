// LoginPage.js

import React from "react";
import SignInForm from "../components/authentication/SignInForm"; // Import the SignInForm component
import LoginForm from "../components/authentication/LoginForm";

function LoginPage() {
  return (
    <div>
      {/* Wrap the SignInForm component here */}
      <LoginForm />

      <div class="flex flex-col min-h-screen">
        {/* <!-- Hero Section --> */}
        <div
          class="hero min-h-screen"
          style="background-image: url('path/to/your/background-image.jpg');"
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Welcome to Bionite</h1>
              <p class="mb-5">
                The next generation of attendance systems using NFC and
                fingerprint technology.
              </p>
              <button class="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        {/* <!-- Features Section --> */}
        <div class="py-16 bg-neutral">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                  <h2 class="card-title">NFC Card Compatibility</h2>
                  <p>
                    Seamless integration with NFC cards for easy attendance.
                  </p>
                </div>
              </div>
              <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                  <h2 class="card-title">Fingerprint Scanning</h2>
                  <p>
                    Enhanced security with biometric fingerprint identification.
                  </p>
                </div>
              </div>
              <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                  <h2 class="card-title">Real-time Tracking</h2>
                  <p>Monitor attendance in real-time with instant updates.</p>
                </div>
              </div>
              <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                  <h2 class="card-title">Top-notch Security</h2>
                  <p>
                    Ensure the safety of your data with advanced security
                    protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- About Section --> */}
        <div class="py-16">
          <div class="container mx-auto px-4">
            <div class="text-center">
              <h2 class="text-3xl font-bold mb-4">About Bionite</h2>
              <p class="max-w-xl mx-auto">
                Bionite revolutionizes attendance management by offering a
                secure, efficient, and user-friendly solution for organizations
                of all sizes.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- CTA Section --> */}
        <div class="py-16 bg-neutral text-neutral-content">
          <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold">Ready to get started?</h2>
            <p class="mb-5">
              Contact us today to learn more about Bionite or to schedule a
              demo.
            </p>
            <button class="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
