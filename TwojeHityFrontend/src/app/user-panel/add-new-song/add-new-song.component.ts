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
import { AddSong } from 'src/app/models/addSong.model';
import { Favorites } from 'src/app/models/favorites.model';
import { AddSongWithFavorite } from 'src/app/models/addSongWithFavorite.model';
import { AuthToken } from 'src/app/models/auth-token';
@Component({
  selector: 'app-add-new-song',
  templateUrl: './add-new-song.component.html',
  styleUrls: ['./add-new-song.component.scss']
})
export class AddNewSongComponent {
  isFavorite: string = "false";
  addToFavorite: Favorites;
  userId: number;
  private response;
  public newSongForm = new FormGroup( {
    title: new FormControl(''),
    artist: new FormControl(''),
    album: new FormControl(''),
    year:  new FormControl<number>(2000),
    isFavorite: new FormControl('option2') //.setValue("false", {emitEvent: true})

  });
  handleFavoriteChange(event: any) {
    console.log(event.target.value)
    this.isFavorite = event.target.value
return  event.target.value
   // event.target.value(console.log(this.value))
 }

  private song: AddSong
  private songFav: AddSongWithFavorite

   constructor(private router : Router, private authService : AuthService,  private songService: SongService, private configStore: ConfigStore,  private alertService: AlertService ) {}
 
  ngOnInit(): void {
    this.isFavorite = "false";
    this.newSongForm.setValue({
      isFavorite: "false",
      title: '',
      artist: '',
      album: '',
      year: 2023
    });
   
    const userData = JSON.parse(localStorage.getItem('userData'));
     this.userId = userData.id;
    console.log('kk'+  this.userId)
   }

  async SaveNewSong() {
   this.addToFavorite = {
      UserId: this.userId
   }
    this.configStore.startLoadingPanel();
     console.log(this.newSongForm);
     console.log("asdsa" + this.isFavorite)
   if (this.isFavorite == "true")
  {
    this.songFav = new AddSongWithFavorite(this.newSongForm.value.title, this.newSongForm.value.artist, this.newSongForm.value.album, this.newSongForm.value.year, this.addToFavorite)
    console.log(this.songFav);
    this.response =  await lastValueFrom(this.songService.addNewWithFavorite(this.songFav))
     this.configStore.stopLoadingPanel();
     this.alertService.showSuccess("Dodano pomyślnie!");
     this.alertService.showSuccess("Dodano do ulubionmych!");
   } 
     if (this.isFavorite.valueOf() == "false")
     {
      this.song = new AddSong(this.newSongForm.value.title, this.newSongForm.value.artist, this.newSongForm.value.album, this.newSongForm.value.year)
      console.log(this.song);
      this.response =  await lastValueFrom(this.songService.addNew(this.song))
       this.configStore.stopLoadingPanel();
       this.alertService.showSuccess("Dodano pomyślnie!");
      
     }

  //  console.log(this.song);
  //  this.response =  await lastValueFrom(this.songService.addNew(this.song))
  //  this.configStore.stopLoadingPanel();
   }
   
}
