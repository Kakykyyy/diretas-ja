"use strict";
const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => [...document.querySelectorAll(selector)];
// Fontes históricas e conteúdo da apresentação
const camara =
  "https://www2.camara.leg.br/atividade-legislativa/plenario/discursos/escrevendohistoria/diretas-ja";
const senado =
  "https://www12.senado.leg.br/radio/1/conexao-senado/2024/04/25/marcelo-castro-comenta-o-movimento-diretas-ja-e-a-derrota-da-emenda-dante-de-oliveira";
const contagem =
  "https://www.camara.leg.br/noticias/402233-emenda-dante-de-oliveira-mobilizou-a-politica-diz-presidente-da-camara";
const ausencia =
  "https://www2.camara.leg.br/comunicacao/assessoria-de-imprensa/releases/06-05-2014-sessao-solene-celebra-amanha-30-anos-do-movimento-das-diretas-ja";
const portraits = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a0/Senador_Tancredo_Neves_e_deputado_Ulysses_Guimar%C3%A3es_nas_Diretas_J%C3%A1_%284977565324%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a0/Senador_Tancredo_Neves_e_deputado_Ulysses_Guimar%C3%A3es_nas_Diretas_J%C3%A1_%284977565324%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/f/f4/Lula_-_foto_oficial_-_05_jan_2007.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/34/Leonel_Brizola.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/e/ef/Francomontoro.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/2/20/131883.DantedeOlivera.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/90/Faf%C3%A1_de_Bel%C3%A9m_2022.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/1/1a/Diretas_J%C3%A1.jpg",
];
const archive = (url) =>
  "https://commons.wikimedia.org/wiki/File:" + url.split("/").pop();
