import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessageService } from './message.service';
import { IdeaService } from './services/idea.service';
import { IdeaComponent } from './idea/idea.component';
import { AppRoutingModule } from './app-routing.module';
import { DesafioService } from './services/desafio.service';
import { DesafioComponent } from './desafio/desafio.component';

import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { VistaAdministradorComponent } from './vista-administrador/vista-administrador.component';


//Angular Material Components
import { MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    IdeaComponent,
    DesafioComponent,
    VistaPrincipalComponent,
    VistaAdministradorComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    MatFormFieldModule,

    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,        
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,      
    ModalModule.forRoot(),
  ],

  providers: [
    IdeaService,
    DesafioService,
    BsModalRef
  ],
  bootstrap: [AppComponent],
  entryComponents: [ IdeaComponent ]


})
export class AppModule { }
