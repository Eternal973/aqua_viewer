import {RouterModule, Routes} from '@angular/router';
import {OngekiProfileComponent} from './ongeki-profile/ongeki-profile.component';
import {OngekiCardComponent} from './ongeki-card/ongeki-card.component';
import {OngekiCardListComponent} from './ongeki-card-list/ongeki-card-list.component';
import {OngekiRecentComponent} from './ongeki-recent/ongeki-recent.component';
import {OngekiSongListComponent} from './ongeki-song-list/ongeki-song-list.component';
import {OngekiBattlePointComponent} from './ongeki-battle-point/ongeki-battle-point.component';
import {OngekiRatingComponent} from './ongeki-rating/ongeki-rating.component';


const routes: Routes = [
  {path: 'profile', component: OngekiProfileComponent},
  {path: 'recent', component: OngekiRecentComponent},
  {path: 'song', component: OngekiSongListComponent},
  {path: 'battle', component: OngekiBattlePointComponent},
  {path: 'rating', component: OngekiRatingComponent},
  {path: 'card', component: OngekiCardComponent},
  {path: 'card/all', component: OngekiCardListComponent},
];

export const OngekiRoutes = RouterModule.forChild(routes);
