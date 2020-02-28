class Task {
    constructor(duration, action, ...params) {
        this.duration = duration;
        this.action = action;
        this.params = params;
    }

    async run(action, ...params) {
        await this.action(...this.params);
    }
}

class TaskMsg {
    constructor() {
        this.tasks = [];
        this.isFinish = true;
    }

    addTask(task) {
        this.tasks.push(task);
        if (this.isFinish) this.run();
        this.isFinish = false;

    }

    async run() {
        let tasks = this.tasks;
        while (tasks.length) {
            await tasks.pop().run();
        }
        this.isFinish = true;
    }
}

export {
    TaskMsg,
    Task
}
