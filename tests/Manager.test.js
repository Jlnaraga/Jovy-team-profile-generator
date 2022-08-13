const Manager = require('../lib/Manager');
 
describe('Manager class', () => {
  it('Create an manager with name, id, email, officeNumber, role', () => {
    const manager  = new Manager  ("Jovy", 123456789, "ira@yahoo.com",123456, "Manager");
    expect(manager.name).toEqual('Jovy');
    expect(manager.id).toEqual(123456789);
    expect(manager.email).toEqual('ira@yahoo.com');
    expect(manager.getRole()).toEqual("Manager");
    
  });

    describe = ('Get Name', () => {
        it('should return manager name',() =>{
            const manager  = new Manager  ("Jovy", 123456789, "ira@yahoo.com",123456, "Manager");
            expect (manager.getName()).toEqual("Jovy");
        })
    })
    
    describe = ('Get id', () => {
        it('should return manager id',() =>{
            const  manager = new Manager ("Jovy", 123456789, "ira@yahoo.com",123456, "Manager");
            
            expect ( manager.getId()).toEqual(123456789);
        })
    })

    describe = ('Get email', () => {
        it('should return manager email',() =>{
            const  manager = new Manager ("Jovy", 123456789, "ira@yahoo.com",123456, "Manager" );
            
            expect ( manager.getEmail()).toEqual("ira@yahoo.com");
        })
    })


    describe = ('Get officeNumber', () => {
        it('should return manager officeNumber',() =>{
            const manager = new Manager ("Jovy", 123456789, "ira@yahoo.com", 123456, "Manager");
            
            expect (manager.getOfficenumber()).toEqual(123456);
        })
    })

    describe = ('Get role', () => {
        it('should return employee role',() =>{
            const employee = new Manager ("Jovy", 123456789, "ira@yahoo.com", 123456,"Manager");
            
            expect (employee.getRole()).toEqual("Manager");
        })
    })
}) 