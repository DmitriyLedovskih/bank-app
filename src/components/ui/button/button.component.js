import renderService from "@/core/services/render.service";
import styles from './button.module.scss';
import template from './button.template.html';
import ChildComponent from "@/core/component/child.component";
import { $LD } from "@/core/ldquery/ldquery.lib";

export class Button extends ChildComponent {
  constructor({ children, onClick, variant }) {
    super();
    if (!children) throw new Error('Children пустой');
    this.children = children;
    this.onClick = onClick;
    this.variant = variant;
  }

  render() {
    this.element = renderService.htmlToElement(template, [], styles);

    $LD(this.element).html(this.children).click(this.onClick);

    if (this.variant) {
      $LD(this.element).addClass(styles[this.variant]);
    }

    return this.element;
  }
}