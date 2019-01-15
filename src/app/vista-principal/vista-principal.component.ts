import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css']
})

export class VistaPrincipalComponent implements OnInit {

  ideas: Idea[];

  constructor(private ideaService: IdeaService) { }

  ngOnInit() {
      this.ideaService.getIdeas()
      .subscribe(ideas => this.ideas = ideas);
  }
  
}
