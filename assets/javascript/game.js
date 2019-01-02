var charList = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

var userKey, randomKey;
var chanceCounter = 10;
var winCounter = 0;
var lossCounter = 0;
var userKeyList = [];

var updateCounters = function(){
    // console.log("this function is working");
    chanceCounter = 10;
    userKeyList = [];
    document.getElementById("win").innerHTML = winCounter;
    document.getElementById("loss").innerHTML = lossCounter;
    document.getElementById("chances").innerHTML = chanceCounter;
    document.getElementById("userKeyList").innerHTML = userKeyList;
    randomKey = charList[Math.floor(Math.random() * charList.length)];
    console.log("comp pick: " + randomKey);
    userKey = "";
    document.getElementById("currentGuess").innerHTML = userKey;
};

var checkChances = function(){
    if (chanceCounter < 1)
    {
        alert("You Lose =(   . . . Time for New Round");
        lossCounter ++;
        updateCounters();
    }
};

updateCounters();

document.onkeyup = function(event)
{
    userKey = event.key;
    userKey = userKey.toLowerCase();
    document.getElementById("currentGuess").innerHTML = userKey;
    document.getElementById("userKeyList").innerHTML = userKeyList;
    
    
    // console.log(userKey);
    // console.log("user pick: " + userKey);

    if (userKeyList.includes(userKey) || !(charList.includes(userKey)))
    {
        
        alert("Non-duplicate alphabet characters only =)");
    }
    else
    {   
        userKeyList.push(userKey);
        // console.log(userKeyList);
    

        if (chanceCounter >= 1)
        {
            if (charList.includes(userKey))
            {
                // console.log("You've entered an alphabet");
                if (userKey == randomKey)
                {
                    winCounter ++;
                    updateCounters();
                    alert("You WIN =)   . . . Time for New Round");
                }
                else
                {
                    chanceCounter --;
                    document.getElementById("chances").innerHTML = chanceCounter;
                    // console.log("Try again. Chances remaining: " + chanceCounter);
                }
            }
            else
            {
                alert("Worng Key. Please enter only the alphabet characters");
            }
        }
        checkChances();
    }
    
}

