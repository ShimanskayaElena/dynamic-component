import { Component, OnInit, Renderer2 } from '@angular/core';

import { HtmlOutletDirective } from '../html-outlet.directive';
import { DOMNode, data } from '../shared/data';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, DOMNode {

  dynamicElement: string; // html-разметка динамического компонента
  // Как задать template динамически с помощью Angular 2? Cм. ссылку - https://toster.ru/q/364375

  constructor( private _renderer: Renderer2) { }

  ngOnInit() {
    // вместо http- запроса просто подгружаем данные
    const obj: DOMNode = JSON.parse(data);
    this.dynamicElement = (this.createElement(obj)).outerHTML;
  }

  // создание html-шаблона
  createElement( data ) {
    let element;

    if (data.tag) {
      element = this._renderer.createElement(data.tag);
      // console.log(typeof data.tag); // string
      // console.log(element.toString()); // [object HTMLDivElement]
    }

    if (data.attributes) {
      const keys = Object.keys(data.attributes); // возвращает массив строковых элементов, соответствующих именам перечисляемых свойств, найденных непосредственно в самом объекте
      for (let i = 0; i < keys.length; i++) {
        this._renderer.setAttribute( element, keys[i], data.attributes[keys[i]]);
      }
    }

    if (data.content) {
      for (let i = 0; i < data.content.length; i++) {
        if ( data.content[i].text ) {
          const text = this._renderer.createText(data.content[i].text);
          this._renderer.appendChild( element, text);
        } else {
          const childElement = this.createElement(data.content[i]);
          this._renderer.appendChild( element, childElement);
        }
      }
    }
    // console.log(element.outerHTML);
    return element;
  }
}
