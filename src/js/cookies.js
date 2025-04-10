export function handleCookies() {
  const cookiesChoice = localStorage.getItem('cookiesChoice');

  if (cookiesChoice) return;

  const sectionCookies = document.querySelector('.cookies');
  const btnAccept = document.querySelector('.cookies-accept-button');
  const btnDecline = document.querySelector('.cookies-decline-button');

  sectionCookies.classList.remove('hidden');
  btnAccept.focus()

  btnAccept.addEventListener('click', handleAccept);
  btnDecline.addEventListener('click', handleDecline);

  function handleAccept() {
    handleSetCookies('accept');
  }

  function handleDecline() {
    handleSetCookies('decline');
  }

  function handleSetCookies(choice) {
    localStorage.setItem('cookiesChoice', choice);

    btnAccept.removeEventListener('click', handleAccept);
    btnDecline.removeEventListener('click', handleDecline);
    sectionCookies.classList.add('hidden');
  }
}
