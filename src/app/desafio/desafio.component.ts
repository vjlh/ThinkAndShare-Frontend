import { Component, OnInit, Input } from '@angular/core';
import { Desafio } from '../services/desafio';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DesafioService }  from '../services/desafio.service';


@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.component.html',
  styleUrls: ['./desafio.component.css']
})
export class DesafioComponent implements OnInit {

  @Input() desafio: Desafio;
  clickMessage = '';

  constructor(
    private route: ActivatedRoute,
    private desafioService: DesafioService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDesafio();
  }

  getDesafio(): void {
    const id = ""+this.route.snapshot.paramMap.get('id');
    this.desafioService.getDesafio(id)
      .subscribe(desafio => this.desafio = desafio);
  }

  goBack(): void {
    this.location.back();
  }

  onClickMe() {
    this.clickMessage = 'You are my desafio!';
  }

}
