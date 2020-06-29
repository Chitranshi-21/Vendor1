import express from 'express';
const router = express.Router();
import pool from '../db/dbConfig';
import jwt from 'jsonwebtoken';
const app = express();
import { getToken } from '../util';


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

  //Distributor record query test
  router.get('/Distributor',(request, response) =>  
   {

      pool
      .query('SELECT Id, sfid,name, email__c, FirstName__c, Last_Name__c FROM salesforce.Distributor__c')
      .then((distributorQueryResult) => 
        {
          console.log('distributorQueryResult   : '+JSON.stringify(distributorQueryResult.rows));
           response.send(distributorQueryResult.rows);
       // response.render('JoinQuery',{lstContact:distributorQueryResult.rows});
        })
      .catch((distributorQueryError) =>
        {
          console.log('distributorQueryError  : '+distributorQueryError);
           response.send(distributorQueryError);
        })
  
    });

    // Distributor SignIn post

    router.post('/signin',async (request, response) => 
       {
          const {email, password} = request.body;
          console.log('email : '+email+' passoword '+password);
           let errors = [], userId, objUser, isUserExist = false;
              await
              pool
               .query('SELECT Id, sfid,name, email__c, FirstName__c, Last_Name__c,password__c FROM salesforce.Distributor__c WHERE email__c = $1 AND password__c = $2',[email,password])
               .then((loginResult) =>
                 {
                    console.log('loginResult.rows[0]  '+JSON.stringify(loginResult.rows[0]));
                     if(loginResult.rowCount > 0 )
                      {
                        userId = loginResult.rows[0].sfid;
                        objUser = loginResult.rows[0];
                        response.send({
                          _id: userId,
                          name: objUser.firstname__c,
                          email: objUser.email,
                          token: getToken(objUser)
                                      })
                       }
                     else if(loginResult.rowCount == 0)
                         {
                           console.log('inside else');
                            response.status(401).send({msg: 'You are not registered'});
                          }
                 })
               .catch((loginError) =>
                 {
                   console.log('loginError   :  '+loginError.stack);
                   isUserExist = false;
                 });

       });
    // Vendor SignIn post

       router.post('/vendorSignin',async (request, response) => 
          {

             const {email, password} = request.body;
             console.log('email : '+email+' passoword '+password);
             let errors = [], userId, objUser, isUserExist = false;
                await
                pool
                 .query('SELECT Id, sfid,name, Email__c, First_Name__c, LastName__c,password__c FROM salesforce.Vendor__c WHERE email__c = $1 AND password__c = $2',[email,password])
                 .then((loginResult) => 
                 {
                   console.log('loginResult.rows[0]  '+JSON.stringify(loginResult.rows[0]));
                    if(loginResult.rowCount > 0 )
                      {
                        userId = loginResult.rows[0].sfid;
                        objUser = loginResult.rows[0];
                        response.send({
                          _id: userId,
                          name: objUser.first_name__c,
                          email: objUser.email,
                          token: getToken(objUser)
                       })
                      }
                    else if(loginResult.rowCount == 0)
                    {
                      console.log('inside else');
                      response.status(401).send({msg: 'You are not registered'});
                    }
                  })
                .catch((loginError) =>
                {
                  console.log('loginError   :  '+loginError.stack);
                  isUserExist = false;
                });

          });

     // Registration

    router.post('/register',async(request, response) => 
    {
       let body = request.body;
      let fname= request.body.fname;
      let lname= request.body.lname;
      let email= request.body.email;
      let mobile= request.body.mobile;
      let city= request.body.city;
      let password= request.body.password;
       console.log(request.body);
      let errors =[];
      {
      await
      pool
      .query('SELECT id, sfid, Name, email__c FROM salesforce.Distributor__c WHERE email__c = $1 ',[email])
      .then((distributorQueryResult)=>{
        console.log('distributorQueryResult.rows : '+JSON.stringify(distributorQueryResult.rows));
        if(distributorQueryResult.rowCount > 0)
        {
          errors.push({ msg: 'This email already exists'});
          response.send({ msg: 'Already Exists'}); 
        }
        else
        {
                pool
                .query('INSERT into salesforce.Distributor__c(FirstName__c, Last_Name__c, email__c, mobile__c, city__c,  password__c) values ($1, $2, $3, $4, $5, $6)',[fname,lname,email,mobile,city,password])
                .then((distributorInsertQueryResult)=>{
                //  userId = distributorQueryResult.rows[0].sfid;
                  objUser = distributorQueryResult.rows[0];
                  console.log('distributorQueryResult.rows : '+JSON.stringify(distributorInsertQueryResult));
                    /******* Successfully  Inserted*/
                    response.send({
                 //  _id: userId,
                   name: objUser.firstname__c,
                    email: objUser.email,
                    token: getToken(objUser)
                    })
                    //response.redirect('/users/login');
                })
                .catch((distributorInsertQueryError)=> {
                  console.log('distributorInsertQueryError '+distributorInsertQueryError);
                  response.status(401).send({msg: 'Invalid User Data'});
                })
        }
      })
      .catch((distributorQueryError)=> {
        console.log('distributorQueryError '+distributorQueryError);
        response.status(401).send({msg: 'Invalid User Data'});
      });
    };
  });

    //Vendor Registration
    router.post('/vendorRegister',async(request, response) => {
      let body = request.body;
      let fname= request.body.fname;
      let lname= request.body.lname;
      let email= request.body.email;
      let mobile= request.body.mobile;
      let city= request.body.city;
      let password= request.body.password;
      console.log(request.body);
      let errors =[];
      {
        await
        pool
        .query('SELECT id, sfid, Name, email__c FROM salesforce.Vendor__c WHERE email__c = $1 ',[email])
        .then((vendorQueryResult)=>{
          console.log('vendorQueryResult.rows : '+JSON.stringify(vendorQueryResult.rows));
               if(vendorQueryResult.rowCount > 0)
                {
                  errors.push({ msg: 'This email already exists'});
                  response.send({ msg: 'Already Exists'}); 
                }
               else
                {
                  pool
                  .query('INSERT into salesforce.Vendor__c(First_Name__c, LastName__c, email__c, mobile__c, city__c,  password__c) values ($1, $2, $3, $4, $5, $6)',[fname,lname,email,mobile,city,password])
                  .then((vendorInsertQueryResult)=>{
                   userId = vendorInsertQueryResult.rows[0].sfid;
                    objUser = vendorInsertQueryResult.rows[0];
                    console.log('vendorInsertQueryResult.rows : '+JSON.stringify(vendorInsertQueryResult));
                      /******* Successfully  Inserted*/
                      response.send({
                    _id: userId,
                     name: objUser.first_name__c,
                      email: objUser.email,
                      token: getToken(objUser)
                      })
                      //response.redirect('/users/login');
                  })
                  .catch((vendorInsertQueryError)=> {
                    console.log('vendorInsertQueryError '+vendorInsertQueryError);
                    response.status(401).send({msg: 'Invalid User Data'});
                  })
               }
        })
        .catch((vendorQueryError)=> {
          console.log('vendorQueryError '+vendorQueryError);
          response.status(401).send({msg: 'Invalid User Data'});
        });
      };
  
    });
  
    export default router;  