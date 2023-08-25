import React from "react";
import Input from "../components/Input";
import DVRPC from "../images/dvrpc.svg";

const IndexPage = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full bg-slate-300 text-white">
        <div className="px-36 py-20 text-center">
          <h1 className="text-5xl font-bold leading-snug">
            Diagnosing the housing crisis in <br /> Greater Philadelphia
          </h1>
        </div>
        <div className="px-36 py-20 text-center border-b-4 border-[#A198D1] bg-white">
          <p className="text-2xl text-[#f05a22] leading-snug tracking-wide">
            The lack of affordable housing is one of the most significant
            challenges facing our region. <br />
            Home Remedies can help us better understand the problem and decide
            how to address it.
          </p>
        </div>
        <div className="px-36 py-20 border-b-4 border-[#A198D1] bg-white">
          <div className="grid grid-cols-2 text-[#f05a22]">
            <p>
              <strong className="block">What is a submarket?</strong>
              Is one of the most significant challenges facing our region. Home
              Remedies can help us better understand the problem and decide how
              to address it.
            </p>
            <p>
              <strong className="block">How did we get here?</strong>
              Is one of the most significant challenges facing our region. Home
              Remedies can help us better understand the problem and decide how
              to address it.
            </p>
          </div>
        </div>
        <div className="px-36 py-20 text-center bg-white">
          <h3 className="font-bold text-2xl text-[#6C9CCD]">
            REACH OUT WITH QUESTIONS, COMMENTS, OR UPDATES
          </h3>
          <form className="flex my-4">
            <div className="w-1/2">
              <span className="flex space-x-4 mb-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </span>
              <Input placeholder="Email" />
            </div>
            <span className="w-1/2">
              <textarea
                placeholder="Comments and/or Questions (optional)"
                className="font-normal appearance-none border-2 border-gray-200 rounded-lg w-full h-full py-2 px-4 mx-4 focus:outline-none focus:bg-white focus:border-blue-500"
              />
            </span>
          </form>
        </div>
        <footer className="bg-[#6C9CCD] flex px-36 py-14">
          <img src={DVRPC} alt="dvrpc logo" className="h-24 mt-1" />
          <p className="text-white ml-24 w-1/2 self-start">
            The Delaware Valley Regional Planning Commission is the federally
            designated Metropolitan Planning Organization for the Greater
            Philadelphia region, established by an Interstate Compact between
            the Commonwealth of Pennsylvania and the State of New Jersey.
            Members include Bucks, Chester, Delaware, Montgomery, and
            Philadelphia counties, plus the City of Chester, in Pennsylvania;
            and Burlington, Camden, Gloucester, and Mercer counties, plus the
            cities of Camden and Trenton, in New Jersey.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default IndexPage;
