import { useRef, useState } from "react";
import { FormValidity, UserDetails } from "../../types";
import { CartProps } from "../Cart";
import classes from "./Checkout.module.css";

interface Checkout extends CartProps {
  onConfirm: any;
}

const isEmpty = (value: string) => value.trim() === "";

const Checkout = ({ onClose, onConfirm }: Checkout) => {
  const [formInputValidity, setFormInputValidity] = useState<FormValidity>({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const confirmHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredName = nameInputRef.current?.value;
    const enteredStreet = nameInputRef.current?.value;
    const enteredPostal = nameInputRef.current?.value;
    const enteredCity = nameInputRef.current?.value;

    const enteredNameIsValid = !isEmpty(enteredName!);
    const enteredStreetIsValid = !isEmpty(enteredStreet!);
    const enteredCityIsValid = !isEmpty(enteredCity!);
    const enteredPostalIsValid = !isEmpty(enteredPostal!);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;
    if (!formIsValid) {
      return;
    }
    onConfirm({
      name: enteredName!,
      street: enteredStreet!,
      postal: enteredPostal!,
      city: enteredCity!,
    });
  };

  return (
    <form onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputValidity.name ? "" : classes.invalid
        } `}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.street ? "" : classes.invalid
        } `}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter a street!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.postal ? "" : classes.invalid
        } `}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="street" ref={postalInputRef} />
        {!formInputValidity.name && (
          <p>Please enter a valid postal code (max 5 characters)</p>
        )}
      </div>

      <div
        className={`${classes.control} ${
          formInputValidity.city ? "" : classes.invalid
        } `}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.name && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button className={classes.submit} type="submit">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
