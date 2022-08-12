const Intern = require('../lib/Intern');
 
describe('Intern class', () => {
  it('Create an intern with name, id, email, userName', () => {
    expect(intern.name).toBe('Jovy');
    expect(intern.id).toBe('123456789');
    expect(intern.email).toBe('ira@yahoo.com');
    expect(intern.userName).toBe('jlnaraga');
  });

    describe = ('Get Name', () => {
        it('should return intern name',() =>{
            const intern = new Intern ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga");
            expect (intern.getName()).tobe("Jovy");
        })
    })
    
    describe = ('Get id', () => {
        it('should return intern id',() =>{
            const intern = new Intern ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            expect (intern.getId()).tobe(123456789);
        })
    })

    describe = ('Get email', () => {
        it('should return intern email',() =>{
            const intern = new Intern ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            expect (intern.getEmail()).tobe("ira@yahoo.com");
        })
    })

    describe = ('Get userName', () => {
        it('should return intern userName',() =>{
            const intern = new Intern ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            expect (intern.getUsername()).tobe("jlnaraga");
        })
    })

    describe = ('Get school', () => {
        it('should return intern school',() =>{
            const employee = new Intern ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            expect (employee.getschool()).tobe("UPENN");
        })
    })
}) 