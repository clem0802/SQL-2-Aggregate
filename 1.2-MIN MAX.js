SQL (2022.04.01) - Mimo app (SQL Aggregate - MIN MAX)
// MIN & MAX => Aggregate Functions

_____________________________
| ticket                     |
------------------------------
| museum            | price  |
------------------------------
| Louvre            | 17     |  (max price)
------------------------------
| Petit Palais      | 0      |  (min price)
------------------------------
| Centre Pompidou   | 14     |
------------------------------
| Musée Rodin       | 9      |
------------------------------

SELECT MIN(price)  
FROM ticket;
// MIN(price)   => MIN(price): "opeartion" name shown in the result
// 0

SELECT MIN(price) AS cheapest
FROM ticket;
// cheapest   => cheapest: "alias" name shown in the result
// 0
