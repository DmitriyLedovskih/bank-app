import renderService from "@/core/services/render.service";
import styles from './field.module.scss';
import template from './field.template.html';
import ChildComponent from "@/core/component/child.component";
import { $JS } from "@/core/jsquery/jsquery.lib";

export class Field extends ChildComponent {
  constructor({ placeholder, type = 'text', value = '', name, variant, className }) {
    super();

    if (!name) throw new Error('Не передано имя поля');

    this.placeholder = placeholder;
    this.type = type;
    this.value = value;
    this.name = name;
    this.variant = variant;
    this.className = className;
  }
  render() {
    this.element = renderService.htmlToElement(template, [], styles);
    const inputElement = $JS(this.element).find('input').input({
      placeholder: this.placeholder,
      type: this.type,
      value: this.value,
      name: this.name,
    });

    if (this.type === 'number') {
      inputElement.numberInput();
    }

    const isCreditCard = this.variant === 'credit-card';

    if (isCreditCard) {
      inputElement.creditCardInput();
    }

    if (this.className) {
      inputElement.addClass(this.className);
    }


    return this.element;
  }
}