import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent} from './components/map/map.component'
import { WelcomeComponent } from './components/welcome/welcome.component'
import { MapContentsComponent } from './components/map/map-contents/map-contents.component'

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    data: {
        label: 'Home'
    }
},
{
    path: 'map',
    component: MapComponent,
    data: {
        label: 'Map'
    },
    children:[
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
    },
    {
        path: 'contents',
        component: MapContentsComponent,
        data: {
            label: 'Map Contents',
            icon: 'list'
        }
    },
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
