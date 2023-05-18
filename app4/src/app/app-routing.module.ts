import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomemenuComponent } from './homemenu/homemenu.component';
import { CarmenuComponent } from './carmenu/carmenu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TelephonesComponent } from './telephones/telephones.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{path:'',component:HomepageComponent},
{path:'menu',component:HomemenuComponent},
{path:'car',component:CarmenuComponent},
{path:'contact',component:ContactusComponent},
{path:'telephone',component:TelephonesComponent},
{path:'details',component:DetailsComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
