import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { AccordionMenuComponent } from './components/accordion-menu/accordion-menu.component';
import { CategoryService } from './services/category.service';
import { ProductComponent } from './components/product/product.component';
import { HelperComponent } from './components/helper/helper.component';
import { ModelComponent } from './components/model/model.component';
import { MaterialComponent } from './components/material/material.component';
import { TextureComponent } from './components/texture/texture.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NavbarService } from './services/navbar.service';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


const routeConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'models', redirectTo: 'models/all', pathMatch: 'full'},
  {
    path: 'models/:id', component: ModelComponent
  },
  { path: 'materials', component: MaterialComponent },
  { path: 'textures', component: TextureComponent },
  { path: 'helper', component: HelperComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LeftSidebarComponent,
    HomeComponent,
    AccordionMenuComponent,
    ProductComponent,
    HelperComponent,
    ModelComponent,
    MaterialComponent,
    TextureComponent,
    PagenotfoundComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [
    CategoryService,
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
