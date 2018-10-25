import Vue from 'vue';
import shareOptions from './index.js';
import {isVNode} from '../../util/vdom';

const ShareConstructor = Vue.extend(shareOptions);
let instance;

export default function share(options) {
  if (instance) {
    instance.vm.destroyElement();
  }
  instance = new ShareConstructor({
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
  // if (isVNode(instance.content)) {
  //   instance.$slots.default = [instance.content];
  //   instance.content = null;
  // } else {
    delete instance.$slots.default;
  // }
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  // instance.vm.visible = 'block';
}


