window.addEventListener('DOMContentLoaded', () => {
const newYearDate = '2020-12-31 23:59'

  function getTimeNewYear(endtime) {
      const time = Date.parse(endtime) - new Date(),
            days = Math.floor(time / (1000 * 60 * 60 * 24)),
            hours = Math.floor(time / (1000 * 60 * 60) % 24),
            minutes = Math.floor((time / 1000 / 60) % 60),
            seconds = Math.floor((time / 1000) % 60);
      return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      }
  }
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    }else {
      return num;
    }
  }

  function setClock(endtime) {
        const timer = document.querySelector('.timer'),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock() {
          const t = getTimeNewYear(endtime);


          days.innerHTML = getZero(t.days);
          hours.innerHTML = getZero(t.hours);
          minutes.innerHTML = getZero(t.minutes);
          seconds.innerHTML = getZero(t.seconds);


          if (t.total <= 0) {
            clearInterval(timeInterval);
          }
        }

  }
  setClock(newYearDate);

// modal


  const modal = document.querySelector('.modal-wrap'),
        btnShowModal = document.querySelector('.btn-timer'),
        btnCloseModal = document.querySelector('[data-close]');

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
  }
  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
  }

  btnShowModal.addEventListener('click', openModal);
  btnCloseModal.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });


});
