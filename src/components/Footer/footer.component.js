import React from "react";
import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withTranslation } from "react-i18next";


type Props = {
  t: Function
};

const Footer = (props: Props) => {
  const { t } = props;
  const githubIcon: IconLookup = { prefix: "fab", iconName: "github" };
  const githubIconDef: IconDefinition = findIconDefinition(githubIcon);

  return (
    <footer className="solid-footer footer">
      <section className="solid-footer__content">
        <div className="solid-footer__content--copyright">
          <ul>
            <li>© empathy.co</li>
            <li>
              {t("footer.version")}
              {""}{" "}
              <span className="build-value">
                {process.env.REACT_APP_VERSION}
              </span>
            </li>
          </ul>
        </div>

        <div className="solid-footer__content--links">
          <ul>
            <li>
              <a
                href="https://github.com/empathyco/solid-pods-management"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="link-icon" icon={githubIconDef} />
                Our repository on github
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default withTranslation()(Footer);
