import { Component, OnInit, Input } from '@angular/core';
import { Idea } from '../idea';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IdeaService }  from '../idea.service';


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

  onClickMe() {
    this.clickMessage = 'You are my idea!';
  }

}
