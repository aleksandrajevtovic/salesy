import { Component } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

export interface Unternehmen {
  name: string;
}
export interface Mitarbeiter {
  name: string;
}
export interface Bereich {
  name: string;
}
export interface Ansprechperson {
  name: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {

  title = 'Filter';

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  unternehmens: Unternehmen[] = [
    { name: 'die eine Finanzierung erhalten' },
    { name: 'großes Jobwachstum' },
  ];

  mitarbeiters: Mitarbeiter[] = [
    { name: '2-10' },
    { name: '11-50' },
    { name: '51-200' },
    { name: '201-500' },
    { name: '501-1000' },
    { name: '501-1000' },
  ];
  bereichs: Bereich[] = [
    { name: 'Public Institutions' },
  ];
  ansprechpersonen: Ansprechperson[] = [
    { name: 'CEO' },
  ];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add Unternehmen
    if (value) {
      this.unternehmens.push({ name: value });
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  addMitarbeiter(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add Mitarbeiter
    if (value) {
      this.mitarbeiters.push({ name: value });
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  addBereich(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add Bereich
    if (value) {
      this.bereichs.push({ name: value });
    }
    // Clear the input value
    event.chipInput!.clear();
  }
  addAnsprechperson(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add Ansprechperson
    if (value) {
      this.ansprechpersonen.push({ name: value });
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(unternehmen: Unternehmen): void {
    const index = this.unternehmens.indexOf(unternehmen);

    if (index >= 0) {
      this.unternehmens.splice(index, 1);
    }
  }

  removeMitarbeiter(mitarbeiter: Mitarbeiter): void {
    const index = this.mitarbeiters.indexOf(mitarbeiter);

    if (index >= 0) {
      this.mitarbeiters.splice(index, 1);
    }
  }

  removeBereich(bereich: Bereich): void {
    const index = this.bereichs.indexOf(bereich);

    if (index >= 0) {
      this.bereichs.splice(index, 1);
    }
  }
  removeAnsprechperson(ansprechperson: Ansprechperson): void {
    const index = this.ansprechpersonen.indexOf(ansprechperson);

    if (index >= 0) {
      this.ansprechpersonen.splice(index, 1);
    }
  }

  edit(unternehmen: Unternehmen, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove unternehmen if it no longer has a name
    if (!value) {
      this.remove(unternehmen);
      return;
    }

    // Edit existing unternehmens
    const index = this.unternehmens.indexOf(unternehmen);
    if (index >= 0) {
      this.unternehmens[index].name = value;
    }
  }


  editMitarbeiter(mitarbeiter: Mitarbeiter, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove mitarbeiter if it no longer has a name
    if (!value) {
      this.remove(mitarbeiter);
      return;
    }

    // Edit existing mitarbeiters
    const index = this.mitarbeiters.indexOf(mitarbeiter);
    if (index >= 0) {
      this.mitarbeiters[index].name = value;
    }
  }

  editBereich(bereich: Bereich, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove mitarbeiter if it no longer has a name
    if (!value) {
      this.remove(bereich);
      return;
    }

    // Edit existing mitarbeiters
    const index = this.bereichs.indexOf(bereich);
    if (index >= 0) {
      this.bereichs[index].name = value;
    }
  }

  editAnsprechperson(ansprechperson: Ansprechperson, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove mitarbeiter if it no longer has a name
    if (!value) {
      this.remove(ansprechperson);
      return;
    }

    // Edit existing mitarbeiters
    const index = this.ansprechpersonen.indexOf(ansprechperson);
    if (index >= 0) {
      this.ansprechpersonen[index].name = value;
    }
  }
}
