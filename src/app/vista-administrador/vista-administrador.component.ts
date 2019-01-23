import { Component, OnInit } from '@angular/core';
import { Idea, IdeaService } from '../services/idea.service';
import { Desafio, DesafioService } from '../services/desafio.service';
import { IdeaComponent} from '../idea/idea.component';

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


  constructor(private ideaService: IdeaService, private desafioService: DesafioService, private modalService: BsModalService) { }

  ngOnInit() {
      this.ideaService.getIdeas()
      .subscribe(ideas => this.ideas = ideas);
      this.desafioService.getDesafios()
      .subscribe(desafios => this.desafios = desafios);

  }

  addDesafio(titulo: string, descripcion: string): void {
    titulo = titulo.trim();
    descripcion = descripcion.trim();
    let inicio: "10/10/2010";
    let termino: "10/10/2010";
    //if (!titulo || !descripcion || !inicio || !termino) { return; }
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

  order(criterio:string){
      this.ideaService.order(criterio)
      .subscribe(ideas => {this.ideas = ideas; console.log(this.ideas)});
  }

  openModal(id:string){
      this.ideaService.shareId(id);
      this.modalRef = this.modalService.show(IdeaComponent);
  }

  
}
