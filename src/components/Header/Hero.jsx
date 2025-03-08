import { useTranslation } from "react-i18next";
import ResourceLinks from "@/utils/ResourceLinks";

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="px-4 md:px-8 lg:px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h3 className="text-white text-2xl md:text-3xl lg:text-4xl max-w-full md:max-w-[702px] leading-snug">
            {t("sardiya_desc")}
          </h3>

          <a
            href={ResourceLinks.firefoxExtension}
            target="_blank"
            className="mt-6 md:mt-10 lg:mt-12 text-lg md:text-xl inline-flex items-center justify-center px-6 md:px-11 py-2 md:py-3 font-medium text-center border border-yellow-300 rounded-2xl bg-yellow-500 hover:bg-custom-golden hover:scale-105 transition ease-in-out duration-300 transform text-white"
          >
            {t("download_extension")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
