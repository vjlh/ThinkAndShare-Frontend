import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Desafio, DesafioService }  from '../services/desafio.service';


@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.component.html',
  styleUrls: ['./desafio.component.css']
})
export class DesafioComponent implements OnInit {

  desafio: Desafio;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private desafioService: DesafioService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDesafio();
  }

  getDesafio(): void {
    this.id = this.desafioService.getId();
    this.desafioService.getDesafio(this.id).subscribe(desafio => this.desafio = desafio);
  }

}
