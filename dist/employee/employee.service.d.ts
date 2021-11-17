import { Employee } from './interfaces/employee.interface';
import { Model } from 'mongoose';
export declare class EmployeeService {
    private readonly employeeModel;
    constructor(employeeModel: Model<Employee>);
    findAll(): Promise<Employee[]>;
    findOne(id: string): Promise<Employee>;
    create(employee: Employee): Promise<Employee>;
    delete(id: string): Promise<Employee>;
    update(id: string, employee: Employee): Promise<Employee>;
}
