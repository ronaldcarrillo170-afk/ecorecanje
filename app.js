const DB='ECORECANJE_DB';
const safeNumber=(n,d=0)=>{const v=Number(String(n ?? d).replace(/[^0-9.-]/g,'')); return Number.isFinite(v) ? v : Number(d);};
const initial={session:null,users:[
// Administrador
{id:'AD-001',u:'admin',p:'admin123',name:'Administrador Demo',email:'admin@ecorecanje.co',role:'admin',course:'',points:0,recycled:0},
// Profesores por curso (uno por curso)
{id:'PR-601',u:'prof601',p:'1234',name:'Prof. Ana Verde',email:'ana.verde@colegio.edu.co',role:'teacher',course:'601',points:0,recycled:0},
{id:'PR-602',u:'prof602',p:'1234',name:'Prof. Luis Marín',email:'luis.marin@colegio.edu.co',role:'teacher',course:'602',points:0,recycled:0},
{id:'PR-603',u:'prof603',p:'1234',name:'Prof. Carla Ríos',email:'carla.rios@colegio.edu.co',role:'teacher',course:'603',points:0,recycled:0},
{id:'PR-604',u:'prof604',p:'1234',name:'Prof. Diego Salas',email:'diego.salas@colegio.edu.co',role:'teacher',course:'604',points:0,recycled:0},
{id:'PR-701',u:'prof701',p:'1234',name:'Prof. Marta Cruz',email:'marta.cruz@colegio.edu.co',role:'teacher',course:'701',points:0,recycled:0},
{id:'PR-702',u:'prof702',p:'1234',name:'Prof. Pablo León',email:'pablo.leon@colegio.edu.co',role:'teacher',course:'702',points:0,recycled:0},
{id:'PR-703',u:'prof703',p:'1234',name:'Prof. Inés Soto',email:'ines.soto@colegio.edu.co',role:'teacher',course:'703',points:0,recycled:0},
{id:'PR-704',u:'prof704',p:'1234',name:'Prof. Marco Díaz',email:'marco.diaz@colegio.edu.co',role:'teacher',course:'704',points:0,recycled:0},
{id:'PR-801',u:'prof801',p:'1234',name:'Prof. Elena Ruiz',email:'elena.ruiz@colegio.edu.co',role:'teacher',course:'801',points:0,recycled:0},
{id:'PR-802',u:'prof802',p:'1234',name:'Prof. Tomás Vega',email:'tomas.vega@colegio.edu.co',role:'teacher',course:'802',points:0,recycled:0},
{id:'PR-803',u:'prof803',p:'1234',name:'Prof. Rosa Blanco',email:'rosa.blanco@colegio.edu.co',role:'teacher',course:'803',points:0,recycled:0},
{id:'PR-901',u:'prof901',p:'1234',name:'Prof. Andrés León',email:'andres.leon@colegio.edu.co',role:'teacher',course:'901',points:0,recycled:0},
{id:'PR-902',u:'prof902',p:'1234',name:'Prof. Laura Peña',email:'laura.pena@colegio.edu.co',role:'teacher',course:'902',points:0,recycled:0},
{id:'PR-903',u:'prof903',p:'1234',name:'Prof. Jorge Patiño',email:'jorge.patino@colegio.edu.co',role:'teacher',course:'903',points:0,recycled:0},
{id:'PR-1001',u:'prof1001',p:'1234',name:'Prof. Silvia Mora',email:'silvia.mora@colegio.edu.co',role:'teacher',course:'1001',points:0,recycled:0},
{id:'PR-1002',u:'prof1002',p:'1234',name:'Prof. Felipe Rojas',email:'felipe.rojas@colegio.edu.co',role:'teacher',course:'1002',points:0,recycled:0},
{id:'PR-1003',u:'prof1003',p:'1234',name:'Prof. Diana Solís',email:'diana.solis@colegio.edu.co',role:'teacher',course:'1003',points:0,recycled:0},
{id:'PR-1101',u:'prof1101',p:'1234',name:'Prof. Nora Castillo',email:'nora.castillo@colegio.edu.co',role:'teacher',course:'1101',points:0,recycled:0},
{id:'PR-1102',u:'prof1102',p:'1234',name:'Prof. Carlos Mejía',email:'carlos.mejia@colegio.edu.co',role:'teacher',course:'1102',points:0,recycled:0},
// Estudiantes — añadir varios por curso con puntos realistas
{id:'EC-6001',u:'alejandro',p:'1234',name:'Alejandro Gómez',email:'alejandro@demo.edu',role:'student',course:'601',points:320,recycled:8},
{id:'EC-6002',u:'camila',p:'1234',name:'Camila Torres',email:'camila@demo.edu',role:'student',course:'601',points:410,recycled:12},
{id:'EC-6003',u:'santiago',p:'1234',name:'Santiago Ruiz',email:'santiago@demo.edu',role:'student',course:'602',points:250,recycled:6},
{id:'EC-6004',u:'valeria',p:'1234',name:'Valeria Peña',email:'valeria@demo.edu',role:'student',course:'602',points:290,recycled:7},
{id:'EC-6005',u:'sebastian',p:'1234',name:'Sebastián López',email:'sebastian@demo.edu',role:'student',course:'603',points:180,recycled:4},
{id:'EC-6006',u:'laura',p:'1234',name:'Laura Medina',email:'laura@demo.edu',role:'student',course:'603',points:205,recycled:5},
{id:'EC-6007',u:'david',p:'1234',name:'David Castro',email:'david@demo.edu',role:'student',course:'604',points:360,recycled:10},
{id:'EC-6008',u:'isabela',p:'1234',name:'Isabela Ríos',email:'isabela@demo.edu',role:'student',course:'604',points:410,recycled:13},
{id:'EC-7001',u:'fernando',p:'1234',name:'Fernando Solano',email:'fernando@demo.edu',role:'student',course:'701',points:520,recycled:18},
{id:'EC-7002',u:'juliana',p:'1234',name:'Juliana Ortiz',email:'juliana@demo.edu',role:'student',course:'701',points:480,recycled:16},
{id:'EC-7003',u:'martin',p:'1234',name:'Martín Paredes',email:'martin@demo.edu',role:'student',course:'702',points:430,recycled:14},
{id:'EC-7004',u:'sofia',p:'1234',name:'Sofía Herrera',email:'sofia@demo.edu',role:'student',course:'702',points:390,recycled:12},
{id:'EC-7005',u:'carlos',p:'1234',name:'Carlos Peña',email:'carlos@demo.edu',role:'student',course:'703',points:210,recycled:5},
{id:'EC-7006',u:'andrea',p:'1234',name:'Andrea Gil',email:'andrea@demo.edu',role:'student',course:'703',points:260,recycled:6},
{id:'EC-7007',u:'miguel',p:'1234',name:'Miguel Torres',email:'miguel@demo.edu',role:'student',course:'704',points:350,recycled:9},
{id:'EC-7008',u:'natalia',p:'1234',name:'Natalia R.,',email:'natalia@demo.edu',role:'student',course:'704',points:300,recycled:8},
{id:'EC-8001',u:'luis',p:'1234',name:'Luis Figueroa',email:'luis@demo.edu',role:'student',course:'801',points:620,recycled:20},
{id:'EC-8002',u:'ana',p:'1234',name:'Ana Salazar',email:'ana@demo.edu',role:'student',course:'801',points:580,recycled:19},
{id:'EC-8003',u:'jorge',p:'1234',name:'Jorge Molina',email:'jorge@demo.edu',role:'student',course:'802',points:470,recycled:15},
{id:'EC-8004',u:'paola',p:'1234',name:'Paola Álvarez',email:'paola@demo.edu',role:'student',course:'802',points:430,recycled:13},
{id:'EC-8005',u:'susan',p:'1234',name:'Susan Delgado',email:'susan@demo.edu',role:'student',course:'803',points:350,recycled:9},
{id:'EC-8006',u:'kevin',p:'1234',name:'Kevin Mora',email:'kevin@demo.edu',role:'student',course:'803',points:300,recycled:8},
{id:'EC-9001',u:'marco',p:'1234',name:'Marco Peña',email:'marco@demo.edu',role:'student',course:'901',points:710,recycled:22},
{id:'EC-9002',u:'lina',p:'1234',name:'Lina Cabrera',email:'lina@demo.edu',role:'student',course:'901',points:690,recycled:21},
{id:'EC-9003',u:'raul',p:'1234',name:'Raúl Sánchez',email:'raul@demo.edu',role:'student',course:'902',points:520,recycled:17},
{id:'EC-9004',u:'paulina',p:'1234',name:'Paulina Nieto',email:'paulina@demo.edu',role:'student',course:'902',points:480,recycled:15},
{id:'EC-9005',u:'esteban',p:'1234',name:'Esteban Rojas',email:'esteban@demo.edu',role:'student',course:'903',points:430,recycled:14},
{id:'EC-9006',u:'gabriela',p:'1234',name:'Gabriela Cruz',email:'gabriela@demo.edu',role:'student',course:'903',points:410,recycled:13},
{id:'EC-10001',u:'nicolas',p:'1234',name:'Nicolás Vargas',email:'nicolas@demo.edu',role:'student',course:'1001',points:820,recycled:25},
{id:'EC-10002',u:'karen',p:'1234',name:'Karen Blanco',email:'karen@demo.edu',role:'student',course:'1001',points:770,recycled:23},
{id:'EC-10003',u:'ricardo',p:'1234',name:'Ricardo Molina',email:'ricardo@demo.edu',role:'student',course:'1002',points:610,recycled:19},
{id:'EC-10004',u:'soledad',p:'1234',name:'Soledad P.,',email:'soledad@demo.edu',role:'student',course:'1002',points:590,recycled:18},
{id:'EC-10005',u:'andres',p:'1234',name:'Andrés Bermúdez',email:'andres@demo.edu',role:'student',course:'1003',points:450,recycled:14},
{id:'EC-10006',u:'mariana',p:'1234',name:'Mariana López',email:'mariana@demo.edu',role:'student',course:'1003',points:430,recycled:13},
{id:'EC-11001',u:'ronald',p:'1234',name:'Ronald Carrillo',email:'ronald@demo.edu',role:'student',course:'1102',points:1250,recycled:42},
{id:'EC-11002',u:'alex',p:'1234',name:'Alex Jiménez',email:'alex@demo.edu',role:'student',course:'1101',points:980,recycled:31},
{id:'EC-11003',u:'marcela',p:'1234',name:'Marcela Ruiz',email:'marcela@demo.edu',role:'student',course:'1101',points:860,recycled:28},
{id:'EC-11004',u:'laura2',p:'1234',name:'Laura Jiménez',email:'laura2@demo.edu',role:'student',course:'1102',points:920,recycled:30}],
rules:{Plástico:10,Cartón:15,Tapas:5},recycling:[{user:'EC-00125',material:'Plástico',points:10,date:'23 Sep 2026 19:55'},{user:'EC-00126',material:'Cartón',points:15,date:'23 Sep 2026 19:50'}],rewards:[{id:1,n:'Sticker ECORECANJE',i:'🌱',c:100,s:50,desc:'Adhesivo ecológico para cuadernos, laptops y útiles escolares.',features:['Material resistente','Diseño escolar único','Edición limitada']},{id:2,n:'Dulce',i:'🍬',c:200,s:30,desc:'Recompensa divertida para celebrar logros y participación.',features:['Snack escolar','Ideal para premios rápidos','Puntos de motivación']},{id:3,n:'Cuaderno ecológico',i:'📓',c:500,s:15,desc:'Cuaderno con papel reciclado y portada ecológica.',features:['Papel reciclado','Portada verde','Buen para tareas']},{id:4,n:'Producto escolar',i:'🎒',c:800,s:10,desc:'Accesorio útil para estudiar con estilo sostenible.',features:['Útil para colegio','Excelente calidad','Premio destacado']},{id:5,n:'Premio especial',i:'🏆',c:1500,s:5,desc:'Premio premium por esfuerzo, reciclaje y liderazgo ambiental.',features:['Reconocimiento especial','Disponible por tiempo limitado','Ideal para top estudiantes']}],redemptions:[],ann:[{t:'Reto semanal de reciclaje',b:'Intentemos alcanzar 1.000 reciclajes esta semana.',d:'23 Sep 2026'}],machine:{online:true,plastic:68,carton:42,tapas:31,last:'23 Sep 2026 20:20'},challenges:[{n:'1.000 reciclajes',goal:1000,current:650,reward:'100 puntos para el curso'}]};
const db = window.db || JSON.parse(localStorage.getItem(DB) || JSON.stringify(initial));
const $=x=>document.getElementById(x), save=()=>localStorage.setItem(DB,JSON.stringify(db));
const me=()=>db.users.find(x=>x.id===db.session), esc=x=>String(x??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const initials=n=>n.split(' ').map(x=>x[0]).slice(0,2).join('').toUpperCase();
const fmt=n=>Number(n).toLocaleString('es-CO');
const appStyles = document.createElement('style');
appStyles.textContent = `
  .btn.small { padding: 8px 12px; font-size: 12px; border-radius: 10px; }
  .btn.ghost { background: transparent; border: 1px solid rgba(255,255,255,0.12); color: inherit; }
  .modal-overlay { position: fixed; inset: 0; background: rgba(3, 16, 12, 0.62); display: grid; place-items: center; padding: 20px; z-index: 50; }
  .modal-card { width: min(560px, 100%); background: #f6fbf8; color: #14392d; border-radius: 24px; padding: 22px; box-shadow: 0 30px 80px rgba(0,0,0,.35); }
  .modal-card .card-head { margin-bottom: 16px; }
  .form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
  .field label { display: block; font-size: 12px; font-weight: 800; color: #234e42; text-transform: uppercase; letter-spacing: .04em; }
  .field input, .field textarea, .field select { width: 100%; padding: 11px 12px; border-radius: 12px; border: 1px solid #d8e8e1; background: white; color: #173a31; margin-top: 6px; }
  .field textarea { min-height: 90px; resize: vertical; }
  .modal-actions { grid-column: 1 / -1; display: flex; justify-content: flex-end; gap: 10px; margin-top: 6px; }
  .reward { position: relative; overflow: hidden; border-radius: 22px; background: linear-gradient(180deg, rgba(10,46,38,0.98), rgba(7,28,24,0.98)); border: 1px solid rgba(162,255,200,0.18); }
  .reward::before { content: ''; position: absolute; right: -24px; top: -22px; width: 120px; height: 120px; border-radius: 50%; background: rgba(255,255,255,0.06); }
  .reward-badge { position: absolute; right: 12px; top: 12px; background: rgba(28,228,143,0.15); color: #baf7d6; border: 1px solid rgba(28,228,143,0.22); border-radius: 999px; padding: 5px 10px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; }
  .reward-icon { position: relative; z-index: 1; display: grid; place-items: center; height: 120px; border-radius: 18px; background: linear-gradient(135deg, rgba(29,228,143,0.2), rgba(255,255,255,0.04)); font-size: 60px; box-shadow: inset 0 0 30px rgba(255,255,255,0.04); }
  .reward .reward-description { position: relative; z-index: 1; color: #d9f7e7; margin: 0 0 8px; font-size: 13px; line-height: 1.5; }
  .reward-features { list-style: none; margin: 0 0 14px; padding: 0; display: grid; gap: 6px; position: relative; z-index: 1; }
  .reward-features li { color: #bfead6; font-size: 12px; }
  .reward-features li::before { content: '✓ '; color: #7ef5be; font-weight: 800; }
  .reward-foot { position: relative; z-index: 1; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
  .reward-detail-card { background: linear-gradient(180deg, #fbfffd, #edf9f3); border: 1px solid rgba(29,228,143,0.18); border-radius: 24px; overflow: hidden; }
  .reward-detail-header { background: linear-gradient(135deg, rgba(29,228,143,0.12), rgba(9,31,25,0.08)); padding: 22px 20px 16px; }
  .reward-detail-hero { display: flex; align-items: center; gap: 18px; }
  .reward-detail-icon { width: 86px; height: 86px; border-radius: 22px; display: grid; place-items: center; font-size: 44px; background: linear-gradient(135deg, rgba(29,228,143,0.22), rgba(255,255,255,0.3)); }
  .reward-detail-content { padding: 18px 20px 20px; }
  .reward-detail-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
  .reward-attribute { background: rgba(8,31,26,0.04); border: 1px solid rgba(14,74,59,0.08); border-radius: 14px; padding: 12px; }
  .reward-attribute strong { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #355b52; }
  .reward-attribute span { display: block; margin-top: 4px; font-size: 16px; font-weight: 800; color: #11342b; }
  @media (max-width: 600px) { .form-grid { grid-template-columns: 1fr; } .reward-detail-grid { grid-template-columns: 1fr; } }
`;
document.head.appendChild(appStyles);
// Generar datos y URL para QR (personalizado por usuario)
function qrDataObj(u){return {id:u.id,name:u.name,role:u.role,course:u.course}};
function qrDataString(u){return JSON.stringify(qrDataObj(u))}
// Usar api.qrserver.com como generador de QR (mejor compatibilidad desde file://)
function qrUrl(u,size=300){
	const s=(size||300);
	const data=encodeURIComponent(qrDataString(u));
	return `https://api.qrserver.com/v1/create-qr-code/?size=${s}x${s}&data=${data}`;
}
function toast(x){let t=$('toast');t.textContent=x;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400)}
const menus={student:[['home','🏠','Inicio'],['recycle','♻️','Reciclar'],['qr','▦','Mi QR'],['rank','🏆','Ranking'],['rewards','🎁','Premios'],['history','📋','Historial'],['ach','🏅','Logros'],['messages','💬','Mensajes'],['profile','👤','Perfil']],teacher:[['teacher','🏠','Inicio'],['students','👥','Estudiantes'],['rank','🏆','Ranking'],['stats','📊','Estadísticas'],['challenge','🎯','Retos'],['ann','📢','Comunicados'],['messages','💬','Mensajes'],['adminRewards','🎁','Premios']],admin:[['admin','🏠','Inicio'],['users','👥','Usuarios'],['courses','🎓','Cursos'],['rules','🪙','Reglas de puntos'],['machine','🤖','Máquina'],['stats','📊','Estadísticas'],['adminRewards','🎁','Premios'],['challenge','🎯','Retos'],['ann','📢','Comunicados'],['messages','💬','Mensajes'],['settings','⚙️','Configuración']]};
function login(u){db.session=u.id;save();$('login').classList.add('hidden');$('app').classList.remove('hidden');shell();go(menus[u.role][0][0])}
function shell(){let u=me();$('mini').innerHTML=`<div class="mini"><div class="avatar">${initials(u.name)}</div><strong>${esc(u.name)}</strong><small>${u.role==='student'?'Estudiante':u.role==='teacher'?'Profesor':'Administrador'} ${u.course?'· '+u.course:''}</small></div>`;$('who').textContent=u.name;$('nav').innerHTML=menus[u.role].map(x=>`<button class="nav" data-page="${x[0]}">${x[1]} ${x[2]}</button>`).join('');document.querySelectorAll('.nav').forEach(b=>b.onclick=()=>go(b.dataset.page))}
function stat(i,l,v){return `<div class="card stat"><i>${i}</i><div><strong>${v}</strong><span>${l}</span></div></div>`}
function rankRows(n=10,id=''){return [...db.users].filter(x=>x.role==='student').sort((a,b)=>b.points-a.points).slice(0,n).map((x,i)=>`<div class="rank ${x.id===id?'me':''}"><b>${i<3?['🥇','🥈','🥉'][i]:i+1}</b><div class="avatar">${initials(x.name)}</div><div class="name"><b>${esc(x.name)}</b><small>${esc(x.course)}</small></div><span class="pts">${fmt(x.points)}</span></div>`).join('')}
function go(page){let u=me(),allowed=menus[u.role].map(x=>x[0]);if(!allowed.includes(page))page=allowed[0];document.querySelectorAll('.nav').forEach(x=>x.classList.toggle('active',x.dataset.page===page));let label=menus[u.role].find(x=>x[0]===page)?.[2]||'Inicio';$('title').textContent=label;$('content').innerHTML=render(page);bind(page)}
function render(page){let u=me();switch(page){case'home':return studentHome(u);case'recycle':return recycle();case'qr':return qr(u);case'rank':return ranking(u);case'rewards':return rewards(u);case'history':return history(u);case'ach':return achievements(u);case'messages':return messagesView(u);case'profile':return profile(u);case'teacher':return teacherHome(u);case'students':return students(u);case'admin':return adminHome();case'users':return users();case'courses':return courses();case'rules':return rules();case'machine':return machine();case'stats':return stats();case'adminRewards':return adminRewards();case'challenge':return challenges(u);case'ann':return announcements(u);case'settings':return settings();}}
function studentHome(u){let arr=[...db.users].filter(x=>x.role==='student').sort((a,b)=>b.points-a.points),pos=arr.findIndex(x=>x.id===u.id)+1;return `<div class="hero"><div><small>PANEL DEL ESTUDIANTE</small><h1>Hola, ${esc(u.name.split(' ')[0])} 👋</h1><p>Recicla en la máquina, gana puntos y compite sanamente con tu colegio.</p></div><div><button data-go="recycle">♻️ Reciclar</button> <button data-go="rewards">🎁 Premios</button></div></div><div class="grid g4 section">${stat('🪙','Mis puntos',fmt(u.points))}${stat('🏆','Posición','#'+pos)}${stat('♻️','Reciclajes',u.recycled)}${stat('🌱','Nivel',level(u.points))}</div><div class="grid g2 section"><div class="card"><div class="card-head"><h3>🌱 Progreso</h3><b>${fmt(u.points)} pts</b></div><div class="progress"><span style="width:${Math.min(100,(u.points%500)/5)}%"></span></div><p class="muted">Sigue reciclando para desbloquear nuevos niveles.</p></div><div class="card"><div class="card-head"><h3>🏆 Top del colegio</h3></div>${rankRows(5,u.id)}</div></div>`}
function level(p){return p>=2000?'Embajador Ambiental':p>=1000?'Guardián Verde':p>=500?'Eco Héroe':p>=200?'Reciclador':'Semilla'}
function recycle(){return `<div class="card"><div class="card-head"><div><h3>♻️ Deposita tu reciclaje</h3><small class="muted">Simulación de la máquina ECORECANJE</small></div><span class="badge">🟢 En línea</span></div><div class="machine"><button class="slot plastic" data-m="Plástico">🥤<br>PLÁSTICO<small>Botellas · +${db.rules.Plástico} pts</small></button><button class="slot carton" data-m="Cartón">📦<br>CARTÓN<small>Cajas · +${db.rules.Cartón} pts</small></button><button class="slot tapas" data-m="Tapas">🧢<br>TAPAS<small>Tapas · +${db.rules.Tapas} pts</small></button></div><div id="result" class="section"></div></div><div class="grid g3 section">${stat('🥤','Plástico lleno',db.machine.plastic+'%')}${stat('📦','Cartón lleno',db.machine.carton+'%')}${stat('🧢','Tapas lleno',db.machine.tapas+'%')}</div>`}
function qr(u){
	const data=qrDataString(u);
	const url=qrUrl(u,320);
	return `
	<div class="grid g2">
		<div class="card" style="text-align:center">
			<h3>▦ Mi QR</h3>
			<p class="muted">Código personal de ${esc(u.name)}</p>
			<div class="qr-img-wrap" style="display:flex;flex-direction:column;align-items:center;gap:10px">
				<img id="qrImg" src="${url}" alt="QR ECORECANJE" width="220" height="220" style="background:#fff;padding:10px;border-radius:12px" />
				<b>${esc(u.id)}</b>
				<div style="display:flex;gap:10px;margin-top:8px">
					<button id="downloadQR" class="btn">Descargar QR</button>
					<button id="printQR" class="btn">Imprimir</button>
					<button id="copyQR" class="btn">Copiar datos</button>
				</div>
			</div>
			<p class="muted" style="margin-top:10px">En la versión física este código será leído por el lector de la máquina.</p>
		</div>
		<div class="card">
			<h3>¿Cómo usarlo?</h3>
			<div class="alert green">1️⃣ Acerca el QR al lector.</div>
			<div class="alert green">2️⃣ Deposita el material.</div>
			<div class="alert green">3️⃣ La máquina detecta y confirma.</div>
			<div class="alert green">4️⃣ Tus puntos se actualizan.</div>
			<hr />
			<h4>Datos embebidos</h4>
			<pre style="background:#071a13;padding:8px;border-radius:8px;color:#bfefd0">${esc(data)}</pre>
		</div>
	</div>`
}
function ranking(u){return `<div class="card"><div class="card-head"><h3>🏆 Ranking del colegio</h3><span class="muted">Actualizado en tiempo real en la versión conectada.</span></div>${rankRows(20,u.id)}</div><div class="card section"><h3>🏫 Ranking por curso</h3>${courseRank()}</div>`}
function courseRank(){let m={};db.users.filter(x=>x.role==='student').forEach(x=>m[x.course]=(m[x.course]||0)+x.points);return Object.entries(m).sort((a,b)=>b[1]-a[1]).map((x,i)=>`<div class="rank"><b>${i+1}</b><div class="name"><b>Curso ${esc(x[0])}</b></div><span class="pts">${fmt(x[1])} pts</span></div>`).join('')}
function rewards(u){return `<div class="hero"><div><small>CATÁLOGO</small><h1>Premios 🎁</h1><p>Actualmente tienes <b>${fmt(u.points)} puntos</b>.</p></div></div><div class="grid g3 section">${db.rewards.map(r=>`<div class="card reward"><div class="reward-badge">Sticker</div><div class="reward-icon">${r.i}</div><h3>${esc(r.n)}</h3><p class="reward-description">${esc(r.desc || 'Premio ecológico disponible para canjear.')}</p><ul class="reward-features">${rewardFeatures(r)}</ul><div class="reward-foot"><b class="pts">${fmt(r.c)} pts</b><button class="redeem" data-id="${r.id}" ${u.points<r.c||r.s<=0?'disabled':''}>${r.s<=0?'Agotado':u.points<r.c?'Faltan puntos':'Ver detalles'}</button></div><small class="muted">Stock: ${r.s}</small></div>`).join('')}</div>`}
function history(u){let rows=db.recycling.filter(x=>x.user===u.id),red=db.redemptions.filter(x=>x.user===u.id);return `<div class="grid g3">${stat('🪙','Puntos actuales',fmt(u.points))}${stat('♻️','Reciclajes',u.recycled)}${stat('🎁','Canjes',red.length)}</div><div class="card section"><h3>📋 Historial</h3><table><tr><th>Fecha</th><th>Material</th><th>Puntos</th></tr>${rows.map(r=>`<tr><td>${r.date}</td><td>${r.material}</td><td class="pts">+${r.points}</td></tr>`).join('')||'<tr><td colspan="3">Sin registros.</td></tr>'}</table></div><div class="card section"><h3>🎁 Mis canjes</h3><table><tr><th>Premio</th><th>Puntos</th><th>Estado</th><th>Código</th></tr>${red.map(r=>`<tr><td>${esc(r.reward)}</td><td>${r.cost}</td><td>${r.status}</td><td>${r.code}</td></tr>`).join('')||'<tr><td colspan="4">Sin canjes.</td></tr>'}</table></div>`}
function achievements(u){let a=[['🌱','Primer reciclaje',u.recycled>=1],['♻️','10 reciclajes',u.recycled>=10],['💚','Eco Héroe',u.points>=500],['🔥','30 reciclajes',u.recycled>=30],['🌎','2.000 puntos',u.points>=2000]];return `<div class="grid g3">${a.map(x=>`<div class="card" style="opacity:${x[2]?1:.45}"><div style="font-size:42px">${x[0]}</div><h3>${x[1]}</h3><span class="badge">${x[2]?'Desbloqueado':'Bloqueado'}</span></div>`).join('')}</div>`}
function profile(u){const inbox=getUserMessages(u.id);return `<div class="grid g2"><div class="card"><div class="avatar" style="width:65px;height:65px">${initials(u.name)}</div><h2>${esc(u.name)}</h2><p class="muted">${esc(u.email)}</p><div class="rank"><b>ID</b><div class="name">${u.id}</div></div><div class="rank"><b>Curso</b><div class="name">${u.course||'Administración'}</div></div></div><div class="card"><h3>⚙️ Configuración</h3><div class="alert green">🔔 Notificaciones activadas</div><button class="btn" onclick="toast('La gestión de contraseña se conectará a Firebase en la siguiente etapa.')">Cambiar contraseña</button></div></div><div class="card section"><h3>💬 Mensajes recibidos</h3>${inbox.length?inbox.map(m=>`<div class="alert green"><strong>${esc(m.title)}</strong><div>${esc(m.body)}</div><small>${new Date(m.createdAt).toLocaleString('es-CO')}</small></div>`).join(''):'<p class="muted">No tienes mensajes nuevos.</p>'}</div>`}
function teacherHome(u){let a=db.users.filter(x=>x.role==='student'&&x.course===u.course);return `<div class="hero"><div><small>PANEL DEL PROFESOR</small><h1>Curso ${u.course} 👨‍🏫</h1><p>Supervisa el progreso y motiva a tus estudiantes.</p></div></div><div class="grid g4 section">${stat('👥','Estudiantes',a.length)}${stat('♻️','Reciclajes',a.reduce((s,x)=>s+x.recycled,0))}${stat('🪙','Puntos',fmt(a.reduce((s,x)=>s+x.points,0)))}${stat('🏆','Posición',coursePos(u.course))}</div><div class="card section"><h3>🏆 Ranking del curso</h3>${a.sort((x,y)=>y.points-x.points).map((x,i)=>`<div class="rank"><b>${i+1}</b><div class="avatar">${initials(x.name)}</div><div class="name"><b>${x.name}</b><small>${x.recycled} reciclajes</small></div><span class="pts">${fmt(x.points)}</span></div>`).join('')}</div>`}
function coursePos(c){let m={};db.users.filter(x=>x.role==='student').forEach(x=>m[x.course]=(m[x.course]||0)+x.points);return '#'+(Object.entries(m).sort((a,b)=>b[1]-a[1]).findIndex(x=>x[0]===c)+1)}
function students(u){return `<div class="card"><h3>👥 Estudiantes de ${u.course}</h3><table><tr><th>Nombre</th><th>Puntos</th><th>Reciclajes</th><th>Nivel</th></tr>${db.users.filter(x=>x.role==='student'&&x.course===u.course).map(x=>`<tr><td>${x.name}</td><td class="pts">${fmt(x.points)}</td><td>${x.recycled}</td><td>${level(x.points)}</td></tr>`).join('')}</table></div>`}
function adminHome(){let s=db.users.filter(x=>x.role==='student'),t=db.users.filter(x=>x.role==='teacher'),premios=db.rewards.length,cursos=[...new Set(s.map(x=>x.course).filter(Boolean))].length;return `<div class="hero"><div><small>PANEL ADMINISTRATIVO</small><h1>Centro de control ⚙️</h1><p>Usuarios, puntos, premios, cursos y máquina en un solo lugar.</p></div><div class="hero-actions"><button data-go="users">👥 Usuarios</button><button data-go="rules">🪙 Reglas</button></div></div><div class="grid g4 section">${stat('👥','Usuarios',db.users.length)}${stat('🎓','Estudiantes',s.length)}${stat('🏫','Cursos',cursos)}${stat('🎁','Premios',premios)}</div><div class="grid g2 section"><div class="card"><h3>🚨 Estado operativo</h3><div class="alert red">Plástico: ${db.machine.plastic}% lleno.</div><div class="alert yellow">Tapas: ${db.machine.tapas}% lleno.</div><div class="alert green">Máquina conectada.</div></div><div class="card"><h3>⚡ Acciones rápidas</h3><div class="quick-actions"><button class="btn" data-go="users">Gestionar usuarios</button><button class="btn" data-go="adminRewards">Editar premios</button><button class="btn" data-go="messages">Enviar mensajes</button><button class="btn" data-go="rules">Actualizar puntos</button></div></div></div><div class="card section"><h3>🏆 Ranking general</h3>${rankRows(5)}</div>`}
function users(){return `<div class="card"><div class="card-head"><h3>👥 Usuarios</h3><button class="btn" id="newUser">+ Crear estudiante</button></div><table><tr><th>Nombre</th><th>Usuario</th><th>Rol</th><th>Curso</th><th>Puntos</th><th></th></tr>${db.users.map(x=>`<tr><td>${esc(x.name)}</td><td>${esc(x.u)}</td><td>${esc(x.role)}</td><td>${esc(x.course||'-')}</td><td>${fmt(x.points)}</td><td>${x.role==='student'?`<button class="btn" data-login="${x.id}">Entrar</button> <button class="btn" data-edit="${x.id}">Editar</button> <button class="btn" data-del="${x.id}">Eliminar</button>`: x.role==='teacher'?`<button class="btn" data-login="${x.id}">Entrar</button> <button class="btn" data-edit="${x.id}">Editar</button>`:`<button class="btn" data-login="${x.id}">Entrar</button>`}</td></tr>`).join('')}</table></div>`}
function courses(){let m={};db.users.filter(x=>x.role==='student').forEach(x=>{m[x.course]??={n:0,p:0,r:0};m[x.course].n++;m[x.course].p+=x.points;m[x.course].r+=x.recycled});return `<div class="grid g3">${Object.entries(m).map(([c,v])=>`<div class="card"><h2>🎓 ${c}</h2><div class="rank"><span>Estudiantes</span><b>${v.n}</b></div><div class="rank"><span>Puntos</span><b>${fmt(v.p)}</b></div><div class="rank"><span>Reciclajes</span><b>${v.r}</b></div></div>`).join('')}</div>`}
function rules(){return `<div class="card"><h3>🪙 Reglas de puntos</h3><div class="formgrid">${Object.entries(db.rules).map(([m,p])=>`<div class="field"><label>${m}<input type="number" data-rule="${m}" value="${p}"></label></div>`).join('')}</div><button class="btn" id="saveRules" style="margin-top:14px">Guardar</button></div>`}
function machine(){return `<div class="grid g2"><div class="card"><div class="card-head"><h3>🤖 ECORECANJE #01</h3><span class="badge">${db.machine.online?'🟢 En línea':'🔴 Fuera de línea'}</span></div><div class="rank"><span>Última actividad</span><b>${db.machine.last}</b></div><div class="rank"><span>Plástico</span><b>${db.machine.plastic}%</b></div><div class="rank"><span>Cartón</span><b>${db.machine.carton}%</b></div><div class="rank"><span>Tapas</span><b>${db.machine.tapas}%</b></div><button class="btn" id="toggleMachine">${db.machine.online?'Desconectar':'Conectar'}</button></div><div class="card"><h3>🔧 Componentes</h3><div class="alert green">Arduino UNO — activo</div><div class="alert green">Sensor — activo</div><div class="alert green">Buzzer — activo</div><div class="alert green">LCD — activo</div><div class="alert yellow">La conexión física real se integrará después.</div></div></div>`}
function stats(){let ms=['Plástico','Cartón','Tapas'],v=ms.map(m=>db.recycling.filter(r=>r.material===m).reduce((s,r)=>s+r.points,0)),mx=Math.max(...v,1);return `<div class="grid g3">${ms.map((m,i)=>stat(['🥤','📦','🧢'][i],m,fmt(v[i]))).join('')}</div><div class="card section"><h3>📊 Puntos por material</h3><div class="bars">${ms.map((m,i)=>`<div class="barwrap"><b>${v[i]}</b><div class="bar" style="height:${Math.max(8,v[i]/mx*160)}px"></div><small>${m}</small></div>`).join('')}</div></div>`}
function adminRewards(){return `<div class="card"><div class="card-head"><h3>🎁 Premios</h3><button class="btn" id="newReward">+ Nuevo</button></div><table><tr><th>Premio</th><th>Puntos</th><th>Stock</th><th></th></tr>${db.rewards.map(r=>`<tr><td>${esc(r.i)} ${esc(r.n)}</td><td>${fmt(r.c)}</td><td>${fmt(r.s)}</td><td><button class="btn" data-red="${r.id}">Editar</button> <button class="btn" data-rdel="${r.id}">Eliminar</button></td></tr>`).join('')}</table></div>`}
function challenges(u){let can=u.role!=='student';return `<div class="grid g2">${db.challenges.map((c,i)=>`<div class="card"><div class="card-head"><h3>🎯 ${c.n}</h3><span class="badge">Activo</span></div><div class="progress"><span style="width:${Math.min(100,c.current/c.goal*100)}%"></span></div><p>${c.current} / ${c.goal}</p><p class="muted">Premio: ${c.reward}</p>${can?`<button class="btn" data-advance="${i}">Simular avance</button>`:''}</div>`).join('')}${can?'<div class="card"><h3>➕ Crear reto</h3><div class="field"><label>Nombre<input id="cn"></label></div><div class="field"><label>Meta<input id="cg" type="number" value="500"></label></div><button class="btn" id="addChallenge">Crear</button></div>':''}</div>`}
function announcements(u){return `<div class="grid g2"><div>${db.ann.map(a=>`<div class="card section"><small class="muted">${a.d}</small><h3>${esc(a.t)}</h3><p>${esc(a.b)}</p></div>`).join('')}</div>${u.role==='student'?'':`<div class="card"><h3>📢 Publicar</h3><div class="field"><label>Título<input id="at"></label></div><div class="field"><label>Mensaje<textarea id="ab"></textarea></label></div><button class="btn" id="addAnn">Publicar</button></div>`}</div>`}
function settings(){return `<div class="card"><h3>⚙️ Configuración</h3><div class="rank"><span>Institución</span><b>Colegio Jackeline IED</b></div><div class="rank"><span>Modo</span><b>Demostración local</b></div><div class="rank"><span>Datos</span><b>localStorage</b></div><button class="btn" id="reset">Restaurar demo</button></div>`}
function messagesView(u){
  const isAdmin=u.role==='admin';
  const recipients = isAdmin ? db.users.filter(x=>x.role!=='admin') : db.users.filter(x=>x.role==='student' && x.course===u.course);
  const inbox=getUserMessages(u.id);
  return `<div class="grid g2">
    <div class="card">
      <h3>💬 Enviar mensaje</h3>
      <div class="field"><label>Destinatario<select id="messageTarget">${recipients.map(x=>`<option value="${x.id}">${esc(x.name)} (${x.role === 'student' ? 'Estudiante' : 'Profesor'})</option>`).join('')}</select></label></div>
      <div class="field"><label>Asunto<input id="messageTitle" value="Recordatorio"></label></div>
      <div class="field"><label>Mensaje<textarea id="messageBody" rows="5" placeholder="Escribe la información para el estudiante..."></textarea></label></div>
      <button class="btn" id="sendMessageBtn">Enviar mensaje</button>
    </div>
    <div class="card">
      <h3>📨 Bandeja</h3>
      ${inbox.length ? inbox.map(m=>`<div class="alert green"><strong>${esc(m.title)}</strong><p>${esc(m.body)}</p><small>${new Date(m.createdAt).toLocaleString('es-CO')}</small></div>`).join('') : '<p class="muted">No tienes mensajes.</p>'}
    </div>
  </div>`;
}
function bind(p){document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));document.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>recycleDo(b.dataset.m));document.querySelectorAll('.redeem').forEach(b=>b.onclick=()=>redeem(+b.dataset.id));document.querySelectorAll('[data-del]').forEach(b=>b.onclick=()=>{db.users=db.users.filter(x=>x.id!==b.dataset.del);save();go('users')});document.querySelectorAll('[data-rdel]').forEach(b=>b.onclick=()=>{db.rewards=db.rewards.filter(x=>x.id!==+b.dataset.rdel);save();go('adminRewards')});document.querySelectorAll('[data-advance]').forEach(b=>b.onclick=()=>{let c=db.challenges[+b.dataset.advance];c.current=Math.min(c.goal,c.current+50);save();go('challenge')});$('newUser')?.addEventListener('click',newUser);$('newReward')?.addEventListener('click',newReward);$('saveRules')?.addEventListener('click',saveRules);$('toggleMachine')?.addEventListener('click',()=>{db.machine.online=!db.machine.online;save();go('machine')});$('addChallenge')?.addEventListener('click',addChallenge);$('addAnn')?.addEventListener('click',addAnn);$('reset')?.addEventListener('click',()=>{if(confirm('¿Restaurar demo?')){localStorage.removeItem(DB);location.reload()}})

