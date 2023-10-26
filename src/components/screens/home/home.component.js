import { BaseScreen } from "@/core/component/base-screen.component";
import renderService from "@/core/services/render.service";
import template from './home.template.html';
import styles from "./home.module.scss";
import { Heading } from "@/components/ui/heading/heading.component";

export class Home extends BaseScreen {
  constructor() {
    super({ title: '' });
  }

  render() {
    const element = renderService.htmlToElement(template, [
      new Heading({
        title: 'Home',
      }),
    ], styles);

    return element;
  }
}