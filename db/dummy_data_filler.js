const faker = require('@faker-js/faker');
const SubjectOperations = require('./repository/subjects_operations')
const TeachersOperation = require('./repository/teacher_operations');

var no_of_entries = 5;

function insertDummySubjectsIntoDb() {
    const arr = [
        'English',
        'Mathematics',
        'Science',
        'Health',
        'Handwriting',
    ]

    arr.forEach(elem => {
        const promise = SubjectOperations.add({ 'Name': elem });
        promise
            .then(() => {
                console.log('Subject inserted!');
            })
            .catch(e => {
                console.log('error occured: ', e);
            })
    })

}

function insertDummyTeachersIntoDb() {
    while (no_of_entries--) {
        const name = faker.faker.name.fullName();
        const promise = TeachersOperation.add({ 'Name': name });
        promise
            .then(() => {
                console.log('Teacher Inserted');
            })
            .catch(e => {
                console.log('error occured: ', e);
            })
    }
}

async function makeJoins(){
    const teacherArray = await TeachersOperation.getAll();
    const subjectArray = await SubjectOperations.getAll(); 
    for(let i = 0; i<no_of_entries; i++){
        const teacher = teacherArray[i];
        const subject = subjectArray[i];
        TeachersOperation.addSubject(teacher,subject)
            .then(()=>{
                console.log('join created successfully!');
            })
            .catch(e=>{
                console.log('error occured: ',e);
            });
    }
}

makeJoins();