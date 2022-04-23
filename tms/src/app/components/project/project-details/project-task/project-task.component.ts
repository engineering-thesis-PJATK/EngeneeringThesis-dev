import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  //@Input() tasks!: ProjectTask[];
  //@Output() newTask = new EventEmitter<ProjectTask>();

  employees!: Observable<Employee[]>;
  tasks!: Observable<ProjectTask[]>;

  sendingTask: ProjectTask = { ptId: this.projectId, ptEmpId: 0, ptEmpName: '', ptContent: '', ptEstimatedCost: 0};
  constructor(private projectHttp: ProjectService, private route: ActivatedRoute, private empHttp: EmployeeService) { }


  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('.collapsible');
    var options = {
      accordion: false
    }
    var instances = M.Collapsible.init(elems, options);
  }

  ngOnInit(): void {
    this.getTasks();
    this.employees = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.empHttp.getTeamEmployees(params.get('id') || '0'))
    );
  }

  // TODO: metoda dodająca task - jeżeli się powiedzie to odświeżenie sql lub push do lokalnej listy??
  addTask(): void {
    let response = this.projectHttp.putTask(this.sendingTask);
    this.getTasks();
    console.log('done');
  }

  getTasks(): void {
    this.tasks = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.projectHttp.getTasks(params.get('id') || '0'))
    );
  }
}