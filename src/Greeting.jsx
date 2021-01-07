import React from 'react';

const Greeting = () => {
    const tdate = new Date();
    const hours = tdate.getHours();
    const heading1 = {
        textAlign : 'center',
        fontSize : '3.5em',
        letterSpacing : '3px',
        fontFamily : 'Raleway'
    }
    if (hours>=5 && hours<=12) {
        heading1.textShadow = '3px 3px 5px grey';
        return(
            <h1 style = {heading1}>Good Morning Everyone !!</h1>
        );
    }
    else if(hours>12 && hours<=17){
        heading1.color = '#8d021f';
        heading1.textShadow = '3px 3px 5px grey';
        return(
            <h1 style = {heading1}>Good Afternoon Everyone !!</h1>
        );
    }
    else if(hours>17 && hours<=21){
        heading1.color = '#fffafa';
        heading1.textShadow = '3px 3px 5px grey';
        return(
            <h1 style = {heading1}>Good Evening Everyone !!</h1>
        );
    }
    else{
        heading1.color = 'white';
        heading1.textShadow = '3px 3px 5px black'
        return(
            <h1 style = {heading1}>Good Night Everyone !!</h1>
        );
    }
}

export default Greeting;