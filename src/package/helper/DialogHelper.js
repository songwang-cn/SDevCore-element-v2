/**
 * 弹窗助手工具类
 * @author SongWang
 */

import Vue from "vue";
import ElementUI from "element-ui";

export class DialogHelper {
  /**
   * # 😡弹出对话框的内部方法
   * @param view 使用的视图组件 传入一个import的vue
   * @param param 可选参数 将传入到合并到props上
   * @returns
   */
  async build(view, param) {
    //创建挂载在body上的节点
    const parentNode = document.createElement("div");
    const domId = `dialog_${Date.now()}`;
    parentNode.setAttribute("id", domId);
    //创建组件替换的节点
    const replaceNode = document.createElement("div");
    parentNode.appendChild(replaceNode);
    let app;

    // 卸载dom的方法
    const unmount = () => {
      if (app) {
        console.log("unmount");
        console.log(parentNode);
        try {
          document.body.removeChild(parentNode);
          app.$destroy();
          app = undefined;
        } catch (e) {
          console.log("err", e);
        }
      }
    };
    return new Promise((resolve, reject) => {
      console.log("----app--", app);
      if (app) {
        return;
      }

      const dialogParam = {
        onConfirm: async (p) => {
          unmount();
          resolve(p);
        },
        onCancel: () => {
          unmount();
          reject();
        },
        ...param,
      };

      document.body.appendChild(parentNode);

      Vue.use(ElementUI);

      app = new Vue({
        render: (h) =>
          h(view, {
            props: dialogParam,
          }),
      }).$mount(replaceNode);
    });
  }

  static async show(view, param) {
    return new this().build(view, {
      param,
    });
  }

  /**
   * # 😡弹出单选对话框
   */
  static select(view, param) {
    return new this().build(SelectView, {
      param,
    });
  }

  /**
   * # 😡弹出多选对话框
   */
  static selectList(view, selectList, param) {
    return new this().build(SelectView, {
      selectList,
      multiple: true,
      param,
    });
  }
}
