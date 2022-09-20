import { http } from './httpService';

const getStudentUrl = 'https://sida.medu.ir/api/Student/GetStudentInfo';

const optionCreator = async (token) => {
    const data = {
        take: 422,
        skip: 0,
        page: 1,
        pageSize: 422,
    };
    const options = {
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json;charset=UTF-8',
        },
    };
    return [data, options];
};

export const getScores = async (token) => {
    optionCreator(token);
    const [data, options] = await optionCreator(token);
    const result = await http.post(getStudentUrl, data, options);
    const response = createStudentData(result.data.data.data);
    return response;
};

const createStudentData = (data) => {
    const studentData = [];
    data.forEach((student) => {
        studentData.push({
            birthDate: student.birthDate,
            birthPlace: student.birthPlace,
            classRoomId: student.classRoomId,
            fatherMobileNumber: student.fatherMobileNumber,
            fatherName: student.fatherName,
            firstName: student.firstName,
            gradeTypeId: student.gradeTypeId,
            homeAddress: student.homeAddress,
            homePostalCode: student.homePostalCode,
            homeTelephone: student.homeTelephone,
            issuePlace: student.issuePlace,
            lastName: student.lastName,
            majorId: student.majorId,
            majorTitle: student.majorId,
            nationalCode: student.nationalCode,
            radifID: student.radifID,
            seriTypeId: student.seriTypeId,
            seriTypeTitle: student.seriTypeId,
            serialID: student.serialID,
            studentMobileNumber: student.studentMobileNumber,
        });
    });

    return studentData;
};
