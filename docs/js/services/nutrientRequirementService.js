let requirementsCache = null;

export async function getNutrientRequirements() {
  if (requirementsCache) return requirementsCache;
  const response = await fetch("./data/nutrientRequirements.json");
  if (!response.ok) throw new Error("Failed to load nutrient requirements");
  requirementsCache = await response.json();
  return requirementsCache;
}
