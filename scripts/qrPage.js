import { getClient, getComedians } from "./api.js";
import { displayClientInfo, displayPerfomance } from "./display.js";
import { Notification } from "./notification.js";
import { showQrController } from "./showQrController.js";

const getTicketNumber = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return urlParams.get('t');
}
export const initQrPage = async () => {
  const clientInfo = document.querySelector('.booking__client-info');
  const performance = document.querySelector('.booking__perfomance');

  const ticketNumber = getTicketNumber();

  if (ticketNumber) {
    const clientData = await getClient(ticketNumber);
    displayClientInfo(clientInfo, clientData);

    const comediansData = await getComedians(ticketNumber);
    displayPerfomance(performance, clientData, comediansData);

    showQrController(performance);
  } else {
    Notification.getInstance().show('Произошла ошибка, проверьте ссылку!')
  }
}