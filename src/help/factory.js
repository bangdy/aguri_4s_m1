import { dateIdGenerator } from "./util";

export class Task {
  constructor({ title, detail, checkedCollector }) {
    this.taskId = new Date().valueOf();
    this.title = title;
    this.detail = detail;
    this.checkedCollector = checkedCollector ?? {}; // key : taskTickleId , value : {checkTime : Date Object, comment : string }
  }

  updateCheck(date) {
    const taskTickleId = dateIdGenerator(date);
    if (Object.keys(this.checkedCollector).includes(taskTickleId)) {
      delete this.checkedCollector[taskTickleId];
    } else {
      this.checkedCollector[taskTickleId] = { checkTime: new Date().valueOf(), comment: "hello" };
    }
    return this.checkedCollector;
  }
}
