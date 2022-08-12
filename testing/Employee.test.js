const Employee = require('../lib/Employee');
 
describe('Employee class', () => {
  it('Create an employee with name, id, email, userName, officeNumber, school', () => {
    expect(employee.name).toBe('Jovy');
    expect(employee.id).toBe('123456789');
    expect(employee.email).toBe('ira@yahoo.com');
    expect(employee.userName).toBe('jlnaraga');
    expect(employee.officeNumber).toBe('8856');
    expect(employee.school).toBe('UPENN');
  });

    describe = ('Get Name', () => {
        it('should return employee name',() =>{
            const employee = new Employee ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            expect (employee.getName()).tobe("Jovy");
        })
    })
    
    describe = ('Get id', () => {
        it('should return employee id',() =>{
            const employee = new Employee ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            expect (employee.getId()).tobe(123456789);
        })
    })

    describe = ('Get email', () => {
        it('should return employee email',() =>{
            const employee = new Employee ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            expect (employee.getEmail()).tobe("ira@yahoo.com");
        })
    })

    describe = ('Get userName', () => {
        it('should return employee userName',() =>{
            const employee = new Employee ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            expect (employee.getUsername()).tobe("jlnaraga");
        })
    })

    describe = ('Get officeNumber', () => {
        it('should return employee officeNumber',() =>{
            const employee = new Employee ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            expect (employee.getOfficenumber()).tobe(8856);
        })
    })

    describe = ('Get school', () => {
        it('should return employee school',() =>{
            const employee = new Employee ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            expect (employee.getschool()).tobe("UPENN");
        })
    })
});