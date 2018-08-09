import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private profileData: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getProfileData();

  }

  getProfileData(){
    this.dashboardService.getProfile()
      .subscribe(data => {
        this.profileData = data.data;
        console.log(this.profileData);
      }
    );
  }

  saveProfile(){

  }

}
