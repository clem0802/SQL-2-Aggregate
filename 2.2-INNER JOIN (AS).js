
SQL (2022.04.02) - Mimo app (SQL Aggregate - INNER JOIN)

// JOIN === INNER JOIN
// it only selects those rows with a common value
// with "INNER JOIN", rows without a matching value in the common column don't appear in result
// "AS" doesn't change the original, but only helps write shorter queries

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

_____________________________
| enrolled                  |
-----------------------------
| student_id      | class   |  (X)
-----------------------------
| 0147            | Math    |  
-----------------------------
| 1008            | Physic  |  
-----------------------------
  
SELECT student.name, enrolled.class
FROM student
INNER JOIN enrolled 
ON student.id = enrolled.student_id;
// name          class
// Lisa Jones    Math
// Luz Garcia    Physics


SELECT *
FROM student
INNER JOIN enrolled 
ON student.id = enrolled.id;
// id     name         id     class
// 0147   Lisa Jones   0147   Math
// 1008   Luz Garcia   1008   Physics


SELECT student.name AS student, enrolled.class
FROM student
INNER JOIN enrolled 
ON student.id = enrolled.student_id;
// student       class
// Lisa Jones    Math
// Luz Garcia    Physics


SELECT s.name, e.class
FROM student AS s
INNER JOIN enrolled AS e
ON s.id = e.student_id;
// student       class
// Lisa Jones    Math
// Luz Garcia    Physics


SELECT *
FROM student AS s
INNER JOIN enrolled AS e
ON s.id = e.student_id;
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
| id       | class   |
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


/*------------------------------------------------*/
/*------------------------------------------------*/
___________________________
| artist                  |
---------------------------
| id    | name            |
---------------------------
| 1     | John Coltrane   |  
---------------------------
| 2     | Nina Simone     |  
---------------------------
| 3     | Bill Evans      |
---------------------------

_____________________________
| album                     |
-----------------------------
| artist_id   | title       |
-----------------------------
| 1           | Blue Train  |  
-----------------------------
| 1           | Giant Steps |  
-----------------------------
| 2           | Baltimore   |  
-----------------------------

// FOUR columns appear, since each table has two columns 
// and we are selecting ALL of them with (*)
SELECT *
FROM artist
INNER JOIN album 
ON artist.id = album.artist_id;
// id    name             artist_id     title
// 1     John Coltrane    1             Blue Train
// 1     John Coltrane    1             Giant Steps
// 2     Nina Simone      2             Baltimore


// TWO columns appear, since each table has two columns 
SELECT artist.name, album.title
FROM artist
INNER JOIN album 
ON artist.id = album.artist_id;
// name             title
// John Coltrane    Blue Train
// John Coltrane    Giant Steps
// Nina Simone      Baltimore


// TWO columns appear, since each table has two columns 
SELECT artist.name AS artist, album.title AS album
FROM artist
INNER JOIN album 
ON artist.id = album.artist_id;
// name             title
// John Coltrane    Blue Train
// John Coltrane    Giant Steps
// Nina Simone      Baltimore


/*------------------------------------------------*/
// THREE columns appear, since each table has two columns 
SELECT artist.name, album.title
FROM artist
INNER JOIN album 
ON artist.id = album.artist_id;
// id   name             title
// 1    John Coltrane    Blue Train
// 1    John Coltrane    Giant Steps
// 2    Nina Simone      Baltimore


// below, NOTHING WRONG
SELECT art.name, alb.title
FROM artist AS art
INNER JOIN album AS alb
ON art.id = alb.artist_id;
// name             title
// John Coltrane    Blue Train
// John Coltrane    Giant Steps
// Nina Simone      Baltimore


// below, NOTHING WRONG
SELECT *
FROM artist AS art
INNER JOIN album AS alb
ON art.id = alb.artist_id;
// id    name             artist_id     title
// 1     John Coltrane    1             Blue Train
// 1     John Coltrane    1             Giant Steps
// 2     Nina Simone      2             Baltimore



  
  
