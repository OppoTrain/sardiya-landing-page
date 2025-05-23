import { useTranslation } from "react-i18next";
import ResourceLinks from "@/utils/ResourceLinks";

const Video = () => {
  const { t } = useTranslation();
  return (
    <section
      className="bg-gray-100 py-16 px-4 flex flex-col items-center text-center"
      id="video"
    >
      <h2 className="text-3xl md:text-4xl font-normal text-green-900 mb-4">
        {t("how_to_use_extension")}
      </h2>

      <p className="text-xl text-neutral-800 mb-6">{t("watch_video")}</p>

      <div className="w-full max-w-3xl">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src={ResourceLinks.howTouseVideo}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
