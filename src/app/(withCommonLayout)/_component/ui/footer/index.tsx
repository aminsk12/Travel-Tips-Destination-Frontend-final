"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Divider } from "@nextui-org/divider";
import Link from "next/link"; // Import Next.js Link component
import Image from "next/image";

import SocialLinks from "../socialLinks";

import BrandLogo from "@/src/components/shared/logo";

const Footer: React.FC = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="text-default-900 flex flex-col items-center py-10">
      <Divider className="my-2" />

      <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:justify-between w-full gap-8 mb-8 max-w-7xl mx-auto px-2 md:px-6">
        {/* Logo */}
        <motion.div
          animate={{ opacity: 1 }}
          className="flex flex-col items-center md:items-start text-center justify-center md:justify-center md:text-left w-full md:w-[200px]"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-center md:justify-start items-center gap-1">
            <BrandLogo />
            <p className="font-bold text-inherit">TravelQuesta</p>
          </div>
          <p className="text-default-900 text-xs">
            Your Journey Begins Here, The World is Yours to Explore.
          </p>
        </motion.div>

        {/* Satisfied Travelers */}
        <motion.div
          animate={{ opacity: 1 }}
          className="flex flex-col items-center text-center md:text-left mt-2"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-2">Satisfied Travelers</h3>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-pink-500 mt-1 flex flex-col gap-1 items-center"
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            <Image
              alt="plane"
              className="w-[200px] object-cover rounded"
              height={500}
              src={
                "https://res.cloudinary.com/dlmmd8a0k/image/upload/v1721996947/samples/landscapes/girl-urban-view.jpg"
              }
              width={500}
            />
            <CountUp
              className="-mt-12"
              duration={2.5}
              end={5879}
              separator=","
            />
          </motion.div>
        </motion.div>

        {/* Our Offices - Static Location */}
        <motion.div
          animate={{ opacity: 1 }}
          className="flex flex-col items-center md:items-start md:text-left mt-2"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-2">Our Office Location</h3>
          <p className="text-default-900 text-xs">West Bangol, INDIA</p>
          <p className="text-default-900 text-xs">TravelQuesta@travel.com</p>
          <p className="text-default-900 text-xs">+91 8101718317</p>
          <SocialLinks />
        </motion.div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center md:flex-row md:justify-center mt-4">
        <Link
          className="mx-2 hover:text-default-900 text-default-800 text-xs"
          href="/news-feed/posts"
        >
          News Feed
        </Link>
        <Link
          className="mx-2 hover:text-default-900 text-default-800 text-xs"
          href="/docs"
        >
          Docs
        </Link>
        <Link
          className="mx-2 hover:text-default-900 text-default-800 text-xs"
          href="/pricing"
        >
          Pricing
        </Link>
        <Link
          className="mx-2 hover:text-default-900 text-default-800 text-xs"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className="mx-2 hover:text-default-900 text-default-800 text-xs"
          href="/about"
        >
          About Us
        </Link>
        <Link
          className="mx-2 hover:text-default-900 text-default-800 text-xs"
          href="/contact"
        >
          Contact Us
        </Link>
      </div>

      {/* Footer Bottom */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mt-2 pt-4 text-sm text-default-900 flex items-center flex-col md:flex-row justify-between w-full max-w-7xl mx-auto px-2 md:px-6"
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.8 }}
      >
        <span>© Copyright Travel Platform {date}</span>
        <span className="font-medium">Amin Sk (Founder)</span>
        <div className="space-x-4">
          <Link
            className="hover:text-default-900 text-default-800 text-xs"
            href="/sitemap"
          >
            Sitemap
          </Link>
          <Link
            className="hover:text-default-900 text-default-800 text-xs"
            href="/terms-and-conditions"
          >
            Terms and Conditions
          </Link>
          <Link
            className="hover:text-default-900 text-default-800 text-xs"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
