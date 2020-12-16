import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ChannelsService } from '../service/channels.service';

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.sass']
})
export class AddChannelComponent implements OnInit {

  form: FormGroup;
  channelName = new FormControl('', Validators.required);
  channelId = new FormControl('', Validators.required);

  constructor(private channelService: ChannelsService, fb: FormBuilder ) {
    this.form = fb.group({
      channelName: this.channelName,
      channelId: this.channelId
    });
  }



  ngOnInit(): void {
  }
  onSubmit(): void {
    this.channelService.addChannel(this.form.value);
    this.form.reset();
  }

}
