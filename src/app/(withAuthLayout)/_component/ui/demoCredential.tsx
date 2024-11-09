import React from "react";

type DemoCredentialProps = {
  onDemoClick: (email: string, password: string) => void;
};

export default function DemoCredential({ onDemoClick }: DemoCredentialProps) {
  return (
    <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
      <button
        className="flex flex-col items-center px-3 py-2 rounded-full border border-default-200 text-default-700 text-xs z-10"
        onClick={() => onDemoClick("aminskeh786@gmail.com", "123456789")}
      >
        <p>Admin Email: aminskeh786@gmail.com</p>
        <p>Password: 123456789</p>
      </button>
      <button
        className="flex flex-col items-center px-3 py-2 rounded-full border border-default-200 text-default-700 text-xs z-10"
        onClick={() => onDemoClick("aminsk@gmail.com", "123456")}
      >
        <p>User Email: aminsk@gmail.com</p>
        <p>Password: 123456</p>
      </button>
    </div>
  );
}
