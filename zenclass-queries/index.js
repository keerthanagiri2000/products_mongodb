
db.students.insertMany([{"id": 100,"users": "aidan","codekata": 20,"attendance": "absent","topics": "react","tasks": "not submitted","company_drives": "drive 1","company drive": "not appeared","mentors": 10,"date": "10-oct-2020","month": "october"},{"id": 101,"users": "daisy","codekata": 30,"attendance": "present","topics": "react","tasks": "not submitted","company_drives": "drive 2","company drive": "appeared","mentors": 16,"date": "1-oct-2020","month": "october"},{"id": 102,"users": "davis","codekata": 50,"attendance": "present","topics": "react","tasks": "not submitted","company_drives": "drive 3","company drive": "appeared","mentors": 9,"date": "15-oct-2020","month": "october"},{"id": 103,"users": "harley","codekata": 50,"attendance": "absent","topics": "nodeJs","tasks": "submitted","company_drives": "drive 4","company drive": "appeared","mentors": 7,"date": "18-oct-2020","month": "december"},{"id": 104,"users": "kyle","codekata": 40,"attendance": "absent","topics": "react","tasks": "submitted","company_drives": "drive 5","company drive": "not appeared","mentors": 20,"date": "18-oct-2020","month": "october"},{"id": 105,"users": "lisa","codekata": 100,"attendance": "present","topics": "react","tasks": "submitted","company_drives": "drive 6","company drive": "appeared","mentors": 15,"date": "20-oct-2020","month": "october"},{"id": 106,"users": "scott","codekata": 50,"attendance": "present","topics": "mongoDB","tasks": "not submitted","company_drives": "drive 7","company drive": "not appeared","mentors": 2,"date": "31-oct-2020","month": "november"},{"id": 107,"users": "steven","codekata": 30,"attendance": "absent","topics": "nodeJs","tasks": "submitted","company_drives": "drive 8","company drive": "appeared","mentors": 5,"date": "30-oct-2020","month": "december"}])

//Find all the topics and tasks which are thought in the month of October
db.students.find({"month": "october"}, {topics:1, tasks:1}).pretty()

//Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.students.find({"date": { $gt: "15-oct-2020", $lt: "31-oct-2020"}}, {company_drives:1}).pretty()

//Find all the company drives and students who are appeared for the placement.
db.students.find({"company drive": "appeared"}, {users:1, company_drives:1}).pretty()

//Find the number of problems solved by the user in codekata
db.students.aggregate([{$group : {codekata_sum : {$sum : "$codekata"}}}])

//Find all the mentors with who has the mentee's count more than 15
db.students.find({"mentors": { $gt: 15}}, {mentors: 1}).pretty()

//Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.students.find({"date": { $gt: "15-oct-2020", $lt: "31-oct-2020"}},{"attendance": "absent","tasks": "not submitted"}).count()











