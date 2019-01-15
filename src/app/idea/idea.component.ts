import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Idea,Comentario, IdeaService }  from '../idea.service';


@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {

  @Input() idea: Idea;
  clickMessage = '';

  constructor(
    private route: ActivatedRoute,
    private ideaService: IdeaService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getIdea();
  }

  getIdea(): void {
    const id = ""+this.route.snapshot.paramMap.get('id');
    this.ideaService.getIdea(id)
      .subscribe(idea => this.idea = idea);
  }

  goBack(): void {
    this.location.back();
  }

  meGusta(idIdea:string):void {
    this.ideaService.meGusta(idIdea).subscribe(idea => this.idea = idea);
  }
  addComentario(comentario:string,idIdea:string): void {
    let nombreIdeador: string = "autorcito";
    comentario = comentario.trim();

    if (!nombreIdeador || !comentario ) { return; }
    this.ideaService.addComentario({nombreIdeador,comentario} as Comentario,idIdea).subscribe();
      /*.subscribe(idea => {
        this.ideas.push(idea);
      });*/
  }
}

