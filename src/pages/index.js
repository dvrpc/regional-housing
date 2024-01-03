import React, { useRef } from "react";
import Input from "../components/Input";
import Hero from "../images/hero.jpg";
import Search from "../components/Search";
import { Link } from "gatsby";
import Footer from "../components/Footer";

const IndexPage = () => {
  const formRef = useRef(null);

  return (
    <div className="min-h-screen">
      <div className="w-full">
        <div
          className="p-4 md:px-36 md:py-6 text-center bg-left md:mt-0 bg-cover"
          style={{ backgroundImage: `url(${Hero})` }}
        />
        <div className="p-4 md:px-36 md:py-10 text-center border-b-[2px] border-gray-300 bg-white">
          <h1 className="text-[2rem] md:text-5xl font-bold leading-snug text-[#6C9CCD]">
            A Regional Approach to Housing Affordability
          </h1>
          <p className="text-lg md:text-2xl text-[#f05a22] leading-snug md:tracking-wide py-4 md:w-3/4 mx-auto text-gray-600">
            Municipalities across Greater Philadelphia are confronting a housing
            affordability crisis. DVRPC created the <i>Housing Submarkets</i>{" "}
            tool to help local governments better understand the challenges they
            are facing and how we can work together to address them.
          </p>
          <p className="flex flex-col text-center">
            <div className="flex flex-col md:w-full">
              <div className="md:flex w-full my-4">
                <span className="pb-4 md:pb-0 md:w-[35%] font-bold my-auto text-center tracking-[2px] md:mr-6 inline-block whitespace-nowrap text-[#6C9CCD] text-2xl md:text-right">
                  FIND A COMMUNITY:
                </span>
                <Search />
              </div>
              <div className="md:flex w-full my-4">
                <span className="pb-4 md:pb-0 md:w-[35%] font-bold my-auto text-center tracking-[2px] md:mr-6 inline-block whitespace-nowrap text-[#6C9CCD] text-2xl md:text-right">
                  BROWSE BY COUNTY:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-full">
                  <Link
                    to="/bucks"
                    className="bg-[#f05a22] text-white p-3 rounded-lg font-bold hover:bg-[#db5421]"
                  >
                    Bucks
                  </Link>
                  <Link
                    to="/burlington"
                    className="bg-[#f05a22] text-white p-3 rounded-lg font-bold hover:bg-[#db5421]"
                  >
                    Burlington
                  </Link>
                  <Link
                    to="/camden"
                    className="bg-[#f05a22] text-white p-3 rounded-lg font-bold hover:bg-[#db5421]"
                  >
                    Camden
                  </Link>
                  <Link
                    to="/chester"
                    className="bg-[#f05a22] text-white p-3 rounded-lg font-bold hover:bg-[#db5421]"
                  >
                    Chester
                  </Link>
                  <Link
                    to="/delaware"
                    className="bg-[#f05a22] text-white p-3 rounded-lg font-bold hover:bg-[#db5421]"
                  >
                    Delaware
                  </Link>
                  <Link
                    to="/gloucester"
                    className="bg-[#f05a22] text-white p-3 rounded-lg font-bold hover:bg-[#db5421]"
                  >
                    Gloucester
                  </Link>
                  <Link
                    to="/mercer"
                    className="bg-[#f05a22] text-white p-3 rounded-lg font-bold hover:bg-[#db5421]"
                  >
                    Mercer
                  </Link>
                  <Link
                    to="/montgomery"
                    className="bg-[#f05a22] text-white p-3 rounded-lg font-bold hover:bg-[#db5421]"
                  >
                    Montgomery
                  </Link>
                  <Link
                    to="/philadelphia"
                    className="bg-[#f05a22] text-white p-3 rounded-lg font-bold hover:bg-[#db5421]"
                  >
                    Philadelphia
                  </Link>
                </div>
              </div>
            </div>
          </p>
        </div>
        <div className="p-4 md:px-36 md:py-10 border-b-[2px] border-gray-300 bg-white">
          <div className="grid md:grid-cols-2 text-[#f05a22]">
            <p className="text-gray-600 md:pr-8">
              <strong className="block text-xl text-[#f05a22]">
                What is a submarket?
              </strong>
              The submarkets were developed by using a variety of data points
              and a clustering algorithm to sort census tracts in the region
              into one of eight distinct submarkets. Each submarket consists of
              neighborhoods that share similar housing types and market
              conditions, regardless of their location in the region. These
              characteristics help determine who can afford to live in various
              neighborhoods throughout Greater Philadelphia.
            </p>
            <p className="text-gray-600">
              <strong className="block text-xl text-[#f05a22]">
                How can this tool be used?
              </strong>
              Individuals can learn more about the housing conditions found in
              various parts of the region by searching for specific
              municipalities, counties, or Philadelphia Planning Districts from
              this page. Alternatively, users can explore the distribution of
              individual submarkets across the region by clicking on the{" "}
              <Link to="/submarkets" className="font-bold underline italic">
                Submarkets
              </Link>{" "}
              tab above.
              <br />
              <br />
              This tool is designed to help establish a common understanding of
              complex housing issues and inspire conversations about the ways
              that local governments can improve the variety and affordability
              of housing within their jurisdiction. Municipalities can use this
              targeted information to customize their own housing strategies and
              identify communities around the region with which they share
              similar housing challenges and opportunities.
            </p>
          </div>
        </div>
        <div className="p-4 md:px-36 md:pt-10 text-center bg-white">
          <h3 className="font-bold text-lg md:text-2xl text-[#6C9CCD] pb-4 tracking-[2px]">
            QUESTIONS, COMMENTS, OR UPDATES?
          </h3>
          <form className="flex flex-col" ref={formRef}>
            <div className="grid md:grid-cols-2">
              <div className="md:pr-4">
                <span className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                  <Input placeholder="First Name" name={"first"} isRequired />
                  <Input placeholder="Last Name" name={"last"} isRequired />
                </span>
                <Input placeholder="Email" name={"email"} isRequired />
              </div>
              <span className="w-full">
                <textarea
                  required
                  name="comment"
                  placeholder="Write your message here..."
                  className="font-normal appearance-none border-[1px] border-[#f05a22] rounded-lg w-full py-2 px-4 focus:outline-none focus:bg-white focus:border-blue-500 placeholder:italic text-gray-500 placeholder:text-gray-500 h-full mt-4 md:mt-0"
                />
              </span>
            </div>
            <button
              onClick={async (e) => {
                e.preventDefault();
                const data = new FormData(formRef.current);
                try {
                  const request = await fetch(
                    `https://www.dvrpc.org/asp/email/send.aspx`,
                    {
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                      method: "POST",
                      body: new URLSearchParams({
                        Email: data.get("email"),
                        Subject: "Regional Housing Comment",
                        ReplyTo: "thachadorian@dvrpc.org",
                        Name: `${data.get("first")} ${data.get("last")}`,
                        Message: data.get("comment"),
                      }),
                    }
                  );
                  if (request.ok) {
                    formRef.current.reset();
                    window.alert(
                      "Your comment has been submitted. Thank you for the feedback!"
                    );
                  }
                } catch (err) {
                  console.error(err);
                }
              }}
              className="bg-[#f05a22] text-white p-3 rounded-lg font-bold hover:bg-[#db5421] md:w-1/4 mt-8 mb-0 md:my-4 md:mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default IndexPage;
