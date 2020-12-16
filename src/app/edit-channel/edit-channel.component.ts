import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ChannelsService } from '../service/channels.service';

@Component({
  selector: 'app-edit-channel',
  templateUrl: './edit-channel.component.html',
  styleUrls: ['./edit-channel.component.sass']
})

export class EditChannelComponent implements OnInit {

  id: '';
  form: FormGroup;

  constructor(private channelService: ChannelsService, private activatedRoute: ActivatedRoute, public fb: FormBuilder) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.channelService.getChannelById(this.id).then(a => {
      this.form = this.fb.group({
        channelId: [a.data().channelId, Validators.required],
        channelName: [a.data().channelName, Validators.required]
      });
    });
  }
  update(form): void{
    this.channelService.updateChannel(this.id, form.value);
    this.form.reset();
  }
}