const photos = [
  {
    place: "Praça da Sé · São Paulo",
    date: "25 JAN 1984",
    url: "https://www.cntrv.org.br/system/uploads/ck/images/migracao/diretas.jpg",
    credit: "Fernando Santos · Folhapress / UOL",
    link: "https://noticias.uol.com.br/album/2014/01/25/ha-30-anos-comicio-das-diretas-ja-com-lula-e-irene-ravache-reuniu-300-mil-na-se.htm",
    source:
      "https://www.cntrv.org.br/noticias/historia-30-anos-do-comicio-diretas-ja-na-se-0405/",
    size: 300000,
    estimate: "CNTRV",
    description:
      "No aniversário de São Paulo, a praça diante da catedral se encheu de manifestantes. O comício deu visibilidade nacional à campanha.",
  },
  {
    place: "Candelária · Rio de Janeiro",
    date: "10 ABR 1984",
    url: "https://f.i.uol.com.br/folha/poder/images/1615521.jpeg",
    credit: "Almir Veiga · Agência JB / acervo PUC-Rio",
    link: "https://puc-riodigital.com.puc-rio.br/media/Com%C3%ADcio%20Candel%C3%A1ria%20-%20Ag%C3%AAncia%20JB%20-%20Almir%20Veiga%2C%20livro%20-%20Grandes%20Manifesta%C3%A7%C3%B5es%20Pol%C3%ADticas%20no%20RJ.jpg",
    size: 1000000,
    estimate: "Câmara dos Deputados",
    source: camara,
    description:
      "A região da Igreja da Candelária recebeu uma das maiores concentrações da campanha, a quinze dias da votação.",
  },
  {
    place: "Vale do Anhangabaú · São Paulo",
    date: "16 ABR 1984",
    url: "https://f.i.uol.com.br/folha/especial/images/15007490.jpeg",
    credit: "Acervo Folha",
    link: "https://m.folha.uol.com.br/poder/2017/05/1885116-diretas-ja-sim-mas-tambem-com-um-pacto.shtml",
    size: 1700000,
    estimate: "Câmara dos Deputados",
    source: camara,
    description:
      "A multidão ocupou o centro de São Paulo nove dias antes da votação. A Câmara estima que foi o maior comício da campanha.",
  },
  {
    place: "Congresso Nacional · Brasília",
    date: "CAMPANHA PELAS DIRETAS",
    url: portraits[7],
    credit: "Arquivo da Agência Brasil · CC BY 3.0 BR",
    link: archive(portraits[7]),
    description:
      "Manifestantes ocuparam a área diante do Congresso Nacional para pedir o restabelecimento do voto direto.",
  },
];
const events = [
  [
    "1964",
    "Início da ditadura militar",
    "O golpe depôs João Goulart e iniciou um regime militar que durou até 1985.",
  ],
  [
    "1979",
    "Lei da Anistia",
    "A medida permitiu a volta de brasileiros exilados e integrou o processo gradual de abertura política.",
  ],
  [
    "1983",
    "A campanha ganha forma",
    "Em março, Dante de Oliveira apresentou a proposta de eleições diretas. A mobilização chegou às ruas em cidades como Abreu e Lima, em Pernambuco.",
  ],
  [
    "25 jan 1984",
    "A Praça da Sé fica lotada",
    "No aniversário de São Paulo, o comício da Sé ajudou a dar dimensão nacional à campanha.",
    0,
  ],
  [
    "10 abr 1984",
    "Comício da Candelária",
    "O centro do Rio de Janeiro recebeu uma multidão em defesa do voto direto.",
    1,
  ],
  [
    "16 abr 1984",
    "O Vale do Anhangabaú",
    "São Paulo recebeu o maior comício da campanha, segundo as estimativas reunidas pela Câmara.",
    2,
  ],
  [
    "25 abr 1984",
    "A votação no Congresso",
    "Os 298 votos favoráveis ficaram 22 abaixo do necessário. A PEC foi rejeitada na Câmara.",
    3,
  ],
  [
    "1985",
    "A transição para um governo civil",
    "O Colégio Eleitoral escolheu Tancredo Neves. Hospitalizado antes da posse, ele morreu em abril. O vice José Sarney assumiu interinamente em março e tornou-se presidente após a morte de Tancredo.",
  ],
  [
    "1989",
    "Volta do voto direto",
    "O Brasil realizou a primeira eleição presidencial direta desde 1960.",
  ],
];
const people = [
  [
    "Ulysses Guimarães",
    "Liderança da oposição",
    "Presidente do PMDB, participou dos comícios e depois presidiu a Assembleia Nacional Constituinte.",
    "Acervo Senado Federal",
  ],
  [
    "Tancredo Neves",
    "Articulador da transição",
    "Governador de Minas Gerais durante a campanha, foi eleito presidente pelo Colégio Eleitoral em 1985.",
    "Acervo Senado Federal",
  ],
  [
    "Luiz Inácio Lula da Silva",
    "Liderança sindical e política",
    "Ajudou a mobilizar trabalhadores e participou dos comícios como liderança do Partido dos Trabalhadores.",
    "Fotografia oficial de 2007",
  ],
  [
    "Leonel Brizola",
    "Governador do Rio de Janeiro",
    "Apoiou a campanha e participou do comício da Candelária na capital fluminense.",
    "Wikimedia Commons",
  ],
  [
    "Franco Montoro",
    "Governador de São Paulo",
    "Apoiou a organização dos grandes comícios paulistas, incluindo o da Praça da Sé.",
    "Wikimedia Commons",
  ],
  [
    "Dante de Oliveira",
    "Autor da PEC nº 5/1983",
    "Deputado federal por Mato Grosso, apresentou a proposta que inspirou a campanha.",
    "Wikimedia Commons",
  ],
  [
    "Fafá de Belém",
    "Voz da campanha",
    "Cantou em manifestações e se tornou uma das figuras culturais mais associadas ao movimento.",
    "Retrato de 2022 · Wikimedia Commons",
  ],
];
// Perguntas, alternativas, índice da resposta correta e explicação
const questions = [
  [
    "Em quais anos o movimento ganhou força?",
    ["1964 e 1965", "1983 e 1984", "1989 e 1990"],
    1,
    "A PEC foi apresentada em 1983 e os maiores comícios aconteceram em 1984.",
  ],
  [
    "Qual era a principal reivindicação?",
    [
      "Aumento dos salários",
      "Eleições diretas para presidente",
      "Criação de um novo partido",
    ],
    1,
    "Os manifestantes queriam escolher diretamente o presidente da República.",
  ],
  [
    "Quem apresentou a proposta de emenda?",
    ["Dante de Oliveira", "Tancredo Neves", "Ulysses Guimarães"],
    0,
    "Dante de Oliveira, deputado por Mato Grosso, apresentou a PEC nº 5/1983.",
  ],
  [
    "A Emenda Dante de Oliveira foi aprovada?",
    ["Sim", "Não"],
    1,
    "Foram 298 votos favoráveis, 22 a menos do que o mínimo de 320.",
  ],
  [
    "Quando ocorreu a primeira eleição presidencial direta após a ditadura?",
    ["1985", "1988", "1989"],
    2,
    "A eleição de 1985 ocorreu por meio do Colégio Eleitoral. O voto direto voltou em 1989.",
  ],
];
questions.push(
  ...[
    [
      "Em que ano começou a ditadura militar?",
      ["1964", "1979", "1985"],
      0,
      "O golpe de 1964 deu início à ditadura militar, que durou até 1985.",
    ],
    [
      "Qual praça recebeu o comício de 25 de janeiro de 1984?",
      ["Praça da Sé", "Praça dos Três Poderes", "Praça da Liberdade"],
      0,
      "O comício ocorreu na Praça da Sé, no aniversário de São Paulo.",
    ],
    [
      "Quantos votos favoráveis eram necessários para aprovar a emenda?",
      ["298", "320", "365"],
      1,
      "Eram necessários 320 votos. A proposta recebeu 298.",
    ],
    [
      "Em qual cidade aconteceu o comício da Candelária?",
      ["Brasília", "São Paulo", "Rio de Janeiro"],
      2,
      "O comício da Candelária aconteceu no Rio de Janeiro, em 10 de abril de 1984.",
    ],
    [
      "Como Tancredo Neves foi eleito presidente em 1985?",
      [
        "Por voto direto da população",
        "Pelo Colégio Eleitoral",
        "Por indicação dos governadores",
      ],
      1,
      "Tancredo foi escolhido indiretamente pelo Colégio Eleitoral.",
    ],
  ],
);
const localImages = {
  "https://upload.wikimedia.org/wikipedia/commons/a/a0/Senador_Tancredo_Neves_e_deputado_Ulysses_Guimar%C3%A3es_nas_Diretas_J%C3%A1_%284977565324%29.jpg":
    "assets/photo-0.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/f/f4/Lula_-_foto_oficial_-_05_jan_2007.jpg":
    "assets/photo-1.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/34/Leonel_Brizola.jpg":
    "assets/photo-2.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/e/ef/Francomontoro.JPG":
    "assets/photo-3.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/2/20/131883.DantedeOlivera.jpg":
    "assets/photo-4.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/90/Faf%C3%A1_de_Bel%C3%A9m_2022.JPG":
    "assets/photo-5.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/1a/Diretas_J%C3%A1.jpg":
    "assets/photo-6.jpg",
  "https://f.i.uol.com.br/folha/especial/images/15007490.jpeg":
    "assets/photo-9.jpg",
  "https://www.cntrv.org.br/system/uploads/ck/images/migracao/diretas.jpg":
    "assets/se.jpg",
  "https://f.i.uol.com.br/folha/poder/images/1615521.jpeg":
    "assets/candelaria.jpg",
};
// Elementos compartilhados e fotografias ampliadas
const image = (url, alt, lazy = true) =>
  '<img src="' +
  (localImages[url] || url) +
  '" alt="' +
  alt +
  '"' +
  (lazy ? ' loading="lazy"' : "") +
  ">";
