
SQL (2022.04.01) - Mimo app (SQL Aggregate - COUNT rows)

______________________________
| wishlist                   |
------------------------------
| item              | price  |
------------------------------
| headphones        | 250    |  
------------------------------
| painting brushes  | 37     |  
------------------------------
| sunglasses        | 110    |
------------------------------
| daily planner     | 29     |
------------------------------

// COUNT how many items (rows) we have in the table
SELECT COUNT(item)
FROM wishlist;
// COUNT(item)
// 4


// (*) is a "WILDCARD"
// this gives us the number of rows in a table
SELECT COUNT(*)
FROM wishlist;
// COUNT(*)
// 4
             
             
// using "AS"
SELECT COUNT(*) AS items
FROM wishlist;
// items
// 4




