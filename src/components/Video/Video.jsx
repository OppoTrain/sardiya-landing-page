import { useTranslation } from "react-i18next";
import ResourceLinks from "@/utils/ResourceLinks";

const Video = () => {
  const { t } = useTranslation();
  return (
    <section
      className="bg-gray-100 py-16 px-4 flex flex-col items-center text-center"
      id="video"
    >
      <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
        {t("how_to_use_extension")}
      </h2>

      <p className="text-2xl md:text-xl text-gray-700 max-w-lg mb-6">
        {t("watch_video")}
      </p>

      <div className="w-full max-w-3xl">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src={ResourceLinks.howTouseVideo}
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
