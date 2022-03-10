import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { CardMTG } from '../../model/cardMTG';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  circleIcon = faCircle;
  form: FormGroup;
  @Input() employeModel: CardMTG;
  @ViewChild("fileInput") fileInput!: ElementRef;

  @Output('cancel') cancelEvent$: EventEmitter<any>;
  @Output('submit') submitEvent$: EventEmitter<any>;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor() {
    this.submitEvent$ = new EventEmitter();
    this.cancelEvent$ = new EventEmitter();
    this.form = FormulaireComponent.buildForm();
    this.employeModel = {
      type: []
    };
  }

  ngOnInit() {
    debugger;
    this.form.patchValue({
      id: this.employeModel.id,
      name: this.employeModel.name,
      manaCost: this.employeModel.manaCost,
      convertedManaCost: this.employeModel.convertedManaCost,
      text: this.employeModel.text,
      type: this.employeModel.type || [],
      power: this.employeModel.power,
      toughness: this.employeModel.toughness,
      colors: this.employeModel.colors
    });
  }

  cancel() {
    this.cancelEvent$.emit();
  }

  submit(employe: CardMTG) { //Formulaire
    employe.imageUrl = this.employeModel.imageUrl;
    this.submitEvent$.emit(employe);
  }


  addChipset(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.employeModel.type!.push(value);
    }
    event.chipInput!.clear();
  }

  removeChipset(titre: any): void {
    const index = this.employeModel.type!.indexOf(titre);
    this.employeModel.type!.splice(index, 1);
  }

  onFileSelected(event:Event | null) {
    const files = (<HTMLInputElement>event?.currentTarget).files;
    const file:File | null = files!.item(0);

    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.employeModel.imageUrl = reader.result;
        }
    }
  }

  /**
   * Fonction pour construire notre formulaire
   * @returns {FormGroup}
   *
   * @private
   */
  private static buildForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      prenom: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      nom: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      email: new FormControl('', Validators.required),
      titres: new FormControl(''),
      sexe: new FormControl(''),
      telephone: new FormControl('', Validators.compose([Validators.required, Validators.pattern('\\d{10}')])),
    });
  }

}
