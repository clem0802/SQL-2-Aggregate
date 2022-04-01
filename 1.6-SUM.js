SQL (2022.04.01) - Mimo app (SQL Aggregate - SUM)

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

// sum up the number values in a column
SELECT SUM(price)
FROM wishlist;
// SUM(price)
// 426

// same thing but with alias
SELECT SUM(price) AS total_price
FROM wishlist;
// total_price
// 426


// other examples:
SELECT SUM(age)
FROM team;
// SUM(age)
// 51

SELECT SUM(age) AS total_age
FROM team;
// total_age
// 51



