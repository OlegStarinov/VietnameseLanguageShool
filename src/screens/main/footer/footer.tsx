import React from "react";

function Footer() {
  return (
    <footer className="bg-[#260105] sticky top-[100vh]">
      <div className="text-white text-xl">
        © {new Date().getFullYear()} Vietnamese Language school for foreigner
      </div>
    </footer>
  );
}

export default Footer;
