import { ApiResponseType } from "../common/helpers/ApiHelper";
import { ICreatePerson } from "../pages/create-person/CreatePerson.type";

const API_URL = 'http://localhost:3000/api/'

export async function getPersons() {
  const url = `${API_URL}persons`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(url, options);
  const result = (await response.json()) as ApiResponseType<ICreatePerson[]>;
  return result;
}

export async function createPerson(createPersonData: any): Promise<ApiResponseType<ICreatePerson>> {
  delete createPersonData._id;

  const url = `${API_URL}persons`;
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(createPersonData),
  };
  const response = await fetch(url, options);
  const result = (await response.json()) as ApiResponseType<ICreatePerson>;
  return result;
}

export async function updatePerson(createPersonData: any): Promise<ApiResponseType<ICreatePerson>> {
  console.log(createPersonData);
  const url = `${API_URL}persons/${createPersonData._id}`;
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(createPersonData),
  };
  const response = await fetch(url, options);
  const result = (await response.json()) as ApiResponseType<ICreatePerson>;
  return result;
}