import { Component } from '@angular/core';

@Component({
    selector: 'cards-container',
    template: require('./cards.component.html'),
    styleUrls: ['./cards.component.css']
})

export class CardsContainer {
    cards = [
        { title: 'this is title', content: 'some info', footer: 'some footer', color: 'orange' },
        { title: 'this is title1', content: 'some info1', footer: 'some footer1', color: 'red' }
    ]

    onCardChecked(card: wa.card, i: number) {
        this.cards.splice(i, 1);
    }
    onCreateCard(card: any) {
        this.cards.push(card);
    }
}