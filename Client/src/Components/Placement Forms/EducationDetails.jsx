import React from "react";
import Input from "../Form Components/Input";

const EducationDetails = () => {
  return (
    <div className="education-details-container bg-white w-full py-4 px-4 flex flex-col gap-2 shadow-[0_0_5px_gray] rounded-lg">
      <h1 className="mb-4 text-2xl text-red-500 font-bold">
        Education Details
      </h1>
      <section className="section-1 flex flex-wrap gap-2">
        <Input
          label="School Name (Class 10th)"
          name="schoolName10"
          placeholder="School Name (Class 10th)"
          minLength={2}
          maxLength={100}
          pattern={/^[A-Za-z0-9\s\-&]+$/}
          patternMessage="Invalid Name"
          containerClasses="flex-1"
          />
        <Input
          label="Percentage (Class 10th)"
          name="percentage10"
          placeholder="Percentage (Class 10th)"
          minLength="0"
          maxLength="100"
          pattern={/^(100|[0-9]{1,2})(\.\d{1,2})?$/}
          patternMessage="Invalid Percentage"
          step={0.01}
          containerClasses="flex-1"
          />
      </section>
      <section className="section-2 flex flex-wrap gap-2">
        <Input
          label="Year of Passing (Class 10th)"
          name="passingYear10"
          placeholder="Year of Passing (Class 10th)"
          minLength={4}
          maxLength={4}
          pattern={/^(19[5-9]\d|20[0-9]\d)$/}
          patternMessage="Invalid Year"
          containerClasses="flex-1"
          />
        <Input
          label="10th Board Name"
          name="boardName10"
          placeholder="10th Board Name"
          minLength={4}
          maxLength={100}
          pattern={/^[A-Za-z][A-Za-z\s]{3,99}$/}
          containerClasses="flex-1"
          />
      </section>
      <section className="section-3 flex flex-wrap gap-2">
        <Input
          label="School Name (Class 12th)"
          name="schoolName12"
          placeholder="School Name (Class 12th)"
          minLength={2}
          maxLength={100}
          pattern={/^[A-Za-z0-9\s\-&]+$/}
          patternMessage="Invalid Name"
          containerClasses="flex-1"
          />
        <Input
          label="Percentage (Class 12th)"
          name="percentage12"
          placeholder="Percentage (Class 12th)"
          minLength="0"
          maxLength="100"
          pattern={/^(100|[0-9]{1,2})(\.\d{1,2})?$/}
          patternMessage="Invalid Percentage"
          step={0.01}
          containerClasses="flex-1"
          />
      </section>
      <section className="section-4 flex flex-wrap gap-2">
        <Input
          label="Year of Passing (Class 12th)"
          name="passingYear12"
          placeholder="Year of Passing (Class 12th)"
          minLength={4}
          maxLength={4}
          pattern={/^(19[5-9]\d|20[0-9]\d)$/}
          patternMessage="Invalid Year"
          containerClasses="flex-1"
          />
        <Input
          label="12th Board Name"
          name="boardName12"
          placeholder="12th Board Name"
          minLength={4}
          maxLength={100}
          pattern={/^[A-Za-z][A-Za-z\s]{3,99}$/}
          containerClasses="flex-1"
        />
      </section>
    </div>
  );
};

export default EducationDetails;
