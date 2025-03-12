"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { getCalApi } from "@calcom/embed-react";

const Footer: React.FC = () => {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-[100%]">
      <div className="sm:py-[120px] sm:px-[80px] py-[80px] px-[30px]">
        <div
          className="max-w-[1440px] flex flex-col items-center justify-center text-center gap-[40px] py-[80px] lg:pr-[80px] lg:pl-[80px] pr-[32px] pl-[32px] rounded-[32px]"
          style={{
            background: "linear-gradient(140.06deg, #1A1A1A 0%, #0D0D0D 100%)",
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#CCCCCC]">
            Elevate the way you <br className="hidden lg:flex" /> source websites
          </h1>
          <p className="text-lg md:text-xl text-[#7d7f78]">
            Get ready to start producing stunning, efficient website{" "}
            <br className="hidden lg:flex" /> work without the hassles of
            hiring. Soon available.
          </p>

          <div className="border-[#262626] flex sm:gap-32 bg-[#131313] border rounded-full w-fit p-2 pl-4 mx-auto">
            <input
              className="bg-transparent focus:outline-none text-lg"
              type="text"
              placeholder="name@email.com"
            />
            <button data-cal-namespace="30min"
            data-cal-link="aakash-mahajan/30min"

            data-cal-config='{"layout":"month_view"}' className='bg-[#DDFF00] text-black rounded-full px-4 py-3 font-semibold'>
            Let's Connect
          </button>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col flex-nowrap items-center justify-between w-full px-[80px] pb-[50px] sm:pb-[20px] overflow-visible relative">
        {/* Left: Logo */}
        <Image
          src={logo}
          alt="logo"
          width={1000}
          className="lg:w-[48px] lg:h-[48px] w-[96px] lg:mb-[0px] mb-[200px]"
        />

        {/* Center: Links */}
        <div className="font-semibold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex lg:flex-row flex-col text-center lg:gap-[32px] sm:gap-[12px] gap-[6px] text-[#7a7a7a] lg:pb-[12px]">
          <p className="mx-3 lg:mt-0 mt-6 text-lg hover:text-[#cccccc]">
            Contact
          </p>
          <p className="mx-3 text-lg hover:text-[#cccccc]">
            Privacy & Cookie Policy
          </p>
          <p className="mx-3 text-lg lg:mb-[0px] mb-[40px] hover:text-[#cccccc]">
            Terms & Conditions
          </p>
        </div>

        {/* Right: Crafted with Love */}
        <p className="flex text-lg items-center text-right text-[#c4c4c4] whitespace-nowrap font-semibold">
          Crafted with{" "}
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={"24px"}
            className="mx-2"
          >
            <path
              d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
              fill="#DDFF00"
            />
          </svg>{" "}
          <span className="text-[#7a7a7a]">by YourWebsite.shop</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
