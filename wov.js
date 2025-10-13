const axios = require('axios');

// Configuración
const API_BASE_URL = 'https://api.wolvesville.com';
const BOT_TOKEN = 'LjNgvPQnLSUpofguobJi6D07Q7yQCWlCdC22U2PfRH3AHSFdvpG9yqg5G7dvIPd9';
const CLAN_ID = 'f541a31f-0176-4615-8371-ed3f1d37c0c0';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bot ${BOT_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

// Funciones de API
async function skipWaitingTime() {
  try {
    const response = await api.post(`/clans/${CLAN_ID}/quests/active/skipWaitingTime`);
    console.log('Adelantao.', new Date().toLocaleString());
    return true;
  } catch (error) {
    if (error.response?.status === 400 || error.response?.status === 409) {
      console.log('Fallé.', new Date().toLocaleString());
    } else {
      console.error('Error...', error.message);
    }
    return false;
  }
}

// Lógica principal
async function skip() {
  console.log(`Skipping...`);
  await skipWaitingTime();
}

skip();