$('sendMessageBtn')?.addEventListener('click',()=>{const u=me();const target=$('messageTarget')?.value;const title=$('messageTitle')?.value||'Mensaje';const body=$('messageBody')?.value||'';if(!target||!body.trim()){toast('Completa el destinatario y el mensaje');return}addMessage({to:target,from:u.id,title,body});toast('Mensaje enviado');go('messages');});


document.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>editUser(b.dataset.edit));
document.querySelectorAll('[data-red]').forEach(b=>b.onclick=()=>{const reward=db.rewards.find(x=>x.id===Number(b.dataset.red)); if(reward) openRewardModal('edit', reward);});
document.querySelectorAll('[data-login]').forEach(b=>b.onclick=()=>{const id=b.dataset.login;const u=db.users.find(x=>x.id===id);if(u){login(u)}else{toast('Usuario no encontrado')}});
document.querySelectorAll('.redeem').forEach(b => b.onclick = () => openRewardDetails(Number(b.dataset.id)));

	// handlers para QR: descargar, imprimir, copiar
	// Descargar QR: intenta fetch -> blob; si falla, abre la imagen en nueva pestaña como fallback
	const dlBtn=document.getElementById('downloadQR');
	if(dlBtn){
		dlBtn.addEventListener('click',async()=>{
			const img=document.getElementById('qrImg'); if(!img) return;
			try{
				const res=await fetch(img.src);
				if(!res.ok) throw new Error('fetch error');
				const blob=await res.blob();
				const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=(me()?.id||'ecorecanje')+"_qr.png"; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),3000);
			}catch(e){
				// fallback: abrir en nueva pestaña para que el usuario pueda guardar manualmente
				window.open(img.src,'_blank');
				toast('No se pudo descargar automáticamente. Se abrió la imagen en otra pestaña.');
			}
		});
	}
	const prBtn=document.getElementById('printQR');
	if(prBtn){
		prBtn.addEventListener('click',()=>{
			const img=document.getElementById('qrImg'); if(!img) return; const w=window.open('','_blank');
			w.document.write(`<html><head><title>Imprimir QR</title></head><body style="display:flex;align-items:center;justify-content:center;flex-direction:column;padding:40px;background:#071a13;color:#eafaf0"><img src="${img.src}" style="width:320px;height:320px"><h3 style="margin-top:14px">${esc(me().name)}</h3></body></html>`);
			w.document.close(); w.focus(); // esperar para que cargue
			setTimeout(()=>{ try{ w.print(); }catch(e){ console.warn(e); } setTimeout(()=>w.close(),500); },300);
		});
	}
	const cpBtn=document.getElementById('copyQR');
	if(cpBtn){
		cpBtn.addEventListener('click',()=>{
			const txt=qrDataString(me()); if(!navigator.clipboard){toast('Tu navegador no soporta copiar.');return} navigator.clipboard.writeText(txt).then(()=>toast('Datos copiados al portapapeles')).catch(()=>toast('No se pudo copiar'))
		});
	}
}
function recycleDo(mat){let u=me();if(!db.machine.online)return toast('La máquina está desconectada.');let p=db.rules[mat];u.points+=p;u.recycled++;db.recycling.unshift({user:u.id,material:mat,points:p,date:new Date().toLocaleString('es-CO')});db.machine.last=new Date().toLocaleString('es-CO');if(mat==='Plástico')db.machine.plastic=Math.min(100,db.machine.plastic+1);if(mat==='Cartón')db.machine.carton=Math.min(100,db.machine.carton+1);if(mat==='Tapas')db.machine.tapas=Math.min(100,db.machine.tapas+1);save();$('result').innerHTML=`<div class="card green" style="text-align:center"><div style="font-size:45px">♻️</div><h2>¡Reciclaje detectado!</h2><h1>+${p} puntos</h1><p>🔊 Sonido de confirmación · 💡 LED encendido</p><b>Total: ${fmt(u.points)} puntos</b></div>`;toast(`+${p} puntos por ${mat}`)}
// emitir evento para partículas y microinteracciones
function emitRecycleEvent(){document.dispatchEvent(new CustomEvent('ecore-recycle'))}
// actualizar recycleDo para emitir evento
const _origRecycleDo=recycleDo;recycleDo=function(mat){_origRecycleDo(mat);emitRecycleEvent();}
function rewardFeatures(r){
  const list = Array.isArray(r?.features) && r.features.length ? r.features : ['Disponible para canje','Ideal para tu progreso','Puntos ecológicos'];
  return list.slice(0,3).map(item => `<li>${esc(item)}</li>`).join('');
}
function openRewardDetails(id){
  const u = me();
  const r = db.rewards.find(x => x.id === id);
  if (!r) return;
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card reward-detail-card">
      <div class="card-head">
        <h3>Detalles del premio</h3>
        <button class="btn small" data-close-modal="1">Cerrar</button>
      </div>
      <div class="reward-detail-header">
        <div class="reward-detail-hero">
          <div class="reward-detail-icon">${r.i || '🎁'}</div>
          <div>
            <span class="reward-badge" style="position:static;display:inline-flex;margin-bottom:8px;">Sticker</span>
            <h2 style="margin:0; color:#11342b;">${esc(r.n)}</h2>
            <p style="margin:6px 0 0; color:#325851;">${esc(r.desc || 'Premio ecológico disponible para tus puntos.')}</p>
          </div>
        </div>
      </div>
      <div class="reward-detail-content">
        <div class="reward-detail-grid">
          <div class="reward-attribute"><strong>Precio</strong><span>${fmt(r.c)} pts</span></div>
          <div class="reward-attribute"><strong>Stock</strong><span>${r.s}</span></div>
        </div>
        <div style="margin-top:18px;">
          <h4 style="margin:0 0 10px; color:#173d32;">Características</h4>
          <ul class="reward-features" style="margin:0;">${rewardFeatures(r)}</ul>
        </div>
        <div class="modal-actions" style="margin-top:18px;">
          <button class="btn ghost" data-close-modal="1">Cancelar</button>
          <button class="btn" data-redeem-id="${r.id}" ${u.points < r.c || r.s < 1 ? 'disabled' : ''}>${u.points < r.c ? 'Puntos insuficientes' : r.s < 1 ? 'Sin stock' : 'Canjear ahora'}</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelector('[data-redeem-id]')?.addEventListener('click', () => {
    redeem(Number(r.id));
    modal.remove();
  });
  modal.querySelectorAll('[data-close-modal]').forEach(btn => btn.onclick = () => modal.remove());
}
function redeem(id){let u=me(),r=db.rewards.find(x=>x.id===id);if(!r||r.s<1||u.points<r.c)return;u.points-=r.c;r.s--;let code='EC-'+Math.floor(10000+Math.random()*90000);db.redemptions.unshift({user:u.id,reward:r.n,cost:r.c,status:'Pendiente',code});save();go('rewards');toast('Canje creado: '+code)}
function openUserModal(mode='create', user=null){
  const isEdit = mode === 'edit' && user;
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card">
      <div class="card-head"><h3>${isEdit ? 'Editar usuario' : 'Crear estudiante'}</h3><button class="btn small" data-close-modal="1">Cerrar</button></div>
      <form id="userForm" class="form-grid">
        <div class="field"><label>Nombre<input name="name" value="${esc(isEdit ? user.name : '')}" required></label></div>
        <div class="field"><label>Usuario<input name="u" value="${esc(isEdit ? user.u : '')}" required></label></div>
        <div class="field"><label>Correo<input name="email" type="email" value="${esc(isEdit ? user.email : '')}" required></label></div>
        <div class="field"><label>Contraseña<input name="p" type="text" value="${esc(isEdit ? user.p : '1234')}" required></label></div>
        <div class="field"><label>Rol<select name="role"><option value="student" ${isEdit && user.role==='student'?'selected':''}>Estudiante</option><option value="teacher" ${isEdit && user.role==='teacher'?'selected':''}>Profesor</option><option value="admin" ${isEdit && user.role==='admin'?'selected':''}>Administrador</option></select></label></div>
        <div class="field"><label>Curso<input name="course" value="${esc(isEdit ? (user.course || '') : '1102')}"></label></div>
        <div class="field"><label>Puntos<input name="points" type="number" value="${isEdit ? user.points : 0}"></label></div>
        <div class="field"><label>Reciclajes<input name="recycled" type="number" value="${isEdit ? user.recycled : 0}"></label></div>
        <div class="modal-actions"><button type="submit" class="btn">Guardar</button><button type="button" class="btn ghost" data-close-modal="1">Cancelar</button></div>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
  const form = modal.querySelector('#userForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get('name') || '').trim(),
      u: String(fd.get('u') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      p: String(fd.get('p') || '').trim() || '1234',
      role: String(fd.get('role') || 'student').trim(),
      course: String(fd.get('course') || '').trim(),
      points: safeNumber(fd.get('points'), 0),
      recycled: safeNumber(fd.get('recycled'), 0)
    };
    if (!payload.name || !payload.u || !payload.email) { toast('Completa nombre, usuario y correo'); return; }
    if (isEdit) {
      Object.assign(user, payload);
      if (user.role !== 'student' && user.role !== 'teacher') user.course = '';
      if (user.role === 'teacher' && !user.course) user.course = '1102';
      save();
      go('users');
      toast('Usuario actualizado');
    } else {
      const newU = {
        id: 'EC-' + Date.now().toString().slice(-5),
        ...payload,
        role: payload.role === 'admin' ? 'admin' : payload.role === 'teacher' ? 'teacher' : 'student',
        course: payload.role === 'student' || payload.role === 'teacher' ? (payload.course || '1102') : ''
      };
      db.users.push(newU);
      save();
      go('users');
      toast('Creado. Contraseña inicial: ' + newU.p);
    }
    modal.remove();
  });
  modal.querySelectorAll('[data-close-modal]').forEach(btn => btn.onclick = () => modal.remove());
}
function newUser(){openUserModal('create');}
function editUser(id){const u=db.users.find(x=>x.id===id); if(!u) return; openUserModal('edit',u);}
function openRewardModal(mode='create', reward=null){
  const isEdit = mode === 'edit' && reward;
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card">
      <div class="card-head"><h3>${isEdit ? 'Editar premio' : 'Nuevo premio'}</h3><button class="btn small" data-close-modal="1">Cerrar</button></div>
      <form id="rewardForm" class="form-grid">
        <div class="field"><label>Emoji<input name="i" value="${esc(isEdit ? reward.i : '🎁')}" required></label></div>
        <div class="field"><label>Nombre<input name="n" value="${esc(isEdit ? reward.n : '')}" required></label></div>
        <div class="field"><label>Puntos<input name="c" type="number" value="${isEdit ? reward.c : 300}" required></label></div>
        <div class="field"><label>Stock<input name="s" type="number" value="${isEdit ? reward.s : 10}" required></label></div>
        <div class="modal-actions"><button type="submit" class="btn">Guardar</button><button type="button" class="btn ghost" data-close-modal="1">Cancelar</button></div>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
  const form = modal.querySelector('#rewardForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    const payload = {
      i: String(fd.get('i') || '🎁').trim() || '🎁',
      n: String(fd.get('n') || '').trim(),
      c: safeNumber(fd.get('c'), 300),
      s: safeNumber(fd.get('s'), 10)
    };
    if (!payload.n) { toast('Escribe el nombre del premio'); return; }
    if (isEdit) {
      Object.assign(reward, payload);
      save();
      go('adminRewards');
      toast('Premio actualizado');
    } else {
      db.rewards.push({ id: Date.now(), ...payload });
      save();
      go('adminRewards');
      toast('Premio creado');
    }
    modal.remove();
  });
  modal.querySelectorAll('[data-close-modal]').forEach(btn => btn.onclick = () => modal.remove());
}
function newReward(){openRewardModal('create');}
function saveRules(){document.querySelectorAll('[data-rule]').forEach(x=>db.rules[x.dataset.rule]=safeNumber(x.value,db.rules[x.dataset.rule]||0));save();toast('Reglas guardadas')}
function addChallenge(){let n=$('cn').value,g=+$('cg').value;if(!n||!g)return;db.challenges.push({n,goal:g,current:0,reward:'100 puntos para el curso'});save();go('challenge')}
function addAnn(){let t=$('at').value,b=$('ab').value;if(!t||!b)return;db.ann.unshift({t,b,d:new Date().toLocaleDateString('es-CO')});save();go('ann');toast('Comunicado publicado')}

