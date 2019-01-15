import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-vista-administrador',
  templateUrl: './vista-administrador.component.html',
  styleUrls: ['./vista-administrador.component.css']
})

export class VistaAdministradorComponent implements OnInit {

  ideas: Idea[];

  constructor(private ideaService: IdeaService) { }

  ngOnInit() {
    this.ideaService.getIdeas()
        .subscribe(ideas => this.ideas = ideas);
  }

}
