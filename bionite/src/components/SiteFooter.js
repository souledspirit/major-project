import React from "react";

function SiteFooter() {
  return (
    <div>
      <footer className="footer footer-center p-4 bg-gray-800 text-white">
        <div>
          <p className="text-sm">© 2023 Bionite. All rights reserved.</p>
          <p>
            Created by{" "}
            <a
              href="https://www.instagram.com/jees_p_jose?igsh=MTF5eDJ4dGwxaXF1Mw=="
              className="link link-hover underline text-primary hover:text-primary-focus"
            >
              BIONITE TEAM
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default SiteFooter;
