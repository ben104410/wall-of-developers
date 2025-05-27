import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Pitches.module.css';
const pitchesData = [
    {
        title: "Smart Water Monitoring",
        team: "AquaTech",
        description: "A real-time IoT solution for monitoring water usage and quality in coastal communities.",
        members: ["Fatma Ali", "John Mwangi", "Aisha Omar"],
    },
    {
        title: "Blue Economy Marketplace",
        team: "Pwani Traders",
        description: "A digital platform connecting local fishermen and artisans to buyers, promoting sustainable trade.",
        members: ["Salim Yusuf", "Grace Otieno", "Peter Kimani"],
    },
    {
        title: "Eco-Tourism App",
        team: "Safari Innovators",
        description: "A mobile app that curates eco-friendly tourism experiences along the Kenyan coast.",
        members: ["Mary Wambui", "Ali Bakari", "Susan Njeri"],
    },
];
export function Pitches() {
    return (_jsxs("section", { id: "pitches", className: styles.pitchesSection, children: [_jsx("h2", { className: styles.pitchesTitle, children: "Pitches at Pwani Innovation Hackathon" }), _jsx("div", { className: styles.pitchesList, children: pitchesData.map((pitch, idx) => (_jsxs("div", { className: styles.pitchCard, children: [_jsx("h3", { className: styles.pitchTitle, children: pitch.title }), _jsxs("p", { className: styles.teamName, children: [_jsx("strong", { children: "Team:" }), " ", pitch.team] }), _jsx("p", { className: styles.description, children: pitch.description }), _jsxs("p", { className: styles.members, children: [_jsx("strong", { children: "Members:" }), " ", pitch.members.join(", ")] })] }, idx))) })] }));
}
