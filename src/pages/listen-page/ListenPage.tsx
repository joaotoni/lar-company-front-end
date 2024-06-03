import { useEffect, useState } from "react";
import InputForm from "../../common/components/form/InputForm";
import Dashboard from "../../common/components/layout/DashBoard";
import { getPersons } from "../../services/Person.api";
import { ICreatePerson } from "../create-person/CreatePerson.type";
import { translateActive, translateContactType } from "../../common/components/layout/TranslateData";
import { brDateFormat, settingAge } from "../../common/components/form/Date.helper";



export default function ListenPage() {
  const [persons, setPersons] = useState<ICreatePerson[]>([]);

  useEffect(() => {
    const fetchPersons = async () => {
      const result = await getPersons();
      if (result.ok) {
        setPersons(result.data);
      } else {
        console.error("Failed to fetch persons data");
      }
    };

    fetchPersons();
  }, []);

  return (
    <Dashboard>
      <section className="mt-8">
        <div className="text-center mb-4">
          <h1 className="font-bold text-[20px]">Listagem de Pessoas</h1>
        </div>
        <div className="space-y-4">
          {persons.map((person) => (
            <div key={person.id} className="border p-4 rounded-md shadow-md">
              <p><strong>Nome:</strong> {person.name}</p>
              <p><strong>CPF:</strong> {person.cpf}</p>
              <p><strong>{`Data de Nascimento (${settingAge(brDateFormat(person.dateOfBirth))} anos):`}</strong> {brDateFormat(person.dateOfBirth)}</p>
              <p><strong>Ativo:</strong> {translateActive(person.active)}</p>
              {person.phones.map((phone, index) => (
                <div key={index}>
                  <InputForm
                    label={`Telefone (${translateContactType(phone.contactType)}):`}
                    type="text"
                    placeholder="(00) 00000-0000"
                    name={`phone-${index}`}
                    value={phone.number}
                    disabled={true}
                    required={true}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </Dashboard>
  );
}
