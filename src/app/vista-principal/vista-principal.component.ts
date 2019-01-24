import { Component, OnInit } from '@angular/core';
import { Idea, IdeaService } from '../services/idea.service';
import { IdeaComponent} from '../idea/idea.component';
import { Desafio, DesafioService } from '../services/desafio.service';
import {PostIdea} from '../services/idea';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-vista-principal',
    templateUrl: './vista-principal.component.html',
    styleUrls: ['./vista-principal.component.css']
})

export class VistaPrincipalComponent implements OnInit {
    ideas: Idea[];
    idea: Idea;
    desafios: Desafio[];
    nombreDesafio: string;
    index: 0;
    index2: 0;
    modalRef: BsModalRef;


    constructor(private ideaService: IdeaService, private desafioService: DesafioService, private modalService: BsModalService) { }

    ngOnInit() {
        this.ideaService.getIdeas()
        .subscribe(ideas => this.ideas = ideas);
        this.desafioService.getDesafios()
        .subscribe(desafios => this.desafios = desafios);
    }

    add(titulo: string, descripcion: string, idDesafio:string): void {
        titulo = titulo.trim();
        descripcion = descripcion.trim();
        let nombreIdeador: string = 'Autor';
        idDesafio= idDesafio.trim();


        if (!titulo || !descripcion ) { return; }
        this.ideaService.addIdea({titulo,descripcion,idDesafio,nombreIdeador} as PostIdea)
        .subscribe(idea => {
            this.ideas.push(idea);
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

    addDesafio(titulo: string, descripcion: string, inicio: string, termino: string): void {
        titulo = titulo.trim();
        descripcion = descripcion.trim();
        inicio = inicio.trim();
        termino = termino.trim();
        if (!titulo || !descripcion || !inicio || !termino) { return; }
        this.desafioService.addDesafio({titulo,descripcion,inicio,termino} as Desafio)
        .subscribe(desafio => {
            this.desafios.push(desafio);
        });
    }

    openModal(id:string){
        this.ideaService.shareId(id);
        this.modalRef = this.modalService.show(IdeaComponent);
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
        if(aux)
            this.nombreDesafio = "Idea libre";
    }
}
