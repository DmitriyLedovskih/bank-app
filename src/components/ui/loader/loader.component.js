import renderService from "@/core/services/render.service";
import styles from './loader.module.scss';
import template from './loader.template.html';
import ChildComponent from "@/core/component/child.component";
import { $JS } from "@/core/jsquery/jsquery.lib";

export const LOADER_SELECTOR = '[data-component="loader"]'

export class Loader extends ChildComponent {
  constructor({ width = 100, height = 100, className }) {
    super();
    this.className = className;
    this.width = width;
    this.height = height;
  }

  render() {
    this.element = renderService.htmlToElement(template, [], styles);
    console.log(this.element);
    const element = $JS(this.element);

    element
      .css('width', `${this.width}px`)
      .css('height', `${this.height}px`)
      .addClass('bounce');

    if (this.className) {
      element.addClass(this.className);
    }

    return this.element;
  }
}