/**
 * Pour déclarer une classe comme composant de
 * notre application, on importe "Component"
 * via @angular/core.
 */
import { Component } from '@angular/core';

class Contact {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: object;
  phone?: number;
  website?: string;
  company?: object;
}

/**
 * @Component est ce qu'on appel un décorateur.
 * Il va nous permettre de définir 3 paramètres
 * essentiels à notre application...
 */
@Component({
  /**
   * Le sélecteur (selector) détermine
   * le nom de la balise HTML, permettant
   * d'afficher notre composant dans l'app :
   * <app-root></app-root>. Vous devez
   * OBLIGATOIREMENT avoir la balise
   * d'ouverture et de fermeture.
   */
  selector: 'app-root',
  /**
   * "templateUrl" ou "template" est la
   * partie visible du composant. C'est
   * ce qui s'affiche à l'écran lorsque
   * le composant est utilisé. (HTML ...)
   */
  templateUrl: './app.component.html',
  // template: `
  //   <h1>Gestion de Contacts</h1>
  //   <p>Bienvenue aux Mureaux</p>
  // `,
  /**
   * La déclaration des styles avec
   * "styleUrls" ou "styles". C'est un
   * tableau de CSS.
   */
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h1 {
  //     color: blue;
  //   }
  // `]
})
/**
 * La classe contient les données du
 * composant, mais aussi son comportement.
 * Dans notre contexte MVVM, notre classe
 * correspond au Model.
 */
export class AppComponent {

  // -- Déclaration d'une Variable
  title = 'Gestion de Contacts';

  // -- Déclaration d'un Object Contact
  unContact: Contact = {
    id: 1,
    name: 'Hugo LIEGEARD',
    username: 'hugoliegeard',
    email: 'wf3@hl-media.fr',
  };

  // -- Tableau de Contacts
  mesContacts: Contact[] = [
    {
      id: 1,
      name: 'Hugo LIEGEARD',
      username: 'hugoliegeard',
      email: 'wf3@hl-media.fr'
    },
    {
      id: 2,
      name: 'Akim BOGOSS',
      username: 'akimbogoss',
      email: 'akim.bogoss@gmail.com'
    },
    {
      id: 3,
      name: 'Chris SIMO ',
      username: 'chrissimo',
      email: 'chris.simo@gmail.com'
    },
    {
      id: 4,
      name: 'Aisha ABDALLA',
      username: 'aisha.abdalla',
      email: 'aisha.abdalla@gmail.com'
    },
  ];

}
