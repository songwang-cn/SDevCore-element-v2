import { Notification, Message } from "element-ui";

/**
 * 表单工具类
 * @author SongWang
 */
export class FormHelper {
  static async validate(formRef) {
    return new Promise((resolve, reject) => {
      formRef.validate((valid, fields) => {
        if (valid) {
          resolve();
        } else {
          const keys = Object.keys(fields);
          if (keys.length && fields[keys[0]].length) {
            // Notification.error(fields[keys[0]][0].message)
            Message.warning(fields[keys[0]][0].message);
          }
          reject();
        }
      });
    });
  }
}
