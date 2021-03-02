#Swirge Back-End Assessment

---

##Backend
###Project Flow
There are two (2) models in this project, Coins and User.
A User can register with a username, email and password and before the user account is created, a check is done to ensure that the user does not already exist. Once the account is created, a token is generated. When a user logs in with either their usename or password, a token is also generated. The token that is generated would need to be included in the request headers for any subsequent request such as adding a coin, finding a coin, updating and deleting the coins that he/she has available. The token would be included in a Bearer Authentication format i.e. Authorization: Bearer <token>

###Routes
The various RESTFUL api routes are available.
#####/api/users/signup (POST)
This is to create a new user
#####/api/users/signin (POST)
This is for logging in an existing user
#####/api/coins/ (GET)
The response is a JSON object containing all the coins that the particular authorized user has.
#####/api/coins/ (POST)
This route is for adding a new coin.
#####/api/coins/:id (GET)
This api route fetches details about a particular coin
#####/api/coins/:id (PATCH)
This route is used to update details about a particular coin
#####/api/coins/:id (DELETE)
This route is used to delete a particular coin from a user.

###Models
There are two models. The Coin and the User. The user has a one to many relationship with the coin.

###FrontEnd
EJS templating is used to render the home, login and register routes
####Routes
#####/ (GET)
Home page
#####/login (GET)
Login page
#####/register (GET)
Register page