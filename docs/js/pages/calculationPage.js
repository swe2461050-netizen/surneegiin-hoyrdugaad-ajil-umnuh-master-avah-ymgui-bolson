import { renderPageLayout } from "../layouts/pageLayout.js";
<<<<<<< HEAD
import { getNutritions } from "../services/nutritionService.js";
import { getNutrientRequirements } from "../services/nutrientRequirementService.js";
const nutrients = [["Energy (kcal)","Илчлэг (ккал)"],["Protein (g)","Уураг (г)"],["Fat (g)","Өөх тос (г)"],["Carbohydrate (g)","Нүүрс ус (г)"],["Calcium (mg)","Кальци (мг)"],["Iron (mg)","Төмөр (мг)"],["Vitamin C (mg)","С витамин (мг)"]];

export async function renderCalculationPage() {
  const app = document.getElementById("app");
  app.innerHTML = renderPageLayout({
    id: "calculation",
    title: "Хүнсний тооцоолуур",
    content: `
      <p>Хүнсээ сонгож, хэмжээг граммаар оруулна уу. Шим тэжээлийг 100 грамм дахь утгаар тооцож, нас болон хүйсийн зөвлөмжтэй харьцуулна.</p>
      <div class="columns is-vcentered"><div class="column is-4"><label class="label" for="calcAge">Нас</label><div class="select is-fullwidth"><select id="calcAge"></select></div></div><div class="column is-4"><label class="label" for="calcGender">Хүйс</label><div class="select is-fullwidth"><select id="calcGender"><option value="female">Эмэгтэй</option><option value="male">Эрэгтэй</option></select></div></div><div class="column"><label class="label" for="foodFilter">Хүнс хайх</label><input id="foodFilter" class="input" type="search" placeholder="Хүнсний нэрээр хайх"></div></div>
      <div id="calcStatus" class="notification is-light">Өгөгдөл ачаалж байна…</div>
      <div id="calcContent"></div>
    `,
  });
  try {
    const [foods, requirements] = await Promise.all([getNutritions(), getNutrientRequirements()]);
    const ageOptions = [...new Set(requirements.map(item => item.age))];
    document.getElementById("calcAge").innerHTML = ageOptions.map(age => `<option value="${age}" ${age === "19-29 years" ? "selected" : ""}>${age}</option>`).join("");
    const labels = nutrients.map(n => `<th>${n[1]}</th>`).join("");
    const rows = foods.map(food => `<tr><td><label class="checkbox"><input type="checkbox" class="calc-food" value="${food.food_code}"> ${food.food_name}</label></td><td><input class="input calc-amount" type="number" min="0" value="100" aria-label="${food.food_name} грамм"></td>${nutrients.map(n => `<td>${((food.proximates?.[n[0]] ?? food.minerals?.[n[0]] ?? food.vitamins?.[n[0]] ?? 0) || 0).toLocaleString()}</td>`).join("")}</tr>`).join("");
    document.getElementById("calcStatus").remove();
    document.getElementById("calcContent").innerHTML = `<div class="table-container"><table class="table is-striped is-fullwidth"><thead><tr><th>Хүнс</th><th>Хэмжээ (г)</th>${labels}</tr></thead><tbody>${rows}</tbody><tfoot><tr><th colspan="2">Сонгосон хүнсний дүн</th>${nutrients.map((_,i)=>`<th id="calcTotal${i}">0</th>`).join("")}</tr><tr><th colspan="2">Өдрийн хэрэгцээнд эзлэх хувь</th>${nutrients.map((_,i)=>`<th id="calcPercent${i}">—</th>`).join("")}</tr></tfoot></table></div>`;
    const update = () => nutrients.forEach((n,i) => { const total = [...document.querySelectorAll(".calc-food:checked")].reduce((sum, checkbox) => { const food=foods.find(f=>f.food_code===checkbox.value); const amount=Number(checkbox.closest("tr").querySelector(".calc-amount").value)||0; return sum + (food.proximates?.[n[0]] ?? food.minerals?.[n[0]] ?? food.vitamins?.[n[0]] ?? 0)*amount/100; },0); document.getElementById(`calcTotal${i}`).textContent=total.toFixed(1); const recommendation=requirements.find(item=>item.age===document.getElementById("calcAge").value&&item.gender===document.getElementById("calcGender").value); const target=recommendation?.proximates?.[n[0]]??recommendation?.minerals?.[n[0]]??recommendation?.vitamins?.[n[0]]; document.getElementById(`calcPercent${i}`).textContent=target?`${(total/target*100).toFixed(0)}%`:"—"; });
    document.querySelectorAll(".calc-food,.calc-amount,#calcAge,#calcGender").forEach(input=>input.addEventListener("input",update));
    document.getElementById("foodFilter").addEventListener("input",event=>{const query=event.target.value.trim().toLocaleLowerCase();document.querySelectorAll("#calcContent tbody tr").forEach(row=>{row.hidden=!row.cells[0].textContent.toLocaleLowerCase().includes(query);});});
  } catch { document.getElementById("calcStatus").textContent="Хүнсний өгөгдөл ачаалж чадсангүй."; }
=======

export function renderCalculationPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    id: "calculation",
    title: "Calculation",
    content: `
      <p>Welcome to the Calculation page.</p>
    `,
  });
>>>>>>> 8e2563cc8f6c414e9eb3f300a344f4d29f7258b7
}
