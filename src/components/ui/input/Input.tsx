import { forwardRef, InputHTMLAttributes, RefObject } from "react";
import classes from "./Input.module.css";

interface InputProps {
  label: string;
  input: InputHTMLAttributes<HTMLInputElement>;
  ref: RefObject<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ input, label }, ref) => {
    return (
      <div className={classes.input}>
        <label htmlFor={input.id}>{label}</label>
        <input ref={ref} {...input} />
      </div>
    );
  }
);

export default Input;
