import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../shared/models/contact';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  @Output() newContactEvent = new EventEmitter();
  nouveauContact: Contact = new Contact();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Fonction appelée après le
   * submit du formulaire.
   */
  submitContact() {
    // -- Attribution d'un ID
    this.nouveauContact.id = Date.now();
    // console.log(this.nouveauContact);
    /**
     * Lorsque mon formulaire est soumis,
     * j'émet un évènement qui sera écouté
     * par mon application et qui récupèrera
     * les données du nouveau contact.
     */
    this.newContactEvent.emit(this.nouveauContact);

    // -- Je réinitialise le nouveau contact
    this.nouveauContact = new Contact();
  }
}
