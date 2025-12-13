import { useState, useEffect } from "react";
import RegisteredStudents from "../Components/Admin Components/RegisteredStudents";
import UploadDocuments from "../Components/Admin Components/UploadDocuments";
import { useSearchParams } from "react-router-dom";

const AdminMain = () => {
  const tabs = [
    {
      id: 1,
      name: "Registered Students",
      urlName: "regStu"
    },
    {
      id: 2,
      name: "Upload Documents",
      urlName: "uploadDocs"
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0].name);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "regStu";

  useEffect(() => {
    if (!currentTab) {
      setSearchParams({ tab: "personal" });
    }
  }, [currentTab, setSearchParams]);

  return (
    <div className="admin-page-container w-full min-h-full rounded-lg bg-white shadow-[0_0_5px_gray]">
      <div className={`tabs-container px-1 pt-2 rounded-t-lg bg-[#ff5b5b]`}>
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
                onClick={() => {setSearchParams({tab: tab.urlName}); setSelectedTab(tab.name);}}
              >
                <span className={`tab-name font-medium text-[#ec2222]`}>
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
        {currentTab === tabs[0].urlName && <RegisteredStudents />}
        {currentTab === tabs[1].urlName && <UploadDocuments />}
      </div>
    </div>
  );
};

export default AdminMain;
