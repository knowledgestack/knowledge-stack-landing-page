import LegalLayout from "@/layouts/LegalLayout";
import { useTranslation } from "react-i18next";

const CookiePolicy = () => {
  const { t } = useTranslation();
  
  return (
    <LegalLayout>
            <h1 className="text-5xl font-bold mb-6 text-foreground">{t("cookiePolicy.title")}</h1>
            <p className="text-muted-foreground mb-8">{t("cookiePolicy.lastUpdated")}</p>

            <div className="prose max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("cookiePolicy.section1Title")}</h2>
                <p className="text-muted-foreground">
                  {t("cookiePolicy.section1Text")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("cookiePolicy.section2Title")}</h2>
                <p className="text-muted-foreground mb-4">{t("cookiePolicy.section2Text")}</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    <strong>{t("cookiePolicy.essentialCookies")}:</strong> {t("cookiePolicy.essentialCookiesDesc")}
                  </li>
                  <li>
                    <strong>{t("cookiePolicy.analyticsCookies")}:</strong> {t("cookiePolicy.analyticsCookiesDesc")}
                  </li>
                  <li>
                    <strong>{t("cookiePolicy.preferenceCookies")}:</strong> {t("cookiePolicy.preferenceCookiesDesc")}
                  </li>
                  <li>
                    <strong>{t("cookiePolicy.authenticationCookies")}:</strong> {t("cookiePolicy.authenticationCookiesDesc")}
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("cookiePolicy.section3Title")}</h2>
                <p className="text-muted-foreground">
                  {t("cookiePolicy.section3Text")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("cookiePolicy.section4Title")}</h2>
                <p className="text-muted-foreground">
                  {t("cookiePolicy.section4Text")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("cookiePolicy.section5Title")}</h2>
                <p className="text-muted-foreground">
                  {t("cookiePolicy.section5Text")}{" "}
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

export default CookiePolicy;

