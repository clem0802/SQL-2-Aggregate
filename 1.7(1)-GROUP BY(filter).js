SQL (2022.04.01) - Mimo app (SQL Aggregate - GROUP BY-1)

// how to know how many students got A, B and C?
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

// we COUNT(grade) first
// then condition like => grade = 'A'
// this counts ONLY students who got an A
SELECT COUNT(grade)
FROM test
WHERE grade = 'A';
// COUNT(garde)
// 2


// COUNT(*)
// to find out how many students got each grade
// first count entries in the table
SELECT COUNT(*)
FROM test;
// COUNT(*)
// 4 
             
             
// COUNT(*)
SELECT COUNT(*)
FROM test
GROUP BY grade;
// COUNT(*)
// 2
// 1
// 1


// GROUP BY
// when selecting "grade" column, we have 3 different grades
// but 4 table rows
SELECT grade
FROM test
GROUP BY grade;
// grade   
// A        
// B  
// C


// GROUP BY + COUNT(*)
SELECT grade, COUNT(*)
FROM test
GROUP BY grade;
// grade    COUNT(*)
// A        2
// B        1
// C        1


// GROUP BY + COUNT(*) AS students
// this query counts the table items
// then uses "GROUP BY" to split the total count into the distinct "grade" categories
SELECT grade, COUNT(*) AS students
FROM test
GROUP BY grade;
// grade    students
// A        2
// B        1
// C        1
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
