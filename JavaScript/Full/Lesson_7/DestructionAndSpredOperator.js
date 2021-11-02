const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  const passedStudent = allStudentsList.filter(
    (name) => !studentsForRetake.includes(name)
  );
  const massages = passedStudent.map((name) => 'Good job, ' + name);
  return massages;
};

//example 1:

//input:
const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];

console.log(getMessagesForBestStudents(allStud, retakeStud));

//output:
//['Good job, a', 'Good job, c']
