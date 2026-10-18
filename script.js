const questions = [
["GEOGRAFIE","Care este capitala României?",["București","Cluj","Iași","Brașov"],0],
["GEOGRAFIE","Care este capitala Franței?",["Roma","Paris","Madrid","Lisabona"],1],
["GEOGRAFIE","Care este capitala Italiei?",["Atena","Roma","Viena","Praga"],1],
["GEOGRAFIE","Care este capitala Spaniei?",["Madrid","Barcelona","Sevilla","Valencia"],0],
["GEOGRAFIE","Care este capitala Germaniei?",["Bonn","Hamburg","Berlin","Munchen"],2],
["GEOGRAFIE","Care este capitala Japoniei?",["Osaka","Kyoto","Tokyo","Nagoya"],2],
["GEOGRAFIE","Care este cel mai mare ocean?",["Atlantic","Indian","Pacific","Arctic"],2],
["GEOGRAFIE","Pe ce continent se află Egiptul în principal?",["Asia","Africa","Europa","America"],1],
["GEOGRAFIE","Care este cel mai înalt munte din lume?",["Mont Blanc","Kilimanjaro","Everest","Elbrus"],2],
["GEOGRAFIE","Ce fluviu traversează Budapesta?",["Dunărea","Rinul","Sena","Tamisa"],0],
["GEOGRAFIE","Care este capitala Republicii Moldova?",["Bălți","Iași","Chișinău","Odesa"],2],
["GEOGRAFIE","În ce țară se află piramidele de la Giza?",["Mexic","Egipt","Peru","India"],1],
["GEOGRAFIE","Care este cel mai mare continent?",["Africa","Europa","Asia","Australia"],2],
["GEOGRAFIE","Care este capitala Portugaliei?",["Porto","Lisabona","Madrid","Faro"],1],
["GEOGRAFIE","Care este capitala Greciei?",["Atena","Salonic","Roma","Sofia"],0],
["ISTORIE","În ce an a avut loc Marea Unire?",["1859","1877","1918","1945"],2],
["ISTORIE","Cine a pășit primul pe Lună?",["Iuri Gagarin","Neil Armstrong","Buzz Aldrin","John Glenn"],1],
["ISTORIE","În ce an a căzut Zidul Berlinului?",["1961","1989","1991","2000"],1],
["ISTORIE","Cine a fost domnitorul Moldovei la Vaslui în 1475?",["Vlad Țepeș","Ștefan cel Mare","Mihai Viteazul","Petru Rareș"],1],
["ISTORIE","În ce an a intrat România în Uniunea Europeană?",["2004","2007","2010","2012"],1],
["ISTORIE","Cine a pictat Mona Lisa?",["Michelangelo","Leonardo da Vinci","Rafael","Van Gogh"],1],
["ISTORIE","Cine a fost primul rege al României?",["Ferdinand I","Carol I","Mihai I","Carol al II-lea"],1],
["ISTORIE","În ce an s-a încheiat al Doilea Război Mondial?",["1939","1943","1945","1950"],2],
["ISTORIE","Cine a scris Iliada?",["Homer","Platon","Socrate","Virgiliu"],0],
["ISTORIE","Cine a fost primul împărat roman?",["Nero","Augustus","Traian","Hadrian"],1],
["ISTORIE","Cine a unit cele trei țări românești în 1600?",["Mihai Viteazul","Ștefan cel Mare","Vlad Țepeș","Carol I"],0],
["SPORT","Câți jucători are o echipă de fotbal pe teren?",["9","10","11","12"],2],
["SPORT","În ce sport se folosește un slam dunk?",["Tenis","Baschet","Rugby","Volei"],1],
["SPORT","Câte inele are simbolul olimpic?",["4","5","6","7"],1],
["ȘTIINȚĂ","Ce metal este lichid la temperatura camerei?",["Fier","Cupru","Mercur","Aluminiu"],2],
["ANIMALE","Care este cel mai mare animal de pe Pământ?",["Elefantul african","Balena albastră","Girafa","Rechinul alb"],1],
["ANIMALE","Ce animal este cunoscut pentru dungile sale?",["Leul","Zebra","Cămila","Lupul"],1],
["ANIMALE","Care este singurul mamifer capabil de zbor susținut?",["Veverița","Liliacul","Pinguinul","Struțul"],1],
["ANIMALE","Cum se numește puiul broaștei?",["Boboc","Mormoloc","Vițel","Larvă"],1],
["ANIMALE","Ce animal produce mierea?",["Viespea","Albina","Furnica","Fluturele"],1],
["ANIMALE","Care este cel mai rapid animal terestru?",["Leul","Ghepardul","Calul","Lupul"],1],
["ANIMALE","Ce animal are o trompă lungă?",["Rinocerul","Elefantul","Hipopotamul","Tapirul"],1],
["ANIMALE","Ce pasăre nu poate zbura și trăiește în Antarctica?",["Vulturul","Pinguinul","Rândunica","Barza"],1],
["FILME","Cum se numește școala de magie din Harry Potter?",["Narnia","Hogwarts","Camelot","Neverland"],1],
["FILME","Ce supererou este cunoscut ca Omul-Păianjen?",["Batman","Spider-Man","Iron Man","Thor"],1],
["FILME","În ce film apare personajul Simba?",["Shrek","Regele Leu","Madagascar","Nemo"],1],
["FILME","Cum se numește regina din Frozen?",["Anna","Elsa","Ariel","Belle"],1],
["FILME","Ce personaj locuiește într-un ananas sub mare?",["Patrick","SpongeBob","Nemo","Shrek"],1],
["MUZICĂ","Câte corzi are o chitară obișnuită?",["4","5","6","8"],2],
["MUZICĂ","Ce instrument are clape albe și negre?",["Vioara","Trompeta","Pianul","Flautul"],2],
["MUZICĂ","Din ce țară provine trupa ABBA?",["Norvegia","Suedia","Danemarca","Finlanda"],1],
["MUZICĂ","Câte note sunt în gama muzicală diatonică uzuală?",["5","6","7","8"],2],
["CULTURĂ","Câte laturi are un hexagon?",["5","6","7","8"],1],
["CULTURĂ","Cine a scris poezia Luceafărul?",["Ion Creangă","Mihai Eminescu","George Coșbuc","Tudor Arghezi"],1],
["CULTURĂ","Câte minute are o oră și jumătate?",["60","75","90","120"],2],
["CULTURĂ","Câte zile are un an bisect?",["364","365","366","367"],2],
["CULTURĂ","Câte luni are un an?",["10","11","12","13"],2],
["CULTURĂ","Care este limba oficială a Braziliei?",["Spaniola","Portugheza","Franceza","Engleza"],1],
["CULTURĂ","Cine a creat personajul Harry Potter?",["J.R.R. Tolkien","J.K. Rowling","Stephen King","C.S. Lewis"],1],
["CULTURĂ","Câte culori are curcubeul în clasificarea tradițională?",["5","6","7","8"],2],
["CULTURĂ","Care este opusul cuvântului generos?",["Bun","Zgârcit","Curajos","Calm"],1],
["MATEMATICĂ","Cât face 12 × 8?",["86","96","108","88"],1],
["MATEMATICĂ","Cât face 144 ÷ 12?",["10","11","12","14"],2],
["MATEMATICĂ","Cât face 25 × 4?",["80","90","100","120"],2],
["MATEMATICĂ","Cât face 100 − 37?",["53","63","73","67"],1],
["MATEMATICĂ","Cât face 15 + 28?",["33","43","53","42"],1]
];
let bestStreak = 0;
let order = [];
let locked = false;
let completed = false;

