import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ChannelsService } from '../service/channels.service';
import { YoutubeService } from '../service/youtube.service';

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.sass']
})
export class AddChannelComponent implements OnInit {

  form: FormGroup;
  channelId = new FormControl('', Validators.required);
  channel = '';

  constructor(private channelService: ChannelsService, private youTubeService: YoutubeService, fb: FormBuilder ) {
    this.form = fb.group({
      channelId: this.channelId
    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.channelService.addChannel(this.form.value);
    this.form.reset();
  }
  checkChannel(): void {
    this.youTubeService.getVideosForChanel(this.form.value.channelId, 10);
    this.youTubeService
      .getVideosForChanel('UC_LtA_EtCr7Jp5ofOsYt18g', 15)
      .subscribe(list => {
        this.channel = list.items[0].snippet.channelTitle;
      });
  }
}
