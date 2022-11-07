export type Meal = {
  id: string;
  name: string;
  description?: string;
  price: number;
  amount?: number;
};

export type FormValidity = {
  name?: boolean;
  street?: boolean;
  postal?: boolean;
  city?: boolean;
};

export type UserDetails = {
  name: string;
  street: string;
  postal: string;
  city: string;
};
