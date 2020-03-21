import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OngekiRoutes} from './ongeki.routing';
import {OngekiProfileComponent} from './ongeki-profile/ongeki-profile.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {OngekiCardComponent} from './ongeki-card/ongeki-card.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {OngekiCardListComponent} from './ongeki-card-list/ongeki-card-list.component';
import {OngekiRecentComponent} from './ongeki-recent/ongeki-recent.component';
import {ToolsModule} from '../../util/tools.module';
import {ToAttributeClassPipe} from './util/to-attribute-class.pipe';


@NgModule({
  declarations: [OngekiProfileComponent, OngekiCardComponent, OngekiCardListComponent, OngekiRecentComponent, ToAttributeClassPipe],
  imports: [
    CommonModule,
    FormsModule,
    OngekiRoutes,
    MatCardModule,
    NgxPaginationModule,
    MatButtonModule,
    ToolsModule
  ]
})
export class OngekiModule {
}
