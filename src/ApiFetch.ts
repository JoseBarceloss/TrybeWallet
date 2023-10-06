export const ApiCurrency = async () => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    if ('USDT' in data) {
      delete data.USDT;
    }

    return data;
  } catch (error) {
    console.error('Erro no API:', error);
  }
};
