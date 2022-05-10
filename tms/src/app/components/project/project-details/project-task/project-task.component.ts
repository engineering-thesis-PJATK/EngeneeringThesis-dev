import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Observable, switchMap } from 'rxjs';
import { ProjectTask, TaskTime } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project/project.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';
declare const M: any;
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
  timeTaskInput!: ProjectTask;
  time!: TaskTime;
  timeValue: string = '';
  dateValue: string = '';
  constructor(private projectHttp: ProjectService, private route: ActivatedRoute, private empHttp: EmployeeService) { }


  ngAfterViewInit(): void {
    this.initCollapsible();
    this.initDP();
  }

  initCollapsible() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
  }

  initDP() {
    var elems2 = document.querySelectorAll('.datepicker');
    var instances2 = M.Datepicker.init(elems2, {});
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

  setTaskTimeInput(task: ProjectTask): void {
    this.timeTaskInput = task;
  }

  setTaskFinished(task: ProjectTask): void {
    task.ptState = 'Finished';
    let response = this.projectHttp.postTask(task);
    this.getTasks();
  }

  getTasks(): void {
    this.tasks = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.projectHttp.getTasks(params.get('id') || '0'))
    );
  }

  addTime(): void {
    if(this.dateValue == '' || this.timeValue == ''){
      return;
    }
    let dateParsed = new Date(this.dateValue);
    let minutes = '0';
    let hours = '0';
    let colonIndex = this.timeValue.indexOf(':');
    let timeLength = this.timeValue.length;

    if(colonIndex == 0)
    {
      minutes = this.timeValue.substring(1,timeLength);
    }
    else if(colonIndex > 0) {
      hours = this.timeValue.substring(0,colonIndex);
      minutes = this.timeValue.substring(colonIndex+1,timeLength-colonIndex+1);
    }
    let minutesFloat = parseFloat(minutes) + (parseFloat(hours)*60);
    let pt : TaskTime = { ptTaskId: this.timeTaskInput.ptId, ptDate: dateParsed, ptMinutes: minutesFloat } ;
    this.projectHttp.postTime(pt);
  }

  updateTask(): void {
    this.projectHttp.putTask(this.editedTask);
    this.getTasks();
  }
}