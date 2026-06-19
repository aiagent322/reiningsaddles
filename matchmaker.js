(function(){
  // disc: "reining" | "cow" | "ranch" | "any"
  var SADDLES=[
    {slug:"af-reiner-pinnacle-saddlery-16",title:"AF Reiner by Pinnacle Saddlery \u2014 Maschke 16\u2033 Elephant",price:5995,seat:16,maker:"Superior",silver:false,disc:"reining"},
    {slug:"andrea-maschke-reiner-15-5",title:"Andrea Maschke Reiner 15.5\u2033 Original 2004 Build",price:2495,seat:15.5,maker:"Superior",silver:false,disc:"reining"},
    {slug:"bob-avila-bobs-custom-16-b",title:"Bob Avila by Bob\u2019s Custom 16\u2033 B17-120M \u2014 Full",price:5995,seat:16,maker:"Bobs Custom",silver:false,disc:"reining"},
    {slug:"bob-avila-bobs-custom-16-c",title:"Bob Avila by Bob\u2019s Custom 16\u2033 \u2014 Silver Swell Cap",price:5995,seat:16,maker:"Bobs Custom",silver:true,disc:"reining"},
    {slug:"bob-avila-bobs-custom-16-d",title:"Bob Avila by Bob\u2019s Custom 16\u2033 B99-472 Full Silver",price:1995,seat:16,maker:"Bobs Custom",silver:true,disc:"reining"},
    {slug:"bob-avila-bobs-custom-16",title:"Bob Avila by Bob\u2019s Custom 16\u2033 B17-120M",price:5995,seat:16,maker:"Bobs Custom",silver:false,disc:"reining"},
    {slug:"bob-avila-bobs-custom-17",title:"Bob Avila by Bob\u2019s Custom 17\u2033 S-Scroll Sterling Silver",price:2995,seat:17,maker:"Bobs Custom",silver:true,disc:"reining"},
    {slug:"bobs-custom-16-b16-1455m",title:"Bob\u2019s Custom 16\u2033 B16-1455M",price:2495,seat:16,maker:"Bobs Custom",silver:false,disc:"reining"},
    {slug:"bobs-custom-16-basketweave-silver",title:"Bob\u2019s Custom 16\u2033 \u2014 Basketweave & Floral, Sterling",price:5995,seat:16,maker:"Bobs Custom",silver:true,disc:"reining"},
    {slug:"bobs-custom-16-tan-sterling-silver",title:"Bob\u2019s Custom 16\u2033 \u2014 Tan Leather, Sterling Silver",price:5995,seat:16,maker:"Bobs Custom",silver:true,disc:"reining"},
    {slug:"bobs-custom-kr-lady-reiner-15-5",title:"Bob\u2019s Custom KR Lady Reiner 15.5\u2033 Bison Seat",price:4995,seat:15.5,maker:"Bobs Custom",silver:false,disc:"reining"},
    {slug:"bobs-custom-saddle-15-b14-867m",title:"Bob\u2019s Custom 15\u2033 B14-867M \u2014 Certified Used",price:1795,seat:15,maker:"Bobs Custom",silver:false,disc:"reining"},
    {slug:"calvin-allen-ranch-cutter-15-5",title:"Ranch Cutter by Calvin Allen Saddlery 15.5\u2033",price:1995,seat:15.5,maker:"Other",silver:false,disc:"cow"},
    {slug:"casey-deary-reiner-superior-16",title:"Casey Deary Reiner by Superior Saddlery 16\u2033 \u2014 Sterling Silver",price:5995,seat:16,maker:"Superior",silver:true,disc:"reining"},
    {slug:"craig-schmersal-reiner-superior-16",title:"Craig Schmersal Reiner by Superior Saddlery 16\u2033",price:4995,seat:16,maker:"Superior",silver:false,disc:"reining"},
    {slug:"donn-leson-reinmaker-16",title:"Donn Leson Reinmaker 16\u2033",price:7995,seat:16,maker:"Donn Leson",silver:false,disc:"reining"},
    {slug:"donn-leson-tvb-386-16",title:"Donn Leson TVB #386 \u2014 16\u2033, Sterling Silver Conchos",price:6495,seat:16,maker:"Donn Leson",silver:true,disc:"reining"},
    {slug:"equine-oasis-tim-bauer-17",title:"Equine Oasis by Tim Bauer 17\u2033 \u2014 Certified Used Reiner",price:2995,seat:17,maker:"Other",silver:false,disc:"reining"},
    {slug:"jason-vanlandingham-reiner-superior-16",title:"Jason Vanlandingham Reiner by Superior 16\u2033 Bison",price:2995,seat:16,maker:"Superior",silver:false,disc:"reining"},
    {slug:"kyle-tack-reiner-15-5",title:"Kyle Tack Reiner 15.5\u2033 \u2014 Certified Used",price:3995,seat:15.5,maker:"Other",silver:false,disc:"reining"},
    {slug:"kyle-tack-reiner-16-like-new",title:"Kyle Tack Reiner 16\u2033 Like New \u2014 Certified Used",price:3995,seat:16,maker:"Other",silver:false,disc:"reining"},
    {slug:"kyle-tack-reiner-16-mint",title:"Kyle Tack Reiner 16\u2033 \u2014 Mint Condition, Sterling Silver",price:3995,seat:16,maker:"Other",silver:true,disc:"reining"},
    {slug:"kyle-tack-reiner-16-silver-conchos",title:"Kyle Tack Reiner 16\u2033 \u2014 Sterling Silver Conchos",price:3995,seat:16,maker:"Other",silver:true,disc:"reining"},
    {slug:"kyle-tack-reiner-16",title:"Kyle Tack Reiner 16\u2033 \u2014 Certified Used",price:3995,seat:16,maker:"Other",silver:false,disc:"reining"},
    {slug:"lady-cowhorse-bobs-custom-15-5-b",title:"Lady Cowhorse by Bob\u2019s Custom 15.5\u2033 Star Tooling",price:4995,seat:15.5,maker:"Bobs Custom",silver:false,disc:"cow"},
    {slug:"lady-cowhorse-bobs-custom-15-5",title:"Lady Cowhorse by Bob\u2019s Custom 15.5\u2033",price:4995,seat:15.5,maker:"Bobs Custom",silver:false,disc:"cow"},
    {slug:"mandy-mccutcheon-reiner-superior-16",title:"Mandy McCutcheon Reiner by Superior 16\u2033 Chocolate",price:2995,seat:16,maker:"Superior",silver:false,disc:"reining"},
    {slug:"mr-reiner-superior-15-5",title:"MR Reiner by Superior Saddlery 15.5\u2033 \u2014 Certified Used",price:6495,seat:15.5,maker:"Superior",silver:false,disc:"reining"},
    {slug:"rios-bros-roper-15-5",title:"Rios Bros. Roper 15.5\u2033 \u2014 Seat Needs Stitching",price:495,seat:15.5,maker:"Other",silver:false,disc:"ranch"},
    {slug:"roohide-reiner-17",title:"Roohide Reiner 17\u2033",price:2995,seat:17,maker:"Other",silver:false,disc:"reining"},
    {slug:"srs-ranch-saddle-16",title:"SRS Ranch Saddle 16\u2033 \u2014 Hand Tooled",price:1495,seat:16,maker:"Other",silver:false,disc:"ranch"},
    {slug:"superior-ranch-rider-16-5-nevada",title:"Superior Saddlery 16.5\u2033 Elephant Seat \u2014 Nevada Border",price:5495,seat:16.5,maker:"Superior",silver:false,disc:"ranch"},
    {slug:"superior-ranch-rider-deluxe-16-5",title:"Ranch Rider Deluxe by Superior Saddlery 16.5\u2033",price:5495,seat:16.5,maker:"Superior",silver:false,disc:"ranch"},
    {slug:"superior-reiner-floral-4995",title:"Superior Saddlery Reiner Full Floral Tooling",price:4995,seat:16,maker:"Superior",silver:false,disc:"reining"},
    {slug:"teddy-johnson-cutter-16-full",title:"Teddy Johnson Cutter 16\u2033 \u2014 NCHA Competition History",price:1195,seat:16,maker:"Other",silver:false,disc:"cow"},
    {slug:"teddy-johnson-cutter-16",title:"Teddy Johnson Cutter 16\u2033 \u2014 Certified Used",price:1195,seat:16,maker:"Other",silver:false,disc:"cow"},
    {slug:"trevor-dare-martin-saddlery-15-5",title:"Trevor Dare Reiner by Martin Saddlery 15.5\u2033 Full Silver",price:4995,seat:15.5,maker:"Martin",silver:true,disc:"reining"},
    {slug:"new-saddles",title:"New Superior Saddlery \u2014 Custom Order by Andreas Maschke",price:8500,seat:16,maker:"Superior",silver:false,disc:"reining",isNew:true},
    {slug:"new-saddles",title:"New Superior Saddlery \u2014 Full Silver Custom Build",price:12000,seat:16,maker:"Superior",silver:true,disc:"reining",isNew:true}
  ];

  var QUESTIONS=[
    {id:"disc",label:"What discipline are you riding?",note:"This is the most important question \u2014 saddle geometry changes significantly between disciplines.",
     options:[
       {label:"NRHA Reining",disc:"reining"},
       {label:"Reined Cow Horse / NRCHA",disc:"cow"},
       {label:"Ranch Riding / Ranch Work",disc:"ranch"},
       {label:"Multiple disciplines \u2014 show me all",disc:"any"}
     ]},
    {id:"seat",label:"What seat size do you ride?",note:"Most adult reiners ride 15.5\u201316 inch. When in doubt, go 16.",
     options:[{label:"15 inch or under",seat:15},{label:"15.5 inch",seat:15.5},{label:"16 inch",seat:16},{label:"16.5\u201317 inch",seat:16.75},{label:"Not sure",seat:0}]},
    {id:"budget",label:"What\u2019s your budget?",note:"Certified used ranges $495\u2013$7,995. New Superior starts around $8,500.",
     options:[{label:"Under $2,000",lo:0,hi:1999},{label:"$2,000 \u2013 $3,999",lo:2000,hi:3999},{label:"$4,000 \u2013 $5,999",lo:4000,hi:5999},{label:"$6,000+",lo:6000,hi:99999},{label:"Open \u2014 show me everything",lo:0,hi:99999}]},
    {id:"maker",label:"Do you have a preferred maker?",note:"All saddles are NRHA competition-grade. Maker preference is heritage and feel.",
     options:[{label:"Superior / Pinnacle (Maschke)",maker:"Superior"},{label:"Bob\u2019s Custom Saddle",maker:"Bobs Custom"},{label:"Donn Leson",maker:"Donn Leson"},{label:"Martin Saddlery",maker:"Martin"},{label:"No preference \u2014 show me all",maker:"any"}]},
    {id:"silver",label:"Silver trim \u2014 important to you?",note:"Sterling silver adds show presence. Plain leather suits arena work or budget buyers.",
     options:[{label:"Yes \u2014 I want silver",silver:"yes"},{label:"No preference",silver:"any"},{label:"Plain leather preferred",silver:"no"}]}
  ];

  var answers={};
  var step=0;

  function scoreSaddle(s){
    // Hard exclude: wrong discipline scores 0 and won't appear in results
    if(answers.disc!=="any"&&s.disc!==answers.disc)return 0;
    var pts=0;
    // Discipline (35pts)
    if(answers.disc==="any"){pts+=20;}else{pts+=35;}
    // Seat (30pts)
    var sa=answers.seat;
    if(sa===0){pts+=18;}else if(s.seat===0){pts+=14;}else{var d=Math.abs(s.seat-sa);if(d===0)pts+=30;else if(d<=0.5)pts+=15;}
    // Budget (20pts)
    if(s.price>=answers.budgetLo&&s.price<=answers.budgetHi){pts+=20;}
    else if(s.price>=(answers.budgetLo-500)&&s.price<=(answers.budgetHi+500)){pts+=8;}
    // Maker (10pts)
    if(answers.maker==="any"||s.maker===answers.maker)pts+=10;
    // Silver (5pts)
    if(answers.silver==="any")pts+=5;else if(answers.silver==="yes"&&s.silver)pts+=5;else if(answers.silver==="no"&&!s.silver)pts+=5;
    return pts;
  }

  function whyMatch(s){
    var r=[];
    var discLabels={reining:"NRHA Reining saddle",cow:"Reined cow horse saddle",ranch:"Ranch riding saddle"};
    if(answers.disc!=="any"&&s.disc===answers.disc)r.push(discLabels[s.disc]||'Discipline match');
    if(answers.seat>0&&s.seat>0&&Math.abs(s.seat-answers.seat)===0)r.push(s.seat+'\u2033 seat \u2014 exact match');
    else if(answers.seat>0&&s.seat>0&&Math.abs(s.seat-answers.seat)<=0.5)r.push(s.seat+'\u2033 seat \u2014 close fit');
    if(answers.maker!=="any"&&s.maker===answers.maker)r.push('Your preferred maker');
    if(answers.silver==="yes"&&s.silver)r.push('Sterling silver trim');
    if(answers.silver==="no"&&!s.silver)r.push('Plain leather \u2014 your preference');
    if(s.price>=answers.budgetLo&&s.price<=answers.budgetHi)r.push('Within your budget');
    if(!r.length)r.push('Strong overall match');
    return r;
  }

  function render(){
    var app=document.getElementById('mmApp');
    var bar=document.getElementById('mmBar');
    if(!app)return;
    if(bar)bar.style.width=Math.round((step/QUESTIONS.length)*100)+'%';
    if(step<QUESTIONS.length)renderQ(app);
    else renderResults(app);
    var wrap=document.querySelector('.mm-wrap');
    if(wrap)setTimeout(function(){wrap.scrollIntoView({behavior:'smooth',block:'start'});},50);
  }

  function renderQ(app){
    var q=QUESTIONS[step];
    var html='<div class="mm-question">';
    html+='<p class="mm-step-label">Question '+(step+1)+' of '+QUESTIONS.length+'</p>';
    html+='<h2 class="mm-q-title">'+q.label+'</h2>';
    if(q.note)html+='<p class="mm-q-note">'+q.note+'</p>';
    html+='<div class="mm-options">';
    q.options.forEach(function(opt,i){
      html+='<button class="mm-option" data-idx="'+i+'">'+opt.label+'</button>';
    });
    html+='</div>';
    if(step>0)html+='<button class="mm-back">\u2190 Back</button>';
    html+='</div>';
    app.innerHTML=html;

    app.querySelectorAll('.mm-option').forEach(function(btn){
      btn.addEventListener('click',function(){
        app.querySelectorAll('.mm-option').forEach(function(b){b.disabled=true;b.style.opacity='0.5';});
        this.classList.add('mm-option-selected');
        this.style.opacity='1';
        var idx=parseInt(this.getAttribute('data-idx'),10);
        var opt=QUESTIONS[step].options[idx];
        var qid=QUESTIONS[step].id;
        if(qid==='disc'){answers.disc=opt.disc;}
        else if(qid==='seat'){answers.seat=opt.seat;}
        else if(qid==='budget'){answers.budgetLo=opt.lo;answers.budgetHi=opt.hi;}
        else if(qid==='maker'){answers.maker=opt.maker;}
        else if(qid==='silver'){answers.silver=opt.silver;}
        step++;
        setTimeout(render,220);
      });
    });
    var back=app.querySelector('.mm-back');
    if(back)back.addEventListener('click',function(){step--;render();});
  }

  function renderResults(app){
    var scored=SADDLES.map(function(s){return{s:s,pts:scoreSaddle(s)};});
    scored.sort(function(a,b){return b.pts-a.pts;});
    var top=scored.slice(0,6).filter(function(r){return r.pts>=15;});

    var html='<div class="mm-results">';
    html+='<h2 class="mm-results-title">Your Best Matches</h2>';
    html+='<p class="mm-results-sub">Ranked by fit to your criteria. Confirm availability with David Solum before purchasing.</p>';
    if(!top.length){
      html+='<p class="mm-no-results">No close matches. Try broadening your budget or seat size. <a href="/used-saddles.html">Browse all saddles \u2192</a></p>';
    }else{
      html+='<div class="mm-cards">';
      top.forEach(function(r,i){
        var s=r.s;
        var reasons=whyMatch(s);
        var pct=Math.min(Math.round((r.pts/100)*100),100);
        var link=s.isNew?'/new-saddles.html':'/used-saddles/'+s.slug+'.html';
        html+='<div class="mm-card'+(i===0?' mm-card-top':'')+'">';
        if(i===0)html+='<span class="mm-badge">Best Match</span>';
        html+='<div class="mm-card-score"><div class="mm-score-fill" style="width:'+pct+'%"></div></div>';
        html+='<h3 class="mm-card-title">'+s.title+'</h3>';
        html+='<p class="mm-card-price">$'+s.price.toLocaleString()+(s.isNew?' \u2014 Custom Order':' \u2014 Certified Used')+'</p>';
        html+='<ul class="mm-card-reasons">'+reasons.map(function(x){return'<li>'+x+'</li>';}).join('')+'</ul>';
        html+='<a class="mm-card-btn" href="'+link+'">View Saddle \u2192</a>';
        html+='</div>';
      });
      html+='</div>';
    }
    html+='<div class="mm-cta-strip"><p>Not sure? David Solum will match you personally \u2014 free of charge.</p>';
    html+='<a class="mm-cta-call" href="tel:4177931403">Call David</a>';
    html+='<a class="mm-cta-email" href="/contact.html?interest=Saddle+Matchmaker+results&source=Matchmaker">Email David</a></div>';
    html+='<button class="mm-restart">\u2190 Start Over</button></div>';
    app.innerHTML=html;
    app.querySelector('.mm-restart').addEventListener('click',function(){
      answers={};step=0;
      var bar=document.getElementById('mmBar');
      if(bar)bar.style.width='0%';
      render();
    });
  }

  function addStyles(){
    var s=document.createElement('style');
    s.textContent=
      '.mm-wrap{max-width:660px;margin:0 auto;padding:28px 16px 100px}'+
      '.mm-bar{height:4px;background:var(--cognac,#8B2500);width:0;transition:width .4s ease;border-radius:2px;margin-bottom:32px}'+
      '.mm-question{animation:mmFade .25s ease}'+
      '@keyframes mmFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}'+
      '.mm-step-label{font-family:var(--font-label,sans-serif);font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:var(--cognac,#8B2500);margin-bottom:8px}'+
      '.mm-q-title{font-family:var(--font-display,serif);font-size:clamp(1.3rem,3vw,2rem);color:var(--dark-saddle,#2A1206);margin-bottom:8px;line-height:1.2}'+
      '.mm-q-note{font-size:.9rem;color:#7a6a58;margin-bottom:20px;line-height:1.6}'+
      '.mm-options{display:flex;flex-direction:column;gap:10px;margin-bottom:20px}'+
      '.mm-option{background:#fff;border:2px solid #d4c4b0;border-radius:8px;padding:14px 18px;text-align:left;font-size:.95rem;color:var(--dark-saddle,#2A1206);cursor:pointer;transition:border-color .15s,background .15s,transform .1s;font-family:inherit;-webkit-tap-highlight-color:transparent;min-height:52px}'+
      '.mm-option:hover{border-color:var(--cognac,#8B2500);background:#fdf7f2}'+
      '.mm-option:active{transform:scale(.98)}'+
      '.mm-option-selected{border-color:var(--cognac,#8B2500)!important;background:#fdf7f2!important;font-weight:600}'+
      '.mm-option-selected::after{content:" \u2713";color:var(--cognac,#8B2500)}'+
      '.mm-back{background:none;border:none;color:#999;font-size:.85rem;cursor:pointer;padding:4px 0;font-family:inherit;min-height:44px}'+
      '.mm-back:hover{color:var(--cognac,#8B2500)}'+
      '.mm-results{animation:mmFade .3s ease}'+
      '.mm-results-title{font-family:var(--font-display,serif);font-size:clamp(1.5rem,3vw,2.2rem);color:var(--dark-saddle,#2A1206);margin-bottom:6px}'+
      '.mm-results-sub{font-size:.9rem;color:#7a6a58;margin-bottom:24px;line-height:1.6}'+
      '.mm-cards{display:flex;flex-direction:column;gap:16px;margin-bottom:28px}'+
      '.mm-card{background:#fff;border:2px solid #e8ddd0;border-radius:10px;padding:20px}'+
      '.mm-card-top{border-color:var(--cognac,#8B2500)}'+
      '.mm-badge{display:inline-block;background:var(--cognac,#8B2500);color:#fff;font-size:10px;letter-spacing:.1em;text-transform:uppercase;padding:3px 10px;border-radius:4px;margin-bottom:10px}'+
      '.mm-card-score{height:4px;background:#ede6dd;border-radius:2px;margin-bottom:12px;overflow:hidden}'+
      '.mm-score-fill{height:100%;background:var(--cognac,#8B2500);border-radius:2px}'+
      '.mm-card-title{font-family:var(--font-display,serif);font-size:1.05rem;color:var(--dark-saddle,#2A1206);margin-bottom:4px;line-height:1.3}'+
      '.mm-card-price{font-size:.9rem;font-weight:600;color:var(--cognac,#8B2500);margin-bottom:10px}'+
      '.mm-card-reasons{margin:0 0 14px;padding-left:18px;font-size:.85rem;color:#5a4a3a;line-height:1.7}'+
      '.mm-card-btn{display:inline-block;background:var(--dark-saddle,#2A1206);color:#F5EDD8;padding:9px 18px;border-radius:6px;font-size:.85rem;text-decoration:none;font-weight:600}'+
      '.mm-card-btn:hover{background:var(--cognac,#8B2500)}'+
      '.mm-no-results{color:#7a6a58;font-size:.95rem;line-height:1.6}'+
      '.mm-cta-strip{background:#fdf7f2;border:1px solid #e8ddd0;border-radius:10px;padding:20px;text-align:center;margin-bottom:20px}'+
      '.mm-cta-strip p{font-size:.9rem;color:#5a4a3a;margin-bottom:14px;line-height:1.5}'+
      '.mm-cta-strip a{display:inline-block;margin:4px;padding:10px 18px;border-radius:6px;font-size:.85rem;font-weight:600;text-decoration:none}'+
      '.mm-cta-call{background:var(--cognac,#8B2500);color:#fff}'+
      '.mm-cta-email{background:#2A1206;color:#F5EDD8}'+
      '.mm-restart{background:none;border:1px solid #ccc;border-radius:6px;padding:10px 16px;font-size:.85rem;color:#7a6a58;cursor:pointer;font-family:inherit;min-height:44px}'+
      '.mm-restart:hover{border-color:var(--cognac,#8B2500);color:var(--cognac,#8B2500)}';
    document.head.appendChild(s);
  }

  function init(){
    if(!document.getElementById('mmApp'))return;
    addStyles();
    render();
  }

  if(document.readyState!=='loading')init();
  else document.addEventListener('DOMContentLoaded',init);
})();
