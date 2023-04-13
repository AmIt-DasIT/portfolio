import { Field, FormikErrors } from "formik";

type InputBoxData = {
  name: string;
  label?: string;
  type?: string;
  numLength?: number;
  id?: string;
  placeholder?: string;
  message?: string;
  value?: string;
  asterisk?: boolean;
  max?: string;
  error?: FormikErrors<{}> | undefined;
  className?: string 
};

export default function InputBox(props: InputBoxData) {
  return (
    <div className="relative">
      <label className={`font-normal text-xs tracking-wide w-full ${props.error && 'text-[#FF0000]'}`}>
        {props?.label}
      </label>
      {props.asterisk && <i className="fa fa-solid fa-asterisk " style={{ color: 'red', fontSize: 6, position: 'absolute', top: 8, paddingLeft: 1 }} ></i>}
        <Field
          type={props?.type}
          id={props?.id}
          name={props?.name}
          placeholder={props?.placeholder}
          maxLength={props?.max}
          // value={props?.value}
          disabled={props?.value ? true : false}
          onInput={(e: any) => {
            return (props.type === 'number' ? e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, props?.numLength ? props?.numLength : 10) : e.target.value)
          }}
          className={`w-full bg-transparent rounded border  text-sm outline-none t px-2 leading-8 ${props.error ? 'border-[#FF0000]' : 'border-violet-700'} ${props?.className}`}
        />
        <div className="text-[#FF0000] text-xs">
          {/* @ts-ignore */}
          {props.error}
        </div>
    </div>
  );
}
