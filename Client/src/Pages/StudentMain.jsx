import {useState, useEffect} from 'react';
import Details from './Details';
import UploadDocumentsStudent from '../Components/Student Components/UploadDocumentsStudent';
import { useSearchParams } from 'react-router-dom';

const StudentMain = () => {
  const tabs = [
    {
      id: 1,
      name: "Student Details",
      urlName: "details"
    },
    {
      id: 2,
      name: "Upload Documents",
      urlName: "documents"
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0].name);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "details";

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
                onClick={() => {setSearchParams({tab: tab.urlName}); setSelectedTab(tab.name)}}
              >
                <span className={`tab-name font-medium text-[#ec2222]`}>
                  {tab.name}
                </span>
              </section>
            );
          })}
      </div>
      <div className="wrapper">
        <h2 className="text-4xl text-red-500 mb-4 mt-2 text-center font-medium text-nowrap">
          {selectedTab}
        </h2>
        {currentTab === tabs[0].urlName && <Details />}
        {currentTab === tabs[1].urlName && <UploadDocumentsStudent />}
      </div>
    </div>
  );
}

export default StudentMain;