import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'card-creator',
    template: require('./card-creator.component.html'),
    styleUrls: ['./card-creator.component.css']
})
export class CardCreatorComponent implements OnInit {
    @Output() createCard = new EventEmitter();
    onCreateCard() {
        const {title, content, footer, color} = this.newCard;

        if (title && content && footer && color) {
            this.createCard.next({ title, content, footer, color });
        }

        this.reset();
    }

    reset() {
        this.newCard = {
            title: '',
            content: '',
            footer: '',
            color: ''
        }
    }

    newCard = {
        title: '',
        content: '',
        footer: '',
        color: ''
    }
    constructor() { }

    ngOnInit() { }
}