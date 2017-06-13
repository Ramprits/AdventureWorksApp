import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { CommentComponent } from 'app/comment/comment.component';
import { CommentDetailComponent } from 'app/comment/comment-detail/comment-detail.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'comments',
    component: CommentComponent
  },
  {
    path: 'comments/:id',
    component: CommentDetailComponent
  },

  {
    path: '',
    redirectTo: 'dashboard', pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
