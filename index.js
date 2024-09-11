const axios = require('axios');

const accessToken = 'SEU_TOKEN_DE_ACESSO';
const businessID = 'SEU_BUSINESS_ID';

async function getWhatsAppContacts() {
  try {
    const response = await axios.get(`https://graph.facebook.com/v13.0/${businessID}/phone_numbers`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const contacts = response.data.data;

    const formattedContacts = contacts.map(contact => {
      let formattedNumber = contact.phone_number.replace(/\s+/g, '').replace('+', '');

      return formattedNumber;
    });

    console.log(formattedContacts);
  } catch (error) {
    console.error('Erro ao buscar contatos:', error.message);
  }
}

getWhatsAppContacts();