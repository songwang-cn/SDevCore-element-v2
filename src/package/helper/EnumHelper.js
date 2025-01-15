/**
 * 枚举工具类
 * @author SongWang
 */
export class EnumHelper {
  static getLabel(enumList, key) {
    return enumList.find((v) => v.key === key)?.label || "--";
  }

  static getColor(enumList, key) {
    return enumList.find((v) => v.key === key)?.color;
  }

  static getByKey(enumList, key) {
    return enumList.find((v) => v.key === key);
  }
}
