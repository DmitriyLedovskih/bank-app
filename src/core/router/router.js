import { NotFound } from "@/components/screens/not-found/not-found.component";
import { ROUTES } from "./routes.data";
import { Layout } from "@/components/layout/layout.component";
import { $LD } from "../ldquery/ldquery.lib";

export class Router {
  #router = ROUTES;
  #currentRoute = null;
  #layout = null;

  constructor() {
    window.addEventListener('popstate', () => {
      this.#handleRouteChange();
    });

    this.#handleRouteChange();
    this.#handleLinks();
  }

  #handleLinks() {
    document.addEventListener('click', evt => {
      const target = evt.target.closest('a');
      if (target) {
        evt.preventDefault();
        this.navigate(target.href)
      }
    });
  }

  navigate(path) {
    if (path !== this.getCurrentPath()) {
      window.history.pushState({}, '', path);
      this.#handleRouteChange();
    }
  }

  getCurrentPath() {
    return window.location.pathname
  }

  #handleRouteChange() {
    const path = this.getCurrentPath() || '/';
    let route = this.#router.find(route => route.path === path)

    if (!route) {
      route = {
        component: NotFound,
      };
    }

    this.#currentRoute = route;
    this.#render();
  }

  #render() {
    const component = new this.#currentRoute.component().render();
    if (!this.#layout) {
      this.#layout = new Layout({
        router: this,
        children: component,
      }).render();

      $LD('#app').append(this.#layout);
    } else {
      $LD('#content').html('').append(component.render);
    }
  }
}