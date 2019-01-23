import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../shared/models/contact';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  @Input() contactActif: Contact;
  @Output() saveContactEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  saveContacts() {
    this.saveContactEvent.emit();
  }

}
