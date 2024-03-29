import React from "react";
import { converstation } from "../../../store/static";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../../../services/scroll-top.service";
function Footer() {
  return (
    <footer className="bg-blue-700  bottom-0 w-full">
      <div className="text-white text-xl flex gap-6 flex-wrap">
        <div>
        {converstation.footer.company_name} {new Date().getFullYear()}{" "}
        {converstation.footer.web_app_name}
        </div>
        <NavLink to="/privacy_policy" onClick={() => ScrollToTop}>
            Privacy Policy
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
