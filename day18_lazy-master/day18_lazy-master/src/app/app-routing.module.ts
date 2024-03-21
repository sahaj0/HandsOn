import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
 // add a route for the students component that uses the path 'students' and the loadChildren method to load the StudentModule
 {path : 'students',component:StudentComponent},
 // add a route for the teachers component that uses the path 'teachers' and the loadChildren method to load the TeacherModule
 {path : 'teachers',component:TeacherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
