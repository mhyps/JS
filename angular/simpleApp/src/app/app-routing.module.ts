import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { ServerComponent } from './servers/server/server.component';
import { EditserverComponent } from './servers/editserver/editserver.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditserverComponent },
    ],
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id', component: UserComponent }],
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
