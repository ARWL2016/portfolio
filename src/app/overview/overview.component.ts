import { Component, OnInit, HostListener } from '@angular/core';
import { ProjectDataService } from 'app/services/project-data.service';
import { Project } from 'app/services/project';
import { pageTransition } from '../../animations';
import { Router } from '@angular/router';
import { PingService } from 'app/services/ping.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [pageTransition]
})
export class OverviewComponent implements OnInit {

  projectData: Project[];

  constructor(
    private dataService: ProjectDataService,
    private router: Router,
    private ping: PingService
  ) { }

  ngOnInit() {
    this.getProjectData();
  }

  private async getProjectData() {
    if (this.dataService.projectData) {
      this.projectData = this.dataService.projectData.filter(project => project.featured);
    } else {
      const data = await this.dataService.getProjectData()

      if (data) {
        this.projectData = data.filter(project => project.featured);
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!this.ping.pinged.primary && window.scrollY > 400) {
      this.ping.postPing('primary');
    }
  }

  public scrollTo() {
    document.querySelector('#contactForm').scrollIntoView({behavior: 'smooth' });
  }

  public navigateTo(page): void {
    this.router.navigate([page]);
    this.scrollToTop();
  }

  public scrollToTop(): void {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
