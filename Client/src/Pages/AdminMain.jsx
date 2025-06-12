import React, { useState } from "react";
import RegisteredStudents from "../Components/Admin Components/RegisteredStudents";
import UploadDocuments from "../Components/Admin Components/UploadDocuments";

const AdminMain = () => {
  const tabs = [
    {
      id: 1,
      name: "Registered Students",
    },
    {
      id: 2,
      name: "Upload Documents",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0].name);

  return (
    <div className="admin-page-container w-full min-h-full rounded-lg bg-white shadow-[0_0_5px_gray]">
      <div className={`tabs-container px-1 pt-2 rounded-t-lg bg-[#ff5b5b]`}>
        {/* border-b-2 border-stone-400 */}
        {tabs &&
          tabs.map((tab) => {
            return (
              <section
                key={tab.id}
                className={`tab cursor-pointer inline-block w-fit h-full px-2 py-1 mr-1 rounded-t-lg border-b-2 ${
                  selectedTab === tab.name
                    ? "bg-white border-transparent"
                    : "bg-[#ffe8e8] rounded-b-md border-[#ff5b5b]"
                } hover:bg-white transition-all duration-100 ease-in-out group`}
                onClick={() => setSelectedTab(tab.name)}
              >
                {/*[#ffecec]*/}
                <span className={`tab-name font-medium text-[#ec2222]`}>
                  {/* ${
                    selectedTab === tab.name ? "text-[#ff5b5b]" : "text-black"
                  } group-hover:text-[#ff5b5b] transition-all duration-100 ease-in-out */}
                  {tab.name}
                </span>
              </section>
            );
          })}
      </div>
      <div className="wrapper">
        <h2 className="mt-2 text-3xl font-medium text-center text-nowrap">
          {selectedTab}
        </h2>
        {selectedTab === tabs[0].name && <RegisteredStudents />}
        {selectedTab === tabs[1].name && <UploadDocuments />}
      </div>
    </div>
  );
};

export default AdminMain;
