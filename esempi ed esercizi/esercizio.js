function apriPopUp(messaggio) {
  let squadraA = new squadra("Bari", "Serie B", "FIGC", "Calcio");

  squadraA._stadio = "San Nicola";

  alert(squadraA.mostraNome());
  alert(squadraA.mostraNomeFederazione());
}

class federazione {
  constructor(nomeFederazione, sport) {
    this.nomeFederazione = nomeFederazione;
    this.sport = sport;
  }

  getNome() {
    return this.nomeFederazione;
  }

  stampaSport() {
    return this.sport;
  }
}

class squadra extends federazione {
  constructor(nome, categoria, nomeFederazione, sport) {
    super(nomeFederazione, sport);
    this.nome = nome;
    this.categoria = categoria;
    this._stadio = "";
  }

  mostraNome() {
    return "nome:" + this.nome;
  }

  mostraSport() {
    return "sport: " + this.sport;
  }

  mostraNomeFederazione() {
    return super.getNome();
  }
}

function esercizioCallback1() {
  function mostraValore(valore, indice) {
    console.log(valore);
  }
  var numeri = [11, 3, 24];
  numeri.forEach(mostraValore);
}

function esercizioCallback2() {
  var persone = [
    { nome: "Mario", cognome: "Rossi", professione: "impiegato" },
    { nome: "Giuseppe", cognome: "Verdi", professione: "operaio" },
    { nome: "Marco", cognome: "Neri", professione: "insegnante" },
  ];
  persone.sort(function (a, b) {
    if (a.cognome < b.cognome) return -1;
    if (a.cognome > b.cognome) return 1;
    return 0;
  });

  console.log(persone);
}
