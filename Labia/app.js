const phrases = [
  { en: { quote: "Work to become, not to acquire.", author: "Elbert Hubbard" }, es: { quote: "Trabajá para ser, no para adquirir.", author: "Elbert Hubbard" } },
  { en: { quote: "You can quit your job, but you can’t quit your calling.", author: "Lissa Rankin" }, es: { quote: "Podés renunciar a tu trabajo, pero no a tu vocación.", author: "Lissa Rankin" } },
  { en: { quote: "Don’t confuse having a career with having a life.", author: "Hillary Clinton" }, es: { quote: "No confundas tener una carrera con tener una vida.", author: "Hillary Clinton" } },
  { en: { quote: "Build your own dreams or someone else will hire you to build theirs.", author: "Farrah Gray" }, es: { quote: "Armá tus sueños o te van a contratar para armar los de otro.", author: "Farrah Gray" } },
  { en: { quote: "Pleasure in the job puts perfection in the work.", author: "Aristotle" }, es: { quote: "El placer en el trabajo perfecciona la obra.", author: "Aristóteles" } },
  { en: { quote: "A career is a series of ups and downs, of comebacks.", author: "Steve Guttenberg" }, es: { quote: "Una carrera es una seguidilla de subidas y bajadas.", author: "Steve Guttenberg" } },
  { en: { quote: "A career is born in public – talent in privacy.", author: "Marilyn Monroe" }, es: { quote: "Una carrera nace en público; el talento, por acá, en privado.", author: "Marilyn Monroe" } },
  { en: { quote: "The best way to predict the future is to create it.", author: "Abraham Lincoln" }, es: { quote: "La mejor forma de predecir el futuro es crearlo.", author: "Abraham Lincoln" } },
  { en: { quote: "You can’t build a reputation on what you’re going to do.", author: "Confucius" }, es: { quote: "No podés construir una reputación con lo que vas a hacer.", author: "Confucio" } },
  { en: { quote: "Be so good they can’t ignore you.", author: "Steve Martin" }, es: { quote: "Sé tan bueno que no te puedan ignorar.", author: "Steve Martin" } },
  { en: { quote: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" }, es: { quote: "La duda mata más sueños que el fracaso.", author: "Suzy Kassem" } },
  { en: { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" }, es: { quote: "Perdés el 100% de los tiros que no metés.", author: "Wayne Gretzky" } },
  { en: { quote: "No man ever listened himself out of a job.", author: "Calvin Coolidge" }, es: { quote: "Nadie se ha escuchado a sí mismo y perdido el trabajo.", author: "Calvin Coolidge" } },
  { en: { quote: "Take your job seriously, but don’t take yourself too seriously.", author: "Alex Trebek" }, es: { quote: "Tomá tu trabajo en serio, pero no a vos mismo.", author: "Alex Trebek" } },
  { en: { quote: "If opportunity doesn’t knock, build a door.", author: "Milton Berle" }, es: { quote: "Si la oportunidad no golpea, construí una puerta.", author: "Milton Berle" } },
  { en: { quote: "Energy and persistence conquer all things.", author: "Benjamin Franklin" }, es: { quote: "La energía y la persistencia conquistan todo.", author: "Benjamin Franklin" } },
  { en: { quote: "Repetition doesn’t create memories. New experiences do.", author: "Brian Chesky" }, es: { quote: "La repetición no crea recuerdos. Las experiencias nuevas sí.", author: "Brian Chesky" } },
  { en: { quote: "The sky is the limit. You never have the same experience twice.", author: "Frank McCourt" }, es: { quote: "El cielo es el límite. Nunca vivís lo mismo dos veces.", author: "Frank McCourt" } },
  { en: { quote: "All adventures, especially into new territory, are scary.", author: "Sally Ride" }, es: { quote: "Todas las aventuras, sobre todo las nuevas, dan miedo.", author: "Sally Ride" } },
  { en: { quote: "When one door closes, another opens.", author: "Alexander Graham Bell" }, es: { quote: "Cuando una puerta se cierra, otra se abre.", author: "Alexander Graham Bell" } },
  { en: { quote: "Food, love, career, and mothers, the four major guilt groups.", author: "Cathy Guisewite" }, es: { quote: "Comida, amor, carrera y mamás, los cuatro grandes grupos de culpa.", author: "Cathy Guisewite" } },
  { en: { quote: "The best way to enjoy your job is to imagine yourself without one.", author: "Oscar Wilde" }, es: { quote: "La mejor forma de disfrutar tu trabajo es imaginarte sin él.", author: "Oscar Wilde" } },
  { en: { quote: "Be like a postage stamp. Stick to one thing until you get there.", author: "Josh Billings" }, es: { quote: "Sé como una estampilla. Pegate a algo hasta que llegues.", author: "Josh Billings" } },
  { en: { quote: "The harder I work, the luckier I get.", author: "Samuel Goldwyn" }, es: { quote: "Cuanto más trabajo, más suerte tengo.", author: "Samuel Goldwyn" } },
  { en: { quote: "When your work speaks for itself, don’t interrupt.", author: "Henry J. Kaiser" }, es: { quote: "Cuando tu trabajo hable por sí mismo, no lo interrumpas.", author: "Henry J. Kaiser" } },
  { en: { quote: "Change is never easy, but always possible.", author: "Barack Obama" }, es: { quote: "El cambio nunca es fácil, pero siempre es posible.", author: "Barack Obama" } },
  { en: { quote: "Change before you have to.", author: "Jack Welch" }, es: { quote: "Cambiá antes de que tengas que hacerlo.", author: "Jack Welch" } },
  { en: { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" }, es: { quote: "La innovación distingue a un líder de un seguidor.", author: "Steve Jobs" } },
  { en: { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" }, es: { quote: "En el medio de la dificultad está la oportunidad.", author: "Albert Einstein" } },
  { en: { quote: "Change is the end result of all true learning.", author: "Leo Buscaglia" }, es: { quote: "El cambio es el resultado final de todo lo que aprendemos.", author: "Leo Buscaglia" } },
  { en: { quote: "Growth and comfort do not coexist.", author: "Ginni Rometty" }, es: { quote: "Crecimiento y comodidad no van de la mano.", author: "Ginni Rometty" } },
  { en: { quote: "I never dreamt of success. I worked for it.", author: "Estée Lauder" }, es: { quote: "Nunca soñé con el éxito. Trabajé para él.", author: "Estée Lauder" } },
  { en: { quote: "Talent is nothing without persistence.", author: "Dean Crawford" }, es: { quote: "El talento no es nada sin persistencia.", author: "Dean Crawford" } },
  { en: { quote: "It does not matter how slowly you go so long as you do not stop.", author: "Confucius" }, es: { quote: "No importa lo lento que vayas, siempre que no pares.", author: "Confucio" } },
  { en: { quote: "If you get tired, learn to rest, not to quit.", author: "Banksy" }, es: { quote: "Si te cansás, aprendé a descansar, no a renunciar.", author: "Banksy" } },
  { en: { quote: "Motivation will almost always beat mere talent.", author: "Norman Ralph Augustine" }, es: { quote: "La motivación casi siempre le gana al mero talento.", author: "Norman Ralph Augustine" } },
  { en: { quote: "Always do your best. What you plant now, you will harvest later.", author: "Og Mandino" }, es: { quote: "Hacé siempre lo mejor. Lo que sembrás hoy, cosechás mañana.", author: "Og Mandino" } },
  { en: { quote: "Without hustle, talent will only carry you so far.", author: "Gary Vaynerchuk" }, es: { quote: "Sin esfuerzo, el talento solo te lleva hasta ahí.", author: "Gary Vaynerchuk" } },
  { en: { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" }, es: { quote: "Empezá donde estás. Usá lo que tenés. Hacé lo que puedas.", author: "Arthur Ashe" } },
  { en: { quote: "Discipline is choosing between what you want now and what you want most.", author: "Augusta F. Kantra" }, es: { quote: "La disciplina es elegir entre lo que querés ahora y lo que más querés.", author: "Augusta F. Kantra" } },
  { en: { quote: "Plans are only good intentions unless they immediately degenerate into hard work.", author: "Peter Drucker" }, es: { quote: "Los planes son buenas intenciones hasta que los trabajás.", author: "Peter Drucker" } },
  { en: { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" }, es: { quote: "La forma de empezar es dejar de hablar y empezar a hacer.", author: "Walt Disney" } },
  { en: { quote: "Do not whine. Do not complain. Work harder.", author: "Joan Didion" }, es: { quote: "No te quejes. No te lamentes. Trabajá más duro.", author: "Joan Didion" } },
  { en: { quote: "The future depends on what you do today.", author: "Mahatma Gandhi" }, es: { quote: "El futuro depende de lo que hagas hoy.", author: "Mahatma Gandhi" } },
  { en: { quote: "Work harder than you think you did yesterday.", author: "Alex Elle" }, es: { quote: "Trabajá más duro de lo que crees que hiciste ayer.", author: "Alex Elle" } },
  { en: { quote: "Nothing ever comes to one, that is worth having, except as a result of hard work.", author: "Booker T. Washington" }, es: { quote: "Nada de valor se consigue sin trabajo duro.", author: "Booker T. Washington" } },
  { en: { quote: "If you work really hard, and you're kind, amazing things will happen.", author: "Conan O'Brien" }, es: { quote: "Si trabajás muy duro y sos amable, cosas increíbles pasan.", author: "Conan O'Brien" } },
  { en: { quote: "The only thing that overcomes hard luck is hard work.", author: "Harry Golden" }, es: { quote: "La única cosa que supera la mala suerte es el trabajo duro.", author: "Harry Golden" } },
  { en: { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" }, es: { quote: "La única forma de hacer un gran trabajo es amar lo que hacés.", author: "Steve Jobs" } },
  { en: { quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" }, es: { quote: "Creé que podés y ya estás a mitad de camino.", author: "Theodore Roosevelt" } },
  { en: { quote: "Impossible is just an opinion.", author: "Paulo Coelho" }, es: { quote: "Imposible es solo una opinión.", author: "Paulo Coelho" } },
  { en: { quote: "The secret to getting ahead is getting started.", author: "Mark Twain" }, es: { quote: "El secreto para salir adelante es empezar.", author: "Mark Twain" } },
  { en: { quote: "Alone we can do so little; together we can do so much.", author: "Helen Keller" }, es: { quote: "Solos podemos hacer tan poco; juntos tanto.", author: "Helen Keller" } },
  { en: { quote: "The strength of the team is each member. The strength of each member is the team.", author: "Phil Jackson" }, es: { quote: "La fuerza del equipo es cada miembro. La fuerza de cada miembro es el equipo.", author: "Phil Jackson" } },
  { en: { quote: "The whole is greater than the sum of its parts.", author: "Aristotle" }, es: { quote: "El todo es más grande que la suma de sus partes.", author: "Aristóteles" } },
  { en: { quote: "Creativity is intelligence having fun.", author: "Albert Einstein" }, es: { quote: "La creatividad es la inteligencia divirtiéndose.", author: "Albert Einstein" } },
  { en: { quote: "Creativity is just connecting things.", author: "Steve Jobs" }, es: { quote: "La creatividad es solo conectar cosas.", author: "Steve Jobs" } },
  { en: { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" }, es: { quote: "No importa lo lento que vayas, siempre que no pares.", author: "Confucio" } },
  { en: { quote: "Fall seven times, stand up eight.", author: "Japanese Proverb" }, es: { quote: "Caé siete veces, levantate ocho.", author: "Proverbio Japonés" } },
  { en: { quote: "Failure is the opportunity to begin again more intelligently.", author: "Henry Ford" }, es: { quote: "El fracaso es la oportunidad de empezar de nuevo mejor.", author: "Henry Ford" } },
  { en: { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" }, es: { quote: "La mejor forma de predecir el futuro es crearlo.", author: "Peter Drucker" } },
  { en: { quote: "The difference between ordinary and extraordinary is that little extra.", author: "Jimmy Johnson" }, es: { quote: "La diferencia entre lo común y lo extraordinario es ese plus.", author: "Jimmy Johnson" } },
  { en: { quote: "Apparently I lack some particular perversion which today's employer is seeking.", author: "John Kennedy Toole" }, es: { quote: "Al parecer, me falta alguna perversión que buscan los empleadores.", author: "John Kennedy Toole" } },
  { en: { quote: "I like to reinvent myself — it’s part of my job.", author: "Karl Lagerfeld" }, es: { quote: "Me gusta reinventarme; es parte de mi trabajo.", author: "Karl Lagerfeld" } },
  { en: { quote: "Find a job you enjoy doing, and you will never have to work a day in your life.", author: "Mark Twain" }, es: { quote: "Encontrá un trabajo que disfrutes, y nunca vas a trabajar un día.", author: "Mark Twain" } }
];

// Idioma inicial
let lang = localStorage.getItem('lang') || 'es';
const langToggleBtn = document.getElementById('lang-toggle-btn');
let currentPhraseIdx = null;

function updateLangToggleBtnUI() {
  langToggleBtn.textContent = lang.toUpperCase();
}

langToggleBtn.addEventListener('click', () => {
  lang = lang === 'en' ? 'es' : 'en';
  updateLangToggleBtnUI();
  localStorage.setItem('lang', lang);
  showCurrentPhrase();
});

document.addEventListener('DOMContentLoaded', () => {
  updateLangToggleBtnUI();
  showRandomPhrase();
});

// Mostrar la frase actual en el idioma seleccionado
function showCurrentPhrase() {
  if (phrases.length === 0 || currentPhraseIdx === null) return;

  // 1. Remove animation classes to allow re-triggering
  phraseEl.classList.remove('animate-fade-blur');
  authorEl.classList.remove('animate-fade-blur');

  // 2. Force a DOM reflow to ensure the class removal is processed
  void phraseEl.offsetWidth;
  void authorEl.offsetWidth;

  // 3. Update content
  let { quote, author } = phrases[currentPhraseIdx][lang];
  const kw = keywords[lang];
  // Resalta solo la palabra clave, deja el signo de puntuación fuera del span
  const regex = new RegExp(`\\b(${kw.join('|')})\\b([.,;:!?]?)`, 'gi');
  quote = quote.replace(regex, '<span class="font-bold">$1</span>$2');

  phraseEl.innerHTML = quote;
  authorEl.textContent = author || '';

  // 4. Add animation classes back to trigger the effect
  phraseEl.classList.add('animate-fade-blur');
  authorEl.classList.add('animate-fade-blur');
}


// Palabras clave para resaltar
const keywords = {
  en: [
    'ability','achieve','acquire','action','adventure','ahead','alone','amazing','author','beauty','become','believe','best','big','build','career','challenge','change','choice','comfort','complain','connecting','courage','create','create it','creativity','day','decide','determination','difference','discipline','do','don\'t stop','door','doubters','dream','dreams','earn','effort','eight','employer','energy','enjoy','enthusiasm','excellence','experience','extra','extraordinary','failure','fall','focus','food','form','future','goal','good','great','grow','growth','happiness','hard','harder','harvest','hustle','ignore','innovate','innovation','inspire','intelligence','job','journey','kind','leader','learn','learning','life','limit','listen','luck','make','member','mindset','mistakes','money','motivate','motivation','much','never','obstacles','opinion','opportunity','ordinary','pairs','passion','patience','people','perseverance','persistence','perversion','plans','pleasure','potential','predict','private','public','purpose','pursue','reinvent','resilience','rest','result','results','risk','satisfaction','secret','see','seven','slow','speak','start','started','stop','strength','strive','success','sum','talent','team','teamwork','teach','thrive','today','together','tough','transform','unique','vision','we learn','win','wisdom','wonder','work'
  ],
  es: [
    'abraham','acción','adelante','adquirir','ahí','alguien','alcanzar','amar','amable','amor','aprender','aprendemos','aprendizaje','armá','aventura','aventuras','belleza','buen','buenas','bueno','buscan','cambiar','cambiá','cambio','camino','cansás','carrera','cerca','cerrar','chances','cielo','comodidad','común','conectar','conseguir','construir','cosas','crea','crear','crearlo','creatividad','crecer','crecimiento','creer','cuidar','culminar','cumplir','decisión','dedicar','dejar','demasiado','depende','derecho','desafío','descansar','desear','determinación','día','diferencia','difícil','dinero','disfrutá','divertirse','duda','duro','éxito','elección','empezá','empezar','empleador','encontrá','energía','enfoque','enseñar','entusiasmo','equipo','error','esfuerzo','fácil','falta','felicidad','feliz','final','forma','fracaso','frustración','fruto','fuerza','futuro','gana','ganar','ganás','grande','hacés','hacé','hacer','habilidad','hoy','ignorar','imposible','innovación','innovar','inspirar','inteligencia','juntos','largo','lección','líder','lograr','logro','lucha','luchar','lugar','luz','mayor','mejor','mentalidad','meta','miembro','motivación','motivar','mundo','nuevo','no pares','nunca','objetivo','ocho','oportunidad','optimismo','paciencia','pares','parar','pasión','perseverancia','persistencia','persistir','perversión','placer','planes','plazo','plus','potencial','predecir','privado','propósito','prosperar','puerta','quienes','reto','riesgo','saber','sabiduría','satisfacción','secreto','seguir','sentido','ser','siete','sueños','talento','trabajá','trabajás','trabajo','transformar','único','valor','ver','viaje','vida','visión','vocación','éxito'
  ]
};

const phraseEl = document.getElementById('main-phrase');
const authorEl = document.getElementById('author');
const nextBtn = document.getElementById('next-btn');
const darkToggle = document.getElementById('dark-toggle');
const toggleBall = document.getElementById('toggle-ball');

function showRandomPhrase() {
  if (phrases.length === 0) return;
  const idx = Math.floor(Math.random() * phrases.length);
  currentPhraseIdx = idx;
  showCurrentPhrase();
}

nextBtn.addEventListener('click', showRandomPhrase);

// Accesibilidad: permitir Enter/Espacio en el botón
nextBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    showRandomPhrase();
  }
});

// Modo oscuro/claro
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Mover la bolita
  if (document.body.classList.contains('dark')) {
    toggleBall.classList.add('translate-x-4');
    localStorage.setItem('theme', 'dark');
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
  } else {
    toggleBall.classList.remove('translate-x-4');
    localStorage.setItem('theme', 'light');
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';
  }
});

// Mantener preferencia de tema
document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark');
    toggleBall.classList.add('translate-x-4');
  } else {
    document.body.classList.remove('dark');
    toggleBall.classList.remove('translate-x-4');
  }
});

