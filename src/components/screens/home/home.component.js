import { BaseScreen } from "@/core/component/base-screen.component";
import renderService from "@/core/services/render.service";
import template from './home.template.html';
import styles from "./home.module.scss";
import { $LD } from "@/core/ldquery/ldquery.lib";
import { Button } from "@/components/ui/button/button.component";

export class Home extends BaseScreen {
  constructor() {
    super({ title: '' });
  }

  render() {
    //   return '<h1>Главная</h1>'
    const element = renderService.htmlToElement(template, [], styles);
    console.log(element);
    // $LD(element).find('h1').render(element, '234');
    return element;
  }
}