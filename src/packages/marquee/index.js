/**
 * Created by zhang on 2018/3/24.
 */
import withRender from "./index.vtpl";
import './index.less';
import { fixedNum, jsonp } from '../../util/util.js';

export default withRender({
  name: 'marquee',
  data() {
    return{
      dataSource: [],
      translateY: 0,
    }
  },
  computed: {
    translateStyle() {
      return {
        transform: `translateY(${this.translateY}px)`,
        WebkitTransform: `translateY(${this.translateY}px)`,
      }
    }
  },
  created() {
    const vm = this;
    getHorseLamp();
    function getHorseLamp() {
      jsonp({
        url: '//c.m.163.com/nc/qa/explore/data.js',
        callbackName: 'callback',
        success: (data) => {
          if (data) {
            vm.dataSource = data;
            vm.runHorseLamp(vm.dataSource.length);
          }
        }
      })
    }
  },
  methods: {
    runHorseLamp(len) {
      let count = 0;
      setInterval(() => {
        if (count >= len - 1) {
          this.translateY = 0;
          count = 0
        } else {
          this.translateY -= 25;
          count++;
        }
      }, 2000)
    },
    getClearBr(str) {
      return str.replace('<br>', '')
    }
  }
})
