import { Component } from '@angular/core';

@Component({
  selector: 'app-ufficio',
  templateUrl: './ufficio.component.html',
  styleUrls: ['./ufficio.component.css']
})
export class UfficioComponent {

tabellone: string[] = [];
coda: string[] = [];
ultimoTicket = 0;
elementiMaxTabellone = 10;
ultimoTicketFormattato: string = ""; 


staccaTicket() {
  this.ultimoTicket++;
  const newTicket = this.generaTicketFormattato();
  this.aggiungiTicketAllaCoda();
  // this.gestisciCoda();
  this.aggiungiTicketAlTabellone(newTicket);
}


private aggiungiTicketAlTabellone(newTicket:string) {
  this.tabellone.unshift(newTicket); 
  if (this.tabellone.length > this.elementiMaxTabellone) {
    this.tabellone.splice(this.elementiMaxTabellone);
  }
}

generaTicketFormattato() {
  let res = this.ultimoTicket.toString(); 
  if (this.ultimoTicket < 10) {
    res = '00' + res;
  }
  else if (this.ultimoTicket < 100) {
    res = '0' + res;
  } 
  this.ultimoTicketFormattato = res;
  return res;
}

aggiungiTicketAllaCoda() {
  if(this.coda){
  this.coda.push(this.ultimoTicketFormattato);
  }
}

gestisciCoda() {
  // Verifica se l'array coda contiene elementi
  console.log(this.coda);
  if (this.coda.length > 0) {
    // Rimuovi il primo elemento dalla coda
    const primoElementoCoda = this.coda.shift();
    // Verifica se l'elemento rimosso è definito
    if (primoElementoCoda !== undefined) {
      // Verifica se l'array tabellone è definito
      if (this.tabellone) {
        // Aggiungi l'elemento rimosso dalla coda alla testa del tabellone
        this.tabellone.pop();
        // Controlla se il tabellone supera il numero massimo di elementi e riducilo di conseguenza
        if (this.tabellone.length > this.elementiMaxTabellone) {
          this.tabellone.splice(this.elementiMaxTabellone);
          
        }
      } else {
        console.error('Errore: array tabellone non definito');
      }
    } else {
      console.error('Errore: elemento rimosso dalla coda non definito');
    }
  } else {
    console.warn('Attenzione: array coda vuoto');
  }
}

}

