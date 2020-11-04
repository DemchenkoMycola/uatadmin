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
  chanalName = new FormControl('', Validators.required);
  chanalId = new FormControl('', Validators.required);

  constructor(private chanalService: ChanalsService, fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.form = fb.group({
      chanalName: this.chanalName,
      chanalId: this.chanalId
    });
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.chanalService.getChannelById(this.id).then(a => {
      this.chanalId = a.data().chanalId;
      this.chanalName = a.data().chanalName;
    });
  }
  update(): void{}
}
