import { useTranslation } from "react-i18next";
import useCustomNavigate from "@/hooks/useCustomNavigate";
import useDirection from "@/hooks/useDirection";

function Hero() {
  const { t } = useTranslation();
  const { navigateToSection } = useCustomNavigate();
  const { isRtl } = useDirection();
  return (
    <section className="px-6 md:px-20 py-12 md:py-16 lg:py-20 2xl:px-40">
      <div className=" flex flex-col lg:flex-row items-center gap-12">
        <div
          className={`flex-grow max-w-full lg:max-w-2xl ${
            isRtl ? "text-right" : "text-left"
          }`}
        >
          <h3 className="text-white text-2xl md:text-3xl lg:text-4xl leading-snug">
            {t("sardiya_desc")}
          </h3>

          <button
            onClick={() => navigateToSection("download")}
            className="cursor-pointer mt-6 md:mt-10 lg:mt-12 text-lg md:text-xl inline-flex items-center justify-center px-6 md:px-11 py-2 md:py-3 font-medium text-center border border-yellow-300 rounded-2xl bg-yellow-500 hover:bg-custom-golden hover:scale-105 transition ease-in-out duration-300 transform text-white"
          >
            {t("download_extension")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
