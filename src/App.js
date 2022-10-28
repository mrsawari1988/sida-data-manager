import Navbar from './components/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Sidebar />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
