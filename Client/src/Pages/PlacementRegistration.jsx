import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import PersonalDetails from "../Components/Placement Forms/PersonalDetails";
import Button from "../Components/Form Components/Button";
import EducationDetails from "../Components/Placement Forms/EducationDetails";
import ProgressBar from "../Components/Form Components/ProgressBar";

const PlacementRegistration = () => {
  const methods = useForm({ mode: "onBlur" });
  const { trigger } = methods;
  const steps = [
    { label: "Personal Details", component: <PersonalDetails /> },
    { label: "Education Details", component: <EducationDetails /> },
  ];
  const [step, setStep] = useState(0); //state to track the current form

  const handleNext = async () => {
    const isValid = await trigger();
    isValid && setStep(step + 1);
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="placement-registeration-container">
      <h1 className="text-4xl text-[#ff0000] mb-4 text-center font-medium">
        Registeration
      </h1>
      <div className="progress-bar-part w-full my-4 sm:my-6">
        <ProgressBar step={step} />
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
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
            // <ReviewAndSubmit goBack={() => setStep(step - 1)} />
            <div className="complete-form-container w-full md:w-3/4 flex flex-col gap-2">
              {steps.map((item) => item.component)}
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
