import { BaseScreen } from "@/core/component/base-screen.component";

export class About extends BaseScreen {
  constructor() {
    super({ title: 'О нас' });
  }

  render() {
    return '<h1>О нас</h1>'
  }
}