import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ConfigStore } from 'src/app/app-config/config-store';
import { Login } from 'src/app/models/login.model';
import { Song } from 'src/app/models/song.model';
import { AlertService } from 'src/app/services/app-services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { SongService } from 'src/app/models/song.service';

@Component({
  selector: 'app-add-new-song',
  templateUrl: './add-new-song.component.html',
  styleUrls: ['./add-new-song.component.scss']
})
export class AddNewSongComponent {
  isFavorite: string
  public newSongForm = new FormGroup( {
    title: new FormControl(''),
    artist: new FormControl(''),
    album: new FormControl(''),
    year:  new FormControl<number>(2000),
    isFavorite: new FormControl('option2')

  });
  handleFavoriteChange(event: any) {
    console.log(event.target.value)
return  event.target.value
   // event.target.value(console.log(this.value))
 }

 private song : Song

   constructor(private router : Router, private authService : AuthService,  private songService: SongService, private configStore: ConfigStore,  private alertService: AlertService ) {}
 
   ngOnInit(): void {}

   async SaveNewSong() {
    this.configStore.startLoadingPanel();
    console.log(this.newSongForm);
    this.song = new Song(null, this.newSongForm.value.title, this.newSongForm.value.artist, this.newSongForm.value.album, this.newSongForm.value.year)
    console.log(this.song);
    this.songService.addNew(this.song);
    this.configStore.stopLoadingPanel();
   }
   
}
