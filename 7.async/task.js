class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
    }
  
    addClock(time, callback) {
      if (!time || callback === undefined) {
        throw new Error("Не задан идентификатор звонка");
      }
  
      if (this.alarmCollection.some((alarm) => alarm.time === time)) {
        console.error("Звонок с таким идентификатором уже существует");
      }
  
      this.alarmCollection.push({ time, callback, canCall: true });
    }
  
    removeClock(time) {
      this.alarmCollection = this.alarmCollection.filter(
        (alarm) => alarm.time !== time
      );
    }
  
    getCurrentFormattedTime() {
      return new Date().toLocaleTimeString().slice(0, -3);
    }
  
    start() {
      if (!this.timerId) {
        this.timerId = setInterval(
          () =>
            this.alarmCollection.forEach((alarm) => {
              if (
                alarm.time === this.getCurrentFormattedTime() &&
                alarm.canCall
              ) {
                alarm.canCall = false;
                alarm.callback();
              }
            }),
          1000
        );
      }
    }
  
    stop() {
      if (this.timerId) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    }
  
    resetAllCalls() {
      this.alarmCollection.forEach((alarm) => {
        alarm.canCall = true;
      });
    }
  
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }