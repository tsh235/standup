export const displayClientInfo = (parent, data) => {
  parent.innerHTML += `
    <p class="booking__client-item">Имя: ${data.fullName}</p>
    <p class="booking__client-item">Телефон: ${data.phone}</p>
    <p class="booking__client-item">Номер билета: ${data.ticketNumber}</p>
  `
};

export const displayPerfomance = (parent, clientData, comediansDdata) => {
  const bookingList = document.createElement('ul');
  bookingList.classList.add('booking__list');

  const bookingComedians = clientData.booking.map(bookingComedian => {
    const  comedian = comediansDdata.find(item => item.id === bookingComedian.comedian);
    const  performance = comedian.performances.find(item => item.time === bookingComedian.time);

    return {
      comedian,
      performance,
    }
  });

  bookingComedians.sort((a, b) => a.performance.time.localeCompare(b.performance.time));

  const comedianElements = bookingComedians.map(({comedian, performance,}) => {
    const li = document.createElement('li');
    li.classList.add('booking__list-item');
    li.innerHTML += `
      <h5>${comedian.comedian}</h5>
      <p>Время: ${performance.time}</p>
      <button class="booking__hall" type="button"
        data-booking="${clientData.fullName} ${clientData.ticketNumber} ${comedian.comedian} ${performance.time} ${performance.hall}">
        ${performance.hall}
      </button>
    `;

    return li;
  });

  bookingList.append(...comedianElements);
  parent.append(bookingList);
};