const Manager = require('../lib/Manager');
 
describe('Manager class', () => {
  it('Create an manager with name, id, email, userName', () => {
    expect(manager.name).toBe('Jovy');
    expect(manager.id).toBe('123456789');
    expect(manager.email).toBe('ira@yahoo.com');
    expect(manager.userName).toBe('jlnaraga');
  });

    describe = ('Get Name', () => {
        it('should return manager name',() =>{
            const manager  = new Manager  ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga");
            expect ( manager.getName()).tobe("Jovy");
        })
    })
    
    describe = ('Get id', () => {
        it('should return manager id',() =>{
            const  manager = new Manager ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            expect ( manager.getId()).tobe(123456789);
        })
    })

    describe = ('Get email', () => {
        it('should return manager email',() =>{
            const  manager = new Manager ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            expect ( manager.getEmail()).tobe("ira@yahoo.com");
        })
    })

    describe = ('Get userName', () => {
        it('should return manager userName',() =>{
            const  manager = new Manager ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            expect (manager.getUsername()).tobe("jlnaraga");
        })
    })

    describe = ('Get officeNumber', () => {
        it('should return manager officeNumber',() =>{
            const manager = new Manager ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            expect (manager.getOfficenumber()).tobe(8856);
        })
    })
}) 