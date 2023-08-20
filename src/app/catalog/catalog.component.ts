import { Component } from '@angular/core';

import { UserRepositoryService } from "../services/user-repository.service"
import { CatalogRepositoryService } from './catalog-repository.service';
import { IClass } from './class.model';

@Component({
  styleUrls: ['./catalog.component.css'],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent {
  classes: IClass[] = [];
  visibleClasses: IClass[] = [];

  constructor(public catalogRepository:CatalogRepositoryService, public userRepositoryService: UserRepositoryService) {}

  ngOnInit() {
    this.catalogRepository.getCatalog()
      .subscribe(classes => { this.classes = classes; this.applyFilter('')});
  }

  enroll(classToEnroll: IClass) {
    classToEnroll.processing = true;
    this.userRepositoryService.enroll(classToEnroll.classId)
      .subscribe(
        null,
        (err) => {console.error(err); classToEnroll.processing = false}, //add a toast message or something
        () => {classToEnroll.processing = false; classToEnroll.enrolled=true;},
      );
  }

  drop(classToDrop: IClass) {
    classToDrop.processing = true;
    this.userRepositoryService.drop(classToDrop.classId)
      .subscribe(
        null,
        (err) => { console.error(err); classToDrop.processing = false}, //add a toast message or something
        () => {classToDrop.processing = false; classToDrop.enrolled=false;}
      );
  }

  applyFilter(filter: string) {
    if (!filter)
      return this.visibleClasses = this.classes;

    if (filter === 'GEN') {
      return this.showOnlyGeneralCourses();
    }

    return this.visibleClasses = this.classes.filter(c => c.course.courseNumber.startsWith(filter));
  }

  showOnlyGeneralCourses() {
   return this.visibleClasses = this.classes.filter(c =>
      !c.course.courseNumber.startsWith('CH') &&
      !c.course.courseNumber.startsWith('PO') &&
      !c.course.courseNumber.startsWith('SP'));
  }
}
