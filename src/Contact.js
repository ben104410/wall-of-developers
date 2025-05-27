import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
function Contact() {
    return (_jsxs("section", { style: styles.section, children: [_jsx("h2", { children: "Contact Swahilipot Hub" }), _jsxs("p", { children: [_jsx("strong", { children: "Location:" }), " Old Town, Mombasa, Kenya"] }), _jsxs("p", { children: [_jsx("strong", { children: "Email:" }), " info@swahilipothub.co.ke"] }), _jsxs("p", { children: [_jsx("strong", { children: "Phone:" }), " +254 712 345678"] }), _jsxs("div", { style: styles.socials, children: [_jsx("a", { href: "https://facebook.com/swahilipothub", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaFacebook, { style: styles.icon }) }), _jsx("a", { href: "https://instagram.com/swahilipothub", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaInstagram, { style: styles.icon }) }), _jsx("a", { href: "https://twitter.com/swahilipothub", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaTwitter, { style: styles.icon }) })] })] }));
}
const styles = {
    section: {
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        margin: '20px',
    },
    socials: {
        marginTop: '15px',
        fontSize: '28px',
    },
    icon: {
        margin: '0 10px',
        color: '#333',
    }
};
export default Contact;
