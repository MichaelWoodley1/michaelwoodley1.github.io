/*code for clock */

class DigitalClock{
  constructor(element){
      this.element = element;
  }

  start(){
      setInterval(() =>{
          this.update();
      }, 200);
  }
  update() {
      let component = this.getTimeComponents();
      let minuteFormat = component.minute.toString().padStart(2,"0");
      let timeFormat = `${component.hour}:${minuteFormat}`;
      const amPm = component.isAm ? "AM" : "PM";

      this.element.querySelector(".clock-time").textContent = timeFormat;
      this.element.querySelector(".clock-ampm").textContent = amPm;
  }
  getTimeComponents() {
      const now = new Date();

      return {
          hour: now.getHours() % 12 || 12,
          minute: now.getMinutes(),
          isAm: now.getHours() < 12
      };
  }
}
const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();