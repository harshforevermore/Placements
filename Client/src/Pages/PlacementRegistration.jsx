// https://placment-b9e0ckhua7fpemgq.eastus2-01.azurewebsites.net
import { useContext, useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import PersonalDetails from "../Components/Student Components/Placement Forms/PersonalDetails";
import Button from "../Components/Form Components/Button";
import EducationDetails from "../Components/Student Components/Placement Forms/EducationDetails";
import ProgressBar from "../Components/Form Components/ProgressBar";
import UploadDocuments from "../Components/Student Components/Placement Forms/UploadDocuments";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const PlacementRegistration = () => {
  const { user } = useContext(AuthContext);
  const methods = useForm({ mode: "onBlur" });
  const { trigger, getValues, handleSubmit, reset } = methods;

  //File states
  const [aadharCard, setAadharCard] = useState(null);
  const [marksheet10, setMarksheet10] = useState(null);
  const [marksheet12, setMarksheet12] = useState(null);

  const steps = [
    { label: "Personal Details", component: <PersonalDetails /> },
    { label: "Education Details", component: <EducationDetails /> },
    {
      label: "Upload Documents",
      component: (
        <UploadDocuments
          setAadharCard={setAadharCard}
          setMarksheet10={setMarksheet10}
          setMarksheet12={setMarksheet12}
        />
      ),
    },
  ];
  const [step, setStep] = useState(0); //state to track the current form

  useEffect(() => {
    if (step < 2) {
      const savedData = JSON.parse(localStorage.getItem(steps[step].label));
      if (savedData) {
        reset(savedData);
      }
    }
  }, [step]);

  const handleNext = async () => {
    const isValid = await trigger();
    if (isValid) {
      if (step < 2) {
        const formData = getValues();
        localStorage.setItem(steps[step].label, JSON.stringify(formData));
      }
      setStep(step + 1); // Move to next page
    }
  };
  const restructureData = (data) => {
    const restructuredData = {
      regNo: user.regNo,
      email: user.email,
      studentName: user.fullname,
      fatherName: data.fatherName,
      motherName: data.motherName,
      dob: data.DOB,
      gender: data.gender,
      birthPlace: data.birthPlace,
      contactNo: data.personalMobileNo,
      personalEmail: data.personalEmail,
      fatherContactNo: data.fatherMobileNo,
      alternateContactNo: data.alternateMobileNumber,
      aadharNumber: data.aadharNumber,
      panNumber: data.PANCardNumber,
      presentAddress: data.presentAddress,
      aadharAddress: data.permanentAadharAddress,
      city: data.currentLocation,
      educationalDetails: {
        course: user.course,
        section: user.section,
        secondarySchoolName: data.schoolName10,
        secondaryPercentage: data.percentage10,
        secondaryPassingYear: data.passingYear10,
        secondaryMedium: data.medium10,
        secondaryBoard: data.board10,
        intermediateSchoolName: data.schoolName12,
        intermediatePercentage: data.percentage12,
        intermediatePassingYear: data.passingYear12,
        intermediateMedium: data.medium12,
        intermediateBoard: data.board12,
        graduationSchoolName: data.collegeUniName,
        graduationPercentage: data.percentageUG,
        graduationPassingYear: data.passingYearUG,
        graduationMedium: data.mediumUG,
        graduationBoard: data.boardUG,
      },
    };
    return restructuredData;
  };
  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("studentPersonalDetails", JSON.stringify(restructureData(data)));

    for (const [key, value] of Object.entries(data)) {
      if (value instanceof FileList) {
        Array.from(value).forEach((file) => formData.append("files", file));
      }
    }

    try {
      const res = await axios.post("https://placment-b9e0ckhua7fpemgq.eastus2-01.azurewebsites.net/studentdetails", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
    } catch (error) {
      console.error("Error occured while submitting the form", error.message);
    }

    for (let i = 0; i < steps.length - 1; i++) {
      localStorage.removeItem(steps[i].label);
    }
  };
  return (
    <div className="placement-registeration-container">
      <div className="progress-bar-part w-full my-4 sm:my-6">
        <ProgressBar step={step} />
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="placement-registration-form flex flex-col items-center py-4"
        >
          {step < steps.length ? (
            <div className="form-comp-container w-full md:w-3/4 flex flex-col gap-2">
              {steps[step].component}
              <div
                className={`btn-container w-full px-4 flex ${
                  step > 0 ? "justify-between" : "justify-end"
                }`}
              >
                {step > 0 && (
                  <Button name="Prev" onClickFn={() => setStep(step - 1)} />
                )}
                <Button
                  name={step == steps.length - 1 ? "Finish" : "next"}
                  onClickFn={handleNext}
                />
              </div>
            </div>
          ) : (
            <div className="complete-form-container w-full md:w-3/4 flex flex-col gap-2">
              {steps.slice(0, 2).map((item, index) => (
                <div key={item.label || index}>{item.component}</div>
              ))}
              <div className="education-details-container bg-transparent w-full py-4 px-4 flex flex-col gap-2">
                <h1 className="mb-2 text-2xl text-red-500 font-bold">
                  Upload Documents
                </h1>
                <section className="section-1 flex flex-col gap-4">
                  <p className="text-lg font-medium text-gray-600">
                    Aadhar Card:{" "}
                    <span className="text-xl text-gray-800 font-medium">
                      {aadharCard?.name || "Not uploaded"}
                    </span>
                  </p>
                  <p className="text-lg font-medium text-gray-600">
                    10<sup>th</sup> Marksheet:{" "}
                    <span className="text-xl text-gray-800 font-medium">
                      {marksheet10?.name || "Not uploaded"}
                    </span>
                  </p>
                  <p className="text-lg font-medium text-gray-600">
                    12<sup>th</sup> Marksheet:{" "}
                    <span className="text-xl text-gray-800 font-medium">
                      {marksheet12?.name || "Not uploaded"}
                    </span>
                  </p>
                  {methods.watch("extraDocuments")?.length > 0 &&
                    methods.watch("extraDocuments").map((doc, idx) => (
                      <p
                        key={idx}
                        className="text-lg font-medium text-gray-600"
                      >
                        {doc.label || `Document ${idx + 1}`}:{" "}
                        <span className="text-xl text-gray-800 font-medium">
                          {doc.file?.[0]?.name || "Not uploaded"}
                        </span>
                      </p>
                    ))}
                </section>
              </div>
              <section className="btn-container w-full px-4 flex justify-between">
                <Button name="Back" onClickFn={() => setStep(step - 1)} />
                <Button name="Final Submit" type="submit" />
              </section>
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default PlacementRegistration;
