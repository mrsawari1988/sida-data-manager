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
            'Content-Type': 'application/json; charset=utf-8',
        },
    };
    return [data, options];
};

const sidaDataGetter = async (token, dataField) => {
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
    return DataRecieved;
};

exports.sidaDataGetter = sidaDataGetter;
