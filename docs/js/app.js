import { mountNavbar } from "./components/navbar.js";
import { initRouter } from "./router.js";
import { routes } from "./routes.js";
import { mountFooter } from "./components/footer.js";

const navbarRoot = document.getElementById("navbar");

mountNavbar(navbarRoot);
mountFooter(document.getElementById("footer"));
initRouter(routes);
