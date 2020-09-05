# node-boilerplate
If you are like me, then I believe u don't like spending precious amounts of time doing repetitive tasks. I created node-boilerplate 
for those of you who are like me, to give you an easy and minimalistic
boilerplate to kickstart your project and get you up and running as quick as possible, complete with authentication, authorization
form input validation and access control.
## Assumptions
This boilerplate assumes that you are using nodejs with express and mongoDB with mongoose as the database and ORM respectively.
Notwithstanding, this boilerplate is also usable with other databases and ORMs e.g MySQL with sequelize.
A sequelize boilerplate for use with relational databases like postgress and SQL server is coming soon! Be on the lookout.
## Usage
1. Clone or download
2. Run ```npm install``` to install all dependencies
3. Create a .env file in the root directory and edit as below; <br/>
```DB_CONNECT = mongodb://host:port/database-name```<br/>
```PORT = xxxx```<br/>
```TOKEN_SECRET = jwt_secret_token```<br/>
4. Code away. Enjoy!
