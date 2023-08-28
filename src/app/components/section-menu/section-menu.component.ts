import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-menu',
  templateUrl: './section-menu.component.html',
  styleUrls: ['./section-menu.component.css']
})
export class SectionMenuComponent implements OnInit {

  logo: string = '../../../assets/icons-sidebar/analisis.png';
  dashboard: string = '../../../assets/icons-sidebar/home.svg';
  ourProject: string = '../../../assets/icons-sidebar/projects.svg'
  members: string = '../../../assets/icons-sidebar/member.svg';
  email: string = '../../../assets/icons-sidebar/mail.svg';
  chatSupport: string = '../../../assets/icons-sidebar/Vector.svg';
  timeTable: string = '../../../assets/icons-sidebar/time.svg';
  contact: string = '../../../assets/icons-sidebar/phone.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
