/* ===== Edit content here ===== */
const BOOKING_URL="#contact"; // "Book a call" / "Schedule a session" buttons. Paste a booking-page address here (e.g. "https://cal.example.com/franchiseone"); until then they open the contact form.
const QRAFTER_URL="#"; // PASTE THE QRAFTER WEBSITE ADDRESS BETWEEN THE QUOTES, e.g. "https://qrafter.example.com". Every Qrafter button on the page uses this one line.
const BRANDS=[ // [name, branches, "auto"=AutoPilot | "self"=Self manage]; counts are optional. Logo file: assets/brands/<name-with-dashes>.png
["Richeese",250,"auto"],["Frutta Gelato",50,"self"],["Steak Indonesia Raya",50,"auto"],["Pertehmina",100,"self"],["Flat Burger",5,"self"],["Kebuli Yaman",20,"self"],["Bakmi Woy",30,"self"],
["Dapur Cokelat",88,"auto"],["Tahu Go",350,"self"],["Uena",25,"auto"],["Cipok",150,"self"],["Pertamilk",42,"self"],["Street Sushi",30,"auto"],["Sate Taichan",30,"self"],
["Burger King",170,"auto"],["Sei Sapi Mancuy",13,"auto"],["Bebek Terminal",50,"auto"],["Smuky",11,"self"],["Mamma Roti",110,"self"],["Cilok Djoedes",5,"self"],["Cendol Pandan",30,"self"],["Gocok",10,"self"],
["RB 88"],["Donatsu"],["Prek Tea"],["Sooper Jet"]];
const LINKS={ // brand website or Instagram per brand. Missing = "#" (dummy)
"Pertehmina":"https://www.instagram.com/pertehmina/",
"Richeese":"https://order.richeesefactory.com/discovery/",
"Frutta Gelato":"https://fruttagelato.com",
"Steak Indonesia Raya":"https://www.instagram.com/franchise_steak/",
"Flat Burger":"https://www.instagram.com/flatburger.indonesia/",
"Kebuli Yaman":"https://kebuliyaman.com",
"Bakmi Woy":"https://www.instagram.com/bakmi.woy/",
"Dapur Cokelat":"https://dapurcokelat.com",
"Tahu Go":"https://tahugo.co.id",
"Cipok":"https://www.instagram.com/cirengcipok/",
"Uena":"https://uenafood.com",
"Pertamilk":"https://www.instagram.com/pertamilk.official/",
"Street Sushi":"https://www.instagram.com/streetsushi.id/",
"Sate Taichan":"https://www.taichannyot2.com/",
"Burger King":"https://bkdelivery.co.id/about-us/",
"Sei Sapi Mancuy":"https://www.instagram.com/seisapimancuy/",
"Bebek Terminal":"https://www.instagram.com/bebekterminal/",
"Smuky":"https://www.instagram.com/smuky.official/",
"Prek Tea":"https://prektea.com",
"Mamma Roti":"https://www.instagram.com/mammaroti.id/",
"Cendol Pandan":"https://www.instagram.com/cendolpandan.id/",
"Cilok Djoedes":"http://www.cilokdjoedes.com",
"Gocok":"https://www.instagram.com/gocok.indonesia/",
"RB 88":"https://www.rotibakar88.id",
"Donatsu":"https://www.instagram.com/donatsu.official/",
"Sooper Jet":"https://www.instagram.com/sooperjet.id/"
};
const I={
start:'<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',
scale:'<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
qr:'<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><path d="M14 14h3v3M20 14v.01M14 20h.01M17 20h3v-3"/>',
people:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.5-4 3-6 6.5-6s6 2 6.5 6M16 5a3.5 3.5 0 010 7M18 14c2 .6 3.3 2.5 3.5 6"/>',
system:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M7 9h4M7 12h7"/>',
location:'<path d="M12 21s7-6.2 7-11.5a7 7 0 10-14 0C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
commerce:'<path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 016 0v2"/>',
operation:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
consult:'<path d="M4 5h16v11H9l-5 4V5z"/><path d="M8 9h8M8 12h5"/>'};
const STORY_PHOTOS=[ // Our Story slider. Files go in assets/team/ (png, jpg, jpeg or webp, write the name without extension). Optional caption as the 2nd item. Missing files are skipped.
["story-1",""],["story-2",""],["story-3",""],["story-4",""],["story-5",""],["story-6",""]];
const SERVICES=[
["people","People","We provide essential manpower by sourcing and training skilled blue-collar workers to build strong, capable franchise teams.",["Sourcing","Training"],"@b","Book a call"],
["system","System","Our flagship Qrafter QR ordering system, plus SOPs, supply chain, inventory and CRM solutions, built with leading SaaS partners.",["Qrafter","SOP","CRM"],"@q","Meet Qrafter"],
["location","Location","An extensive listing of potential franchise sites in malls, commercial buildings, food courts or stalls, with detailed descriptions.",["Sites","Listings"],"#"],
["commerce","Commerce","A marketplace that connects franchisors with potential franchisees and helps package businesses, sites and payment methods.",["Marketplace","Payments"],"#"],
["operation","Operation","Comprehensive operational support for franchisees to manage assets and keep operations smooth and efficient.",["Assets","Support"],"@b","Book a call"],
["consult","Consultation","Advisory and hands-on execution across franchise management and growth, with solutions tailored to your challenges.",["Advisory","Growth"],"@b","Schedule a session"]];
const PATHS=[ // [icon, small label, headline, text, link ("@q" = Qrafter website), link text]
["start","New to franchising","I want my first franchise","Never owned one? Find a brand that fits your budget, and a site that fits the brand.","#svc-commerce","Find my first franchise"],
["scale","Franchisor","I want to scale my brand","Tell us where you want to go. We'll help you plan the expansion and put the right pieces in place.","#svc-consult","Plan my expansion"],
["people","Franchise owner","I need people to run my outlets","Get trained, ready-to-work teams for your kitchen and counter.","#svc-people","Build my outlet team"],
["operation","Franchise owner","I want my business to run itself","Step back from the daily grind. We'll help manage the operations and assets behind your outlets.","#svc-operation","Put it on autopilot"],
["consult","Stuck?","My business is stuck","Something isn't working. Tell us where it hurts and we'll help you find the way forward.","#svc-consult","Find what's holding me back"],
["qr","Restaurant","My orders are a mess","Long lines, slow kitchens, confused waiters? Put ordering and tables in one system.","@q","Fix my order flow"]];
const QUOTES=[
["Andika","CEO of TGR Group","Partnering with FranchiseOne has been a game-changer for TGR Group. Their fast response times and professional problem-solving have effectively addressed numerous challenges in our franchise expansion journey."],
["Ade","Founder & CEO of Cendol Pandan","FranchiseOne has been essential to our rapid growth at Cendol Pandan. With their expert guidance, we've opened over 20 branches in just one month, which I never thought possible."],
["Prima Alverina","Founder & CEO of Mamma Roti","Since partnering with FranchiseOne, Mamma Roti has experienced significant growth. Their swift assistance in finding ideal locations has allowed us to expand strategically."],
["Yunita Astrid","Franchisee","FranchiseOne has been a vital partner in my entrepreneurial journey. They help curate brands and offer comprehensive software solutions, as well as detailed operational training."],
["Yulia Khu","Franchisee","Choosing the right brand in the right location is crucial for success, and FranchiseOne excels in this area. Since starting my business with them last year, their guidance has been invaluable."]];
const NEWS=[ // [title, summary, date, article link]

["IFBC 2025; FranchiseOne Mendorong Pertumbuhan Wirausaha dan Peluang Bisnis Melalui Franchising","FranchiseOne hadir di Expo Info Franchise and Business Concept (IFBC) 2025 yang diadakan di ICE BSD pada tanggal 14-16 Februari 2025.","February 21, 2025","https://faktual.co.id/ifbc-2025-franchiseone-mendorong-pertumbuhan-wirausaha-dan-peluang-bisnis-melalui-franchising/"],
["FranchiseOne Menyajikan TahuGo dan Bebek Terminal: Dari Camilan Lokal ke Panggung Global","Pada hari ketiga acara “FranchiseOne Open House: Your Business Starter Kit”, talkshow bertema “Franchising, From Local to Global” digelar di Central Park Mall.","February 18, 2025","https://jogjaaja.com/read/franchise-one-menyajikan-tahu-go-dan-bebek-terminal-dari-camilan-lokal-ke-panggung-global"],
["FranchiseOne Open House: Bundling Pembelian Franchise dengan Properti Agung Podomoro Land","FranchiseOne, platform ekspansi franchise bertenaga AI pertama di Indonesia, bermitra dengan APL Group untuk “Your Business Starter Kit”, 7-9 Februari 2025.","February 7, 2025","https://www.vritimes.com/id/articles/ee62bb93-1981-11ef-ae09-0a58a9feac02/3fa81df0-e51e-11ef-a070-0a58a9feac02"]];
/* ===== Rendering ===== */
const $=s=>document.querySelector(s),slug=n=>n.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/-$/,'');
const tile=n=>{const d=document.createElement('div'),l=document.createElement('div'),i=new Image();d.className='logo-tile';l.className='lg';i.alt=n;i.src='assets/brands/'+slug(n)+'.png';i.onerror=()=>i.replaceWith(n);l.append(i);d.append(l);return d};
const MODEL={auto:'AutoPilot',self:'Self manage'};
const m=$('#marq');BRANDS.forEach(b=>m.append(tile(b[0])));BRANDS.forEach(b=>{const t=tile(b[0]);t.setAttribute('aria-hidden','true');m.append(t)});
BRANDS.forEach(([n,c,k])=>{const t=tile(n),u=LINKS[n]||'#';
if(c)t.insertAdjacentHTML('beforeend',`<div class="meta"><span class="stat"><b class="count" data-n="${c}">${c}+</b>Branches</span>${k?`<em class="mdl ${k}">${MODEL[k]}</em>`:''}</div>`);
t.insertAdjacentHTML('beforeend',`<div class="curtain"><a class="visit" href="${u}"${u[0]=='h'?' target="_blank" rel="noopener"':''} aria-label="Visit ${n} website"><span class="dot">↗</span>Visit us <i>→</i></a></div>`);$('#logos').append(t)});
const lnk=(h,t,c='')=>h=='@q'?`<a class="more ${c}" href="#" data-qrafter>${t} <i>→</i></a>`:h=='@b'?`<a class="more ${c}" href="#contact" data-booking>${t} <i>→</i></a>`:`<a class="more ${c}" href="${h}">${t} <i>→</i></a>`;
$('#services-grid').innerHTML=SERVICES.map((s,i)=>`<article id="svc-${s[0]}" class="clay card tilt"><span class="num">0${i+1}</span><div class="ico"><svg viewBox="0 0 24 24">${I[s[0]]}</svg></div><h3>${s[1]}</h3><p>${s[2]}</p><div class="tags">${s[3].map(t=>`<span class="tag">${t}</span>`).join('')}</div>${s[4]?lnk(s[4],s[5]||'Click Here'):`<span class="more" aria-hidden="true" style="visibility:hidden">&nbsp;</span>`}</article>`).join('');
$('#paths').innerHTML=PATHS.map(p=>`<article class="clay card path tilt"><div class="ico"><svg viewBox="0 0 24 24">${I[p[0]]}</svg></div><small class="lbl">${p[1]}</small><h3>${p[2]}</h3><p>${p[3]}</p>${lnk(p[4],p[5])}</article>`).join('');
[['[data-qrafter]',QRAFTER_URL],['[data-booking]',BOOKING_URL]].forEach(([q,u])=>document.querySelectorAll(q).forEach(a=>{a.href=u;if(/^https?:/.test(u)){a.target='_blank';a.rel='noopener'}}));
$('#quotes').innerHTML=QUOTES.map(q=>`<figure class="clay card quote tilt"><p>“${q[2]}”</p><h3>${q[0]}</h3><small>${q[1]}</small></figure>`).join('');
$('#news').innerHTML=NEWS.map(n=>`<article class="clay card tilt"><span class="date">${n[2]}</span><h3>${n[0]}</h3><p>${n[1]}</p><a class="more" href="${n[3]||'#'}"${n[3]?' target="_blank" rel="noopener"':''}>Read more <i>→</i></a></article>`).join('');
/* ===== Interactions ===== */
const nav=$('#nav'),btn=$('.menu');btn.onclick=()=>btn.setAttribute('aria-expanded',nav.classList.toggle('open'));nav.onclick=e=>{if(e.target.tagName=='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}};
const links=[...nav.querySelectorAll('a:not(.btn)')];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.hash=='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
links.forEach(a=>{const s=document.querySelector(a.hash);s&&io.observe(s)});
if(!matchMedia('(prefers-reduced-motion:reduce)').matches&&matchMedia('(hover:hover)').matches)document.querySelectorAll('.tilt').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) rotateX(${-y*5}deg) rotateY(${x*6}deg) translateY(-10px)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
$('#form').onsubmit=e=>{e.preventDefault();const f=e.target;const body=`Name: ${f.name.value}\nEmail: ${f.email.value}\nPhone: ${f.phone.value}\n\n${f.msg.value}`;location.href=`mailto:info@franchise.one?subject=${encodeURIComponent('Website inquiry from '+f.name.value)}&body=${encodeURIComponent(body)}`};
/* ===== Counter animation: counts up when a number scrolls into view ===== */
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const run=e=>{const n=+e.dataset.n,t0=performance.now(),f=t=>{const p=Math.min((t-t0)/1400,1);e.textContent=Math.round(n*(1-Math.pow(1-p,3)))+'+';p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)};
const co=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){co.unobserve(x.target);run(x.target)}}),{threshold:.6});
if(!RM)document.querySelectorAll('.count').forEach(e=>{e.textContent='0+';co.observe(e)});
/* ===== Theme switcher: remove the .themes block in index.html to hide it ===== */
const th=$('.themes'),mark=()=>th.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.t==document.documentElement.dataset.theme));
th.onclick=e=>{const b=e.target.closest('button');if(!b)return;document.documentElement.dataset.theme=b.dataset.t;try{localStorage.setItem('f1theme',b.dataset.t)}catch(x){}mark()};mark();
/* ===== Sliders (hero + Our Story): auto-advance, pause on hover/focus, swipe, dots. Hero has pause button; reduced motion = no autoplay ===== */
const initSlider=(sl,o={})=>{const S=[...sl.querySelectorAll(o.slide||'.slide')],dots=sl.querySelector('.dots'),pp=sl.querySelector('.pp'),live=sl.querySelector('.slides'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches,ms=o.ms||6500;let i=0,t=null,user=rm,vis=!o.view,hold=false;
const go=n=>{i=(n+S.length)%S.length;S.forEach((s,k)=>{s.classList.toggle('on',k==i);s.setAttribute('aria-hidden',k!=i)});[...dots.children].forEach((b,k)=>b.setAttribute('aria-current',k==i))};
const halt=()=>{clearInterval(t);t=null},play=()=>{if(!user&&vis&&!hold&&!t&&S.length>1)t=setInterval(()=>go(i+1),ms)};
const manual=n=>{go(n);halt();play()};
S.forEach((_,n)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Go to slide '+(n+1));b.onclick=()=>manual(n);dots.append(b)});
sl.querySelectorAll('.arr').forEach(b=>b.onclick=()=>manual(i+ +b.dataset.d));
const setP=p=>{user=p;if(pp){pp.textContent=p?'▶':'❚❚';pp.setAttribute('aria-label',p?'Play slideshow':'Pause slideshow')}live.setAttribute('aria-live',p?'polite':'off');p?halt():play()};
if(pp)pp.onclick=()=>setP(!user);
const hd=v=>()=>{hold=v;v?halt():play()};sl.addEventListener('mouseenter',hd(true));sl.addEventListener('mouseleave',hd(false));sl.addEventListener('focusin',hd(true));sl.addEventListener('focusout',hd(false));
let x0=null;sl.addEventListener('touchstart',e=>{x0=e.touches[0].clientX},{passive:true});sl.addEventListener('touchend',e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0;x0=null;if(Math.abs(d)>40)manual(i+(d<0?1:-1))},{passive:true});
if(o.view)new IntersectionObserver(es=>es.forEach(e=>{vis=e.isIntersecting;vis?play():halt()}),{threshold:.3}).observe(sl);
go(0);setP(rm)};
if($('#slider'))initSlider($('#slider'),{ms:6500});
/* Our Story photos: only the files that exist are used */
(()=>{const sl=$('#story-slider');if(!sl)return;const box=sl.querySelector('.slides'),EX=['jpg','png','webp','jpeg'];
const find=b=>new Promise(r=>{let k=0;const next=()=>{if(k>=EX.length)return r(null);const u='assets/team/'+b+'.'+EX[k++],im=new Image();im.onload=()=>r(u);im.onerror=next;im.src=u};next()});
Promise.all(STORY_PHOTOS.map(([b,c])=>find(b).then(u=>u&&[u,c]))).then(a=>{a=a.filter(Boolean);
box.innerHTML=a.length?a.map(([u,c],n)=>`<figure class="sslide"><div class="sphoto"><img src="${u}" alt="${c||'Franchise One story photo '+(n+1)}"></div>${c?`<figcaption>${c}</figcaption>`:''}</figure>`).join(''):`<figure class="sslide"><div class="sphoto"><span class="ph">Our story photos<small>assets/team/${STORY_PHOTOS[0][0]}.jpg</small></span></div></figure>`;
if(a.length<2)sl.querySelector('.ctrl').hidden=true;initSlider(sl,{slide:'.sslide',ms:5500,view:true})})})();
