
SQL (2022.04.02) - Mimo app (SQL Aggregate - INNER JOIN)

// JOIN === INNER JOIN
// it only selects those rows with a common value
// with "INNER JOIN", rows without a matching value in the common column don't appear in result

SELECT *
FROM student
INNER JOIN enrolled 
ON student.id = enrolled.id;
// id     name         id     class
// 0147   Lisa Jones   0147   Math
// 1008   Luz Garcia   1008   Physics

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

_______________________
| enrolled            |
-----------------------
| id       | nclass   |
-----------------------
| 0147     | Math     |  
-----------------------
| 1008     | Physics  |  
-----------------------
| 1008     | History  |  
-----------------------
  
SELECT *
FROM student
INNER JOIN enrolled 
ON student.id = enrolled.id;
// id     name         id     class
// 0147   Lisa Jones   0147   Math
// 1008   Luz Garcia   1008   History
// 1008   Luz Garcia   1008   Physics




  
  
  
  
  
  
  
  
  
  
