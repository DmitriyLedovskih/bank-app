import { BaseScreen } from "@/core/component/base-screen.component";

export class Auth extends BaseScreen {
  constructor() {
    super({ title: 'Авторизация' });
  }

  render() {
    return '<h1>Авторизация</h1>'
  }
}