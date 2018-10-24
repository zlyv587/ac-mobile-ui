/**
 * Created by zhang on 2018/3/24.
 */
import withRender from "./index.vtpl";
import './index.less';
import {shareWX, randomShareTxt, getShareUrl, handleAntAnalysis} from '../../common/util';
import wxFriendImg from './img/Group 10.png';
import friendGroupsImg from './img/Group 11.png';
import qqFaceImg from './img/qq_face.png';
import ShareCard from '../../data/models/ShareCard'
const shareCardModel = new ShareCard();


export default withRender({
    name: 'share-panel',
    props: {
        shareContentCls: {
            type: String,
            default: '',
        },
        sty: {
            type: Object,
        },
        title: {
            type: String,
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
        close: {
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
        share({tag, reportType}) {
            let options;
            options = randomShareTxt();
            const { clientMoney, userId, bottomWithDrawMoney } = this.$activityInfo;
            options = Object.assign(options, this.options);
            let { type } = this.options;
            type = type ? `@${type}` : '';
            handleAntAnalysis(`${reportType}${type}`);
            shareCardModel.get({}).then(res=> {
                const urlQueryParams = {
                    shareCode: res.info,
                    fr: 'weChat',
                    ttm: clientMoney,
                    btm: bottomWithDrawMoney,
                    name: encodeURI(userId)
                }
                options.shareUrl = getShareUrl(urlQueryParams);
                shareWX({...options, tag,});
                this.shareLink(tag);
                this.close();
            });
        },
    }
})
