import { useTranslation } from "react-i18next";
import { FaChrome, FaFirefoxBrowser, FaSafari } from "react-icons/fa";
import ResourceLinks from "@/utils/ResourceLinks";

const Download = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-16 px-4 flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
        {t("download_sardiya")}
      </h2>

      <p className="text-2xl md:text-xl text-gray-700 max-w-lg mb-6">
        {t("choose_browser")}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-20 mt-10">
        <a
          href={ResourceLinks.chromeExtension}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-yellow-500"
        >
          <FaChrome size={100} />
          <span className="mt-2 text-sm font-medium">{t("chrome")}</span>
        </a>

        <a
          href={ResourceLinks.firefoxExtension}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-orange-500"
        >
          <FaFirefoxBrowser size={100} />
          <span className="mt-2 text-sm font-medium">{t("firefox")}</span>
        </a>

        <a
          href={ResourceLinks.safariExtension}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-blue-500"
        >
          <FaSafari size={100} />
          <span className="mt-2 text-sm font-medium">{t("safari")}</span>
        </a>
      </div>
    </section>
  );
};

export default Download;
