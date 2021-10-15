import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { PhonePipe } from './phone.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FriendsComponent } from './friends/friends.component';

const routes = [
  {
    path: '',
    redirectTo: 'sampleApp',
    pathMatch: 'full',
  },
  {
    path: 'sampleApp',
    component: UserListComponent
  },
  {
    path: 'sampleApp/add',
    component: UserComponent
  },
  {
    path: 'sampleApp/:id/view',
    component: UserComponent
  },
  

]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    PhonePipe,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
