//user.js

export default class User{}; // default export, only one default export
//is allowed in one file
//export default function User() {}; // second default is not allowed
//named export can be many from the file
export const userAge = 22; //named export from user file
export const userAddress = "somewhere on earth"; //named export from user file

//person.js
//export const userAge = 31;


//account.js - need to import user data 

import User from "./user" // as user is default import so no need to specify {}

//when we do named import we should do it with {}
import {userAge, userAddress} from "./user" //  named import

//in case of duplicate imports, we can use alias while importing 
import {userAge as personAge} from "./person"  //named import

//name and default can be important together 
import User, {userAge, userAddress} from "./user"

//constants.js
export const pie = 22;
export const eta = 23;
export const zeta = 24;

//wild card import using *

import * as constants from "./constants"


//while using
constants.pie
constants.eta
constants.zeta
