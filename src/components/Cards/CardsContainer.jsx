import Card from "./Card";
import { useTranslation } from "react-i18next";
import ImageAssets from "@/utils/ImageAssets";

function CardsContainer() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 xl:gap-20 p-16">
      <Card
        imgUrl={ImageAssets.cardOneImage}
        title={t("card1_title")}
        description={t("card1_desc")}
      />
      <Card
        imgUrl={ImageAssets.cardTwoImage}
        title={t("card2_title")}
        description={t("card2_desc")}
      />
      <Card
        imgUrl={ImageAssets.cardThreeImage}
        title={t("card3_title")}
        description={t("card3_desc")}
      />
    </div>
  );
}

export default CardsContainer;
