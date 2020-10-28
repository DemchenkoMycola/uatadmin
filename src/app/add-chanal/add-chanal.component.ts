import { Component, OnInit } from '@angular/core';
import { ChanalsService } from '../service/chanals.service';

@Component({
  selector: 'app-add-chanal',
  templateUrl: './add-chanal.component.html',
  styleUrls: ['./add-chanal.component.sass']
})
export class AddChanalComponent implements OnInit {

  constructor(private chanalService: ChanalsService ) { }

  chanal = {
    chanalId: '',
    chanalName: ''
  };

  ngOnInit(): void {
  }
  submit(): void {
    this.chanalService.addChanal(this.chanal);
    this.chanal = {
      chanalId: '',
      chanalName: ''
    };
  }

}
