import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { SkillSummary } from 'app/_core/services/content.service';

@Component({
  selector: 'app-skills-summary',
  templateUrl: './skills-summary.component.html',
  styleUrls: ['./skills-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsSummaryComponent {

  @Input() skillsSummary: SkillSummary[];

  constructor() { }


}
