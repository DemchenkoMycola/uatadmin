import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ChanalsService } from '../service/chanals.service';

@Component({
  selector: 'app-add-chanal',
  templateUrl: './add-chanal.component.html',
  styleUrls: ['./add-chanal.component.sass']
})
export class AddChanalComponent implements OnInit {

  form: FormGroup;
  chanalName = new FormControl('', Validators.required);
  chanalId = new FormControl('', Validators.required);

  constructor(private chanalService: ChanalsService, fb: FormBuilder ) {
    this.form = fb.group({
      chanalName: this.chanalName,
      chanalId: this.chanalId
    });
  }



  ngOnInit(): void {
  }
  onSubmit(): void {
    this.chanalService.addChanal(this.form.value);
    this.form.reset();
  }

}
