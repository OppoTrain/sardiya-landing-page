import { useTranslation } from "react-i18next";
import ResourceLinks from "@/utils/ResourceLinks";
import ImageAssets from "@/utils/ImageAssets";

const Download = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-16 px-4 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-normal text-green-900 mb-4">
        {t("download_sardiya")}
      </h2>

      <p className="text-xl text-neutral-800 mb-6">
        {t("choose_browser")}
      </p>

      <div className="grid grid-cols-3 gap-20 mt-10">
        <a
          href={ResourceLinks.safariExtension}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-yellow-500"
        >
          <img
            src={ImageAssets.SafariLogo}
            alt={`${t("safari")} logo`}
            loading="lazy"
            className="h-15 w-15 md:h-25 md:w-25"
          />
        </a>

        <a
          href={ResourceLinks.firefoxExtension}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-orange-500"
        >
          <img
            src={ImageAssets.FirefoxLogo}
            alt={`${t("firefox")} logo`}
            loading="lazy"
            className="h-15 w-15 md:h-25 md:w-25"
          />
        </a>

        <a
          href={ResourceLinks.chromeExtension}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-blue-500"
        >
          <img
            src={ImageAssets.GoogleChromeLogo}
            alt={`${t("chrome")} logo`}
            loading="lazy"
            className="h-15 w-15 md:h-25 md:w-25"
          />
        </a>
      </div>
    </section>
  );
};

export default Download;
