import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Navbar.module.css';
export default function Navbar() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const navbarHeight = 80; // Height of fixed navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    return (_jsxs("div", { children: [_jsxs("nav", { className: styles.navbar, children: [_jsx("div", { className: styles.navbarLogo, children: _jsx("img", { src: "/assets/sph-logo.png", alt: "Logo" }) }), "                ", _jsxs("div", { className: styles.navbarLinks, children: [_jsx("button", { onClick: () => scrollToSection('panel'), className: styles.navButton, children: "Home" }), _jsx("button", { onClick: () => scrollToSection('hackathon'), className: styles.navButton, children: "Hackathon" }), _jsx("button", { onClick: () => scrollToSection('panel'), className: styles.navButton, children: "Panel" }), _jsx("button", { onClick: () => scrollToSection('pitches'), className: styles.navButton, children: "Pitches" }), _jsx("button", { onClick: () => scrollToSection('footer'), className: styles.navButton, children: "Contacts" })] })] }), _jsx("div", { className: styles.hero, children: _jsx("div", { className: styles.heroImage, children: _jsx("img", { src: "/assets/innovation.webp", alt: "Hackathon" }) }) })] }));
}
