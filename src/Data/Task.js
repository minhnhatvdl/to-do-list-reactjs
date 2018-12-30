export default class Task {
    constructor(id, name, labelArr, priority, memberIdArr, status, description) {
        this.id = id;
        this.name = name;
        this.labelArr = labelArr;
        this.priority = priority;
        this.memberIdArr = memberIdArr;
        this.status = status;
        this.description = description;
    }
}