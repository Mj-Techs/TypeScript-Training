var user = "Hello World!";
var userId = 0;
var isLoggedIn = false;
var lastLoggedIn = new Date();
var products = [
    "pen",
    "pencil",
    12344,
    "book",
    false,
];
products.push("ramsesh");
var singleUser = {
    username: "trianing",
    id: 2,
    isLoggedIn: false,
    getLoggedInInfo: function (id) {
        return true;
    }
};
console.log(singleUser.getLoggedInInfo("2"));
var userReference = [
    {
        username: 12345,
        id: 0
    },
    {
        username: "b",
        id: 1,
        isTokeGenerated: true
    },
    {
        username: "c",
        id: 2,
        isLoggedIn: true
    },
];
var getUsername = function (id) {
    var user = userReference.find(function (user) { return user.id === id; });
    return user ? user.username : "user not found";
};
console.log(getUsername(1));
console.log(getUsername("sdsd"));
console.log(getUsername(3));
console.log(getUsername(6));
