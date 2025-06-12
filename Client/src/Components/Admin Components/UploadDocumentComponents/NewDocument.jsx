import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../../Form Components/Input";
import Button from "../../Form Components/Button";
import { IoClose } from "react-icons/io5";

const NewDocument = ({ selected, setSelected, appendNewDocument }) => {
  const methods = useForm({ mode: "onBlur" });
  const {
    register,
    reset,
    formState: { errors },
  } = methods;
  const onSubmit = (data) => {
    data["status"] = getStatus(data.lastDate, data.time);
    appendNewDocument(data);
    reset();
  };
  const getStatus = (lastDate, time) => {
    const today = new Date();
    const formDate = new Date(lastDate);
    const [hours, minutes] = time.split(":").map(Number);
    const inputTime = new Date().setHours(hours, minutes, 0, 0);

    if (today < formDate || today < inputTime) {
      return "Active";
    } else {
      return "Expired";
    }
  };
  return (
    <section
      className={`form-container ${
        selected ? "block" : "hidden"
      } absolute top-0 left-1/2 -translate-x-1/2 w-1/3 px-4 py-5 bg-white shadow-[0_0_5px_gray] rounded-lg`}
    >
      <section className="section-heading relative">
        <h1 className="heading font-medium text-xl mb-3">Enter Details</h1>
        <IoClose
          className="absolute -top-4 -right-3 text-2xl cursor-pointer text-slate-600"
          onClick={() => setSelected(false)}
        />
      </section>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="form">
          <section className="input-container">
            <Input
              name="documentName"
              label="Document Name"
              minLength={2}
              maxLength={100}
              pattern={/^[A-Za-z0-9\s\-&/]+$/}
              patternMessage={"Only Alphabets, numbers, (-,&,/) allowed"}
            />
            <section className="doc-type-container mb-2">
              <label
                htmlFor="documentType"
                className="relative text-md text-gray-700 font-medium text-nowrap"
              >
                Document type:
                <span className="absolute -top-2 -right-1 text-sm text-red-500">
                  *
                </span>
              </label>
              <select
                id="documentType"
                {...register("documentType", {
                  required: "Please select an option",
                })}
                defaultValue={""}
                className="cursor-pointer w-40 h-7 ml-3 rounded-sm outline-none text-md text-slate-700 border-1 border-black focus:ring-0 focus:border-black peer"
              >
                <option value="">Select</option>
                <option value="PDF" className="text-sm">
                  PDF
                </option>
                <option value="DOCX" className="text-sm">
                  Docx
                </option>
                <option value="JPEG" className="text-sm">
                  JPEG
                </option>
                <option value="PNG" className="text-sm">
                  PNG
                </option>
              </select>
              {errors.documentType && (
                <span className="text-sm block text-red-600 text-center">
                  {errors.documentType.message}
                </span>
              )}
            </section>
            <Input name="lastDate" label="Last Date" type="date" />
            <Input name="time" label="Time" type="time" />
          </section>
          <section className="button-container place-items-end">
            <Button name="Submit" type="submit" />
          </section>
        </form>
      </FormProvider>
    </section>
  );
};

export default NewDocument;
