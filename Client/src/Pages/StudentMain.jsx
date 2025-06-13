import React, {useState} from 'react';
import Details from './Details';
import UploadDocumentsStudent from '../Components/Student Components/UploadDocumentsStudent';

const StudentMain = () => {
  const tabs = [
    {
      id: 1,
      name: "Student Details",
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
                <span className={`tab-name font-medium text-[#ec2222]`}>
                  {tab.name}
                </span>
              </section>
            );
          })}
      </div>
      <div className="wrapper">
        <h2 className="my-2 text-3xl font-medium text-center text-nowrap">
          {selectedTab}
        </h2>
        {selectedTab === tabs[0].name && <Details />}
        {selectedTab === tabs[1].name && <UploadDocumentsStudent />}
      </div>
    </div>
  );
}

export default StudentMain;