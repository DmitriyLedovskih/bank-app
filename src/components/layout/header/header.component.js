import renderService from "@/core/services/render.service";
import styles from './header.module.scss';
import template from './header.template.html';
import { UserItem } from "@/components/ui/user-item/user-item.component";
import { Button } from "@/components/ui/button/button.component";
import { Field } from "@/components/ui/field/field.component";

export class Header {
  render() {
    this.element = renderService.htmlToElement(template, [
      new Field({
        name: 'search',
        placeholder: 'Поиск',
        className: 'element'
      }),
      new UserItem({
        children: 'Имя',
        className: 'element'
      })
    ], styles);

    return this.element;
  }
}