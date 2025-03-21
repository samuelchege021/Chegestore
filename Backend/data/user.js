import bcrypt from 'bcryptjs'



const users=[
{

name:"admin",
email:"admin@example.com",
password:bcrypt.hashSync('12345',10),
isAdmin:"true",



},

{

    name:"jane doe",
    email:"jane@example.com",
    password:bcrypt.hashSync('12345',10),
    isAdmin:"false",
    
    
    
    },




    {

        name:"john doe",
        email:"john@example.com",
        password:bcrypt.hashSync('12345',10),
        isAdmin:"true",
        
        
        
        }


]



export default users;




console.log(users)