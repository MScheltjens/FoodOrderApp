import Input from "../../ui/input/Input";
import classes from "./MealItemForm.module.css";
type MealItemProps = {
  id: number;
};

const MealItemForm = ({ id }: MealItemProps) => {
  return (
    <form className={classes.form}>
      <Input
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
    </form>
  );
};

export default MealItemForm;
