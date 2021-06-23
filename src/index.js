import './sass/main.scss';

const refs = {
    timerFace: document.querySelector('#timer-1'),
    daysFace: document.querySelector('span[data-value = "days"]'),
    hoursFace: document.querySelector('span[data-value = "hours"]'),
    minutesFace: document.querySelector('span[data-value = "mins"]'),
    secondsFace: document.querySelector('span[data-value = "secs"]'),
};

function pad(value) {
    return String(value).padStart(2, '0');
};

function countDays (time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    console.log({ days, hours, mins, secs });

    return { days, hours, mins, secs };
};

function updateTimerFace(timeComp) {
    const { days, hours, mins, secs } = timeComp;
    
    refs.daysFace.textContent = days;
    refs.hoursFace.textContent = hours;
    refs.minutesFace.textContent = mins;
    refs.secondsFace.textContent = secs;
};

export default class Timer {

    constructor(times){
        this.timerInterval = null,
            this.isActive = false,
            this.times = times;
    }
    
         start() {
   
    this.isActive = true,

        this.timerInterval = setInterval(() => {
            const currentTime = Date.now();
            
            const deltaTime =this.times - currentTime ;           
            const timeComponents = countDays(deltaTime);
            
            updateTimerFace(timeComponents);
        }, 1000);
    }

    
};


const oneTime = Date.parse(new Date('Jul 17, 2021'));

const timer = new Timer(oneTime);

 timer.start();