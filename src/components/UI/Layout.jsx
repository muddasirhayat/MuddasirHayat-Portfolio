import Navbar from './Navbar';
import Footer from './Footer';
import StarsBackground from '../Canvas/StarsBackground';
import CursorFollower from './CursorFollower';

const Layout = ({ children }) => {

    return (
        <div className={`min-h-screen flex flex-col relative overflow-x-hidden`}>
            <StarsBackground />
            <CursorFollower />
            <Navbar />
            <main id="main-content" className="flex-grow pt-20 w-full relative z-10">
                {children}
            </main>
            <Footer />

            <div className="fixed top-0 left-0 w-full h-full z-[-2] pointer-events-none opacity-[0.15]">
                <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[160px]" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-purple-600 rounded-full blur-[160px]" />
            </div>
        </div>
    );
};

export default Layout;
