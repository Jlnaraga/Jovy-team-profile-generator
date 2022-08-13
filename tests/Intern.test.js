const Intern = require('../lib/Intern');
 
describe('Intern class', () => {
  it('Create an intern with name, id, email, school, role', () => {
    const intern = new Intern ("Jovy", 123456789, "ira@yahoo.com", "UPENN");
    expect(intern.name).toEqual('Jovy');
    expect(intern.id).toEqual(123456789);
    expect(intern.email).toEqual('ira@yahoo.com');
    expect(intern.getSchool()).toEqual('UPENN');
    expect(intern.getRole()).toEqual("Intern");
  });

    describe = ('Get Name', () => {
        it('should return intern name',() =>{
            const intern = new Intern ("Jovy", 123456789, "ira@yahoo.com", "UPENN" ,"Intern");
           
            expect (intern.getName()).toEqual("Jovy");
        })
    })
    
    describe = ('Get id', () => {
        it('should return intern id',() =>{
            const intern = new Intern ("Jovy", 123456789, "ira@yahoo.com", "UPENN" ,"Intern");
           
            expect (intern.getId()).toEqual(123456789);
        })
    })

    describe = ('Get email', () => {
        it('should return intern email',() =>{
            const intern = new Intern ("Jovy", 123456789, "ira@yahoo.com", "UPENN" ,"Intern");
            
            expect (intern.getEmail()).toEqual("ira@yahoo.com");
        })
    })

    describe = ('Get school', () => {
        it('should return intern school',() =>{
            const employee = new Intern ("Jovy", 123456789, "ira@yahoo.com", "UPENN" ,"Intern");
            
            expect (employee.getSchool()).toEqual("UPENN");
        })
    })

    describe = ('Get role', () => {
        it('should return employee role',() =>{
            const employee = new Intern ("Jovy", 123456789, "ira@yahoo.com", "UPENN" ,"Intern");
            
            expect (employee.getRole()).toEqual("Intern");
        })
    })
}) 