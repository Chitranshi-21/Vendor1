import express from 'express';
const router = express.Router();
import pool from '../db/dbConfig';
import jwt from 'jsonwebtoken';
const app = express();


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

  //Distributor record query test
  router.get('/Contact',(request, response) => {

    pool
    .query('SELECT Id, sfid,name, email__c, FirstName__c, Last_Name__c FROM salesforce.Distributor__c')
    .then((contactQueryResult) => {
        console.log('contactQueryResult   : '+JSON.stringify(contactQueryResult.rows));
        response.send(contactQueryResult.rows);
       // response.render('JoinQuery',{lstContact:contactQueryResult.rows});
  })
  .catch((contactQueryError) => {
        console.log('contactQueryError  : '+contactQueryError);
        response.send(contactQueryError);
  })
  
    });

    //login post

    router.post('/signin',async (request, response) => 
    {

             const {email, password} = request.body;
             console.log('email : '+email+' passoword '+password);
             let errors = [], userId, objUser, isUserExist = false;
         
                if (!email || !password)
                  {
                     errors.push({ msg: 'Please enter all fields' });
                     response.render('login',{errors});
                  }
         
                await
                pool
               .query('SELECT Id, sfid,name, email__c, FirstName__c, Last_Name__c FROM salesforce.Distributor__c WHERE email__c = $1 AND password__c = $2',[email,password])
               .then((loginResult) => {
               console.log('loginResult.rows[0]  '+JSON.stringify(loginResult.rows[0]));
                   if(loginResult.rowCount > 0 )
                      {
                        userId = loginResult.rows[0].sfid;
                        objUser = loginResult.rows[0];
                  // isUserExist = true;
                           if(errors.length == 0)
                              {
                                  const token = jwt.sign({ user : objUser }, process.env.TOKEN_SECRET, 
                                      {
                                 expiresIn: 8640000 // expires in 24 hours
                                      });
                                 response.cookie('jwt',token, { httpOnly: false, secure: false, maxAge: 5600000 });
                                 response.header('auth-token', token).render('dashboard.ejs',{objUser}); 
                                }
  //login Page Else     
                              if (errors.length != 0)
                               {
                                 console.log('inside else');
                                 errors.push({msg: 'You are not registered'});
                                 response.render('login',{errors});
                                }

                    }
                    else if(loginResult.rowCount == 0)
                    {
                      console.log('inside else');
                      res.status(401).send({msg: 'You are not registered'});
                    }
                    })
     .catch((loginError) =>{
      console.log('loginError   :  '+loginError.stack);
       isUserExist = false;
       });

     });

     // Registration
    router.post('/register',(request, response) => {
    let body = request.body;
    let {firstName, lastName, email, password, password2, mobile, city} = request.body;
    let errors =[];
    //Check Required Fields

    if(!firstName || !lastName || !email || !password || !password2 || !mobile || !city) {
      errors.push({ msg: 'Please fill all the fields'});
    }

    //Check Password 

    if(password !== password2) {
      errors.push({ msg: 'Passwords do not match'});
    }

    if(password.length <6) {
      errors.push({ msg: 'Passwords should be atleast 6 character'});
    }
   
    if(mobile.length <10) {
        errors.push({ msg: 'Passwords should be atleast 6 character'});
      }

    if(errors.length > 0)
    {
      response.render('register',{errors});
    }
    else
    {

      pool
      .query('SELECT id, sfid, Name, email__c FROM salesforce.Distributor__c WHERE email__c = $1 ',[email])
      .then((contactQueryResult)=>{
        console.log('contactQueryResult.rows : '+JSON.stringify(contactQueryResult.rows));
        if(contactQueryResult.rowCount > 0)
        {
          errors.push({ msg: 'This email already exists'});
          response.render('register',{errors}); 
        }
        else
        {
                pool
                .query('INSERT into salesforce.Distributor__c(FirstName__c, Last_Name__c, email__c, mobile__c, city__c,  password__c) values ($1, $2, $3, $4, $5, $6)',[firstName,lastName,email,mobile,city,password])
                .then((contactInsertQueryResult)=>{
                  console.log('contactQueryResult.rows : '+JSON.stringify(contactInsertQueryResult));
                    /******* Successfully  Inserted*/
                    response.redirect('/users/login');
                })
                .catch((contactInsertQueryError)=> {
                  console.log('contactInsertQueryError '+contactInsertQueryError);
                  response.render('register.ejs');
                })
        }
      })
      .catch((contactQueryError)=> {
        console.log('contactQueryError '+contactQueryError);
        response.render('register.ejs');
      });

     
    };
    });

  
    export default router;  