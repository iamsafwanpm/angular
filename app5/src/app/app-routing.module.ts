import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CoursesComponent } from './courses/courses.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [{path:'',component:HomepageComponent},
{path:'about',component:AboutusComponent},
{path:'courses',component:CoursesComponent},
{path:'portofolio',component:PortofolioComponent},
{path:'pricing',component:PricingComponent},
{path:'contact',component:ContactComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
