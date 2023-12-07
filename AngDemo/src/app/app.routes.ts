import { Routes } from '@angular/router';
import { ArtworkComponent } from './Artworks Component/artwork.component';
import { CounterComponent } from './Counter Componenet/counter.component';
import { TimeCounterComponent } from './Time-counter Component/time-counter.component';
import { ServicesTestComponent } from './Services-test Component/services-test.component';
import { ReactiveFormComponent } from './Reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'artwork-list', component: ArtworkComponent },
  { path: 'counter-page', component: CounterComponent },
  { path: 'time-counter', component: TimeCounterComponent },
  { path: 'services-test', component: ServicesTestComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'template-form', component: TemplateFormComponent },
  // { path: '', component: AppComponent}
];
