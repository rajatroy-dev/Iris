// array of students
/**
 * student: {
 *  id:
 *  name:
 *  class:
 *  marks:
 * }
 * 
 * Calculate average marks per class
 */

let students = [
    {
        id: 1,
        name: "Rajat",
        class: "X",
        marks: 50
    },
    {
        id: 1,
        name: "Rajat",
        class: "X",
        marks: 75
    },
    {
        id: 1,
        name: "Rajat",
        class: "XI",
        marks: 80
    },
    {
        id: 1,
        name: "Rajat",
        class: "XII",
        marks: 70
    },
];

function calculateAverage(students) {
    // a + b + c ... n / n

    let result = {}; // { class: avg }

    let studentCount = {}; // { class: { total marks, number of students } }
    for (let i = 0; i < students.length; i++) {
        // Need to find the no of students in that class
        const item = students[i];
        if (!studentCount[item.class]) { // will check if class exists
            studentCount[item.class] = {};
            studentCount[item.class]["totalMarks"] = item.marks;
            studentCount[item.class]["numberOfStudents"] = 1;
        } else {
            studentCount[item.class].totalMarks = studentCount[item.class].totalMarks + item.marks;
            studentCount[item.class].numberOfStudents = studentCount[item.class].numberOfStudents + 1;
        }
    }

    for (const key in studentCount) {
        console.log(key, studentCount[key].totalMarks / studentCount[key].numberOfStudents);
    }
}

calculateAverage(students);