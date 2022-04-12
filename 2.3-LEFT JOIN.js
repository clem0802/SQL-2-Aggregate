SQL (2022.04.04) - Mimo app (SQL Aggregate - LEFT JOIN)

// INNER JOIN only keeps matching rows
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
_________________________
| enrolled               |
--------------------------
| student_id  | class    |
--------------------------
| 0147        | Math     |  
--------------------------
| 1008        | Physics  |  
--------------------------
| 1222        | History  |  
--------------------------
 
SELECT *
FROM student
INNER JOIN enrolled 
ON student.id = enrolled.student_id;
// id     name         id     class
// 0147   Lisa Jones   0147   Math
// 1008   Luz Garcia   1008   History


// LEFT JOIN gets matching rows, but also keep the ones without a match from the first table
// LEFT JOIN makes appear "ALL rows, regardless of whether they have a match or not"
// and for the "right table", ONLY the matching ones from "left table"
SELECT *
FROM student   => (left table, we SELECT)
LEFT JOIN enrolled   => (right table, we JOIN)
ON student.id = enrolled.student_id;  => (condition)
// id     name         id     class
// 0147   Lisa Jones   0147   Math
// 1008   Luz Garcia   1008   History
// 0267   Lin Wong


/*------------------------------------------------*/
// => this query selects all "artist" items and any matching "album" items
// "Bill Evans" doesn't have a match
SELECT a.name AS artist, alb.title AS album
FROM artist AS a
LEFT JOIN album AS alb
ON a.id = alb.artist_id;
// name              title
// John Coltrane     Blue train
// John Coltrane     Giant Steps
// Nina Simone       Baltimore
// Bill Evans


/*------------------------------------------------*/
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
_________________________
| enrolled               |
--------------------------
| student_id  | class    |
--------------------------
| 0147        | Math     |  
--------------------------
| 1008        | Physics  |  
--------------------------
| 1008        | History  |  
--------------------------
| 1222        | History  |  
--------------------------

SELECT *
FROM student
LEFT JOIN enrolled
ON student.id = enrolled.student_id;
// id     name         id     class
// 0147   Lisa Jones   0147   Math
// 1008   Luz Garcia   1008   History
// 1008   Luz Garcia   1008   Physics
// 0267   Lin Wong





