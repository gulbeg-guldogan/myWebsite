import { TbBrandTwitter } from "react-icons/tb";
import { useLanguage } from "../hooks/useLanguageContext";
import { FaCodepen, FaInstagram } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function FooterSection() {

  const {langData} = useLanguage();
    const data = langData.footerSection;

  return (
     <section>
      <h1>
        {data.sendMessage}{" "}
      </h1>
      <h4 >
        {data.messageText}
      </h4>

      <a
        href={`mailto:${data.email}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {data.email}
      </a>

      <p>
        <TbBrandTwitter />
        <FaCodepen />
        <MdOutlineAlternateEmail />
        <FaInstagram />
      </p>
    </section>
  );
}