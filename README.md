
![form toggle](https://res.cloudinary.com/dgskc3t8b/image/upload/v1582220563/business_card_qb4pbo.png)

Choose between different templates:
![template toggle](https://res.cloudinary.com/dgskc3t8b/image/upload/v1583589058/templates_ortgdo.png)

This project utilizes obiwankenoobi [react-express-boilerplate](https://github.com/obiwankenoobi/react-express-boilerplate)


To use simply clone the repo, add the missing details as described below inside /server/.env

## .env	
    
    cookieParserSecret=<SECRET> 
    JWTsecret=<SECRET>
    nodemailerEmail=<Email for the SMTP server>
    nodemailerPw=<Password for the SMTP server>
    smtp=<SMTP address i.e. smtpout.europe.secureserver.net>
    mongoUsername=<MONGO USERNAME>
    mongoPw=<MONGO PASSWORD>
    mongoUrl=<MONGO URL>
    server=localhost:port // default port: 3001
    frontEndServer=localhost:port

## Develop:
    cd server/ 
    npm install && npm start
    cd client/
    npm install && npm start
    
    
## Working Demo [here](https://react-vbcard.herokuapp.com/) (free heroku server, please give it time)
username - test@test.com
password - test1234
   
    
## Card example [here](https://react-vbcard.herokuapp.com/demo@demo.com)
   
    
