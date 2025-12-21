import LegalLayout from "@/layouts/LegalLayout";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();
  
  return (
    <LegalLayout>
            <h1 className="text-5xl font-bold mb-6 text-foreground">{t("privacy.title")}</h1>
            <p className="text-muted-foreground mb-8">{t("privacy.lastUpdated")}</p>

            <div className="prose max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section1Title")}</h2>
                <p className="text-muted-foreground">
                  {t("privacy.section1Text")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section2Title")}</h2>
                <p className="text-muted-foreground mb-4">{t("privacy.section2Text")}</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>{t("privacy.section2Item1")}</li>
                  <li>{t("privacy.section2Item2")}</li>
                  <li>{t("privacy.section2Item3")}</li>
                  <li>{t("privacy.section2Item4")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section3Title")}</h2>
                <p className="text-muted-foreground mb-4">{t("privacy.section3Text")}</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>{t("privacy.section3Item1")}</li>
                  <li>{t("privacy.section3Item2")}</li>
                  <li>{t("privacy.section3Item3")}</li>
                  <li>{t("privacy.section3Item4")}</li>
                  <li>{t("privacy.section3Item5")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section4Title")}</h2>
                <p className="text-muted-foreground">
                  {t("privacy.section4Text")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section5Title")}</h2>
                <p className="text-muted-foreground mb-4">{t("privacy.section5Text")}</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>{t("privacy.section5Item1")}</li>
                  <li>{t("privacy.section5Item2")}</li>
                  <li>{t("privacy.section5Item3")}</li>
                  <li>{t("privacy.section5Item4")}</li>
                  <li>{t("privacy.section5Item5")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section6Title")}</h2>
                <p className="text-muted-foreground">
                  {t("privacy.section6Text")}{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    privacy@knowledgestack.ai
                  </a>
                  .
                </p>
              </section>
            </div>
    </LegalLayout>
  );
};

export default Privacy;

