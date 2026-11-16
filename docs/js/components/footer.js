import { t } from "../i18n/i18n.js";

export function mountFooter(root) {
  if (!root) return;
  root.innerHTML = `<footer class="app-footer"><div class="container"><div class="columns is-multiline"><div class="column"><h2 class="title is-5">${t("footer.title")}</h2><p>${t("footer.description")}</p></div><div class="column"><h2 class="title is-5">${t("footer.contact")}</h2><p>${t("footer.university")}</p><p><a href="https://muls.edu.mn" target="_blank" rel="noopener noreferrer">muls.edu.mn</a></p></div></div><p class="footer-note">© ${t("footer.title")}</p></div></footer>`;
}
