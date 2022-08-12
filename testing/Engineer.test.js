const Engineer = require('../lib/Engineer');
 
describe('Engineer class', () => {
  it('Create an engineer with name, id, email, userName', () => {
    expect(engineer.name).toBe('Jovy');
    expect(engineer.id).toBe('123456789');
    expect(engineer.email).toBe('ira@yahoo.com');
    expect(engineer.userName).toBe('jlnaraga');
  });

    describe = ('Get Name', () => {
        it('should return engineer name',() =>{
            const engineer = new Engineer ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga");
            expect (engineer.getName()).tobe("Jovy");
        })
    })
    
    describe = ('Get id', () => {
        it('should return engineer id',() =>{
            const engineer = new Engineer ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            expect (engineer.getId()).tobe(123456789);
        })
    })

    describe = ('Get email', () => {
        it('should return engineer email',() =>{
            const engineer = new Engineer ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            expect (engineer.getEmail()).tobe("ira@yahoo.com");
        })
    })

    describe = ('Get userName', () => {
        it('should return engineer userName',() =>{
            const engineer = new Engineer ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", 8856, "UPENN");
            expect (engineer.getUsername()).tobe("jlnaraga");
        })
    })

});