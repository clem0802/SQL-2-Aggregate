SQL (2022.04.01) - Mimo app (SQL Aggregate - HAVING)

___________________________
| test                     |
----------------------------
| student         | grade  |
----------------------------
| Lisa Jones      | B      |  
----------------------------
| Luz Garcia      | A      |  
----------------------------
| Kim Wong        | C      |
----------------------------
| Alex Bernard    | A      |
----------------------------

// "HAVING" is like a "WHERE" for groups
// we select only those groups having a "students" count over "1"
SELECT grade, COUNT(*) AS students
FROM test
GROUP BY grade
HAVING COUNT(*) > 1;
// grade    students
// A        2


// we omit-exclude the results for the grade 'A'
SELECT grade, COUNT(*) AS students
FROM test
GROUP BY grade
HAVING grade <> 'A';
// grade    students
// B        1
// C        1


// WHERE not equal to HAVING
SELECT grade, COUNT(*) AS students
FROM test
GROUP BY grade
HAVING students <> 2;
// grade    students
// B        1
// C        1


/*-------------------------------------------------------------*/
__________________________________
| user                           |
----------------------------------
| email               | country  |
----------------------------------
| stuart.m@mail.com   | England  |  
----------------------------------
| lo_daniel@mail.com  | Spain    |  
----------------------------------
| ann23@mail.com      | England  |
----------------------------------

// select only "country" groups that start with the letter "E"
SELECT country, COUNT(*) AS users
FROM user
GROUP BY country
HAVING country LIKE 'E%';
// country    users
// England    2

// select "country" groups that have exactly one user
SELECT country, COUNT(*) AS users
FROM user
GROUP BY country
HAVING users = 1;
// country    users
// Spain      1 

SELECT country, COUNT(*) AS users
FROM user
GROUP BY country
HAVING country = 'Spain';
// country    users
// Spain      1 

// use "HAVING" and alias "users" 
// to select groups that have a "COUNT(*)" equal to 2
SELECT country, COUNT(*) AS users
FROM user
GROUP BY country
HAVING users = 2;
// country    users
// England    2





