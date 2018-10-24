/**
 * Created by zhang on 2018/3/24.
 */
import withRender from "./index.vtpl";
import './index.less';
import { shareWX } from '../../common/util';
import alertModal from '../alert';
import sharePanel from '../share-panel';

export default withRender({
  name: 'share-modal',
  components: {alertModal, sharePanel},
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
    options: {
      type: Object,
      default: function () {
        return null;
      },
    }
  },
  methods: {
    close() {
      this.onClose();
    },
    destroyElement() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
  }
})
