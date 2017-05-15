# FreeCodeCamp Sacramento Email Microservice

## Steps to set this up on AWS:

### Setting up AWS Lambda Email Microservice
1. build zip for AWS import: 
```
$ npm run build
```
2. Get an account if you don't have one. Sign up [here](https://aws.amazon.com/).
3. Navigate to Lambda Control Panel (Services Dropdown > Compute > Lambda).
4. Create a new Lambda Function, select `hello-world` blueprint for node.js.
5. Create Rule Name / Description > Next
6. Name Function, Change Runtime to `Node 4.3`, Create Role, Code Entry: Upload zip of function: `dist.zip`, Change Handler to `app.handler`, Memory/timeout may need to be adjusted. > Next
7. Review Function > Create Function 

### Setting up AWS API Gateway
1. Create API
2. Create Resource for API (ex. contact, messages)
3. Create a “POST” method that invokes our Lambda Function
4. Enable CORS on method
5. Deploy!
6. When deploying production, make a more stringent Access Control Allow Origin