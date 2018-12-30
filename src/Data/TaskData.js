var randomId = require("random-id");

// Priority --> 1: High, 2: Medium, 3: Low

const TaskData = [
    {
        id: randomId(5, "aA0"),
        name: "ReactJS",
        labelArr: ["Frontend", "Backend"],
        priority: 1, 
        memberIdArr: ["user_2"],
        status: 2, 
        description: "ReactJS with NodeJS and Redux"
    },
    {
        id: randomId(5, "aA0"),
        name: "AngularJS",
        labelArr: ["Frontend", "API"],
        priority: 2, 
        memberIdArr: ["user_4", "user_5"],
        status: 1,
        description: "Angular"
    },
    {
        id: randomId(5, "aA0"),
        name: "Python",
        labelArr: ["Backend"],
        priority: 2, 
        memberIdArr: ["user_3", "user_5"],
        status: 1,
        description: "Python"
    },
    {
        id: randomId(5, "aA0"),
        name: "Hackathon",
        labelArr: ["Frontend", "Backend", "Issue"],
        priority: 3, 
        memberIdArr: ["user_2", "user_3", "user_4", "user_5"],
        status: 3,
        description: "Test coding"
    },
]

export default TaskData;