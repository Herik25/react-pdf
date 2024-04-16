import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PdfFile from "./PdfFile";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Form = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("m.tech");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  return (
    <div className=" bg-[#080710] h-screen w-full">
      <div className=" w-[430px] h-[520px] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]">
        <div className=" h-[150px] w-[150px] absolute rounded-full first:bg-[#ff512f] first:left-[-60px] first:top-[-40px] animate-slideDown"></div>
        <div className=" h-[150px] w-[150px] absolute rounded-full last:bg-[#1845ad] last:right-[-50px] last:bottom-[-40px] animate-slideUp"></div>
      </div>
      <form
        method="GET"
        action="/pdf"
        className="h-[450px] w-[400px] bg-[#fff] bg-opacity-5 backdrop-blur-md absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] rounded-lg border-white border-opacity-1 px-[50px] py-[35px] text-white outline-none border-none font-poppins"
      >
        <h3 className=" text-3xl font-semibold leading-10 text-center">
          Details
        </h3>
        <div className=" mt-10 mb-6">
          <label htmlFor="name" className=" mt-8 text-base font-semibold">
            Name
          </label>
          <br />
          <input
            required
            className=" h-[50px] w-full rounded py-[10px] mt-2 text-sm placeholder:text-[#9a9a9a] text-[#000] px-3"
            type="text"
            placeholder="Full Name"
            id="name"
            name="name"
            onChange={handleNameChange}
          />
        </div>
        <div className=" mb-10">
          <label htmlFor="password" className=" mt-8 text-base font-semibold">
            Courses
          </label>
          <br />
          <select
            id="course"
            name="course"
            onChange={handleCourseChange}
            className=" h-[50px] w-full rounded py-[10px] mt-2 text-sm placeholder:text-[#9a9a9a] text-[#000] px-3"
          >
            <option value="m.tech">M.Tech</option>
            <option value="b.tech">B.Tech</option>
          </select>
        </div>
        <div className=" flex gap-3">
          <button
            value="submit"
            className=" w-full bg-[#1845ad] text-[#fff] px-4 py-2 text-md font-semibold rounded cursor-pointer"
          >
            Submit
          </button>
          <div className={` w-full bg-[#ff512f] text-[#fff] px-4 py-2 text-md font-semibold rounded cursor-pointer ${name === "" ? "pointer-events-none" : ""}`}>
            <PDFDownloadLink
              document={<PdfFile dName={name} Dcourse={course} />}
              fileName="FeeDocument.pdf"
            >
              {({ blob, url, loading, error }) => "Generate PDF"}
            </PDFDownloadLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
