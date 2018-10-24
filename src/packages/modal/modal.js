import Vue from 'vue';
import alertOptions from './index.js';
import {isVNode} from '../../util/vdom';

const alertConstructor = Vue.extend(alertOptions);
let instance;

export default function alert(options) {
  if (instance) {
    instance.vm.destroyElement();
  }
  instance = new alertConstructor({
    propsData: {
      ...options,
      visibleProp: 'block',
    }
  });
  const closeFun = instance.close;
  instance.close = function () {
    closeFun();
    instance.destroyElement();
    instance = null;
  };
  if (isVNode(instance.content)) {
    instance.$slots.default = [instance.content];
    instance.content = null;
  } else {
    delete instance.$slots.default;
  }
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  // instance.vm.visible = 'block';
}


