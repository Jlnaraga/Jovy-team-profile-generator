const Engineer = require('../lib/Engineer');
 
describe('Engineer class', () => {
  it('Create an engineer with name, id, email, userName, role', () => {

    const engineer = new Engineer ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", "Engineer" );

    expect(engineer.name).toEqual('Jovy');
    expect(engineer.id).toEqual(123456789);
    expect(engineer.email).toEqual('ira@yahoo.com');
    expect(engineer.getGitHubUsername()).toEqual('jlnaraga');
    expect(engineer.getRole()).toEqual("Engineer");
  });
    //need to role


    describe = ('Get Name', () => {
        it('should return engineer name',() =>{
            const engineer = new Engineer ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", "Engineer");
            
            expect (engineer.getName()).toEqual("Jovy");
        })
    })
    
    describe = ('Get id', () => {
        it('should return engineer id',() =>{
            const engineer = new Engineer ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", "Engineer");
            
            expect (engineer.getId()).toEqual(123456789);
        })
    })

    describe = ('Get email', () => {
        it('should return engineer email',() =>{
            const engineer = new Engineer ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", "Engineer");
            
            expect (engineer.getEmail()).toEqual("ira@yahoo.com");
        })
    })

    describe = ('Get userName', () => {
        it('should return engineer userName',() =>{
            const engineer = new Engineer ("Jovy", 123456789, "ira@yahoo.com", "jlnaraga", "Engineer");
            
            expect (engineer.getUsername()).toEqual("jlnaraga");
        })

        describe = ('Get role', () => {
            it('should return employee role',() =>{
                const employee = new Engineer ("Jovy", 123456789, "ira@yahoo.com","Engineer");
                
                expect (employee.getRole()).toEqual("Engineer");
            })
        })
    })

});