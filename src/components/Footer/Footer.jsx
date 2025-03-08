import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import ResourceLinks from "@/utils/ResourceLinks";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="text-center p-6 bg-white">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-lg">
        <span>
          {t("powered_by")} <strong>{t("company_name")}</strong>
        </span>
        <a
          href={ResourceLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-gray-600"
        >
          <FaGithub size={20} />
        </a>
        <span>
          &copy; {new Date().getFullYear()} {t("copy_rights")}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
