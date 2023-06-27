import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConfig } from "../app-config/app.config";
import { AlertService } from "../services/app-services/alert.service";
import { AuthService } from "../services/auth.service";
import { Song } from "./song.model";

@Injectable()
export class SongService{

    private serverUrl: string = AppConfig.APP_URL;
    private apiUrl: string = `${this.serverUrl}api/song/`;

    constructor(private httpClient: HttpClient, private alertService: AlertService, private authService: AuthService)
    {

    }

    getAll() {
        return this.httpClient.get<Song[]>(`${this.apiUrl}`)
    }

    addNew(song: Song) {
        return this.httpClient.post<Song>(`${this.apiUrl}addNewSong`,song)
    }
}