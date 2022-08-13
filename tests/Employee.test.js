const Employee = require('../lib/Employee');
 
describe('Employee class', () => {
  it('Create an employee with name, id, email',() => {
    const employee = new Employee ("Jovy", 123456789, "ira@yahoo.com",);
    expect(employee.name).toEqual('Jovy');
    expect(employee.id).toEqual(123456789);
    expect(employee.email).toEqual('ira@yahoo.com');
  });

    describe = ('Get Name', () => {
        it('should return employee name',() =>{
            const employee = new Employee ("Jovy", 123456789, "ira@yahoo.com");
            
            expect (employee.getName()).toEqual("Jovy");
        })
    })
    
    describe = ('Get id', () => {
        it('should return employee id',() =>{
            const employee = new Employee ("Jovy", 123456789, "ira@yahoo.com");
            
            expect (employee.getId()).toEqual(123456789);
        })
    })

    describe = ('Get email', () => {
        it('should return employee email',() =>{
            const employee = new Employee ("Jovy", 123456789, "ira@yahoo.com");
           
            expect (employee.getEmail()).toEqual("ira@yahoo.com");
        })
    })

    describe = ('Get userName', () => {
        it('should return employee userName',() =>{
            const employee = new Employee ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            
            expect (employee.getUsername()).toEqual("jlnaraga");
        })
    })

    describe = ('Get officeNumber', () => {
        it('should return employee officeNumber',() =>{
            const employee = new Employee ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            
            expect (employee.getOfficenumber()).toEqual(8856);
        })
    })

    describe = ('Get school', () => {
        it('should return employee school',() =>{
            const employee = new Employee ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            
            expect (employee.getschool()).toEqual("UPENN");
        })
    })
});