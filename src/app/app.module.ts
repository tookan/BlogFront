import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar.component';
import {LoginFormComponent} from './login-form.component';
import {HttpModule} from '@angular/http';
import {IndexComponent} from "./index.component";

import {NotesService} from './notes.service';
import {AppRoutingModule} from './app-routing.module';
import {NoteComponent} from "./note.component";
import {SearchComponent} from './search.component';
import {FormsModule} from "@angular/forms";
import {UserService} from "./user.service";
import {CookieService} from "angular2-cookie/core";
import {RegisterComponent} from "./register.component";
import {CommentsComponent} from "./comments.component";
import {CommentsService} from "./comments.service";
import {NoteCreateComponent} from "./note-create.component";
import {UserComponent} from "./user.component";
import {UsersAdminComponent} from "./users-admin.component";
import {CommentsAdminComponent} from "./comments-admin.component";
import {AdminComponent} from "./admin.component";
import {NotesAdminComponent} from "./notes-admin.component";
import {SearchService} from "./search.service";
import {ProfileCreateComponent} from "./profile-create.component";
import { CKEditorModule } from 'ng2-ckeditor';
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginFormComponent,
        IndexComponent,
        NoteComponent,
        SearchComponent,
        RegisterComponent,
        CommentsComponent,
        NoteCreateComponent,
        UserComponent,
        UsersAdminComponent,
        CommentsAdminComponent,
        AdminComponent,
        NotesAdminComponent,
        ProfileCreateComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
        CKEditorModule,
    ],
    providers: [NotesService, UserService, CookieService,
        CommentsService,
    SearchService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
