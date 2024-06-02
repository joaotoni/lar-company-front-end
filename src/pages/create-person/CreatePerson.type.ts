export interface ICreatePerson {
  id: string;
  name: string;
  cpf: string;
  birthDate: string;
  active: string;
}

export const emptyPlan = () =>
({
  id: "",
  name: "",
  cpf: "",
  birthDate: new Date().toISOString().split('T')[0],
  active: "",
} as ICreatePerson);