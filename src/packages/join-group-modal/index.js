/**
 * Created by zhang on 2018/3/24.
 */
import withRender from "./index.vtpl";
import './index.less';
import modalBox from '../modal/modal.js';
import Vue from 'vue';
import { fetch , loop} from '../../util/util.js';

let vueInstance;
let defaultQrCodeUrl;

function initVueInstance({qrCodeUrl,}) {
    if (vueInstance) {
        vueInstance.$destroy(true);
    }
    vueInstance = new Vue({
        data() {
            return {
                emptyData: '',
                qrCodeUrl,
            }
        }
    });
}

export default (options = {}) => {
    let {qrCodeUrl, requestUrl, isNewsapp, onConfirm = loop, cb = loop, joinGroupPageUrl} = options;
    qrCodeUrl = qrCodeUrl || defaultQrCodeUrl;
    if (!qrCodeUrl) {
        fetch({
            method: 'post',
            url: requestUrl,
        }).then((res) => {
                defaultQrCodeUrl = res.info.picUrl;
                openJoinGroupModal(defaultQrCodeUrl)
            }
        );
    } else {
        openJoinGroupModal(qrCodeUrl)
    }
    function openJoinGroupModal(qrCodeUrl) {
        initVueInstance({qrCodeUrl});
        let options = {
            bgContainerCls: 'join-group-bg-container',
            isCanClickMask: true,
            showCloseIcon: false,
            showConfirmBtn: false,
            content: withRender({}).render.call(vueInstance),
            showCancelBtn: false,
        };
        if (isNewsapp) {
            options = {
                ...options,
                showConfirmBtn: true,
                confirmBtnText: '保存图片',
                onConfirm,
            };
            cb();
            modalBox(options);
        } else {
            window.location.href = joinGroupPageUrl;
        }
    }
}
