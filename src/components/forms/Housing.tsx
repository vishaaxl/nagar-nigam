"use client";

import { Form, Formik } from "formik";
import Input from "./Input";
import { useRouter } from "next/navigation";

interface HousingProps {}

export default function Housing({}: HousingProps) {
  const router = useRouter();
  return (
    <>
      <div className="bg-white p-4 relative">
        <div className="absolute top-0 right-[2%] py-1.5 cursor-pointer pl-10 pr-6 bg-red-700 text-white trapezoid rounded-sm">
          Help
        </div>
        <div className="text-red-700 font-medium text-lg mb-8">
          ENTER ANY ONE OF THE GIVEN INFORMATION
        </div>
        {/* form */}
        <Formik
          enableReinitialize
          initialValues={{
            housingId: "D8793/2023-24/CS/0736288",
            computerCode: "76589076",
            phoneNumber: "8318218169",
            houseNumber: "138/b-18",
            ownerName: "Mr Test Subject",
            fatherName: "Mr Test Subject",
            zone: "",
            ward: "",
            locality: "",
            securityPin: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form action="" className="form-layout">
            <Input
              label="New House Id"
              placeholder="eg: 957XXXXXX"
              name="housingId"
              type="tel"
            />
            <Input
              label="Old Computer Code"
              placeholder="eg: 957XXXXXX"
              name="computerCode"
              type="tel"
              required
            />
            <Input
              label="Mobile Number"
              placeholder="Mobile Number"
              name="phoneNumber"
              type="tel"
              required
            />
            <Input
              label="House Number"
              placeholder="House Number"
              name="houseNumber"
              type="tel"
              required
            />
            <Input
              label="Zone"
              placeholder="Please Select"
              name="zone"
              type="tel"
              component="select"
              required
            >
              <option value="">Select a Zone</option>
              <option value="north">North Zone</option>
              <option value="south">South Zone</option>
              <option value="east">East Zone</option>
              <option value="west">West Zone</option>
              <option value="central">Central Zone</option>
            </Input>
            <Input
              label="Ward"
              placeholder="Please Select"
              name="ward"
              type="tel"
              component="select"
              required
            >
              <option value="">Select a Ward</option>
              <option value="north">North Zone</option>
              <option value="south">South Zone</option>
              <option value="east">East Zone</option>
              <option value="west">West Zone</option>
              <option value="central">Central Zone</option>
            </Input>
            <Input
              label="Owner Name"
              placeholder="Mobile Number"
              name="ownerName"
              type="tel"
              required
            />
            <Input
              label="Father Name"
              placeholder="Father Name"
              name="fatherName"
              type="tel"
              required
            />

            <div className="lg:col-span-2">
              <Input
                label="Locality"
                placeholder="Please Select"
                name="locality"
                type="tel"
                required
                component="select"
              >
                <option value="">Select a Locality</option>
                <option value="north">North Zone</option>
                <option value="south">South Zone</option>
                <option value="east">East Zone</option>
                <option value="west">West Zone</option>
                <option value="central">Central Zone</option>
              </Input>
            </div>
            <div className="lg:col-span-2">
              <Input
                label="Enter Security Pin"
                placeholder="Input the text shown in the image below"
                name="securityPin"
                type="tel"
                required
              />
            </div>
            <div className="lg:col-span-2">
              <div className="flex">
                <label htmlFor="" className="text-slate-600 min-w-[150px]">
                  Security Pin <span className="text-red-500">*</span>
                </label>
                <span className="py-2 px-4 bg-green-800 rounded-sm text-white">
                  NKDAFZ
                </span>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      {/* submit buttons */}
      <div className="py-6 flex gap-2 justify-center items-center bg-slate-200">
        <button
          className="min-w-[150px] flex justify-center py-2 px-4 bg-blue-800 rounded-sm text-white"
          onClick={() => router.push("/results/D8793-2023-24-CS-0736288")}
        >
          Search
        </button>{" "}
        <button className="min-w-[150px] flex justify-center py-2 px-4 bg-blue-800 rounded-sm text-white">
          Reset Information
        </button>
      </div>
      <div className="bg-white h-20"></div>
    </>
  );
}
