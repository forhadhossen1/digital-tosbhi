//  section subhanallah
let subhanallahIncrimentValue = 0;
document.getElementById('subhanallahIncriment').addEventListener('click', function(){
    if(subhanallahIncrimentValue === 33){
        return alert('Please fill up the another topic');
    }

    subhanallahIncrimentValue += 1;
    subhanallahDisplay.innerText = subhanallahIncrimentValue;
})

document.getElementById('subhanallahDecriment').addEventListener('click', function(){
    if(subhanallahIncrimentValue === 0){
        return alert("You can't added nagetive value");
    }

    subhanallahIncrimentValue -= 1;
    subhanallahDisplay.innerText = subhanallahIncrimentValue;
})


// allhamdulillah section 
let allhamdulillahIncrimentValue = 0;
document.getElementById('allhamdulillahIncriment').addEventListener('click', function(){
    if(allhamdulillahIncrimentValue === 33){
        return alert('Please fill up the another topic');
    }

    allhamdulillahIncrimentValue += 1;
    allhamdulillahDisplay.innerText = allhamdulillahIncrimentValue;
})

document.getElementById('allhamdulillahDecriment').addEventListener('click', function(){
    if(allhamdulillahIncrimentValue === 0){
        return alert("You can't negative value");
    }

    allhamdulillahIncrimentValue -= 1;
    allhamdulillahDisplay.innerText = allhamdulillahIncrimentValue;
})


//  allahuakber Selection 

let allahhuakberIncrimentValue = 0;
document.getElementById('allahhuakberIncriment').addEventListener('click', function(){
    if(allahhuakberIncrimentValue === 34){
        return alert("Mashallah you are completed all topic");
    }

    allahhuakberIncrimentValue += 1;
    allahhuakberDisplay.innerText = allahhuakberIncrimentValue;
})

document.getElementById('allahhuakberDecriment').addEventListener('click', function(){
    if(allahhuakberIncrimentValue === 0){
        return alert("Your can't nagetive value");
    }

    allahhuakberIncrimentValue -= 1;
    allahhuakberDisplay.innerText =allahhuakberIncrimentValue;
})