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
              Jees P J-Main Lead
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default SiteFooter;
