import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './pages/album/album.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FeaturesComponent } from './pages/features/features.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
	{ path: 'features', component: FeaturesComponent },
	{ path: 'product', component: ProductComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'album', component: AlbumComponent },
	{ path: 'heroes', component: HeroesComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
