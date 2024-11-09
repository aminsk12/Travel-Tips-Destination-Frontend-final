"use client";

import React, { useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";

import { primaryColor } from "@/src/styles/button";
import CButton from "@/src/components/ui/CButton/CButton";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);

    toast.success("Message send successful");
  };

  return (
    <div className="max-w-7xl mx-auto w-full">
      {/* Header Section */}
      <div className="text-center h-[60vh] mx-auto w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-default-700 flex items-center justify-center my-2 text-xs">
          <Link href={"/"}>Home</Link> &gt; Contact Us
        </p>
        <Image
          alt="doc image"
          className="w-[250px]"
          height={500}
          src={
            "https://uigaint.com/demo/html/staco_i/assets/images/services/skills-img.svg"
          }
          width={500}
        />
      </div>

      <form
        className="rounded-lg w-full md:w-[500px] border p-5 bg-default-50"
        onSubmit={handleSubmit}
      >
        {/* Name Field */}
        <div className="mb-6">
          <Input
            fullWidth
            required
            label="Your Name"
            placeholder="Enter your name"
            value={name}
            variant="underlined"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <Input
            fullWidth
            required
            label="Your Email"
            placeholder="Enter your email"
            type="email"
            value={email}
            variant="underlined"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <Textarea
            fullWidth
            required
            label="Your Message"
            placeholder="Write your message here..."
            value={message}
            variant="underlined"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mb-5">
          <CButton bgColor={primaryColor} text="Submit" type="submit" />
        </div>
      </form>
    </div>
  );
}
