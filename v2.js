(() => {
  document.getElementById('cards').addEventListener('click', e => {
    if (!e.target.closest('[data-select]')) return;
    const summary = document.getElementById('summary').textContent;
    const subject = 'Unverbindliche Anfrage: ' + document.getElementById('selectedTitle').textContent;
    const body = 'Hallo NXT YOU Team,\n\nich interessiere mich für folgende Betreuung:\n\n' + summary + '\n\nMeine App / mein Produkt:\n\nDabei brauche ich Unterstützung:\n\nBitte meldet Euch zur Abstimmung.\n';
    document.getElementById('inquiry').href = 'mailto:info@nxtyou.de?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
})();
