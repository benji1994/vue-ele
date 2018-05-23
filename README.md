<img src='readme/vue1.gif' width="30%"> <img src='readme/vue2.gif' width="30%"> <img src='readme/vue3.gif' width="30%">
# 技术栈
* MVVM框架：Vue.js
* 前端路由： Vue-router
* 滚动插件： Better-scroll
* 构建工具： 基于 webpack 的 vue-cli
* CSS 预处理器： Stylus

# 重点总结
* 小球下落动画
在 cartcontrol 组件触发 addCart 事件，该事件向父组件 food emit 一个 cartadd 事件，并传入 event.target
    addCart (event) {
      if (!event._constructed) return
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      this.$emit('cartadd', event.target)
    },
    
