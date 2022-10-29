export const notifireInitialState = {
    students: {
        title: 'اطلاعات دانش آموزان',
        status: 'درحال دریافت',
        badgeColour: 'Secondary',
        badgeIcon: 'fa-clock-o',
    },
    classes: {
        title: 'مشخصات کلاس ها',
        status: 'درحال دریافت',
        badgeColour: 'Secondary',
        badgeIcon: 'fa-clock-o',
    },
    teachers: {
        title: 'مشخصات دبیران',
        status: 'درحال دریافت',
        badgeColour: 'Secondary',
        badgeIcon: 'fa-clock-o',
    },
    courses: {
        title: 'اطلاعات دروس',
        status: 'درحال دریافت',
        badgeColour: 'Secondary',
        badgeIcon: 'fa-clock-o',
    },
};

export const notifireReducer = (state, action) => {
    switch (action.type) {
        case 'saving-students':
            return {
                ...state,
                students: {
                    title: 'اطلاعات دانش آموزان',
                    status: 'درحال ذخیره',
                    badgeColour: 'warning',
                    badgeIcon: 'fa-clock-o',
                },
            };
        case 'saved-students':
            return {
                ...state,
                students: {
                    title: 'اطلاعات دانش آموزان',
                    status: 'تمام شد',
                    badgeColour: 'success',
                    badgeIcon: 'fa-check-square',
                },
            };
        case 'saving-classes':
            return {
                ...state,
                classes: {
                    title: 'مشخصات کلاس ها',
                    status: 'درحال ذخیره',
                    badgeColour: 'warning',
                    badgeIcon: 'fa-clock-o',
                },
            };
        case 'saved-classes':
            return {
                ...state,
                classes: {
                    ...state.classes,
                    status: 'تمام شد',
                    badgeColour: 'success',
                    badgeIcon: 'fa-check-square',
                },
            };
        case 'saving-teachers':
            return {
                ...state,
                teachers: {
                    title: 'مشخصات دبیران',
                    status: 'درحال ذخیره',
                    badgeColour: 'warning',
                    badgeIcon: 'fa-clock-o',
                },
            };
        case 'saved-teachers':
            return {
                ...state,
                teachers: {
                    ...state.teacers,
                    status: 'تمام شد',
                    badgeColour: 'success',
                    badgeIcon: 'fa-check-square',
                },
            };
        case 'saving-courses':
            return {
                ...state,
                courses: {
                    title: 'اطلاعات دروس',
                    status: 'درحال ذخیره',
                    badgeColour: 'warning',
                    badgeIcon: 'fa-clock-o',
                },
            };
        case 'saved-courses':
            return {
                ...state,
                courses: {
                    ...state.courses,
                    status: 'تمام شد',
                    badgeColour: 'success',
                    badgeIcon: 'fa-check-square',
                },
            };
        default:
            return state;
    }
};
