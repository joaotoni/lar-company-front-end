import React, { useState } from 'react';
import Button from "../../common/components/form/Button";
import ComboBoxForm from "../../common/components/form/ComboBoxForm";
import InputForm from "../../common/components/form/InputForm";
import Dashboard from "../../common/components/layout/DashBoard";
import { ICreatePerson } from './CreatePerson.type';
import { createPerson } from '../../services/Person.api';
import { toast } from 'react-toastify';

const emptyPerson = (): ICreatePerson => ({
  id: '',
  _id: '',
  name: '',
  cpf: '',
  dateOfBirth: '',
  active: '',
  phones: []
});

export default function CreatePerson() {
  const [formData, setFormData] = useState<ICreatePerson>(emptyPerson());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await createPerson(formData);
      if (result) {
        toast.success('Cadastro efetuado com sucesso!')
      }
    } catch (error) {
      toast.error('Não foi possível cadastrar! Tente novamente mais tarde!')
    }
  };

  return (
    <Dashboard>
      <section className="mt-8">
        <div className="text-center mb-4">
          <h1 className="font-bold text-[20px]">Cadastrar Pessoa</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-4">
              <InputForm
                label="Nome Completo:"
                type="text"
                placeholder="Digite o nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required={true}
              />
              <InputForm
                label="CPF:"
                type="text"
                placeholder="Digite o CPF"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                required={true}
              />
              <InputForm
                label="Data de nascimento:"
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required={true}
                placeholder={''}
              />
              <ComboBoxForm
                label="Está ativo?"
                name="active"
                options={[
                  { value: "", label: "-" },
                  { value: "yes", label: "Sim" },
                  { value: "no", label: "Não" },
                ]}
                value={formData.active}
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
  );
}
