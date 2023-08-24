//http https :=> hypertext type protocol
//html -> hypertext markup language

//http - stateless

//we need to save information on server so that we can access it anywhere

//user-
//https://www.arit.userbase.com/api/user/searches - {search item} - post

//https://www.arit.userbase.com/api/user/get/searches/userid  -get

//saving information on ui/screen - representation

//REST - Representational State Transfer protocol

//Rest ful API's have below specifications -
//it uses http
//definitive verbs or http method - get/put/post/patch/delete
//stateless 

//http verbs - 
//create - post
//update - put and patch
//read - get
//delete - delete

//put and patch
let User = {
    Name : "Van",
    Age : 20,
    Address : "Somewhere on moon!!!",
    UserId : "123445"
}

//change my name = Vam Duc Phan

//post - need to create a complete new object (full replacement)
let UserUpdated = {
    Name : "Van Duc Phan",
    Age : 20,
    Address : "Somewhere on moon!!!",
    UserId : "123445"
}

//patch - need to create object with data that needs to be changed (partial replacement)
let UserUpdatePatch = {
    Name : "Van Duc Phan",
    UserId : "123445"
}


