import React from 'react';
import { HiOutlineDocumentText } from "react-icons/hi";
import { LuUserRoundPlus } from "react-icons/lu";

const AdminOptions = () => {
    // const options = [
    //     {
    //         name: "Registered Students",
    //         iconName: HiOutlineDocumentText
    //     },
    //     {
    //         name: "Create Admin",
    //         iconName: LuUserRoundPlus
    //     },
    // ]
  return (
    <div className='admin-options-container'>
        {/* {
            options.map((option) => (
                <section key={option.name} className={`option`}>
                    <option.iconName
                        title={option.name}
                        className={`w-10 h-10`}
                    />
                    <span className="icon-name">
                        {option.name}
                    </span>
                </section>
            ))
        } */}
        
    </div>
  )
}

export default AdminOptions;