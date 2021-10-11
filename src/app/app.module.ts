import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { AlbumComponent } from './pages/album/album.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FeaturesComponent } from './pages/features/features.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { ProductComponent } from './pages/product/product.component';

@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		FeaturesComponent,
		AlbumComponent,
		DashboardComponent,
		HeroesComponent,
		ProductComponent
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
