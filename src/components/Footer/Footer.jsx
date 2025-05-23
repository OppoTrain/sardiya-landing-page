import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import ResourceLinks from "@/utils/ResourceLinks";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="text-center p-6 bg-gray-100">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-lg">
        <span className="text-xl md:text-2xl">
          {t("powered_by")}{" "}
          <a
            className="cursor-pointer font-bold"
            href={ResourceLinks.oppoTrainWebsite}
            target="_blank"
          >
            {t("company_name")}
          </a>
        </span>
        <a
          href={ResourceLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xl md:text-2xl hover:text-gray-600"
        >
          <FaGithub size={20} />
        </a>
        <span className="text-xl md:text-2xl">
          &copy; {new Date().getFullYear()} {t("copy_rights")}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
