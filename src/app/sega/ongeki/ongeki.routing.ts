import {RouterModule, Routes} from '@angular/router';
import {OngekiProfileComponent} from './ongeki-profile/ongeki-profile.component';
import {OngekiCardComponent} from './ongeki-card/ongeki-card.component';
import {OngekiCardListComponent} from './ongeki-card-list/ongeki-card-list.component';
import {OngekiRecentComponent} from './ongeki-recent/ongeki-recent.component';


const routes: Routes = [
  {path: 'profile', component: OngekiProfileComponent},
  {path: 'recent', component: OngekiRecentComponent},
  {path: 'card', component: OngekiCardComponent},
  {path: 'card/all', component: OngekiCardListComponent},
];

export const OngekiRoutes = RouterModule.forChild(routes);
