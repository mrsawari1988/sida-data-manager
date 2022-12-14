const requiredFields = {
    students: [
        'birthDate',
        'birthPlace',
        'classRoomId',
        'fatherMobileNumber',
        'fatherName',
        'firstName',
        'gradeTypeId',
        'homeAddress',
        'homePostalCode',
        'homeTelephone',
        'issuePlace',
        'lastName',
        'majorId',
        'majorTitle',
        'nationalCode',
        'radifID',
        'seriTypeId',
        'seriTypeTitle',
        'serialID',
        'studentMobileNumber',
    ],
    classes: [
        'title',
        'classRoomId',
        'courseId',
        'personelId',
        'gradeTypeId',
        'classRoomTitle',
        'majorId',
        'nationalCode',
    ],
    scores: [
        'nationalId',
        'majorId',
        'classId',
        'grade',
        'courseId',
        'courseTitle',
        'mostamar1',
        'nime1',
        'mostamar2',
        'nime2',
        'final',
        'firstName',
        'lastName',
        'majorTitle',
        'gradeTitle',
        'classTitle',
    ],
    teachers: ['personelId', 'schoolId', 'personelFirstName', 'personelLastName', 'nationalCode'],
    courses: [
        'title',
        'classRoomId',
        'courseId',
        'personelId',
        'gradeTypeId',
        'classRoomTitle',
        'majorId',
        'nationalCode',
    ],
};

exports.requiredFields = requiredFields;
