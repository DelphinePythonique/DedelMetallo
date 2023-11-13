loadheader = () => {
    fetch('./include/header.inc')
    .then ( (r) => { return r.text();  } )
    .then ( (s) => {
            p= new DOMParser();
            d = p.parseFromString(s,'text/html') ;
            if ((f = d.body.querySelector('nav')) !== null) {
              document.querySelector('header').append(f);
            }

    });
};

loadfooter = () => {
    fetch('./include/footer.inc')
    .then ( (r) => { return r.text();  } )
    .then ( (s) => {
            p= new DOMParser();
            d = p.parseFromString(s,'text/html') ;
            if ((f = d.body.querySelector('div')) !== null) {
              document.querySelector('footer').append(f);
            }

    });
};

if (document.readyState==='loading') {
  window.addEventListener('DOMContentLoaded', ()=> {
    loadheader();
    loadfooter();
    });
} else {
    loadheader();
    loadfooter();
    }