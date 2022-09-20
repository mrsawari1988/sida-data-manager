// import JWT from 'jwt-decode';
// import { http } from './httpService';
// import { exportToExcel } from './exportToExcel';

// const getStudentUrl = 'https://sida.medu.ir/api/Student/GetStudent';
// const getClassesUrl = 'https://sida.medu.ir/api/RegisterStudent/GetMainRegisterStudentForHitory';

// const fileNameCreator = (token) => {
//     const { SchoolId, RegionId } = JWT(token);
//     return RegionId + '_' + SchoolId + '.xlsx';
// };

// const optionCreator = (token) => {
//     const data = {
//         take: 422,
//         skip: 0,
//         page: 1,
//         pageSize: 422,
//     };
//     const options = {
//         headers: {
//             Authorization: 'Bearer ' + token,
//         },
//     };

//     return [data, options];
// };

// export const exportStudentsData = async (token) => {
//     const fileName = fileNameCreator(token);
//     const [data, options] = optionCreator(token);
//     const response = await http.post(getStudentUrl, data, options);
//     const currentStudents = response.data.data.data.filter(
//         (student) => student.timeYearTypeId === 1400
//     );
//     exportToExcel(currentStudents, fileName);
// };

// export const exportClassesData = async (token) => {
//     const fileName = fileNameCreator(token);
//     const [data, options] = optionCreator(token);
//     const response = await http.post(getClassesUrl, data, options);
//     exportToExcel(response.data.data.data, fileName);
// };
