import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './panel.module.css'; // ✅ Fix the extension
const InfoPanel = () => {
    return (_jsxs("div", { id: "panel", className: styles.panel, children: [_jsx("h2", { className: styles.theme, children: "Empowering Innovation for a Sustainable Future" }), _jsxs("p", { className: styles.info, children: [_jsx("strong", { children: "Date:" }), " May 15\u201317, 2025"] }), _jsxs("p", { className: styles.info, children: [_jsx("strong", { children: "Venue:" }), " Swahilipot Hub, Mombasa"] }), _jsx("h3", { className: styles.heading, children: "Highlights:" }), _jsxs("ul", { className: styles.highlights, children: [_jsx("li", { children: "Tech Exhibitions" }), _jsx("li", { children: "Startup Pitches" }), _jsx("li", { children: "Workshops & Demos" }), _jsx("li", { children: "Panel Discussions" }), _jsx("li", { children: "Networking Sessions" })] }), _jsx("h3", { className: styles.heading, children: "Target Audience:" }), _jsx("p", { className: styles.targetAudience, children: "Innovators, Startups, Investors, Students, and Development Partners" })] }));
};
export default InfoPanel;
