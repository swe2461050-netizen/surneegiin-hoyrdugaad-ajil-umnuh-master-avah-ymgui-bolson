import { DATA_MODE, LOCAL_NUTRITIONS_URL, API_NUTRITIONS_URL } from "../config.js";
import { getCurrentLanguage } from "../i18n/i18n.js";

let nutritionCache = null;

export async function getNutritions() {
  if (nutritionCache) {
    return nutritionCache;
  }

  const url = DATA_MODE === "api" ? API_NUTRITIONS_URL : LOCAL_NUTRITIONS_URL;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to load nutritions data");
  }

  const data = await response.json();
  const language = getCurrentLanguage();
  const localize = (value) => {
    if (Array.isArray(value)) return value.map(localize);
    if (value && typeof value === "object") {
      if (Object.hasOwn(value, "en") && Object.hasOwn(value, "mn") && Object.keys(value).every((key) => key === "en" || key === "mn")) {
        return value[language] ?? value.en ?? value.mn ?? "";
      }
      return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, localize(child)]));
    }
    return value;
  };
  nutritionCache = data.map((item) => {
    const localized = localize(item);
    return { ...localized, province_en: item.province?.en ?? item.province, native_name: item.food_name?.mn ?? item.native_name ?? "" };
  });
  return nutritionCache;
}
