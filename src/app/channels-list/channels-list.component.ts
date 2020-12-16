import { Component, OnInit } from '@angular/core';
import { ChannelsService } from '../service/channels.service';

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.sass']
})

export class ChannelsListComponent implements OnInit {

  public list = [];

  constructor(private channelsService: ChannelsService) { }

  ngOnInit(): void {
    this.getChannelsList();
  }

  getChannelsList(): void{
    this.channelsService.channelsList().subscribe(res => { this.list = res; });
  }

  deleteChannel(id): void{
    this.channelsService.deleteChannel(id);
  }

}
