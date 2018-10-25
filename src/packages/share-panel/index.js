/**
 * Created by zhang on 2018/3/24.
 */
import withRender from "./index.vtpl";
import './index.less';
import wxFriendImg from './img/Group 10.png';
import friendGroupsImg from './img/Group 11.png';
import qqFaceImg from './img/qq_face.png';



export default withRender({
    name: 'SharePanel',
    props: {
        shareContentCls: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        shareContent: {
            type: Array,
            default: function () {
                return [
                    {
                        img: wxFriendImg,
                        text: '微信邀请',
                        tag: 208,
                        reportType: 'shareToWechat'
                    }, {
                        img: friendGroupsImg,
                        text: '朋友圈邀请',
                        tag: 209,
                        reportType: 'shareToGroup'
                    }, {
                        img: qqFaceImg,
                        text: '面对面邀请',
                        tag: 211,
                        reportType: 'shareToFace'
                    }
                ];
            }
        },
        shareLink: {
            type: Function,
            default: function () {

            }
        },
    },
    methods: {
        share({tag, reportType}) {
            this.shareLink({tag, reportType});
        },
    }
})
