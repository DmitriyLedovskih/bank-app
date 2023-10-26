import renderService from "@/core/services/render.service";
import styles from './button.module.scss';
import template from './button.template.html';
import ChildComponent from "@/core/component/child.component";
import { $JS } from "@/core/jsquery/jsquery.lib";

export class Button extends ChildComponent {
  constructor({ children, onClick, variant }) {
    super();
    if (!children) throw new Error('Children пустой');
    this.children = children;
    this.onClick = onClick;
    this.variant = variant;
    console.log(Button.name);
  }

  render() {
    this.element = renderService.htmlToElement(template, [], styles);

    $JS(this.element).html(this.children).click(this.onClick);

    if (this.variant) {
      $JS(this.element).addClass(styles[this.variant]);
    }

    return this.element;
  }
}