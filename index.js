const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

class DigitalClock {
  constructor(element) {
    this.element = element;
  }
    start() {
      this.update();

      setInterval(() => {
        this.update();
      }, 500);
    }
    update() {
      const parts = this.getTime();
      const minuteFormat = parts.minute.toString().padStart(2,"0");
      const timeFormat = `${parts.hour}:${minuteFormat}`;
      const amPm = parts.isAm ? "AM" : "PM";

      this.element.querySelector(".clock-time").textContent = timeFormat;
      this.element.querySelector(".clock-ampm").textContent = amPm;
      
    }

    getTime() {
      let now = new Date();

      return {
        hour: now.getHours() % 12 || 12,
        minute: now.getMinutes(),
        isAm: now.getHours() < 12
      };
    }
}



clockObject.start();