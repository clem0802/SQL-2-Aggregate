SQL (2022.04.01) - Mimo app (SQL Aggregate - GROUP BY-2)
// GROUP BY => is useful when using Aggregate Functions like AVG() or SUM()

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

// this counts users having the country 'England'
SELECT COUNT(country)
FROM user
WHERE country = 'England';

// "GROUP BY" groups "user" item by their value in the "country" column
SELECT email, COUNT(*)
FROM user
GROUP BY country;
                    
// in the result, we have 3, because 3 items
SELECT COUNT(*)
FROM user;
// COUNT(*)
// 3
                      
// this breaks down the user count between the "country" groups
SELECT country, COUNT(*)
FROM user
GROUP BY country;
// country  COUNT(*)
// England  2
// Spain    1
                      
// use AS to rename COUNT(*) 
SELECT country, COUNT(*) AS users
FROM user
GROUP BY country;
// country  users
// England  2
// Spain    1

            
