import { ShadowOnHover } from './shadow-on-hover';
import { ElementRef, ListenerOptions, Renderer2 } from '@angular/core';

describe('ShadowOnHover', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    
    const mockRenderer: Renderer2 = {
      setStyle: () => { },
      removeStyle: () => { },
      addClass: () => { },
      removeClass: () => { },
      setAttribute: () => { },
      removeAttribute: () => { },
      createElement: () => document.createElement('div'),
      createComment: () => document.createComment(''),
      createText: () => document.createTextNode(''),
      appendChild: () => { },
      insertBefore: () => { },
      removeChild: () => { },
      selectRootElement: () => document.createElement('div'),
      parentNode: () => null,
      nextSibling: () => null,
      setProperty: () => { },
      destroy: () => { },
      data: {},
      destroyNode: null,
      setValue: function (node: any, value: string): void {
        throw new Error('Function not implemented.');
      },
      listen: function (target: 'window' | 'document' | 'body' | any, eventName: string, callback: (event: any) => boolean | void, options?: ListenerOptions): () => void {
        throw new Error('Function not implemented.');
      }
    };

    const directive = new ShadowOnHover(mockElementRef, mockRenderer);
    expect(directive).toBeTruthy();
  });
});
