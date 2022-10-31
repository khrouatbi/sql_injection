1. Assuming you are user 21406f6d-787f-4db2-b02b-d38e3f892133, how to get the private data of user ed8fd34e-3c57-47f9-9cfa-594bb74ca8b5 by sql injection ?

Hacker can enter the link: (http://localhost:3000/?user=jdvbj"%20OR%20"1=1)

<img width="1202" alt="image" src="https://user-images.githubusercontent.com/33653833/199075897-2fea674c-fdf8-4bc7-a7c2-3efcdd7a0722.png">

This is similar to executing the query: SELECT * from ? where user="jdvbj" OR "1=1"
Which returns all data stored.
 

2. How to prevent sql injection vulnerability above by

a. improving the flawed code? 

Use placeholders (?) as shown on code above.

b. applying infrastructural tools?

We can use Selenium for automated testing.
There exist other tools like SQLMap or jSQL.


3.How to automate a sql injection security test with CI/CD systems?

We can set up automated testing pipeline to test for SQL injection on circle ci. We can use a library called "jest" in javascript and write test cases.

<img width="946" alt="image" src="https://user-images.githubusercontent.com/33653833/198929408-f1b46fcb-9416-42f6-bcfd-5e2aef7ce4a9.png">

<img width="438" alt="image" src="https://user-images.githubusercontent.com/33653833/198929938-90d4af74-6013-48fe-a7b9-5bfa393b83c5.png">

