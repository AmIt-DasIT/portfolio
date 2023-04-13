import { Field, FormikErrors } from "formik";
import React from "react";

type AppProps = {
  options?: string[];
  name: string;
  label: string;
  asterisk?: boolean;
  value?: string | number;
  error?: FormikErrors<{}> | undefined;
};

const DropDown1: React.FC<{ props: AppProps }> = ({ props }) => {
  let itemOptions = props.options?.map((item: any) => (
    <option value={item?.split("+")[1]}>{item?.split("+", 1)}</option>
  ));

  return (
    <div className="relative">
      <label className={`font-normal text-xs tracking-wide  ${props.error && 'text-[#FF0000]'}`}>
        {props.label}
      </label>{props.asterisk && <i className="fa fa-solid fa-asterisk " style={{color: 'red', fontSize: 6, position: 'absolute', top: 8, paddingLeft: 1}} ></i>}
      {!props?.value ? <>
        <Field
          name={props.name}
          as="select"
          className={`w-full border border-gray-300  ${props.error && 'border-[#FF0000] text-[#FF0000]'}  bg-white rounded p-2 2xl:p-[0.5rem] focus:outline-none text-xs`}
        >
          <option value={""}>Select Option</option>
          {itemOptions}
        </Field>
        {props.error && (
          <div className="text-[#FF0000] text-xs">
            {/* @ts-ignore */}
            {props.error}
          </div>
        )}</> :
        <Field
          name={props.name}
          as="select"
          className={`w-full border border-gray-300 bg-[#f1efef] rounded p-2 2xl:p-[0.5rem] text-xs cursor-not-allowed`}
          disabled={true}
        >
          <option value={props?.value}>{props?.value}</option>
        </Field>
      }
    </div>
  );
};

export default DropDown1;