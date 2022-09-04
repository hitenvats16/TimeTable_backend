const faker = require('@faker-js/faker');
const SubjectOperations = require('./repository/subjects_operations')
const TeachersOperation = require('./repository/teacher_operations');

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
    let no_of_entries = 5;
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

insertDummyTeachersIntoDb()