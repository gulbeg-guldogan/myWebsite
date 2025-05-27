import React from "react";

const SocialLink = ({ social }) => {
    const isEmail = social.link.includes("@");
    const link = isEmail ? `mailto:${social.link}` : social.link;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={social.logo} alt={social.alt_text} />
        </a>
    );
};

export default SocialLink;
