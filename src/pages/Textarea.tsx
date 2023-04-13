import { useField, FormikErrors } from "formik";
type Props = {
    name: string,
    value?: string;
    rows?: number
    placeholder?: string;
    asterisk?: boolean;
    error?: FormikErrors<{}> | undefined;
    label?: string;
}
const TextArea = ({ ...props }: Props) => {
    //@ts-ignore
    const [field, meta] = useField(props);
    return (
        <div className="flex flex-col">
            <div className="relative">
                <label className={`text-xs pb-1 ${props.error && 'text-[#FF0000]'}`}>{props.label}</label>
                {props.asterisk && <i className="fa fa-solid fa-asterisk " style={{ color: 'red', fontSize: 6, position: 'absolute', top: 8, paddingLeft: 1 }} ></i>}
            </div>
            {(props?.value) ? <textarea className="rounded border text-sm bg-transparent  py-1 px-2 cursor-not-allowed" {...field} {...props} disabled={true} value={props?.value} />
                : <>
                    <textarea className={`rounded border bg-transparent  text-sm outline-none  py-1 px-2 ${props.error ? 'border-[#FF0000]' : 'border-violet-800'}`} {...field} {...props} />
                    <div className="text-[#FF0000] text-xs">
                        {/* @ts-ignore */}
                        {props.error}
                    </div>
                </>
            }
        </div>
    );
};

export default TextArea