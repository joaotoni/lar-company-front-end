export const translateContactType = (type: string): string => {
  const translations: { [key: string]: string } = {
    comercial: "Comercial",
    residencial: "Residencial",
    phone: "Celular"
  };
  return translations[type] || type;
};

export const translateActive = (type: string): string => {
  const translations: { [key: string]: string } = {
    yes: "Sim",
    no: "Não",
  };
  return translations[type] || type;
};