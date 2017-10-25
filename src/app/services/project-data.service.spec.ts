/**
 * Tests the ProjectDataService as a standalone unit test without Angular
 * Doesn't require the Angular Test Bed
 * Simply instantiates the Service class and runs expectations
 */

import { ProjectDataService } from './project-data.service';

describe('ProjectDataService without TestBed', () => {
  let service: ProjectDataService;

  beforeEach(() => {
    service = new ProjectDataService();
  });

  it(`should return an array with length of more than 5`, () => {
    expect(service.projectData.length).toBeGreaterThan(5);
  });

  it(`should return an array with first object.name of 'Book Exchange'`, () => {
    expect(service.projectData[0].name).toBe('Book Exchange');
  });


});
