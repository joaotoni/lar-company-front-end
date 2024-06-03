import { useEffect, useState } from "react";
import AutocompleteAsync from "../../common/components/form/AutocompleteAsync";
import { getPersons } from "../../services/Person.api";
import { ICreatePerson } from "../create-person/CreatePerson.type";

interface PersonsFieldFormProps {
  onChange: (value: string) => void;
}

export function PersonsFieldForm({ onChange }: PersonsFieldFormProps) {
  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const loadOptions = async () => {
      const result = await getPersons();
      console.log(result);
      if (!result.ok) {
        setLoading(false);
        return;
      }
      
      const options = result.data.map((personsInfo: ICreatePerson) => ({
        value: personsInfo.id, 
        label: personsInfo.name,
      }));
      
      setOptions(options);
      setLoading(false);
    };

    loadOptions();
  }, []);

  const handleSelectChange = (selectedOption: { label: string, value: string }) => {
    onChange(selectedOption.value);
  };

  return (
    <AutocompleteAsync
      label="Titular:"
      name="personsInfo"
      valueProperty="value"
      options={options}
      isLoading={loading}
      onChange={handleSelectChange}
      required={true}
    />
  );
}
