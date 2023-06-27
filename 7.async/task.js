class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, cb) {
    if (!time || !cb)
      throw new Error('Отсутствуют обязательные аргументы');

    if (this.alarmCollection.some(p => p.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      callback: cb,
      time,
      canCall: true
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(p => p.time !== time);
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    hours = hours < 10 ? '0' + hours : hours;

    let minutes = currentDate.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let time = hours + ":" + minutes;
    return time ;
  }

  start(){
    if(this.intervalId){
      return;
    }
    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach(p => {
        if (p.time === currentTime && p.canCall) {
          p.canCall = false;
          p.callback();
        }
      })
    }, 1000)
  }
  stop() {
    this.intervalId && clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(p => p.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}