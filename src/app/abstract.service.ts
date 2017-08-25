import {Injectable} from "@angular/core";
import {environment} from '../environments/environment';
import {UserService} from "./user.service";
import {Http} from "@angular/http";


@Injectable()
export abstract class AbstractService {
    get apiUrl() {
        return environment.apiUrl;
    }

    url() {
        return this.apiUrl;
    }

}
