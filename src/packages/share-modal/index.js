/**
 * Created by zhang on 2018/3/24.
 */
import withRender from "./index.vtpl";
import './index.less';
import Modal from '../modal';
import SharePanel from '../share-panel';

export default withRender({
  name: 'ShareModal',
  components: {Modal, SharePanel},
  props: {
    visibleProp: {
      type: String,
      default: ''
    },
    showMask: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    shareContent: {
      type: Array,
    },
    shareContentCls: {
       type: String,
    },
    shareLink: {
      type: Function,
      default: function () {

      }
    },
    onClose: {
      type: Function,
      default: function () {

      }
    },
  },
  methods: {
    close() {
      this.onClose();
    },
    shareCb(options) {
      this.shareLink(options);
      this.close();
    },
    destroyElement() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
  }
})
