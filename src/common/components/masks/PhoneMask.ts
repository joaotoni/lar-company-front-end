export const maskPhone = (value: string): string => {
  if (!value) return value;

  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d+)/, "($1) $2")
    .replace(/(\d{5})(\d+)/, "$1-$2")
    .replace(/(\(\d{2}\) \d{4,5}-\d{4})(.+)/, "$1");
};