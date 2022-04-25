import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Observable, switchMap } from 'rxjs';
import { ProjectTask } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project/project.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.scss']
})
export class ProjectTaskComponent implements OnInit, AfterViewInit {
  @Input() projectId!: number;
  @ViewChild('editDescription') editDescription!: ElementRef;
  @ViewChild('editEmp') editEmp!: ElementRef;
  @ViewChild('ToDo') ToDo!: ElementRef;
  @ViewChild('InProgress') InProgress!: ElementRef;
  @ViewChild('Finished') Finished!: ElementRef;

  employees!: Observable<Employee[]>;
  tasks!: Observable<ProjectTask[]>;

  sendingTask: ProjectTask = { ptId: this.projectId, ptEmpId: 0, ptEmpName: '', ptContent: '', ptEstimatedCost: 0, ptState: 'ToDo'};
  editedTask!: ProjectTask;
  constructor(private projectHttp: ProjectService, private route: ActivatedRoute, private empHttp: EmployeeService) { }


  ngAfterViewInit(): void {
    this.initCollapsible();
    this.initDP();
  }

  initCollapsible() {
    var elems = document.querySelectorAll('.collapsible');
    var options = {
      accordion: false
    }
    var instances = M.Collapsible.init(elems, options);
  }

  initDP() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {});
  }

  ngOnInit(): void {
    this.getTasks();
    this.employees = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.empHttp.getTeamEmployees(params.get('id') || '0'))
    );
  }

  addTask(): void {
    let response = this.projectHttp.putTask(this.sendingTask);
    this.getTasks();
  }

  setEditedTask(task: ProjectTask): void {
    this.editedTask = task;
    console.log(this.editedTask);
    console.log(this.ToDo);
    if(this.editedTask.ptState == 'ToDo') {
      this.ToDo.nativeElement.checked = true;
    }
    else if (this.editedTask.ptState == 'In progress') {
      this.InProgress.nativeElement.checked = true;
    }
    else if (this.editedTask.ptState == 'Finished') {
      this.Finished.nativeElement.checked = true;
    }
    this.editDescription.nativeElement.value = this.editedTask.ptContent;
    this.editEmp.nativeElement.value = this.editedTask.ptEmpName;
  }

  setTaskFinished(task: ProjectTask): void {
    let response = this.projectHttp.postTask(task);
    //task.ptState = 'Finished';
    this.getTasks();
  }

  getTasks(): void {
    this.tasks = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.projectHttp.getTasks(params.get('id') || '0'))
    );
  }

  addTime(){}//TODO : dokończyć sidenava, następnie dodać metodę i walidację na wprowadzany czas.
}