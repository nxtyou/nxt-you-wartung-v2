(() => {
  // Decorative, local SVGs: no icon font, CDN or external requests.
  const paths = {
    pulse: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
    shield: '<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>',
    contact: '<path d="M4 13v-2a8 8 0 0 1 16 0v2M4 12H3v6h4v-6H4Zm16 0h1v6h-4v-6h3ZM20 18c0 3-4 3-6 3"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z"/>',
    backup: '<path d="M5 7a8 8 0 1 1-1 9M3 3v5h5"/><path d="M12 7v5l3 2"/>',
    phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4M11 18h2"/>',
    report: '<path d="M14 3H5v18h14V8l-5-5ZM14 3v5h5M8 17v-3M12 17v-6M16 17v-4"/>',
    spark: '<path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3Z"/>',
    layers: '<path d="m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5"/>',
    search: '<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6M8 10h4M10 8v4"/>',
    settings: '<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="10" cy="18" r="2"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    server: '<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6"/>',
    code: '<path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 3l-4 18"/>',
    alert: '<path d="m12 3 10 18H2L12 3ZM12 9v5M12 17h.01"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 11h18M8 15h2M14 15h2M8 18h2"/>',
    wallet: '<path d="M20 8V5H5a2 2 0 0 0 0 4h16v11H5a2 2 0 0 1-2-2V7M21 12h-6v5h6M17 14.5h.01"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>'
  };
  function icon(name, compact=false) {
    const node=document.createElement('span');
    node.className=compact?'nxt-icon compact':'nxt-icon';
    node.setAttribute('aria-hidden','true');
    node.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" focusable="false">'+paths[name]+'</svg>';
    return node;
  }
  function decorate(selector,names){document.querySelectorAll(selector).forEach((el,i)=>{if(!el.querySelector('.nxt-icon'))el.prepend(icon(names[i%names.length]));});}
  decorate('#warum .info',['pulse','shield','contact']);
  decorate('#leistungen .info',['globe','shield','backup','phone','report','contact']);
  decorate('#ablauf .info',['search','settings','spark']);
  decorate('#umfang .info',['clock','wallet','code']);
  decorate('#sla .info',['clock','alert','layers']);
  decorate('#hosting .info',['server','layers','settings']);
  function packages(){decorate('#cards .card',['shield','pulse','spark']);}
  packages();
  new MutationObserver(packages).observe(document.getElementById('cards'),{childList:true});
  document.querySelectorAll('.terms>div').forEach((el,i)=>el.prepend(icon(['calendar','shield','wallet','clock'][i],true)));
  const contact=document.querySelector('#kontakt .eyebrow');
  if(contact)contact.before(icon('mail'));
})();