// Login: validar inputs con trim y búsqueda flexible por alias de rol / nombre
$('loginForm').onsubmit = e => {
	e.preventDefault();
	const userInput = (($('user').value || '').trim());
	const passInput = (($('pass').value || '').trim());
	if (!userInput || !passInput) { toast('Escribe usuario y contraseña'); return }
	const norm = userInput.toLowerCase();
	const found = db.users.find(x => {
		const userNorm = String(x.u || '').toLowerCase();
		const emailNorm = String(x.email || '').toLowerCase();
		const nameNorm = String(x.name || '').toLowerCase();
		const idNorm = String(x.id || '').toLowerCase();
		if (userNorm === norm || emailNorm === norm || idNorm === norm || nameNorm === norm) return true;
		if (norm === 'profe' || norm === 'profesor' || norm === 'profesora') return x.role === 'teacher';
		if (norm === 'estudiante' || norm === 'alumno') return x.role === 'student';
		if (norm === 'admin' || norm === 'administrador') return x.role === 'admin';
		return nameNorm.includes(norm) || userNorm.includes(norm) || emailNorm.includes(norm);
	});
	if (!found) { toast('Usuario no encontrado'); return }
	if (String(found.p) !== passInput) { toast('Contraseña incorrecta'); return }
	login(found);
};

