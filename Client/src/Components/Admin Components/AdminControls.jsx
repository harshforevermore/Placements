import React from 'react';
import { LuUserRoundPlus } from "react-icons/lu";

const AdminControls = () => {
    const controls = [
        {
            id: 1,
            name: "New Admin",
            icon: LuUserRoundPlus
        }
    ];

  return (
    <div className='admin-controls-container w-full h-full bg-white shadow-[0_0_5px_gray] rounded-lg'>
        <div className="headin-container px-3 mb-4 rounded-t-lg bg-[#ff5b5b]">
        <h1 className="main-heading text-3xl text-white font-medium">Admin Controls</h1>
      </div>
        <section className="admin-controls p-3">
            {
                controls.map((control) => (
                    <section key={control.id} className="control w-30 h-fit py-2 px-4 cursor-pointer rounded-lg shadow-[0_0_3px_gray] place-items-center hover:shadow-[0_0_5px_gray]">
                        <control.icon 
                            id={`${control.name}-icon`}
                            className='w-20 h-20'
                        />
                        <span className="control-name">{control.name}</span>
                    </section>
                ))
            }
        </section>
    </div>
  )
}

export default AdminControls;