const link = (url, label) => '<a href="' + url + '">' + label + " ↗</a>";
const photoDialog = select("#photo");
function openPhoto(photo) {
  select("#photo-content").innerHTML =
    image(photo.url, "Manifestação pelas Diretas Já em " + photo.place, false) +
    "<h3>" +
    photo.place +
    "</h3><p>" +
    photo.description +
    "</p><small>" +
    photo.date +
    " · " +
    link(photo.link, photo.credit) +
    "</small>";
  photoDialog.showModal();
}
select(".close").onclick = () => photoDialog.close();
photoDialog.onclick = (event) => {
  if (event.target === photoDialog) photoDialog.close();
};

// Linha do tempo interativa
function showEvent(index) {
  const [date, title, detail, photoIndex] = events[index];
  const photo = photos[photoIndex];
  selectAll("#dates button").forEach((button, i) =>
    button.setAttribute("aria-pressed", i === index),
  );
  select("#event").innerHTML =
    '<span class="caption">' +
    date +
    "</span><h3>" +
    title +
    "</h3><p>" +
    detail +
    "</p>" +
    (photo
      ? image(photo.url, "Registro das Diretas Já em " + photo.place) +
        "<small>" +
        link(photo.link, photo.credit) +
        "</small>"
      : "");
}
events.forEach(([date], index) => {
  const button = document.createElement("button");
  button.textContent = date;
  button.onclick = () => showEvent(index);
  select("#dates").append(button);
});
showEvent(0);
// Cartões dos personagens e galeria de manifestações
people.forEach(([name, role, detail, credit], index) => {
  select("#people").insertAdjacentHTML(
    "beforeend",
    '<details class="person"><summary>' +
      image(
        portraits[index],
        index < 2 ? "Tancredo Neves e Ulysses Guimarães na campanha" : name,
      ) +
      "<strong>" +
      name +
      "</strong><br><small>" +
      role +
      "</small></summary><p>" +
      detail +
      "</p><small>" +
      link(archive(portraits[index]), credit + " · ficha da imagem") +
      "</small></details>",
  );
});
photos.forEach((photo) => {
  const figure = document.createElement("figure");
  figure.className = "gallery-card";
  figure.innerHTML =
    '<button aria-label="Ampliar fotografia de ' +
    photo.place +
    '">' +
    image(photo.url, "Manifestantes em " + photo.place) +
    '<b class="zoom" aria-hidden="true">＋</b></button><figcaption><div class="caption">' +
    photo.date +
    "</div><strong>" +
    photo.place +
    "</strong>" +
    (photo.size
      ? '<div class="estimate" data-count="' +
        photo.size +
        '">' +
        photo.size.toLocaleString("pt-BR") +
        "</div><small>Estimativa histórica · " +
        link(photo.source || photo.link, photo.estimate) +
        "</small>"
      : "") +
    "<br><small>" +
    link(photo.link, photo.credit) +
    "</small></figcaption>";
  figure.querySelector("button").onclick = () => openPhoto(photo);
  select("#gallery").append(figure);
});
// Detalhes da votação da emenda
const votes = [
  [
    "298 a favor",
    "A maioria dos votantes apoiou a proposta. Faltaram 22 votos para atingir o mínimo exigido.",
  ],
  ["65 contra", "Sessenta e cinco deputados votaram contra a proposta."],
  ["3 abstenções", "Três deputados registraram abstenção."],
  [
    "Ausências",
    "Uma notícia da Câmara registra 112 ausentes. Um balanço da instituição aponta 113, dos quais 112 eram do PDS. " +
      link(ausencia, "Consultar o balanço"),
  ],
];
votes.forEach(([label], index) => {
  const button = document.createElement("button");
  button.textContent = label;
  button.onclick = () => {
    selectAll("#votes button").forEach((item, i) =>
      item.setAttribute("aria-pressed", i === index),
    );
    select("#vote-detail").innerHTML = votes[index][1];
  };
  select("#votes").append(button);
});
select("#votes button").click();

