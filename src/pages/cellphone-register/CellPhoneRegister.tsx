import { useState } from "react";
import InputForm from "../../common/components/form/InputForm";
import Dashboard from "../../common/components/layout/DashBoard";
import { toast } from "react-toastify";
import ComboBoxForm from "../../common/components/form/ComboBoxForm";
import Button from "../../common/components/form/Button";
import { updatePerson } from "../../services/Person.api";
import { PersonsFieldForm } from "./ListOfPersonsForm";
import { maskPhone } from "../../common/components/masks/PhoneMask";

interface FormData {
  phones: { number: string; contactType: string }[];
  _id: string;
}

export default function CellPhoneRegister() {
  const [formData, setFormData] = useState<FormData>({
    phones: [{ number: "", contactType: "" }],
    _id: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      phones: prevFormData.phones.map((phone, index) =>
        index === 0 ? { ...phone, [name]: value } : phone
      ),
    }));
  };

  const handlePersonChange = (personId: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      _id: personId,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await updatePerson(formData);
      if (result.ok) {
        toast.success('Telefone cadastrado com sucesso!')
      }
    } catch (error) {
      toast.error('Não foi possível cadastrar o telefone! Tente novamente mais tarde!')
    }
  };

  return (
    <Dashboard>
      <section className="mt-8">
        <div className="text-center mb-4">
          <h1 className="font-bold text-[20px]">Cadastrar telefone da pessoa</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-4">
              <PersonsFieldForm onChange={handlePersonChange} />
              <InputForm
                label="Insira o número de telefone:"
                type="text"
                placeholder="(00) 00000-0000"
                value={formData.phones[0]?.number}
                mask={maskPhone}
                name="number"
                onChange={handleChange}
                required={true}
              />
              <ComboBoxForm
                label="Qual tipo o contato?"
                name="contactType"
                options={[
                  { value: "", label: "-" },
                  { value: "comercial", label: "Comercial" },
                  { value: "residencial", label: "Residencial" },
                  { value: "phone", label: "Celular" },
                ]}
                value={formData.phones[0]?.contactType}
                onChange={handleChange}
              />
            </div>
            <div className='text-end'>
              <Button className="bg-green-500 text-white mt-4" type="submit">
                Cadastrar
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Dashboard>
  )
}
