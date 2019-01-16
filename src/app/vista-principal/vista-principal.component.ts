import { Component, OnInit } from '@angular/core';
import { Idea, IdeaService } from '../idea.service';
import { Desafio, DesafioService } from '../desafio.service';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css']
})

export class VistaPrincipalComponent implements OnInit {

  ideas: Idea[];
  desafios: Desafio[];  

  constructor(private ideaService: IdeaService, private desafioService: DesafioService) { }

  ngOnInit() {
      this.ideaService.getIdeas()
      .subscribe(ideas => this.ideas = ideas);
      this.desafioService.getDesafios()
      .subscribe(desafios => this.desafios = desafios);
      
  }

  add(titulo: string, descripcion: string): void {
    titulo = titulo.trim();
    descripcion = descripcion.trim();
    let nombreIdeador: string = 'Autorcito';
    let idDesafio:number=0;

    if (!titulo || !descripcion ) { return; }
    this.ideaService.addIdea({titulo,descripcion,idDesafio,nombreIdeador} as Idea)
      .subscribe(idea => {
        this.ideas.push(idea);
      });
  }
  meGusta(idIdea:string) {
    this.ideaService.meGusta(idIdea).subscribe();
    this.ideaService.getIdeas()
      .subscribe(ideas => this.ideas = ideas);
  }
  filtrar(filtro:string){
    this.ideaService.filter(filtro)
      .subscribe(ideas => {this.ideas = ideas; console.log(this.ideas)});
  }
  order(criterio:string){
    this.ideaService.order(criterio)
      .subscribe(ideas => {this.ideas = ideas; console.log(this.ideas)});
  }

  addDesafio(titulo: string, descripcion: string): void {
    titulo = titulo.trim();
    descripcion = descripcion.trim();
    if (!titulo || !descripcion ) { return; }
    this.desafioService.addDesafio({titulo,descripcion} as Desafio)
      .subscribe(desafio => {
        this.desafio.push(desafio);
      });
  }
}
