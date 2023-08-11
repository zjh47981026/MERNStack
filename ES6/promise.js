// callbacks and callbacks and callbacks - becomes full of callback functions
/*
//Login SignUp, create user session
function Authentication(userInfo) { 

}

//permissions to access like admin/normal user
function Authorization(userInfo, sessionId) {
    
}
//what all pages user can navigate, returns first page
function Navigation(userInfo, permissions) {
    
}

//signin user

function SignInSignupUser(authCallback, authorizationCallback, navigationCallback) {
    let session = Authentication(username, password)  //get valid user session
    if (session == IsValid) {
        let permission = Authorization(user, session)

        let permissionPromiseObject = new Promise((resolve, reject) => {
            let permission = Authorization(user, session)
            if (permission.status == success) {
                return resolve(permission)  //this will be accessed in promise.then
            } else {
                return reject("No Response") //this will be accessed in promise.catch
            }
        })


        permissionPromiseObject.then((object) => {
            //statement for successful calls
            
        }).catch((error) => {
            //statement for failed calls
        })

        if (permission == "Admin") {
            let nextPage = Navigation(permission)
        } else if (permission == "Guest"){
            let nextPage = Navigation(permission)
        } else {
            //if not modularized well then it falls in loop of callbacks
            //creates situation of callback hell
            SignInSignupUser(Authentication, Authorization, Navigation);
        
        }
    } else {

    }
}

SignInSignupUser(Authentication, Authorization, Navigation);

*/

let LunchPormise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            "Planned" : "Yes",
            "Status" : "Success",
            "Status Code" : 200
        })
    }, 3000);
    setTimeout(() => {
        reject({
            "Planned" : "Yes",
            "Status" : "Failed",
            "Status Code" : 500
        })
    }, 4000);
})

console.log("Promise Status", LunchPormise);

LunchPormise.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

console.log("Promise Completed!!!");
