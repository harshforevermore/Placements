import React, { useState } from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import InfiniteCircle from "../Loader/InfiniteCircle";
// import axios from 'axios';

const AlreadyRegistered = () => {
    const [loading, setLoading] = useState(false);
    async function handleDownload() {
        setLoading(true);
        try {
            // const response = await axios.get("", {
            //     responseType: "blob"
            // });

            // const url = window.URL.createObjectURL(new Blob([response.data]));
            // const link = document.createElement("a");
            // link.href = url;
            // link.setAttribute("download", "registeredDetails.pdf");
            // document.body.appendChild(link);
            // link.click();
            // link.remove();
            setTimeout(() => {
                setLoading(false);
            }, 2500);
        }
        catch (err) {
            console.error("Error occured while downloading: ", err);
        }
        finally {
            // setLoading(false);
        }
    }
  return (
    <div className="already-reg-container md:px-20 mt-10 place-items-center">
      <div className="check relative w-[20rem] text-center">
        <span className="text-3xl text-green-500">Already Registered</span>
        <div className="icon-and-line flex items-center mt-[1.6em]">
          <hr className="line relative w-1/2 border-2 border-green-500 text-green-500" />
          <IoCheckmarkDoneCircleOutline className="z-10 absolute left-1/2 -bottom-1/2 -translate-x-1/2 bg-white text-[4em] text-green-500 rounded-full " />
          <hr className="line relative w-1/2 border-2 border-green-500 text-green-500" />
        </div>
      </div>
      <div className="previous-form w-full h-14 mt-15 flex items-center gap-2">
        <section className="download-form inline-block">
          <span className="text-base text-gray-600">
            Download your form from here{" "}
          </span>
          <LuDownload className="inline-block cursor-pointer ml-2 text-2xl text-blue-600" onClick={handleDownload} />
        </section>
          {loading && <InfiniteCircle scale="75" />}
      </div>
    </div>
  );
};

export default AlreadyRegistered;