import { Injectable } from '@angular/core';
import {Contact} from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactStorageService {

  constructor() { }

  /**
   * Permet de sauvegarder
   * nos contacts dans le storage.
   */
  save(contacts: Contact[]) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  /**
   * Permet de récupérer les
   * contacts du storage.
   */
  getContacts(): Contact[] {
    /**
     * Avant de retourner les données, je m'assure
     * qu'il y à bien des contacts dans le storage.
     * S'il n'y en a pas, je retourne un nouveau tableau !
     */
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    return (null !== contacts) ? contacts : [];
  }

}
