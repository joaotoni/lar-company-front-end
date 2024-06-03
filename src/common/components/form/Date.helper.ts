export function brDateFormat(dateIsoString: any) {
  const date = new Date(dateIsoString)
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  const formattedDate = formatter.format(date).split('/').join('/')

  return formattedDate
}

export function settingAge(birthDate: string): number {
  const [day, month, year] = birthDate.split('/');
  const formatedDate = `${month}/${day}/${year}`;

  const birthDateData = new Date(formatedDate);

  const currentDate = new Date();

  let currentAge = currentDate.getFullYear() - birthDateData.getFullYear();
  const currentMonth = currentDate.getMonth();
  const birthMonth = birthDateData.getMonth();

  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDateData.getDate())) {
    currentAge--;
  }

  return currentAge;
}