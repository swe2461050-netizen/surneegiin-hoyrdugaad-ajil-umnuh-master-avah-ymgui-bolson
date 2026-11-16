import { mountNavbar } from "./components/navbar.js";
import { initRouter } from "./router.js";
import { routes } from "./routes.js";
<<<<<<< HEAD
import { mountFooter } from "./components/footer.js";
=======
>>>>>>> 8e2563cc8f6c414e9eb3f300a344f4d29f7258b7

const navbarRoot = document.getElementById("navbar");

mountNavbar(navbarRoot);
<<<<<<< HEAD
mountFooter(document.getElementById("footer"));
=======
>>>>>>> 8e2563cc8f6c414e9eb3f300a344f4d29f7258b7
initRouter(routes);
