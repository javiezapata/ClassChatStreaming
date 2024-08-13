import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { streamingComponent } from './pages/streaming/streaming.component';
import { LogginComponent } from  './pages/loggin/loggin.component';
import { RegisterComponent } from  './pages/register/register.component';
import { AuthGuard } from './servives/auth.guard';

const routes: Routes = [

  { path: 'streaming', component: streamingComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LogginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/streaming', pathMatch: 'full' },
  { path: '**', redirectTo: '/streaming', pathMatch: 'full' },

];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
