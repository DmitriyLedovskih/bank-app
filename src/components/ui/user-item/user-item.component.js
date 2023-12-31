import renderService from "@/core/services/render.service";
import styles from './user-item.module.scss';
import template from './user-item.template.html';
import ChildComponent from "@/core/component/child.component";
import { $JS } from "@/core/jsquery/jsquery.lib";

export class UserItem extends ChildComponent {
  constructor({ children, className }) {
    super();
    if (!children) throw new Error('Children пустой');
    this.children = children;
    this.className = className;
  }
  render() {
    this.element = renderService.htmlToElement(template, [], styles);

    const element = $JS(this.element);
    element.find('span').html(this.children);

    if (this.className) {
      element.addClass(this.className);
    }

    return this.element;
  }
}