import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { SpeakersComponent } from 'app/speakers/speakers/speakers.component';
import { SessionDetailsComponent } from 'app/session/session-details/session-details.component';
import {RouteInfo} from './route-info.interface';
export const ROUTES: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'speakers',   component: SpeakersComponent },
    { path: 'session/:id',   component: SessionDetailsComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
export const LINKS: RouteInfo[] = [
    { route: ROUTES[0], title: 'Dashboard',  icon: 'dashboard', position:['side']},
    { route: ROUTES[1], title: 'Our Speakers',  icon: 'person', position:['side']},
    { route: ROUTES[2], title: 'Sessions',  icon: 'person', position:[]},
];