// Quiz: progresso, correção das respostas e resultado
let questionIndex = 0;
let score = 0;
function showQuestion(focus = false) {
  const box = select("#quiz-box");
  if (questionIndex === questions.length) {
    box.innerHTML =
      '<div class="quiz-card"><h3 tabindex="-1">Você acertou ' +
      score +
      " de " +
      questions.length +
      '</h3><p>Você pode rever a história e tentar de novo.</p><button class="button">Reiniciar quiz</button></div>';
    box.querySelector("button").onclick = () => {
      score = 0;
      questionIndex = 0;
      showQuestion(true);
    };
  } else {
    const [question, answers, correct, explanation] = questions[questionIndex];
    box.innerHTML =
      '<div class="quiz-card"><p class="caption">Pergunta ' +
      (questionIndex + 1) +
      " de " +
      questions.length +
      '</p><h3 tabindex="-1">' +
      question +
      '</h3><div class="answers">' +
      answers.map((answer) => "<button>" + answer + "</button>").join("") +
      '</div><p class="feedback" role="status"></p><button class="button" id="quiz-next" hidden>' +
      (questionIndex === questions.length - 1
        ? "Ver resultado"
        : "Próxima pergunta") +
      "</button></div>";
    const next = select("#quiz-next");
    const buttons = selectAll(".answers button");
    buttons.forEach(
      (button, index) =>
        (button.onclick = () => {
          buttons.forEach((item) => {
            item.disabled = true;
          });
          buttons[correct].classList.add("correct", "reveal");
          const hit = index === correct;
          if (hit) score++;
          else button.classList.add("wrong", "reveal");
          select(".feedback").textContent =
            (hit ? "Correto! " : "Resposta incorreta. ") + explanation;
          next.hidden = false;
          next.focus();
        }),
    );
    next.onclick = () => {
      questionIndex++;
      showQuestion(true);
    };
  }
  if (focus) box.querySelector("h3").focus();
}
showQuestion();

