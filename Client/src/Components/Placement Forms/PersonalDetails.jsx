import React from "react";
// import { useForm } from "react-hook-form";
import Input from "../Form Components/Input";
import RadioButton from "../Form Components/RadioButton";

const PersonalDetails = () => {
  return (
    <div className="personal-details-container bg-white w-full py-4 px-4 flex flex-col gap-2 shadow-[0_0_5px_gray] rounded-lg">
      <h1 className="w-full mb-2 text-2xl text-red-500 font-bold">
        Personal Details
      </h1>
      <section className="section-1 flex flex-wrap gap-2">
        <Input
          label="Name"
          name="name"
          placeholder="Name"
          minLength={2}
          maxLength={100}
          pattern={/^[A-Za-z\s]+$/}
          patternMessage="Only aphabets allowed"
          containerClasses="flex-1"
        />
        <Input
          label="Father's Name"
          name="fatherName"
          placeholder="Father's Name"
          minLength={2}
          maxLength={100}
          pattern={/^[A-Za-z\s]+$/}
          patternMessage="Only aplhabets allowed"
          containerClasses="flex-1"
        />
        <Input
          label="Mother's Name"
          name="motherName"
          placeholder="Mother's Name"
          minLength={2}
          maxLength={100}
          pattern={/^[A-Za-z\s]+$/}
          patternMessage="Only aplhabets allowed"
          containerClasses="flex-1"
        />
      </section>
      <section className="section-2 flex flex-wrap gap-2">
        <RadioButton
          name="gender"
          title="Gender"
          options={["Male", "Female", "Others"]}
          containerClasses="flex-1"
        />
        <Input
          label="Date of Birth: "
          labelFixed={true}
          name="DOB"
          placeholder="Date Of Birth"
          type="date"
          minLength="1900-01-01"
          maxLength={new Date().toISOString().split("T")[0]}
          containerClasses="flex-1"
        />
        <Input
          label="Birth Place"
          name="birthPlace"
          placeholder="Birth Place"
          minLength={2}
          maxLength={50}
          pattern={/^[A-Za-z\s]+$/}
          patternMessage="Only alphabets allowed"
          containerClasses="flex-1"
        />
      </section>
      <section className="section-3 flex flex-wrap gap-2">
        <Input
          label="Personal Mobile Number"
          name="personalMobileNo"
          placeholder="Personal Mobile Number"
          minLength={10}
          maxLength={10}
          pattern={/^[6-9]\d{9}$/}
          patternMessage="Invalid Number"
          containerClasses="flex-1"
        />
        <Input
          label="Personal Email"
          name="personalEmail"
          type="email"
          placeholder="Personal Email"
          minLength={6}
          maxLength={254}
          pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
          patternMessage="Invalid Email"
          containerClasses="flex-1"
        />
        <Input
          label="Father's Mobile Number"
          name="fatherMobileNumber"
          placeholder="Father's Mobile Number"
          minLength={10}
          maxLength={10}
          pattern={/^[6-9]\d{9}$/}
          patternMessage="Invalid Number"
          containerClasses="flex-1"
        />
        <Input
          label="Alternate Mobile Number"
          name="alternateMobileNumber"
          required={false}
          placeholder="Alternate Mobile Number"
          minLength={10}
          maxLength={10}
          pattern={/^[6-9]\d{9}$/}
          patternMessage="Invalid Number"
          containerClasses="flex-1"
        />
        <Input
          label="Aadhaar Number"
          name="aadhaarNumber"
          placeholder="Aadhaar Number"
          minLength={12}
          maxLength={12}
          pattern={/^\d{12}$/}
          patternMessage="Invalid Aadhar Number"
          containerClasses="flex-1"
        />
        <Input
          label="PAN Card Number"
          name="PANCardNumber"
          placeholder="PAN Card Number"
          minLength={10}
          maxLength={10}
          pattern={/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/}
          patternMessage="Invalid PAN Number"
          containerClasses="flex-1"
        />
        <Input
          label="Current Location (City/Town)"
          name="currentLocation"
          placeholder="Current Location (City/Town)"
          minLength={2}
          maxLength={50}
          pattern={/^[A-Za-z\s-]+$/}
          patternMessage="Only alphabets allowed"
          containerClasses="flex-1"
        />
      </section>
      <section className="section-4 flex flex-wrap gap-2">
      <Input
        label="Present Address"
        name="presentAddress"
        placeholder="Present Address"
        minLength={10}
        maxLength={255}
        pattern={/^[A-Za-z0-9\s,.-/]{10,255}$/}
        patternMessage="Invalid Address"
        containerClasses="flex-1"
        />
      <Input
        label="Permanent Address as per Aadhaar Card"
        name="permanentAadhaarAddress"
        placeholder="Permanent Address as per Aadhaar Card"
        minLength={10}
        maxLength={255}
        pattern={/^[A-Za-z0-9\s,.-/]{10,255}$/}
        patternMessage="Invalid Address"
        containerClasses="flex-1"
        />
        </section>
    </div>
  );
};

export default PersonalDetails;
