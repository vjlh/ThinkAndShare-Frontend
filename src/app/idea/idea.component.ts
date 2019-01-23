import { Component, OnInit} from '@angular/core';
import {Idea,Comentario, IdeaService }  from '../services/idea.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {

  idea: Idea;
  id: string;

  constructor(
    private ideaService: IdeaService,
    public modalRef: BsModalRef,
  ) {}

  ngOnInit(): void {
    this.getIdea();
  }
  getIdea(): void {
    this.id = this.ideaService.getId();
    this.ideaService.getIdea(this.id).subscribe(idea => this.idea = idea);
  }

  meGusta(idIdea:string):void {
    this.ideaService.meGusta(idIdea).subscribe(idea => this.idea.meGusta = idea.meGusta);
  }
  addComentario(comentario:string, idIdea:string): void {
    let nombreIdeador: string = "Percy";
    comentario = comentario.trim();

    if (!nombreIdeador || !comentario ) { return; }
    this.ideaService.addComentario({nombreIdeador,comentario} as Comentario,idIdea).subscribe(idea => this.idea.comentarios = idea.comentarios);
  }
}
