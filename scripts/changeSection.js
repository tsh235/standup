import { createComedianBlock } from "./comedians.js";

export const initChangeSection = (
  event,
  booking,
  buttonReserve,
  buttonEdit,
  bookingTitle,
  bookingForm,
  comedians,
  bookingComediansList,
) => {
  buttonReserve.style.transition = 'opacity 0.5s, visibility 0.5s';
  buttonEdit.style.transition = 'opacity 0.5s, visibility 0.5s';
  buttonReserve.classList.remove('event__button_hidden');
  buttonEdit.classList.remove('event__button_hidden');

  const changeSection = () => {
    event.classList.toggle('event_hidden');
    booking.classList.toggle('booking_hidden');

    if (!booking.classList.contains('booking_hidden')) {
      const comedianBlock = createComedianBlock(comedians, bookingComediansList);
      bookingComediansList.append(comedianBlock);
    }
  };

  buttonReserve.addEventListener('click', () => {
    changeSection();
    bookingTitle.textContent = 'Забронируйте место в зале';
    bookingForm.method = 'POST';
  });

  buttonEdit.addEventListener('click', () => {
    changeSection();
    bookingTitle.textContent = 'Редактирование брони';
    bookingForm.method = 'PATCH';
  });

  return changeSection;
}