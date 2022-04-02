SQL (2022.04.02) - Mimo app (SQL Aggregate - JOIN)

___________________________
| student                  |
----------------------------
| id       | name          |
----------------------------
| 0147     | Lisa Jones    |  
----------------------------
| 1008     | Luz Garcia    |  
----------------------------
| 0267     | Ling Wong     |
----------------------------

_______________________
| enrolled            |
-----------------------
| id       | nclass   |
-----------------------
| 0147     | Math     |  
-----------------------
| 1008     | Physics  |  
-----------------------

// "student" links students' ID to their "name"
// "enrolled" connects a student's ID to a "class" 
// we are interested in the "name" of students that enrolled for each "class"
// to select properties from two tables => like "name" from "STUDENT" table + "class" from "ENROLLED" table
// we need to JOIN two tables, based on a "COMMON PROPERTY" => (propriété commune)
// JOIN => match each row of the 1st table to a row in the 2nd table
// ON => introduces a CONDITION that decides wheter a row from "student" should match a row from "enrolled"
SELECT *
FROM student
JOIN enrolled 
ON student.id = enrolled.id;
// id     name         id     class
// 0147   Lisa Jones   0147   Math
// 1008   Luz Garcia   1008   Physics



