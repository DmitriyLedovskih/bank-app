import renderService from "@/core/services/render.service";
import styles from './heading.module.scss';
import template from './heading.template.html';
import ChildComponent from "@/core/component/child.component";
import { $JS } from "@/core/jsquery/jsquery.lib";

export class Heading extends ChildComponent {
  constructor({ title, className }) {
    super();
    if (!title) throw new Error('Заголовок пустой');
    this.title = title;
    this.className = className;
  }

  render() {
    this.element = renderService.htmlToElement(template, [], styles);

    const element = $JS(this.element).html(this.title);

    if (this.className) {
      element.addClass(this.className);
    }

    return this.element;
  }
}