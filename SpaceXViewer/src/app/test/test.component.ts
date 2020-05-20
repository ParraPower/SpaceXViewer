import { Component, OnInit } from '@angular/core';
import { Launch } from '../models/launch';
import { LaunchService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './test.component.html',
  styleUrls: [ './test.component.scss' ]
})
export class DashboardComponent implements OnInit {
  launches: Launch[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getLaunches();
  }

  getLaunches(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.launches = heroes.slice(1, 5));
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/