import React from "react";
import Input from "../components/Input";
import Header from "../components/Header";

const IndexPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="w-full">
        <div className="bg-gray-300 px-36 py-20 text-center">
          <h1 className="text-xl">
            Introductory text to provide context on the submarket analysis and
            initiative
          </h1>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
