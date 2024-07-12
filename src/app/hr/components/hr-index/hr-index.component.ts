import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../shared/models/Employee';
import { HrService } from '../../services/hr.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hr-index',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './hr-index.component.html',
  styleUrl: './hr-index.component.css'
})
export class HrIndexComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private hrService: HrService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.hrService.getEmployees().subscribe(
      data => {
        this.employees = data;
      },
      error => {
        console.error('Errore:', error);
      }
    );
  }

  addEmployee(): void {
    const newEmployee: Employee = new Employee(0, 'John', 'Doe', 'Developer', new Date(), 60000);
    this.hrService.addEmployee(newEmployee).subscribe(
      data => {
        this.employees.push(data);
      },
      error => {
        console.error('Errore:', error);
      }
    );
  }

  updateEmployee(employee: Employee): void {
    this.hrService.updateEmployee(employee).subscribe(
      data => {
        const index = this.employees.findIndex(emp => emp.id === data.id);
        if (index !== -1) {
          this.employees[index] = data;
        }
      },
      error => {
        console.error('Errore:', error);
      }
    );
  }

  deleteEmployee(id: number): void {
    this.hrService.deleteEmployee(id).subscribe(
      () => {
        this.employees = this.employees.filter(emp => emp.id !== id);
      },
      error => {
        console.error('Errore:', error);
      }
    );
  }

}
