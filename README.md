#MERN STACK
   - MongoDB
   - Express.js
   - React.js
   - Node.js

#POSTMAN
	- In PostMan go to -- http://localhost:3000/tasks -- to see what's in database
	- Change method to 'POST' => Go to 'BODY' tab => Select 'X-WWW-FORM-URLENCODED' option under tabs
	- Under tabs go to 'KEY' and enter -- 'title' -- and give it a title name => hit send!
	- Should see success -- Status 200 Okay -- And see the message within postman


#ROUTES - This file has all the HTTP request methods which forwards request to appropriate controllers
#CONTROLLERS - This file has all the HTTP response methods/functions which read and write
#MODELS - This file has all the schemas for data going into database

#FLOW OF DATA:
ROUTES || VIEWS => CONTROLLERs => MODELS => DATABASE