import JWT from 'jwt-decode';
import { http } from './httpService';
import { exportToExcel } from './exportToExcel';
const getScoresUrl = 'https://sida.medu.ir/api/ComputeKarnameh/GetKarnameh';
const getStudentUrl = 'https://sida.medu.ir/api/Student/GetStudentInfo';

const optionCreator = async (token) => {
    const [keys, studentsInfo] = await getStudentsIds(token);
    const data = {
        keys,
    };
    const options = {
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json;charset=UTF-8',
        },
    };
    return [data, options, studentsInfo.data.data.data];
};

export const getScores = async (token) => {
    optionCreator(token);
    const [data, options, studentsInfo] = await optionCreator(token);
    const result = await http.post(getScoresUrl, data, options);
    console.log(result);
    const scores = [];
    result.data.data.forEach((student) => {
        student.courseScores.forEach((course) => {
            if (course.finalScore < 12 && course.gradeTypeId !== 12) {
                scores.push({
                    nationalId: course.studentId,
                    majorId: student.majorId,
                    classId: student.classRoomId,
                    grade: course.gradeTypeId,
                    courseId: course.courseId,
                    corseTitle: course.courseTitle,
                    mostamar1: course.mostamar1,
                    nime1: course.nimeh1,
                    mostamar2: course.mostamar2,
                    nime2: course.nimeh2,
                    final: course.finalScore,
                });
            }
        });
    });
    matchIdtoName(scores, studentsInfo);
    // exportToExcel(scores);
};

const getStudentsIds = (token) => {
    return http
        .post(
            getStudentUrl,
            {
                take: 422,
                skip: 0,
                page: 1,
                pageSize: 422,
            },
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            }
        )
        .then((response) => {
            const result = response.data.data.data.map((student) => {
                return student.id;
            });

            return [result, response];
        });

    // return keys;
};

const matchIdtoName = (scores, studentsInfo) => {
    console.log(scores);
    // console.log(studentsInfo);
    let finalResult = [];
    studentsInfo.forEach((res) => {
        scores.forEach((score) => {
            if (res.id === score.nationalId) {
                finalResult.push({
                    ...score,
                    firstName: res.firstName,
                    lastName: res.lastName,
                    majorTitle: res.majorTitle,
                    gradeTitle: res.gradeTypeId === 10 ? '??????' : '????????????',
                    classTitle:
                        score.classId === 5392433
                            ? '???????????? ?????????? ??????'
                            : score.classId === 5392434
                            ? '???????????? ?????????? ??'
                            : score.classId === 5392435
                            ? '???????????? ?????????? ??????'
                            : score.classId === 5392436
                            ? '???????????? ?????????? ??'
                            : score.classId === 5392437
                            ? '?????? ??????????'
                            : score.classId === 5392438
                            ? '?????? ?????????? ??????'
                            : score.classId === 5556419
                            ? '?????? ????????????'
                            : score.classId === 5392432
                            ? '???????????? ????????????'
                            : '?????? ?????????? ??',
                });
            }
        });
    });
    // scores.forEach((score) => {
    //     return finalResult.push({
    //         ...score,
    //         fullName: finalResult.forEach((res) => {
    //             if (res.id === score.nationalId) {
    //                 return `res.firstName + + res.lastname`;
    //             }
    //         }),
    //     });
    // });
    exportToExcel(finalResult);
    // console.log(finalResult);
};
