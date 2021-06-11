import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent} from './components/map/map.component'
import { WelcomeComponent } from './components/welcome/welcome.component'
import { MapContentsComponent } from './components/map/map-contents/map-contents.component'
import { AboutComponent } from './components/about/about.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    data: {
        label: 'Home'
    }
},
{
  path: 'about',
  component: AboutComponent,
  data: {
    label: 'About'
  }
},
{
  path: 'test',
  component: TestComponent,
  data: {
    label: 'Test'
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
