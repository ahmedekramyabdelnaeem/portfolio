// Boot sequence — signature load moment
(function(){
  const boot = document.getElementById('boot');
  if(!boot) return;
  const lines = [
    '> initializing secure session...',
    '> verifying credentials.......... OK',
    '> mounting portfolio filesystem... OK',
    '> loading sheet: ' + (document.body.dataset.sheet || 'UNKNOWN'),
    '> access granted.'
  ];
  const wrap = document.createElement('div');
  boot.appendChild(wrap);
  let i = 0;
  function typeLine(){
    if(i >= lines.length){
      setTimeout(()=> boot.classList.add('hidden'), 350);
      return;
    }
    const p = document.createElement('div');
    p.textContent = lines[i];
    wrap.appendChild(p);
    i++;
    setTimeout(typeLine, 220);
  }
  if(sessionStorage.getItem('booted')){
    boot.classList.add('hidden');
  } else {
    typeLine();
    sessionStorage.setItem('booted','1');
  }
})();

function toggleRecord(el){
  el.classList.toggle('active');
}

function toggleNav(){
  document.querySelector('nav.sheet-nav').classList.toggle('open');
}