try {
  const old = JSON.parse(localStorage.getItem(SAVE_KEY) || "null");
  if (old) {
    level = old.level || 1;
    current = old.current || 0;
    score = old.score || 0;
    bestScore = old.bestScore || 0;
    streak = old.streak || 0;
    bestStreak = old.bestStreak || 0;
    order = Array.isArray(old.order) ? old.order : [];
    completed = !!old.completed;
  }
} catch (e) {}

function save() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify({
      level, current, score, bestScore, streak,
      bestStreak, order, completed
    }));
  } catch (e) {}
}

function shuffle(arr) {

  q[2].forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = `${["A", "B", "C", "D"][i]}. ${answer}`;
    btn.addEventListener("click", () => chooseAnswer(i));
    $("answers").appendChild(btn);
  });

  save();
}

function chooseAnswer(index) {
  if (locked) return;
  locked = true;
  const q = order[current];

  [...$("answers").children].forEach((btn, i) => {
    btn.disabled = true;
    if (i === q[3]) btn.classList.add("correct");
    else if (i === index) btn.classList.add("wrong");
  });

  if (index === q[3]) {
    streak++;
    bestStreak = Math.max(bestStreak, streak);
    const points = 100 + (streak >= 3 ? 50 : 0) + (level - 1) * 10;
    score += points;
    $("feedback").textContent = `🎉 Corect! +${points} puncte!`;
    $("feedback").style.color = "#5fe5c0";
  } else {
    streak = 0;
    $("feedback").textContent = `❌ Răspuns corect: ${q[2][q[3]]}`;
    $("feedback").style.color = "#ff8c9d";
  }
  $("score").textContent = score;
  $("progressBar").style.width = `${(current + 1) / 15 * 100}%`;
  $("next").textContent = current === 14
    ? "TERMINĂ NIVELUL 🏆"
    : "URMĂTOAREA ÎNTREBARE ➜";
  $("next").hidden = false;
  save();
}

function finishLevel() {
  completed = true;
  if (score > bestScore) bestScore = score;
  save();

  $("playArea").hidden = true;
  $("final").hidden = false;
  $("category").textContent = `NIVELUL ${level} TERMINAT`;
  $("progressBar").style.width = "100%";
  $("finalScore").textContent =
    `Scor total: ${score} puncte · Serie maximă: ${bestStreak}`;
  $("restart").textContent = "URMĂTORUL NIVEL ➜";
  $("feedback").textContent = "🏆 Felicitări! Ai terminat nivelul.";
  updateRecord();
}

function nextLevel() {
  level++;
  makeLevel();
}

$("next").addEventListener("click", () => {
  if (completed) nextLevel();
  else makeLevel();
});

$("newGame").addEventListener("click", () => {
  level = 1;
  current = 0;
  score = 0;
  streak = 0;
  bestStreak = 0;
  makeLevel();
});

if (completed && order.length === 15) {
  $("playArea").hidden = true;
  $("final").hidden = false;
  $("category").textContent = `NIVELUL ${level} TERMINAT`;
  $("progressBar").style.width = "100%";
  $("finalScore").textContent = `Scor total: ${score} puncte`;
  $("restart").textContent = "URMĂTORUL NIVEL ➜";
  updateRecord();
} else if (order.length === 15 && current < 15) {
  showQuestion();
} else {
  makeLevel();
}
