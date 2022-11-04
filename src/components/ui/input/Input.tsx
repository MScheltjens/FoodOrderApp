import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import classes from "./Input.module.css";

interface InputProps {
  label: string;
  input: InputHTMLAttributes<HTMLInputElement>;
}

const Input = ({ label, input }: InputProps) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
