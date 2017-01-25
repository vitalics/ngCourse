import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'info-card',
    template: require('./info-card.component.html'),
    styleUrls: ['info-card.component.css']
})
export class InfoCardComponent {
    @Input() card = {};
    @Output() checked = new EventEmitter();
    showCheck: boolean = false;

    onClicked() {
        this.checked.next(this.card);
    }
    toggleChecked() {
        this.showCheck = !this.showCheck;
    }
}