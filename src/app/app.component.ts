import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';
  dets: Card[] = [];

  DetId: number;
  DetName: string;
  DetStatus: boolean;

  ngOnInit() {
    for (let i = 0; i <= 10; i++) {
      this.dets.push(Card.insertStart());
    }
  }

  addDet() {
    const newDet = Card.insert(this.DetId, this.DetName, this.DetStatus);
    this.dets.push(newDet);
  }

  deleteDet(index) {
    console.log(index);
    this.dets.splice(index, 1);
  }
}

class Card {
  id: number;
  name: string; 
  status: boolean;

  static insertStart() {
    const newCard = new Card();
    newCard.name = 'Датчик ' + Math.round(Math.random() * 100);
    newCard.status = Math.random() < 0.5;
    return newCard;
  }

  static insert(id: number, name: string, status: boolean) {
    const newCard = new Card();
    newCard.id = id;
    newCard.name = name;
    newCard.status = status;
    return newCard;
  }
}
