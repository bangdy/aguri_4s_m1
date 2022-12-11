import { dateIdGenerator } from "./util";

export class Task {
  constructor(taskId, title) {
    this.taskId = taskId;
    this.title = title;
    this.checkedCollector = {}; // key : taskTickleId , value : {checkTime : Date Object, comment : string }
  }

  updateCheck(date) {
    const taskTickleId = dateIdGenerator(date);
    if (Object.keys(this.checkedCollector).includes(taskTickleId)) {
      delete this.checkedCollector[taskTickleId];
    } else {
      this.checkedCollector[taskTickleId] = { checkTime: new Date(), comment: "hello" };
    }
    return this.checkedCollector;
  }
}
