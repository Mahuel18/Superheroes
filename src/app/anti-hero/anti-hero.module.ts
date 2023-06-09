import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntiHeroCommandBarComponent } from './components/anti-hero-command-bar/anti-hero-command-bar.component';
import { AntiHeroListComponent } from './components/anti-hero-list/anti-hero-list.component';
import { AntiHeroFormComponent } from './components/anti-hero-form/anti-hero-form.component';
import { AntiHeroRoutingModule } from './anti-hero-routing.module';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/form/form.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card'



@NgModule({
  declarations: [
    AntiHeroListComponent,
    AntiHeroFormComponent,
    ListComponent,
    FormComponent,
    AntiHeroCommandBarComponent,
  ],
  imports: [
    CommonModule,
    AntiHeroRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatCardModule
    
  ]
})
export class AntiHeroModule { }