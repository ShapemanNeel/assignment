import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';
import { Employee } from './interfaces/employee.interface';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    findAll(): Promise<Employee[]>;
    findOne(id: any): Promise<Employee>;
    create(createEmployeeDto: CreateEmployeeDto): Promise<Employee>;
    delete(id: any): Promise<Employee>;
    update(updateEmployeeDto: CreateEmployeeDto, id: any): Promise<Employee>;
}
