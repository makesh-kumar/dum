import { Component, TemplateRef } from '@angular/core';
import { ProfileService } from '../../profile.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pending-profile-list',
  templateUrl: './pending-profile-list.component.html',
  styleUrls: ['./pending-profile-list.component.css'],
})
export class PendingProfileListComponent {
  profiles: any[] = [];
  currentProfiles: any[] = [];
  currentIndex: number = 0;
  selectedProfile;
  dialogRef: MatDialogRef<any>;
  constructor(
    private profileService: ProfileService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe((data: any) => {
      this.profiles = data;
      this.showNextProfiles();
    });
  }

  showNextProfiles() {
    this.currentProfiles = this.profiles.slice(
      this.currentIndex,
      this.currentIndex + 2
    );
  }

  onYes(profile: any, dialogTemplate: TemplateRef<any>) {
    this.selectedProfile = profile;
    this.dialogRef = this.dialog.open(dialogTemplate, {
      width: '600px',
    });
  }

  onNo() {
    console.log('No clicked');
    this.onNext();
  }

  onNext() {
    if (this.currentIndex + 2 < this.profiles.length) {
      this.currentIndex += 2;
    } else {
      this.currentIndex = 0;
    }
    this.showNextProfiles();
  }

  onPrevious() {
    if (this.currentIndex - 2 >= 0) {
      this.currentIndex -= 2;
    } else {
      this.currentIndex = this.profiles.length - 2;
    }
    this.showNextProfiles();
  }
}
