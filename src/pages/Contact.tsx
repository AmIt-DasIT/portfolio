import { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import InputBox from "../components/InputBox";
import { Formik, Form } from "formik";
import SaveButton from "../components/SaveButton";
import TextArea from "./Textarea";


export default function Contact() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    description: Yup.string().required("Required!!"),
    f_name: Yup.string().required("Required!!"),
    l_name: Yup.string().required("Required!!"),
    email: Yup.string()
    .email("Invalid email")
    .required("Please enter a valid email"),
  });
  const initialValues =
  {
    description: "",
    f_name: "",
    l_name: "",
    email: "",
  };

  return (
      <div className=" rounded-xl sm:mx-[30rem] min-h-[92.8vh] ">
        <p className="text-center py-20 text-4xl font-[Preahvihear]">Contact</p>
        <div className="border-[#] rounded-xl mx-6">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values: any) => {
              console.log(values)
            }}
          >{({
            //@ts-ignore
            errors,
            values,
            //@ts-ignore
            touched,
          }) => (
            <Form className="flex flex-col ">
              <div className="grid sm:grid-cols-2 gap-4 p-3 pb-6 gap-y-6">
                <div className="h-14">
                  <InputBox name={"f_name"} label={"First Name"} type={"text"} error={touched.f_name && errors.f_name} />
                </div>
                <div className="h-14">
                  <InputBox name={"l_name"} label={"Last Name"} type={"text"} error={touched.l_name && errors.l_name} />
                </div>
                <div className="h-14">
                  <InputBox name={"email"} label={"Email"} type={"text"} error={touched.email && errors.email} />
                </div>
                <div className=" flex flex-col sm:col-span-2">
                  <TextArea
                    name="description"
                    rows={4}
                    label="Description"
                    error={touched.description && errors.description}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3 pl-3 pb-3">
                <SaveButton props={{
                  path: "/",
                  showCancel: true,
                }} />
              </div>
            </Form>
          )}
          </Formik>
        </div>
        <div className="p-2 w-32 text-white rounded mt-3"></div>
      </div>
  );
}