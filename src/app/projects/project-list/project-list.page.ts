import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.page.html',
  styleUrls: ['./project-list.page.scss'],
})
export class ProjectListPage implements OnInit {

  constructor(private router: Router) { }

  first() {
    this.router.navigate(['/tabs/tab3']);
  }

  ngOnInit() {
  }

}
export class ProjectListPageRoutingModule {}
