class LDQuery {
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

  find(selector) {
    const element = new LDQuery(this.element.querySelector(selector));

    if (element) {
      return element;
    } else {
      throw new Error(`Селектор ${selector} не найден`);
    }
  }

  css(property, value) {
    if (typeof property !== 'string' || typeof value !== 'string') {
      throw new Error('Опция и значение должны быть строкой');
    }

    this.element.style[property] = value;
    return this;
  }

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

  click(callback) {
    this.element.addEventListener('click', callback);
    return this;
  }

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
}

export const $LD = (selector) => {
  return new LDQuery(selector)
}