// Apresentação: conteúdo dos slides e navegação
const groupCredits =
  '<p class="group-credit"><strong>Turma 2001</strong><br>Diogenes · Gabriel · Victor · Kaua · Kaio Gabriel</p>';
const chapters = [
  [
    "A abertura",
    "Diretas Já!",
    "1983–1984. Um povo inteiro nas ruas por um direito: escolher seu presidente.",
    2,
  ],
  [
    "O contexto",
    "O Brasil sob a ditadura",
    "O golpe de 1964 inaugurou o regime militar. A anistia de 1979 foi um dos passos da abertura.",
    "1964",
  ],
  [
    "A reivindicação",
    "O povo queria votar",
    "A PEC de Dante de Oliveira propunha que o eleitor escolhesse diretamente presidente e vice.",
    "VOTO DIRETO",
  ],
  [
    "A cronologia",
    "De 1983 a 1985",
    "A proposta chegou à Câmara em 1983. Os comícios cresceram em 1984. O país voltou a ter um governo civil em 1985.",
    "83 → 85",
  ],
  [
    "Os personagens",
    "As vozes da campanha",
    "Ulysses, Tancredo, Lula, Brizola, Montoro e Dante atuaram na política. Artistas como Fafá de Belém também mobilizaram o público.",
    3,
  ],
  [
    "A galeria",
    "O Brasil tomou as ruas",
    "Sé em janeiro. Candelária e Anhangabaú em abril. Os comícios reuniram multidões em defesa do voto direto.",
    1,
  ],
  [
    "A votação",
    "Faltaram 22 votos",
    "Em 25 de abril de 1984, a proposta recebeu 298 votos favoráveis. Eram necessários 320.",
    "298 / 320",
  ],
  [
    "O legado",
    "O voto direto voltou",
    "A mobilização fortaleceu a redemocratização. A primeira eleição direta para presidente após a ditadura ocorreu em 1989.",
    "1989",
  ],
  [
    "Quiz",
    "Vamos recordar?",
    "Qual era a reivindicação? Quem apresentou a emenda? Quando voltou o voto direto para presidente?",
    "?",
  ],
  [
    "Encerramento",
    "A democracia é uma conquista de todos",
    "A democracia foi conquistada também pela mobilização de milhões de brasileiros. Diretas Já — A voz de um povo.",
    2,
  ],
];
const slides = select("#slides");
let slideIndex = 0;
let requestedFullscreen = false;
function renderSlide() {
  const [chapter, title, description, visual] = chapters[slideIndex];
  const photo = photos[visual];
  const media = photo
    ? "<figure>" +
      image(photo.url, "Comício em " + photo.place, false) +
      "<figcaption><small>" +
      photo.place +
      " · " +
      link(photo.link, photo.credit) +
      "</small></figcaption></figure>"
    : '<div class="slide-number" aria-hidden="true">' + visual + "</div>";
  select("#slide-body").innerHTML =
    '<article class="slide-inner"><div><p class="eyebrow">' +
    chapter +
    "</p><h2>" +
    title +
    "</h2><p>" +
    description +
    "</p>" +
    (slideIndex === 0 || slideIndex === chapters.length - 1
      ? groupCredits
      : "") +
    "</div>" +
    media +
    "</article>";
  select("#slide-count").textContent =
    String(slideIndex + 1).padStart(2, "0") + " / " + chapters.length;
  select(".slide-progress i").style.width =
    ((slideIndex + 1) / chapters.length) * 100 + "%";
  select("#prev").disabled = slideIndex === 0;
  select("#next").disabled = slideIndex === chapters.length - 1;
}
function moveSlide(amount) {
  const index = Math.min(chapters.length - 1, Math.max(0, slideIndex + amount));
  if (index === slideIndex) return;
  slideIndex = index;
  renderSlide();
  if (document.activeElement?.disabled) select("#exit").focus();
}
select("#start").onclick = async () => {
  slideIndex = 0;
  renderSlide();
  slides.showModal();
  select("#exit").focus();
  if (document.fullscreenElement || !document.documentElement.requestFullscreen)
    return;
  try {
    await document.documentElement.requestFullscreen();
    requestedFullscreen = slides.open;
    if (!slides.open && document.fullscreenElement)
      await document.exitFullscreen();
  } catch {
    /* The modal fills the browser viewport when fullscreen is unavailable. */
  }
};
select("#exit").onclick = () => slides.close();
select("#prev").onclick = () => moveSlide(-1);
select("#next").onclick = () => moveSlide(1);
slides.addEventListener("keydown", (event) => {
  if (
    event.target.matches("input,textarea,select,[contenteditable]") ||
    event.target.isContentEditable
  )
    return;
  if (
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight" ||
    (event.key === " " && !event.target.matches("button,a"))
  ) {
    event.preventDefault();
    moveSlide(event.key === "ArrowLeft" ? -1 : 1);
  } else if (event.key === " " && !event.target.matches("#prev,#next")) {
    event.preventDefault();
    moveSlide(1);
  }
});
slides.addEventListener("close", () => {
  if (requestedFullscreen && document.fullscreenElement)
    document.exitFullscreen().catch(() => {});
  requestedFullscreen = false;
  select("#start").focus({ preventScroll: true });
});
document.addEventListener("fullscreenchange", () => {
  if (requestedFullscreen && !document.fullscreenElement && slides.open)
    slides.close();
});
// Referências exibidas no rodapé
const references = [
  [camara, "Câmara dos Deputados · arquivo da PEC e da votação"],
  [contagem, "Câmara dos Deputados · apuração e transição de 1985"],
  [ausencia, "Câmara dos Deputados · cronologia e ausências"],
  [senado, "Rádio Senado · campanha e comícios"],
  ...photos.map((photo) => [photo.link, photo.place + " · " + photo.credit]),
];
select("#sources").innerHTML = references
  .map(([url, label]) => "<li>" + link(url, label) + "</li>")
  .join("");

