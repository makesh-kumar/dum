import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent implements OnInit {
  profiles: any[] = [];
  currentProfileIndex = 0;

  constructor(
    private profileService: ProfileService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe((data: any) => {
      this.profiles = data;
    });
  }

  get currentProfile() {
    return this.profiles[this.currentProfileIndex];
  }

  navigateNextProfile() {
    this.currentProfileIndex =
      (this.currentProfileIndex + 1) % this.profiles.length;
  }

  showToast(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }

  onSwipeLeft() {
    this.showToast('Not Interested');
    this.navigateNextProfile();
  }

  onSwipeRight() {
    this.showToast('Interested');
    this.navigateNextProfile();
  }

  onShortlist() {
    this.showToast('Shortlisted');
    this.navigateNextProfile();
  }
}
