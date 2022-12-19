function isvalidURL(url){
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
  return !!urlPattern.test(url);
}

export function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    if (inputText == "") {
        window.alert("You have to fill in the blank");
        return false;
    }
    if (isvalidURL(inputText)==false) {
        window.alert("Wrong URL, please check your input again");
        return false;
    }
    return true;
}
