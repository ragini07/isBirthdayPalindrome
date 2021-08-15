const birthdate = document.querySelector("#birthdateinput");
const btn = document.querySelector("#btn");

function isPalindrome(dateFormat) {
    var low = 0;
    var high = dateFormat.length - 1;
    while (high > low) {
        if (dateFormat[high] != dateFormat[low])
            return false;
        high--;
        low++;
    }
    return true;

}

function checkforPalindrome() {
    if (birthdate.value == "") {
        var tag = document.createElement("h3");
        var text = document.createTextNode("Please Enter Date Field As Your Birthdate");
        tag.appendChild(text);
        var element = document.querySelector(".text-section")
        element.appendChild(tag);
    } else {
        // console.log(birthdate.value);
        var date = new Date(birthdate.value);
        yr = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate();

        dateFormat1 = "" + yr + month + day;
        dateFormat2 = "" + month + day + yr;
        dateFormat3 = "" + day + month + yr;

        let flag = 0;
        if (month < 10) {
            month = "0" + month;
            flag = 1;
        }

        if (day < 10) {
            day = "0" + day;
            flag = 1;
        }
        if (flag) {
            dateFormat4 = "" + yr + month + day;
            dateFormat5 = "" + month + day + yr;
            dateFormat6 = "" + day + month + yr;
        } else {
            dateFormat4 = "";
            dateFormat5 = "";
            dateFormat6 = "";
        }
        console.log(dateFormat1 + " " + dateFormat2 + " " + dateFormat3 + " " + dateFormat4 + " " + dateFormat5 + " " + dateFormat6);
        combination = [dateFormat1, dateFormat2, dateFormat3, dateFormat4, dateFormat5, dateFormat6];
        console.log(combination);
        // const reverse = combination.map((x) => function isPalindrome(){
        //     console.log(x);
        //     let reverse = x.reverse();
        //     return reverse;
        //     console.log("ulta:"+reverse);

        // });
        let setFlag = false;
        for (var i = 0; i < combination.length; i++) {
            setFlag = isPalindrome(combination[i]);
            if (setFlag) {
                var tag = document.createElement("h3");
                var text = document.createTextNode("WOW!!! Your birthdate in format '${combination[i]'} is palindrome");
                tag.appendChild(text);
                var element = document.querySelector(".text-section")
                element.appendChild(tag);

                break;
            }
        }
        if (!setFlag) {
            
        }





    }

}






btn.addEventListener('click', checkforPalindrome);