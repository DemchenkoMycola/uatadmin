import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ChanalsService } from '../service/chanals.service';

@Component({
  selector: 'app-edit-channel',
  templateUrl: './edit-channel.component.html',
  styleUrls: ['./edit-channel.component.sass']
})

export class EditChannelComponent implements OnInit {

  id: '';
  form: FormGroup;

  constructor(private chanalService: ChanalsService, private activatedRoute: ActivatedRoute, public fb: FormBuilder) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.chanalService.getChannelById(this.id).then(a => {
      this.form = this.fb.group({
        chanalId: [a.data().chanalId, Validators.required],
        chanalName: [a.data().chanalName, Validators.required]
      });
    });
  }
  update(form): void{
    this.chanalService.updateChannel(this.id, form.value);
    this.form.reset();
  }
}
