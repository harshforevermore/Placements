import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";

const Notification = ({notificationText, status="success"}) => {
  return (
    <div id='notification' className={`notification-container z-[199] fixed top-1 left-1/2 -translate-x-1/2 min-w-[15em] py-3 px-5 flex justify-center rounded-lg ${status === "success" ? 'bg-green-200' : 'bg-red-200'}`}>
        <span className={`notification-text inline-block font-bold text-xl text-nowrap ${status === "success" ? 'text-green-700' : 'text-red-700'}`}>{notificationText}</span>
        <section className="notification-icon inline-block place-self-center mx-2">
            {
                status === "success" ?
                <FaCircleCheck 
                    className='text-3xl text-green-700'
                />
                : <MdError 
                    className='text-3xl text-red-700'
                />
            }
        </section>
    </div>
  )
}

export default Notification;