# Awesome Get Contacts Whatsapp

> ⚠️ Node version required: 21.5 or higher 

## Scripts

- `node index.js`: running bot in development

## How to use Commands 

Change Access Token and businessID for you accesstoken and businessID based in whatsapp business api

```js
const accessToken = 'MY_TOKEN_ACCESS';
const businessID = 'MY_BUSINESS_ID';

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
};
