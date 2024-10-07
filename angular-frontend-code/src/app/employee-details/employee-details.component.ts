import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  id: number |any
  employee: Employee |any; // Declare employeeDetails here
 // employee: Employee = new Employee();
  constructor(private route: ActivatedRoute, private employeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  this.employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }
}
