import LegalLayout from "@/layouts/LegalLayout";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();
  
  return (
    <LegalLayout>
            <h1 className="text-5xl font-bold mb-6 text-foreground">{t("terms.title")}</h1>
            <p className="text-muted-foreground mb-8">{t("terms.lastUpdated")}</p>

            <div className="prose max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("terms.section1Title")}</h2>
                <p className="text-muted-foreground">
                  {t("terms.section1Text")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("terms.section2Title")}</h2>
                <p className="text-muted-foreground mb-4">
                  {t("terms.section2Text")}
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>{t("terms.section2Item1")}</li>
                  <li>{t("terms.section2Item2")}</li>
                  <li>{t("terms.section2Item3")}</li>
                  <li>{t("terms.section2Item4")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("terms.section3Title")}</h2>
                <p className="text-muted-foreground">
                  {t("terms.section3Text")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("terms.section4Title")}</h2>
                <p className="text-muted-foreground mb-4">{t("terms.section4Text")}</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>{t("terms.section4Item1")}</li>
                  <li>{t("terms.section4Item2")}</li>
                  <li>{t("terms.section4Item3")}</li>
                  <li>{t("terms.section4Item4")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("terms.section5Title")}</h2>
                <p className="text-muted-foreground">
                  {t("terms.section5Text")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("terms.section6Title")}</h2>
                <p className="text-muted-foreground">
                  {t("terms.section6Text")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("terms.section7Title")}</h2>
                <p className="text-muted-foreground">
                  {t("terms.section7Text")}{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    legal@knowledgestack.ai
                  </a>
                  .
                </p>
              </section>
            </div>
    </LegalLayout>
  );
};

export default Terms;

