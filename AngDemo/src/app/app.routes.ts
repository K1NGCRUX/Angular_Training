import { Routes } from '@angular/router';
import { ArtworkComponent } from './Artworks/artwork.component';
import { CounterComponent } from './counter/counter.component';
import { AppComponent } from './app.component';
import { TimeCounterComponent } from './time-counter/time-counter.component';

export const routes: Routes = [
  { path: 'artwork-list', component: ArtworkComponent },
  { path: 'counter-page', component: CounterComponent },
  { path: 'time-counter', component: TimeCounterComponent },
  { path: '', component: AppComponent },
];
