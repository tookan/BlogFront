import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {NoteComponent} from "./note.component";
import {IndexComponent} from "./index.component";
import {RegisterComponent} from "./register.component";
import {LoginFormComponent} from "./login-form.component";
import {NoteCreateComponent} from "./note-create.component";
import {UserComponent} from "./user.component";
import {UsersAdminComponent} from "./users-admin.component";
import {CommentsAdminComponent} from "./comments-admin.component";
import {AdminComponent} from "./admin.component";
import {NotesAdminComponent} from "./notes-admin.component";
import {ProfileCreateComponent} from "./profile-create.component";

const routes: Routes = [{path: 'note/:id', component: NoteComponent},
    {path: 'all/page/:num', component: IndexComponent},
    {path: '', redirectTo: 'all/page/1', pathMatch: 'full'},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginFormComponent},
    {path: 'create_article', component: NoteCreateComponent},
    {path: 'personal_page/:username/:page', component: UserComponent},
    {path: 'panel', component: AdminComponent , children: [
        {path: 'users_admin', component: UsersAdminComponent},
        {path: 'comments_admin', component: CommentsAdminComponent},
        {path: 'notes_admin', component: NotesAdminComponent}]},
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
