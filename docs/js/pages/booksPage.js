import { renderPageLayout } from "../layouts/pageLayout.js";
import { t } from "../i18n/i18n.js";

export function renderBooksPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    id: "books",
    title: t("books.title"),
    content: `
      <div class="columns is-multiline">
        <div class="column is-6"><article class="card"><div class="card-content"><p class="title is-4">${t("books.foodBook")}</p><p>${t("books.foodBookDescription")}</p></div><footer class="card-footer"><a class="card-footer-item" href="#/search">${t("books.view")}</a></footer></article></div>
        <div class="column is-6"><article class="card"><div class="card-content"><p class="title is-4">${t("books.webBook")}</p><p>${t("books.webBookDescription")}</p></div><footer class="card-footer"><a class="card-footer-item" href="https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/" target="_blank" rel="noopener noreferrer">${t("books.view")}</a></footer></article></div>
      </div>
    `,
  });
}
