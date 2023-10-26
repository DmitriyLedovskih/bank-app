import { formatCardNumberWithDashes } from "@/utils/format/format-card-number";

class JSQuery {
  constructor(selector) {
    if (typeof selector === "string") {
      this.element = document.querySelector(selector);

      if (!this.element) {
        throw new Error(`Селектор ${selector} не найден`);
      }
    } else if (selector instanceof HTMLElement) {
      this.element = selector;
    } else {
      throw new Error('Не валидный тип селектора');
    }
  }

  // поиск

  find(selector) {
    const element = new JSQuery(this.element.querySelector(selector));

    if (element) {
      return element;
    } else {
      throw new Error(`Селектор ${selector} не найден`);
    }
  }

  // стили

  css(property, value) {
    if (typeof property !== 'string' || typeof value !== 'string') {
      throw new Error('Опция и значение должны быть строкой');
    }

    this.element.style[property] = value;
    return this;
  }

  // вывод элементов

  append(childElement) {
    this.element.appendChild(childElement);
    return this;
  }

  before(newElement) {
    if (!(newElement instanceof HTMLElement)) {
      throw new Error('Передан не HTML элемент');
    }

    const parentElement = this.element.parentElement;

    if (parentElement) {
      parentElement.insertBefore(newElement, this.element);
      return this;
    } else {
      throw new Error('Элемент не имеет родительского элемента');
    }
  }

  html(htmlContent) {
    if (typeof htmlContent === 'undefined') {
      return this.element.innerHTML;
    } else {
      this.element.innerHTML = htmlContent;
      return this;
    }
  }

  // события

  click(callback) {
    this.element.addEventListener('click', callback);
    return this;
  }

  // классы

  addClass(classNames) {
    if (Array.isArray(classNames)) {
      for (const className of classNames) {
        this.element.classList.add(className);
      }
    } else {
      this.element.classList.add(classNames);
    }
    return this;
  }

  removeClass(classNames) {
    if (Array.isArray(classNames)) {
      for (const className of classNames) {
        this.element.classList.remove(className);
      }
    } else {
      this.element.classList.remove(classNames);
    }
    return this;
  }

  toggleClass(classNames) {
    if (Array.isArray(classNames)) {
      for (const className of classNames) {
        this.element.classList.toggle(className);
      }
    } else {
      this.element.classList.toggle(classNames);
    }
    return this;
  }

  // формы
  input({ onInput, ...rest }) {
    if (this.element.tagName.toLowerCase() !== 'input') throw new Error('Элемент должен являтся инпутом');
    for (const [key, value] of Object.entries(rest)) {
      this.element.setAttribute(key, value);
    }

    if (onInput) {
      this.element.addEventListener('input', onInput);
    }

    return this;
  }

  numberInput(limit) {
    if (this.element.tagName.toLowerCase() !== 'input' && this.element.type0 !== 'number') throw new Error('Элемент должен являтся инпутом и тип должен быть number');
    this.element.addEventListener('input', evt => {
      const target = evt.target;
      let value = target.value.replace(/[^0-9]/g, '');
      if (limit) value = value.substring(0, limit);
      target.value = value;
    });

    return this;
  }

  creditCardInput() {
    const limit = 16;
    if (this.element.tagName.toLowerCase() !== 'input' && this.element.type0 !== 'text') throw new Error('Элемент должен являтся инпутом и тип должен быть text');
    this.element.addEventListener('input', evt => {
      const target = evt.target;
      let value = target.value.replace(/[^0-9]/g, '');
      if (limit) value = value.substring(0, limit);
      target.value = formatCardNumberWithDashes(value);
    });

    return this;
  }
}

export const $JS = (selector) => {
  return new JSQuery(selector);
};
