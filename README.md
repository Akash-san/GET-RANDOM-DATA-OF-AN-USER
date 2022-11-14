# GET-RANDOM-DATA-OF-AN-USER
## Installation
In the project root folder run the following command to install the packages.

```
npm install
```

## Start the express server 
Start the express server.

```
node server.js
```

The server will listen on the PORT 8001

## API's definition

```
GET /get-user
```
The above GET request will fetch random fake user details from https://random-data-api.com/api and give the user details to the client. and save the user to the users.csv file.

In order to get the user details from the express server use curl command or postman to hit the API endpoint.

```
http://localhost:8001/get-user
```

### sample response
```
{
  "id": 3091,
  "first_name": "Caterina",
  "last_name": "Corkery",
  "username": "caterina.corkery",
  "email": "caterina.corkery@email.com",
  "avatar": "https://robohash.org/perferendismaximedolor.png?size=300x300&set=set1",
  "date_of_birth": "1997-05-23",
  "employment": {
    "title": "Human Manufacturing Assistant",
    "key_skill": "Confidence"
  },
  "address": {},
  "credit_card": {
    "cc_number": "4218-3050-7334-3652"
  },
  "subscription": {}
}
```

## GET USER PROGRAMME
Run the following command to execute the programme
```
node get-user.js
```
This programme is used to get a user from the users.csv file which are saved during the GET request.
Given the id of the user, returns user details.

## SORT USER PROGRAMME
Run the following command to execute the programme
```
node sort-user.js
```
This programme will sort the users in csv file based on the first name of the user in alphabatical order.

## External packages used in this project

**Express** - used to intialize a restful API server.

**Fetch** - used to request data from a server. The request can be of any type of API that return the data in JSON or XML.

**csv-stringify** - used to format array of data in csv format.

**lodash** - provides utility functions for common programming tasks using the functional programming paradigm.
