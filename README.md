# ac-mobile-ui
将新闻极速版中活动的一些vue基础组件进行封装。


## 基本用法

在入口函数内 插入代码全局注册(组件即不需单独引用，同时自动绑定方法在vue.prototype)
 ```javascript
 import '@newap/ac-mobile-ui/lib/style/acMobileUi.min.css'
 import acMobileUi from '@newap/ac-mobile-ui'
 Vue.use(acMobileUi);
 ```

## 具体组件
1.Modal 弹框
```javascript
import {Modal} from '@newap/ac-mobile-ui'
<modal />
 ```
 参数说明
 参数            类型           说明                默认值                  可选值
bgContainerCls  string    modal遮罩层的样式类    default-bg-container        ——
title           string    标题                   ——                        ——
content      string/VNode 内容                   ——                        ——
tipText         string    提示标签               ——                        ——
confirmBtnText  string    确认按钮文案           确认                        ——
cancelBtnText   string    取消按钮文案           取消                        ——
visibleProp     string    是否可见               none                      block/none
onClose        Function   modal关闭回调          ——                        ——
onCancel       Function   取消回调               ——                        ——
onConfirm      Function   确认回调               ——                        ——
showMask       Boolean    是否显示遮罩           true                      true/false
isCanClickMask Boolean    是否点击遮罩关闭       true                      true/false
showCloseIcon  Boolean    是否显示关闭icon       true                      true/false
showConfirmBtn Boolean    是否显示确认按钮       true                      true/false
showCancelBtn  Boolean    是否显示取消按钮       true                      true/false

2. modalBox Modal组件的js调用方式，参数与Modal一致
```javascript
// 如果组件库全局注册
this.$modalBox(Object options)
// 若没有
 import { modalBox } from '@newap/ac-mobile-ui'
 ```
3. SharePanel 端内显示在底部分享的panel
```javascript
import {SharePanel} from '@newap/ac-mobile-ui'
```

 dog | bird | cat
 ----|------|----
 foo | foo  | foo
 bar | bar  | bar
 baz | baz  | baz
 参数说明
  参数            |类型                       |说明                |默认值                 |可选值
 -----------------|---------------------------|--------------------| ----------------------|------
 shareContentCls  |string                     |最外div样式类       | ——                  |——
 title            |string                     |标题                |''                     |——
 shareContent     |Array                      |分享的平台          |....                   |....
 shareLink        |Function({tag,reportType}) |分享的回调          |——                   |——

4.ShareModal 分享的弹框
```javascript
import {ShareModal} from '@newap/ac-mobile-ui'
<share-modal />
 ```
  参数说明
  参数            类型                      说明                默认值                  可选值
 visibleProp      string                 是否可见               none                    block/none
 showMask         Boolean                是否显示遮罩           true                    true/false
 shareContentCls  string                 最外div样式类          ——                     ——
 title            string                 标题                   ''                       ——
 shareContent     Array                  分享的平台             ....                     ....
 shareLink   Function({tag,reportType})  分享的回调             ——                     ——
 onClose        Function                 modal关闭回调          ——                     ——

 5.shareModalBox ShareModal的js 调用方式 参数与其一致
 ```javascript
 // 如果组件库全局注册
 this.$shareModalBox(Object options)
 // 若没有
  import { shareModalBox } from '@newap/ac-mobile-ui'
  ```
6.joinGroupModal 加群弹框
 ```javascript
 // 如果组件库全局注册
 this.$joinGroupModal(Object options)
 // 若没有
  import { joinGroupModal } from '@newap/ac-mobile-ui'
  ```
  参数说明
   参数            类型           说明                默认值                  可选值
   qrCodeUrl      string         二维码地址           ——                    ——
   requestUrl     string         获取二维码接口地址   ——                    ——
   isNewsapp      Array          是否端内             ——                    ——
   onConfirm Function(qrCodeUrl) 确认回调             ——                    ——
   onShowHook     Function       弹框显示时的回调     ——                    ——

7. toast 消息提示
```javascript
 // 如果组件库全局注册
 this.$toast(Object options)
 // 若没有
  import { toast } from '@newap/ac-mobile-ui'
  ```
  参数说明
     参数            类型           说明                默认值                  可选值
     type           string         提示类型             ——               success/error/warning/regret
     delayCount     int            显示多久(ms)         2000                     ——
     icon           string         自定义icon地址       ——                     ——
     msg            string         提示内容             ——                     ——
     onClose        Function       关闭回调             ——                     ——

8.Marquee   活动常用跑马灯展示中奖的人
```javascript
import {Marquee} from '@newap/ac-mobile-ui'
<marquee/>
 ```

