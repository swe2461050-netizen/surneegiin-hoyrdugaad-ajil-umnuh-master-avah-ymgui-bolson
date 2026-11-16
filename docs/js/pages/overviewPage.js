import { t } from "../i18n/i18n.js";
import { renderPageLayout } from "../layouts/pageLayout.js";
<<<<<<< HEAD
import { getNutritions } from "../services/nutritionService.js";

export async function renderOverviewPage() {
  const app = document.getElementById("app");
  app.innerHTML = renderPageLayout({ id: "overview", title: t("overview.title"), content: `<div id="overviewText"><p>${t("overview.welcome")}</p></div><div id="overviewStats" class="columns is-multiline"></div><div class="columns is-variable is-6"><div class="column is-two-thirds"><h2 class="title is-4">${t("overview.mapTitle")}</h2><div id="provinceMap" class="province-map" aria-label="${t("overview.mapTitle")}"></div><div id="provinceButtons" class="province-grid mt-4" aria-label="${t("overview.mapTitle")}"></div></div><div class="column"><div id="provinceInfo" class="box">${t("overview.mapHint")}</div></div></div>` });
  try {
    const [foods, mapResponse, aboutResponse] = await Promise.all([getNutritions(), fetch("./img/map.svg"), fetch("./data/txt.json")]);
    if (!mapResponse.ok || !aboutResponse.ok) throw new Error("Overview assets failed to load");
    const [mapMarkup, about] = await Promise.all([mapResponse.text(), aboutResponse.json()]);
    const language = localStorage.getItem("language") || "en";
    document.getElementById("overviewText").innerHTML = (about[language]?.overviewText || t("overview.welcome")).split(/\n\s*\n/).map(paragraph => `<p class="mb-4">${paragraph}</p>`).join("");
    document.getElementById("provinceMap").innerHTML = mapMarkup;
    const provinces = [...new Map(foods.filter(x => x.province).map(x => [x.province_en || x.province, x.province])).entries()].sort((a,b)=>a[1].localeCompare(b[1]));
    document.querySelectorAll("#provinceMap text").forEach(label => { const food = foods.find(item => item.province_en === label.textContent.trim()); if (food) label.textContent = food.province; });
    document.getElementById("overviewStats").innerHTML = `<div class="column"><div class="box"><strong>${foods.length.toLocaleString()}</strong><br>${t("overview.foodCount")}</div></div><div class="column"><div class="box"><strong>${provinces.length}</strong><br>${t("overview.provinceCount")}</div></div>`;
    document.getElementById("provinceButtons").innerHTML = provinces.map(([en, name]) => `<button class="button is-light province-button" data-province="${en}">${name}</button>`).join("");
    const showProvince = (englishName) => {
      const selected = foods.filter(food => food.province_en === englishName || food.province === englishName);
      const displayName = selected[0]?.province || englishName;
      document.querySelectorAll("#provinceMap [name]").forEach(area => area.classList.toggle("is-selected", area.getAttribute("name") === englishName));
      document.getElementById("provinceInfo").innerHTML = `<h3 class="title is-5">${displayName}</h3><p>${selected.length} ${t("overview.foodsListed")}</p><ul>${selected.slice(0, 10).map(food => `<li>${food.food_name}</li>`).join("")}</ul>`;
    };
    document.querySelectorAll(".province-button").forEach(button => button.addEventListener("click", () => {
      showProvince(button.dataset.province);
    }));
    document.querySelectorAll("#provinceMap [name]").forEach(area => {
      area.setAttribute("tabindex", "0");
      area.setAttribute("role", "button");
      area.setAttribute("aria-label", area.getAttribute("name"));
      area.addEventListener("click", () => showProvince(area.getAttribute("name")));
      area.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); showProvince(area.getAttribute("name")); } });
    });
  } catch { document.getElementById("overviewStats").textContent = t("overview.loadError"); }
=======

export function renderOverviewPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    id: "overview",
    title: t("overview.title"),
    content: `
      <p>${t("overview.welcome")}</p>
    `,
  });
>>>>>>> 8e2563cc8f6c414e9eb3f300a344f4d29f7258b7
}
