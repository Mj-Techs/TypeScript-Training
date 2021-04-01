var titleElement = document.getElementById("title");
if (titleElement) {
    titleElement.innerHTML = "I am Learning TypeScript";
    var count_1 = 0;
    titleElement.onclick = function () {
        console.log("clicked-", ++count_1);
    };
}
var getValue = function () {
    var inputElement = document.getElementById("input-name");
    if (inputElement) {
        console.log("value:", inputElement.value);
    }
};