// Animações respeitando a preferência de movimento reduzido
const reduced = matchMedia("(prefers-reduced-motion: reduce)");
for (let index = 0; index < 96; index++) {
  const icon = document.createElement("i");
  icon.style.setProperty("--delay", index * 12 + "ms");
  select(".crowd").append(icon);
}
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      observer.unobserve(target);
      if (target.matches(".crowd"))
        selectAll(".crowd i").forEach((icon) => icon.classList.add("on"));
      else if (target.matches("[data-count]") && !reduced.matches) {
        const end = Number(target.dataset.count);
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min(1, (now - start) / 850);
          target.textContent = Math.round(end * progress).toLocaleString(
            "pt-BR",
          );
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      } else if (!target.matches("[data-count]"))
        target.classList.add("reveal");
    });
  },
  { threshold: 0.15 },
);
selectAll(".chapter h2,.crowd,[data-count]").forEach((item) =>
  observer.observe(item),
);
// Progresso da leitura e indicação do capítulo atual
function updateReading() {
  const available = document.documentElement.scrollHeight - innerHeight;
  select(".reading i").style.width =
    (available > 0 ? (scrollY / available) * 100 : 0) + "%";
  const active = selectAll("main section").findLast(
    (section) => section.getBoundingClientRect().top <= innerHeight * 0.35,
  );
  selectAll("nav a").forEach((anchor) => {
    if (anchor.hash === "#" + active?.id)
      anchor.setAttribute("aria-current", "location");
    else anchor.removeAttribute("aria-current");
  });
}
addEventListener("scroll", updateReading, { passive: true });
addEventListener("resize", updateReading);
updateReading();
