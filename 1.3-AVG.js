SQL (2022.04.01) - Mimo app (SQL Aggregate - AVG)

_____________________________
| ticket                     |
------------------------------
| museum            | price  |
------------------------------
| Louvre            | 17     |  
------------------------------
| Petit Palais      | 0      |  
------------------------------
| Centre Pompidou   | 14     |
------------------------------
| Musée Rodin       | 9      |
------------------------------

// another Aggregate Function: AVG (average)
SELECT AVG(price)
FROM ticket;
// AVG(price)   => AVG(price): "opeartion" name shown in the result
// 10


// we can also rename the result with an ALIAS
SELECT AVG(price) AS average_price
FROM ticket;
// average_price   => average_price: "alias" name shown in the result
// 10
