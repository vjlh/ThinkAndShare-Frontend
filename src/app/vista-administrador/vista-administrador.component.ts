import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

import { Idea, IdeaService } from '../services/idea.service';
import { Desafio, DesafioService } from '../services/desafio.service';
import { IdeaAdminComponent} from '../idea-admin/idea-admin.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-vista-administrador',
  templateUrl: './vista-administrador.component.html',
  styleUrls: ['./vista-administrador.component.css']
})

export class VistaAdministradorComponent implements OnInit {

  ideas: Idea[];
  desafios: Desafio[];
  modalRef: BsModalRef;
  start: string;
  finish: string;
  nombreDesafio:string;


  constructor(private ideaService: IdeaService, private desafioService: DesafioService, private modalService: BsModalService) { }

  ngOnInit() {
      this.ideaService.getIdeas()
      .subscribe(ideas => this.ideas = ideas);
      this.desafioService.getDesafios()
      .subscribe(desafios => this.desafios = desafios);

  }

  add(titulo: string, descripcion: string): void {
    titulo = titulo.trim();
    descripcion = descripcion.trim();
    let inicio: string = this.start;
    let termino: string = this.finish;

    if (!titulo || !descripcion || !inicio || !termino) { return; }
    this.desafioService.addDesafio({titulo,descripcion,inicio,termino} as Desafio)
      .subscribe(desafio => {
        this.desafios.push(desafio);
      });
  }

  meGusta(idIdea:string,Theidea:Idea) {
    this.ideaService.meGusta(idIdea).subscribe(idea => {Theidea.meGusta = idea.meGusta});
  }

  filtrar(filtro:string){
      if(filtro != ''){
          this.ideaService.filter(filtro)
          .subscribe(ideas => {this.ideas = ideas; console.log(this.ideas)});
      }
      else{
          this.ideaService.getIdeas()
          .subscribe(ideas => this.ideas = ideas);
      }

  }

  filtrar2(filtro:string){
      if(filtro != ''){
          this.desafioService.filter2(filtro)
          .subscribe(desafios => {this.desafios = desafios; console.log(this.desafios)});
      }
      else{
          this.desafioService.getDesafios()
          .subscribe(desafios => this.desafios = desafios);
      }

  }

  order(criterio:string){
      this.ideaService.order(criterio)
      .subscribe(ideas => {this.ideas = ideas; console.log(this.ideas)});
  }

  order2(criterio:string){
      this.desafioService.order2(criterio)
      .subscribe(desafios => {this.desafios = desafios; console.log(this.desafios)});
  }

  openModal(id:string){
      this.ideaService.shareId(id);
      this.modalRef = this.modalService.show(IdeaAdminComponent);
  }

  setStart(event: MatDatepickerInputEvent<Date>) {
      this.start = event.value.toLocaleString();
  }

  setFinish(event: MatDatepickerInputEvent<Date>) {
      this.finish = event.value.toLocaleString();
  }
  setIdea(idea:Idea){
    let aux:boolean = true;
       let idDesafio = idea.idDesafio;
       this.desafios.forEach(desafio => {
           if (idDesafio == desafio.id){
               this.nombreDesafio = desafio.titulo;
               aux = false;
           }
       });
    }
}
