<!--
 * @Author: zyxm5
 * @Date: 2021-03-02 17:31:20
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 17:37:12
 * @Description: 
-->
<script>
import { h } from 'vue'
export default {
    name: "BaseAnchoredHeading",
    props: {
        level: {
            type: Number,
            default: 1
        }
    },
    render(){
        return h('h' + this.level, {}, this.$slots.default())
    }
}
</script>