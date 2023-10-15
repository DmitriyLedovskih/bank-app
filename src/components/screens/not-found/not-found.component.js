import { BaseScreen } from "@/core/component/base-screen.component";

export class NotFound extends BaseScreen {
  constructor() {
    super({ title: 'страница не найдена' });
  }

  render() {
    return '<h1>Ничего не найдена</h1>'
  }
}