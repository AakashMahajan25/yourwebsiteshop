"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // For the hamburger icon
import logo from "../../public/logo.png";
import { getCalApi } from "@calcom/embed-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  return (
    <motion.div
      className="flex sticky top-0 z-10 justify-between p-6 items-center w-full  backdrop-blur-xl lg:backdrop-blur-none"
      initial={{ translateY: "-100px", opacity: 0 }}
      animate={{ translateY: "0px", opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image src={logo} alt="Logo" width={1200} height={1200} className="w-14 h-14 cursor-pointer" />
      </motion.div>

      {/* Desktop Nav */}
      <motion.nav
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden md:flex border-2 gap-8 items-center backdrop-blur-[10px] border-[#262626] px-8 py-4 rounded-full"
      >
        <Link href={"#hero"} className="text-gray-300 hover:text-gray-100 transition-all duration-500">
          Home
        </Link>
        <Link href={"#project"} className="text-gray-300 hover:text-gray-100 transition-all duration-500">
          Projects
        </Link>
        <Link href={"#whyus"} className="text-gray-300 hover:text-gray-100 transition-all duration-500">
          Why Us
        </Link>
        {/* <Link href={""} className="text-gray-300 hover:text-gray-100 transition-all duration-500">
          Testimonials
        </Link> */}
        <Link href={"#faq"} className="text-gray-300 hover:text-gray-100 transition-all duration-500">
          FAQs
        </Link>
      </motion.nav>

      {/* Contact Button - Shown only on Desktop */}
      <motion.div
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden md:block"
      >
       <button data-cal-namespace="30min"
            data-cal-link="aakash-mahajan/30min"

            data-cal-config='{"layout":"month_view"}' className='bg-[#DDFF00] text-black rounded-full px-4 py-3 font-semibold'>
            Book a Call
          </button>
      </motion.div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden ">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white w-8 h-8" /> : <Menu className="text-white w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-16 left-0 w-full backdrop-blur-lg shadow-2xl p-6 rounded-lg md:hidden flex flex-col items-center gap-4"
        >
          <Link href={"#hero"} className="text-gray-100  transition-all duration-500">
            Home
          </Link>
          <Link href={"#project"} className="text-gray-100  transition-all duration-500">
            Projects
          </Link>
          <Link href={"#whyus"} className="text-gray-100  transition-all duration-500">
            Why Us
          </Link>
          {/* <Link href={"#"} className="text-gray-100  transition-all duration-500">
            Testimonials
          </Link> */}
          <Link href={"#faq"} className="text-gray-100  transition-all duration-500">
            FAQs
          </Link>
          <button data-cal-namespace="30min"
            data-cal-link="aakash-mahajan/30min"

            data-cal-config='{"layout":"month_view"}' className='bg-[#DDFF00] text-black rounded-full px-4 py-3 font-semibold'>
            Book a Call
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
