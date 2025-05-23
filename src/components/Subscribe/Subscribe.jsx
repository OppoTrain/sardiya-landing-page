import { useTranslation } from "react-i18next";
import { FaEnvelope } from "react-icons/fa";
import createContactFormSchema from "@/utils/createContactFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "react-toastify";
import useDirection from "@/hooks/useDirection";

const Subscribe = () => {
  const { t } = useTranslation();
  const contactFormSchema = createContactFormSchema(t);
  const emailSchema = contactFormSchema.pick({ email: true });
  const { isRtl } = useDirection();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(emailSchema),
  });
  const subscribe = (data) => {
    setIsLoading(true);
    fetch(import.meta.env.VITE_SHEET_LINK_API, {
      redirect: "follow",
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({ emails: data.email }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success(t("subscription_success"));
        reset({ email: "" });
      })
      .catch((error) => toast.error(t("subscription_failed")))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="bg-white py-16 px-6 sm:px-12 lg:px-24 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-normal text-green-900 mb-4">
          {t("subscription_title")}
        </h2>
        <p className="text-neutral-800 mb-8 text-xl">
          {t("subscription_description")}
        </p>
        <div
          className={`flex flex-col sm:flex-row  sm:${
            errors.email ? "items-start" : "items-center"
          } gap-3 md:items-start`}
        >
          <div className="relative w-full sm:w-auto flex-1">
            <input
              {...register("email")}
              placeholder={t("email_placeholder")}
              className="w-full px-4 py-3 bg-neutral-200 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 rtl:pr-12 rtl:pl-4 ltr:pl-12 ltr:pr-4"
            />
            <FaEnvelope
              className={`absolute ${errors.email ? "top-1/4" : "top-1/3"}  ${
                isRtl ? "right-4" : "left-4"
              } text-gray-500 pointer-events-none`}
            />

            {errors.email && (
              <p
                className={`text-red-500 text-sm mt-2 w-full ${
                  isRtl ? "text-right" : "text-left"
                }`}
              >
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            onClick={handleSubmit(subscribe)}
            className="px-6 py-3 cursor-pointer bg-yellow-500 text-white rounded-3xl hover:bg-yellow-600 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? t("loading_subscription") : t("subscription_button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
