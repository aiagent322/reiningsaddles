(function(){
  function qs(name){return new URLSearchParams(window.location.search).get(name)||'';}
  function val(id){var el=document.getElementById(id);return el?el.value.trim():'';}
  function set(id,value){var el=document.getElementById(id);if(el&&value)el.value=value;}
  document.addEventListener('DOMContentLoaded',function(){
    set('sourcePage',qs('source')||document.title+' | '+window.location.pathname);
    set('interest',qs('interest'));
    var form=document.getElementById('davidSolumMailtoForm'); if(!form) return;
    form.addEventListener('submit',function(e){e.preventDefault();
      var subject='Saddle inquiry from ReiningSaddles.com'; if(val('interest')) subject+=' — '+val('interest');
      var body=[
        'Name: '+val('name'),
        'Email: '+val('email'),
        'Phone / WhatsApp: '+val('phone'),
        'Country or State: '+val('location'),
        'Interest: '+val('interest'),
        'Seat Size: '+val('seatSize'),
        'Budget: '+val('budget'),
        'Horse and Discipline: '+val('horseDiscipline'),
        'Source Page: '+val('sourcePage'),
        '',
        'Buyer Questions:',
        '- Is this saddle currently available?',
        '- Will this seat size and tree likely fit my horse/rider situation?',
        '- What are the condition, shipping, and payment details?',
        '',
        'Message:',
        val('message')
      ].join('\n');
      window.location.href='mailto:davidsolumsales@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
    });
  });
})();
