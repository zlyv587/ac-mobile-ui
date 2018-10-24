/**
 * Created by Lzhang on 2018/10/24.
 */
import Modal from './packages/modal/index.js';
import modalBox from './packages/modal/modal.js';
import Marquee from './packages/marquee/index.js';
import toast from './packages/toast/index.js';
import joinGroupModalBox from './packages/join-group-modal/index.js';



const components = [
    Modal,
    Marquee,
];

const install = function(Vue, opts = {}) {
    /* istanbul ignore if */
    if (install.installed) return;
    components.map(component => {
        Vue.component(component.name, component);
    });
    Vue.prototype.$modalBox = modalBox;
    Vue.prototype.$toast = toast;
    Vue.prototype.$joinGroupModalBox = joinGroupModalBox;
};

module.exports = {
    ...components,
    modalBox,
    toast,
    joinGroupModalBox,
    install,
}