<!--
 * @Author: zyxm5
 * @Date: 2021-03-02 17:31:20
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 17:57:52
 * @Description: 
-->
<script>
export default {
  name: "BaseAnchoredHeading",
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  render(h) {
    return h("h" + this.level, {}, this.$slots.default());
  }
};
</script>
