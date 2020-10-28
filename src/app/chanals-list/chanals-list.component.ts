import { Component, OnInit } from '@angular/core';
import { ChanalsService } from '../service/chanals.service';

@Component({
  selector: 'app-chanals-list',
  templateUrl: './chanals-list.component.html',
  styleUrls: ['./chanals-list.component.sass']
})
export class ChanalsListComponent implements OnInit {

  public list = [];

  constructor(private chanalsService: ChanalsService) { }

  ngOnInit(): void {
    this.getChanalsList();
  }

  getChanalsList(): void{
    this.chanalsService.chanalsList().subscribe(res => { this.list = res; });
  }

  deleteChanal(id): void{
    this.chanalsService.deleteChanal(id);
  }

}
