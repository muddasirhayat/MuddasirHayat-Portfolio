import { userData } from '../../data/userData';

const Footer = () => {
    return (
        <footer className="py-8 text-center bg-[var(--nav-bg)] text-[var(--text-secondary)]">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} {userData.name}. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
