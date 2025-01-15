/**
 * 文件相关工具类
 * @author SongWang
 */
export class FileHelper {
  /**
   * @description blob二进制数据转为excel文件并下载
   * @param {*} blobData 文件流
   * @param {*} name 下载的文件名称
   */
  static blob2Excel(blobData, name) {
    const downloadUrl = window.URL.createObjectURL(new Blob([blobData]));
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", `${name}.xls`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(downloadUrl);
  }
}
