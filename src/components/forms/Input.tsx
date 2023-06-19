import { Field, useField } from "formik";
import { ReactNode } from "react";

interface InputProps {
  placeholder: string;
  type: string;
  label: string;
  name: string;
  required?: boolean;
  children?: ReactNode;
  component?: string;
}

export default function Input({
  placeholder,
  label,
  type,
  name,
  required,
  children,
  component,
}: InputProps) {
  const [field, meta] = useField(name);
  return (
    <div className="flex">
      <label htmlFor="" className="text-slate-600 min-w-[150px]">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <Field
        component={component}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border-slate-300 border rounded-md p-2 outline-none shadow-sm"
      >
        {children}
      </Field>
    </div>
  );
}
