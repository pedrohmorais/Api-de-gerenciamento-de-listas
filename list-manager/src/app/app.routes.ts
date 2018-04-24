import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ListItemsComponent } from './lists/list-items/list-items.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {
        path: 'list/:id', component: ListItemsComponent,
    }
]