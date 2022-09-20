import './App.css';
import { useEffect, useState } from 'react';
function App() {
    const [token, setToken] = useState('');
    const [studentsUpdateStatus, setStudentsUpdateStatus] = useState('Recievenig');
    const [classesUpdateStatus, setClassesUpdateStatus] = useState('Recievenig');
    const [teachersUpdateStatus, setTeachersUpdateStatus] = useState('Recievenig');
    const [coursesUpdateStatus, setCoursesUpdateStatus] = useState('Recievenig');
    const [showUpdateStatus, setShowUpdateStatus] = useState(false);
    const [tokenAvailabe, setTokenAvailable] = useState(true);

    const handleRequest = () => {
        console.log('getData clicked');
        window.electronAPI.openSida();
    };

    const getStudentsHandler = async () => {
        setShowUpdateStatus(true);
        const res = await window.electronAPI.getStudents(token);
        console.log(res);
    };

    useEffect(() => {
        //get Sida token
        window.electronAPI.getToken(async (event, data) => {
            console.log('getting data');
            setToken(data);
            setTokenAvailable(false);
            window.electronAPI.closeSida();
        });

        //DB update notifier
        window.electronAPI.dbUpdateNotifier(async (event, data) => {
            if (data.datafield === 'students') {
                setStudentsUpdateStatus('Data Recieved');
            } else if (data.datafield === 'classes') {
                setClassesUpdateStatus('Data Recieved');
            } else if (data.datafield === 'teachers') {
                setTeachersUpdateStatus('Data Recieved');
            } else if (data.datafield === 'courses') {
                setCoursesUpdateStatus('Data Recieved');
            }
        });
    }, []);

    return (
        <div className='App'>
            <div className='App'>
                <button onClick={handleRequest}>getToken</button>
                <button disabled={tokenAvailabe} onClick={getStudentsHandler}>
                    getStudents
                </button>
                {showUpdateStatus && <p>students : {studentsUpdateStatus}</p>}
                {showUpdateStatus && <p>classes : {classesUpdateStatus}</p>}
                {showUpdateStatus && <p>teachers : {teachersUpdateStatus}</p>}
                {showUpdateStatus && <p>courses : {coursesUpdateStatus}</p>}
            </div>
        </div>
    );
}

export default App;
