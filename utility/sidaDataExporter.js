const axios = require('axios');
const { sidaUrls } = require('./sidaUrls');
const { requiredFields } = require('./fields');

const optionCreator = async (token) => {
    const data = {
        take: 1000,
        skip: 0,
        page: 1,
        pageSize: 1000,
    };
    const options = {
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
        },
    };
    return [data, options];
};

const dynamicSidaExporter = async (token, Url, fields) => {
    const [data, options] = await optionCreator(token);
    const response = await axios.post(Url, data, options);
    const responseData = response.data.data.data;
    const DataRecieved = [];

    responseData.forEach((element) => {
        const obj = {};
        fields.forEach((field) => {
            obj[field] = element[field];
        });
        DataRecieved.push(obj);
    });

    return DataRecieved;
};
const newDynamicSidaExporter = async (token, dataField) => {
    const [data, options] = await optionCreator(token);
    const Url = sidaUrls[dataField];
    const fields = requiredFields[dataField];
    const response = await axios.post(Url, data, options);
    const responseData = response.data.data.data;
    const DataRecieved = [];

    responseData.forEach((element) => {
        const obj = {};
        fields.forEach((field) => {
            obj[field] = element[field];
        });
        DataRecieved.push(obj);
    });
    // console.log(DataRecieved);
    return DataRecieved;
};

const getStudents = async (token) => {
    const students = await dynamicSidaExporter(token, sidaUrls.students, requiredFields.students);
    console.log(students);
};

const getScores = async (token) => {
    const scores = await dynamicSidaExporter(token, sidaUrls.scores, requiredFields.scores);
    console.log(scores);
};

const getClasses = async (token) => {
    const classes = await dynamicSidaExporter(token, sidaUrls.classes, requiredFields.classes);
    console.log(classes);
};

const getTeachers = async (token) => {
    const teachers = await dynamicSidaExporter(token, sidaUrls.teachers, requiredFields.teachers);
};

const getCourses = async (token) => {
    const courses = await dynamicSidaExporter(token, sidaUrls.courses, requiredFields.courses);
};

exports.getClasses = getClasses;
exports.getCourses = getCourses;
exports.getStudents = getStudents;
exports.getScores = getScores;
exports.getTeachers = getTeachers;
exports.newDynamicSidaExporter = newDynamicSidaExporter;
