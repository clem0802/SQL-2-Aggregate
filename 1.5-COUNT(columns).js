SQL (2022.04.01) - Mimo app (SQL Aggregate - COUNT columns)

______________________________
| wishlist                   |
------------------------------
| item              | price  |
------------------------------
| headphones        | 250    |  
------------------------------
| headphones        | 250    |  
------------------------------
| sunglasses        | 110    |
------------------------------
| sunglasses        | 110    |
------------------------------

// when counting by columns(??), we use "DISTINCT" to avoid counting duplicates
// "DISTINCT" comes before the column's name
SELECT COUNT(DISTINCT item)
FROM wishlist;
// COUNT(DISTINCT item)
// 2


/*-----------------------------------------------*/
_______________________
| team                |
-----------------------
| name         | age  |
-----------------------
| Charlie      | 17   |  
-----------------------
|              | 16   |  
-----------------------
| Ada          | 18   |
-----------------------
  
SELECT COUNT(name)
FROM team;
// COUNT(name)
// 2
  
SELECT COUNT(age)
FROM team;
// COUNT(age)
// 3


/*-----------------------------------------------*/
_______________________
| team                |
-----------------------
| name         | age  |
-----------------------
| Charlie      | 17   |  
-----------------------
| Charlie      | 17   |  
-----------------------
| Ada          | 18   |
-----------------------

SELECT COUNT(DISTINCT name)
FROM team;
// COUNT(DISTINCT name)
// 2






