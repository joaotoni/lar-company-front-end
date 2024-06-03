export interface PhoneDetails{
  number: string;
  contactType: string;
}

export interface ICreatePerson {
  id: string;
  _id: string;
  name: string;
  cpf: string;
  dateOfBirth: string;
  active: string;
  phones: PhoneDetails[];
}

export const emptyPlan = () =>
({
  id: "",
  _id: "",
  name: "",
  cpf: "",
  dateOfBirth: new Date().toISOString().split('T')[0],
  active: "",
  phones: [],
} as ICreatePerson);