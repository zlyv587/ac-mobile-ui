/**
 * Created by zhang on 2018/3/24.
 */
import withRender from "./index.vtpl";
import './index.less';

export default withRender({
    name: 'Modal',
    props: {
        // type: {
        //   type: String,
        //   default: ''
        // },
        bgContainerCls: {
            type: String,
            default: 'default-bg-container'
        },
        title: {
            type: String,
            default: ''
        },
        content: {
            // type: String,
            default: ''
        },
        tipText: {
            type: String,
            default: ''
        },
        confirmBtnText: {
            type: String,
            default: '确认'
        },
        cancelBtnText: {
            type: String,
            default: '取消'
        },
        visibleProp: {
            type: String,
            default: 'none'
        },
        onClose: {
            type: Function,
            default: function () {

            }
        },
        onCancel: {
            type: Function,
            default: function () {

            }
        },
        onConfirm: {
            type: Function,
            default: function () {

            }
        },
        showMask: {
            type: Boolean,
            default: true
        },
        isCanClickMask: {
            type: Boolean,
            default: false
        },
        showCloseIcon: {
            type: Boolean,
            default: true
        },
        showConfirmBtn: {
            type: Boolean,
            default: true
        },
        showCancelBtn: {
            type: Boolean,
            default: true
        },
    },
    data() {
        return {
            visible: this.visibleProp,
        }
    },
    watch: {
        'visibleProp'(val) {
            if (this.visible !== val) {
                this.visible = val;
            }
        }
    },
    methods: {
        close() {
            this.visible = 'none';
            this.onClose();
        },
        cancel() {
            this.close();
            this.onCancel();
        },
        clickMask() {
            if (!this.isCanClickMask) return false;
            this.cancel();
        },
        confirm() {
            this.onConfirm();
            this.close();
        },
        destroyElement() {
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },
    }
})
