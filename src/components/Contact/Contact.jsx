import { useRef, useState, useTransition } from "react";
import { useTranslation } from "react-i18next";
import { FaUser, FaEnvelope, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import ImageAssets from "@/utils/ImageAssets";
import createContactFormSchema from "@/utils/createContactFormSchema";
import { toast } from "react-toastify";
import ResourceLinks from "@/utils/ResourceLinks";
import useDirection from "@/hooks/useDirection";

const Contact = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(1);
  const { isRtl } = useDirection();
  const [isPending, startTransition] = useTransition();

  const form = useRef();
  const contactFormSchema = createContactFormSchema(t);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          reset();
          toast.success(t("form_submission_success"));
        },
        (error) => {
          toast.error(t("form_submission_failed"));
        }
      )
      .finally(() => setIsLoading(false));
  };

  const handleTabChange = (tabIndex) => {
    startTransition(() => {
      setActiveTab(tabIndex);
    });
  };

  return (
    <section
      className="bg-gray-100 py-16 px-4 flex flex-col items-center text-center"
      id="contact"
    >
      <h2 className="text-3xl md:text-4xl font-normal text-green-900 mb-10 md:mb-16">
        {t("contact_us")}
      </h2>

      <div className="bg-white py-10 px-6 sm:px-10 md:px-20 rounded-2xl shadow-lg w-full max-w-5xl">
        <div className="flex justify-center mb-8">
          <div className="flex flex-col sm:flex-row rounded-lg border border-gray-300 gap-2 py-1 px-2">
            <button
              className={`px-8 sm:px-12 py-2 text-lg sm:text-xl font-medium focus:outline-none transition duration-200 ease-in-out cursor-pointer ${
                activeTab === 1
                  ? "bg-green-900 text-white rounded-3xl"
                  : "hover:bg-gray-100 text-gray-800 rounded-3xl"
              }`}
              onClick={() => handleTabChange(1)}
            >
              {t("organization")}
            </button>
            <button
              className={`px-8 sm:px-12 py-2 text-lg sm:text-xl font-medium focus:outline-none transition duration-200 ease-in-out cursor-pointer ${
                activeTab === 2
                  ? "bg-green-900 text-white rounded-3xl"
                  : "hover:bg-gray-100 text-gray-800 rounded-3xl"
              }`}
              onClick={() => handleTabChange(2)}
            >
              {t("developer")}
            </button>
          </div>
        </div>

        <div className="transition-all duration-500 ease-in-out">
          {activeTab === 1 && (
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 opacity-100">
              <div className="w-full space-y-4">
                <p
                  className={`text-lg text-gray-600 ${
                    isRtl ? "text-right" : "text-left"
                  }`}
                >
                  {t("contact_us_desc")}
                </p>
                <form
                  className={`space-y-6 ${isRtl ? "text-right" : "text-left"}`}
                  ref={form}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t("name_placeholder")}
                      {...register("name")}
                      className={`w-full px-4 py-3 bg-neutral-200 rounded-3xl ${
                        isRtl ? "pr-12 pl-4" : "pl-12 pr-4"
                      } border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                    />
                    <FaUser
                      className={`absolute  ${
                        errors.name ? "top-3/14" : "top-3/10"
                      } ${
                        isRtl ? "right-4" : "left-4"
                      } text-gray-500 pointer-events-none`}
                    />
                    {errors.name && (
                      <p
                        className={`text-red-500 text-sm mt-1 ${
                          isRtl ? "right-0" : "left-0"
                        } w-full`}
                      >
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder={t("email_placeholder")}
                      {...register("email")}
                      className={`w-full mt-2 px-4 py-3 bg-neutral-200 rounded-3xl ${
                        isRtl ? "pr-12 pl-4" : "pl-12 pr-4"
                      } border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                    />
                    <FaEnvelope
                      className={`absolute ${
                        errors.email ? "top-3/10" : "top-3/7"
                      } ${
                        isRtl ? "right-4" : "left-4"
                      } text-gray-500 pointer-events-none`}
                    />
                    {errors.email && (
                      <p
                        className={`text-red-500 text-sm mt-1 ${
                          isRtl ? "right-0" : "left-0"
                        } w-full`}
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <textarea
                      placeholder={t("message_placeholder")}
                      {...register("message")}
                      rows="4"
                      className="w-full mt-2 px-4 py-3 border resize-none bg-neutral-200 rounded-3xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    {errors.message && (
                      <span className="text-red-500 text-sm mt-1 w-full">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 cursor-pointer bg-yellow-500 text-white rounded-3xl hover:bg-yellow-600 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    {isLoading ? t("send_message_loading") : t("send_message")}
                  </button>
                </form>
              </div>

              <div className="hidden md:flex w-1/2 justify-center">
                <img
                  src={ImageAssets.contactImage}
                  alt="Contact Us"
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md"
                  loading="lazy"
                />
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 opacity-100">
              <div className="w-full space-y-4">
                <p className="text-xl md:text-3xl text-gray-600">
                  {t("developer_section")}
                  <a
                    href={ResourceLinks.githubDeveloper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-gray-600"
                  >
                    <FaGithub size={20} />
                  </a>
                </p>
              </div>
              <div className="hidden md:flex w-1/2 justify-center">
                <img
                  src={ImageAssets.developerImage}
                  alt="Information"
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
