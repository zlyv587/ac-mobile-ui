/**
 * Created by Lzhang on 2018/10/24.
 */
import Modal from './packages/modal/index.js';
import modalBox from './packages/modal/modal.js';
import Marquee from './packages/marquee/index.js';
import toast from './packages/toast/index.js';
import SharePanel from './packages/share-panel/index.js'
import ShareModal from './packages/share-modal/index.js';
import shareModalBox from './packages/share-modal/share.js';
import joinGroupModalBox from './packages/join-group-modal/index.js';

console.log('pull testing')

const components = {
    Modal,
    Marquee,
    SharePanel,
    ShareModal
};

const install = function(Vue, opts = {}) {
    /* istanbul ignore if */
    if (install.installed) return;
    for (let key in components) {
        const component = components[key];
        Vue.component(component.name, component);
    }
    Vue.prototype.$modalBox = modalBox;
    Vue.prototype.$toast = toast;
    Vue.prototype.$joinGroupModalBox = joinGroupModalBox;
    Vue.prototype.$shareModalBox = shareModalBox;
};

module.exports = {
    ...components,
    modalBox,
    toast,
    joinGroupModalBox,
    shareModalBox,
    install,
}