$('logout').onclick = () => { db.session = null; save(); location.reload() };
$('menu').onclick = () => document.querySelector('aside').classList.toggle('open');
if(db.session&&me()){$('login').classList.add('hidden');$('app').classList.remove('hidden');shell();go(menus[me().role][0][0])}

async function actualizarPuntosArduino() {
  const conexion = document.getElementById('conexion-arduino');
  const puntos = document.getElementById('puntos-arduino');
  const evento = document.getElementById('evento-arduino');
  const suma = document.getElementById('suma-arduino');
  if (!conexion && !puntos && !evento && !suma) return;
  try {
    const respuesta = await fetch('/api/estado', { cache: 'no-store' });
    if (!respuesta.ok) throw new Error('No se pudo leer el servidor');
    const datos = await respuesta.json();
    if (conexion) conexion.textContent = datos.conectado ? 'Conectado' : 'Desconectado';
    if (puntos) puntos.textContent = (datos.puntos ?? 0) + ' puntos';
    if (evento) evento.textContent = datos.evento || 'Esperando...';
    if (suma) suma.textContent = datos.suma ?? 0;
  } catch (error) {
    if (conexion) conexion.textContent = 'Esperando conexión';
    if (evento) evento.textContent = 'Esperando...';
    if (puntos) puntos.textContent = '0 puntos';
    if (suma) suma.textContent = '0';
  }
}

if (document.getElementById('conexion-arduino') || document.getElementById('puntos-arduino') || document.getElementById('evento-arduino') || document.getElementById('suma-arduino')) {
  actualizarPuntosArduino();
  setInterval(actualizarPuntosArduino, 500);
}
