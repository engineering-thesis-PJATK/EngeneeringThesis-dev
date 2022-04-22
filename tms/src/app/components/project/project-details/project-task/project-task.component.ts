import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectTask } from 'src/app/models/project';

@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.scss']
})
export class ProjectTaskComponent implements OnInit {
  @Input() projectId!: number;
  @Input() tasks!: ProjectTask[];
  @Output() newTask = new EventEmitter<ProjectTask>();

  sendingTask: ProjectTask = { ptId: this.projectId, ptEmpId: 0, ptContent: '', ptEstimatedCost: 0};
  constructor() { }

  ngOnInit(): void {
  }

  // TODO: metoda dodająca task - jeżeli się powiedzie to odświeżenie sql lub push do lokalnej listy

}
