import React,{useState} from 'react';

const Time = () => {
    const tdate = new Date();
    const hours = tdate.getHours();
    const time = tdate.toLocaleTimeString();
    const [curr,set] = useState(time);

    const update = () => {
        const date = new Date().toLocaleTimeString();
        set(date);  
    }
    setInterval(update,1000);

    const heading2 = {
        textAlign : 'center',
        fontSize : '3.5em',
        marginBottom : '30px',
        letterSpacing : '8px',
        fontFamily : 'Orbitron'
    };

    if (hours>=5 && hours<=12) {
        heading2.textShadow = '3px 3px 5px grey';
    }
    else if(hours>12 && hours<=17){
        heading2.color = '#8d021f';
        heading2.textShadow = '3px 3px 5px grey';
    }
    else if(hours>17 && hours<=21){
        heading2.color = '#fffafa';
        heading2.textShadow = '3px 3px 5px grey';
    }
    else{
        heading2.color = 'white';
        heading2.textShadow = '3px 3px 5px black';
    }
    return(
        <>
            <h1 style={heading2}>{curr}</h1>
        </>
    );

}

export default Time;