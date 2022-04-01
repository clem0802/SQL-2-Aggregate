SQL (2022.03.30) - Mimo app (SQL Aggregate - Rename)

______________________________________________
| contacts                                   |
----------------------------------------------
| first_name | last_name  | email            |
----------------------------------------------
| Sam        | Smith      | sam17@mail.com   |
----------------------------------------------
| Remy       | Allard     | rem@mail.com     |
----------------------------------------------
| Luis       | Martinez   | luis_99@mail.com |
----------------------------------------------
| Kim        | Zhong      | kim.z@mail.com  |
----------------------------------------------
// when table names are too long...
// to simplify names like "first_name" or to give columns a different meaning withing a query
// we use "ALIASING" (alias)
// aliasing renma the column only in the "result table"
// "AS", we assign a temporary name: [ first_name => user ]
SELECT first_name AS user
FROM contacts;


// can also use aliases when selecting multiple columns
// here, select the "email" column as well, and set it to "contact"
SELECT first_name AS user, email AS contact
FROM contacts;
// user     email
// Sam      sam17@mail.com
// Remy     rem@mail.com 
// Luis     luis_99@mail.com
// Kim      kim.z@mail.com


/*------------------------------------------------------------------*/
_____________________________
| students                  |
-----------------------------
| name           | score    |
-----------------------------
| Jean Miller    | 5        |
-----------------------------
| Emma Brown     | 8        |
-----------------------------
| Reese Jones    | 2        |
-----------------------------
| Kim Lee        | 9        |
-----------------------------
// select "score" values greater than 7 under the alias "highest_score"
SELECT score AS highest_score
FROM students
WHERE score > 7;
// 8
// 9


// select the "name" column and rename it to "team_leader" in the result table
SELECT name AS team_leader
FROM students
WHERE name = 'Kim Lee';
// Kim Lee





