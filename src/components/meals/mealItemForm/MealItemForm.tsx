import { useRef, useState } from "react";
import Input from "../../ui/input/Input";
import classes from "./MealItemForm.module.css";

type MealItemFormProps = {
  id: number;
  onAddToCart: (amount: number) => void;
};
const MealItemForm = ({ id, onAddToCart }: MealItemFormProps) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const amountInputRef = useRef<HTMLInputElement>(null);
  console.log(amountInputRef.current?.value);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current!.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount!.trim().length === 0 ||
      enteredAmountNumber! < 1 ||
      enteredAmountNumber! > 5
    ) {
      setIsValid(false);
      return;
    }
    onAddToCart(+enteredAmount!);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount-${id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>Please enter an amount between 0 and 5</p>}
    </form>
  );
};

export default MealItemForm;
