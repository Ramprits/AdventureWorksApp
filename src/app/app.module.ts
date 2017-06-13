import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrService } from 'app/common/shared/toastr.service';
import { CommentComponent } from './comment/comment.component';
import { CommentDetailComponent } from 'app/comment/comment-detail/comment-detail.component';
import { CommentService } from 'app/comment/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    CommentComponent,
    CommentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ToastrService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
