(function(){
  function ready(fn){ if(document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  ready(function(){
    var btn=document.getElementById('hamburger');
    var nav=document.getElementById('navLinks');
    var lastFocus=null;
    function setMenu(open){
      if(!btn || !nav) return;
      if(open) lastFocus=document.activeElement;
      nav.classList.toggle('open', open);
      document.body.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      nav.setAttribute('aria-hidden', String(!open && window.innerWidth < 1024));
      if(open){
        var first=nav.querySelector('a');
        if(first) setTimeout(function(){ first.focus({preventScroll:true}); }, 30);
      } else if(lastFocus && typeof lastFocus.focus === 'function'){
        try{ lastFocus.focus({preventScroll:true}); }catch(e){}
      }
    }
    if(btn && nav){
      nav.setAttribute('aria-hidden', String(window.innerWidth < 1024));
      btn.addEventListener('click', function(){ setMenu(!nav.classList.contains('open')); });
      nav.querySelectorAll('a').forEach(function(a){
        a.addEventListener('click', function(){ if(window.matchMedia('(max-width: 1023px)').matches) setMenu(false); });
      });
      document.addEventListener('click', function(e){
        if(window.innerWidth >= 1024) return;
        if(!nav.classList.contains('open')) return;
        if(nav.contains(e.target) || btn.contains(e.target)) return;
        setMenu(false);
      });
      document.addEventListener('keydown', function(e){
        if(e.key === 'Escape') setMenu(false);
        if(e.key === 'Tab' && nav.classList.contains('open')){
          var focusables=Array.prototype.slice.call(nav.querySelectorAll('a,button,[tabindex]:not([tabindex="-1"])'));
          if(!focusables.length) return;
          var first=focusables[0], last=focusables[focusables.length-1];
          if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
          else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
        }
      });
      window.addEventListener('resize', function(){ if(window.innerWidth >= 1024) setMenu(false); else nav.setAttribute('aria-hidden', String(!nav.classList.contains('open'))); });
    }

    document.querySelectorAll('a[target="_blank"]').forEach(function(a){
      var rel=(a.getAttribute('rel')||'').split(/\s+/).filter(Boolean);
      ['noopener','noreferrer'].forEach(function(v){ if(rel.indexOf(v)<0) rel.push(v); });
      a.setAttribute('rel', rel.join(' ').trim());
    });

    document.querySelectorAll('input, textarea, select').forEach(function(el){
      el.addEventListener('focus', function(){ document.body.classList.add('form-focused'); });
      el.addEventListener('blur', function(){ setTimeout(function(){ if(!document.querySelector('input:focus, textarea:focus, select:focus')) document.body.classList.remove('form-focused'); }, 40); });
    });

    // Phone-first conversion bar: Call, WhatsApp, Email. Visible only on phones via CSS.
    if(!document.querySelector('.mobile-action-bar') && !document.body.classList.contains('no-mobile-action-bar')){
      var bar=document.createElement('div');
      bar.className='mobile-action-bar';
      bar.setAttribute('aria-label','Quick contact actions');
      var source=encodeURIComponent((document.title || 'ReiningSaddles.com') + ' | ' + location.pathname);
      var waText=encodeURIComponent('I am looking at ' + (document.title || 'ReiningSaddles.com') + ' on ReiningSaddles.com and would like saddle help.');
      bar.innerHTML='<a href="tel:4177931403">Call</a><a href="https://wa.me/14177931403?text='+waText+'" target="_blank" rel="noopener noreferrer">WhatsApp</a><a href="/contact.html?interest=General%20saddle%20question&source='+source+'">Email</a>';
      document.body.appendChild(bar);
      document.body.classList.add('has-mobile-action-bar');
    }
  });
})();
