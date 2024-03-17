import { Notification } from "./notification.js";
const API = 'https://pie-copper-howler.glitch.me'

export const getClient = async (id) => {
  try {
    const response = await fetch(`${API}/clients/${id}`);
    if (!response.ok) {
      throw new Error(`Сервер вернул ошибку: ${response.status}`)
    }
    return response.json();
  } catch (error) {
    console.log(`Возникла проблема с fetch запросом: ${error.message}`);
    Notification.getInstance().show('Возникла ошибка сервера, попробуйте позже');
  }
}

export const getComedians = async () => {
  try {
    const response = await fetch(`${API}/comedians`);
    if (!response.ok) {
      throw new Error(`Сервер вернул ошибку: ${response.status}`)
    }
    return response.json();
  } catch (error) {
    console.log(`Возникла проблема с fetch запросом: ${error.message}`);
    Notification.getInstance().show('Возникла ошибка сервера, попробуйте позже');
  }
};

export const sendData = async (method, data, id) => {
  try {
    const response = await fetch(`${API}/clients${id ? `/${id}` : ''}`, {
      method,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Сервер вернул ошибку: ${response.status}`)
    }
    return true;
  } catch (error) {
    console.log(`Возникла проблема с fetch запросом: ${error.message}`);
    Notification.getInstance().show('Возникла ошибка сервера, попробуйте позже');
    return false;
  }
}