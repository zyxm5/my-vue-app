/*
 * @Author: zyxm5
 * @Date: 2021-01-20 13:21:39
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-01-21 11:14:08
 * @Description: api模板文件
 */
import axios from "@/api/axios";

const BASE_URL = "template";
export const camera = {
  // 进场车辆统计
  getCamera: payload => axios.post(`${BASE_URL}/selectCameraInfo`, payload)
};
