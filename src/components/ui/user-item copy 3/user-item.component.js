import renderService from "@/core/services/render.service";
import styles from './user-item.module.scss';
import template from './user-item.template.html';

export class UserItem {
  render() {
    this.element = renderService.htmlToElement(template, [], styles);
    return this.element;
  }
}