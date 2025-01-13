import STATUS_CODE from "@/axios/code";
import messageHandler from "@/axios/messageHandler";

export default (res = {}) => {
    const {code, data} = res
    // 定义请求返回包装对象
    const resModel = {
        fail: true,
        data: null
    };

    if (code === STATUS_CODE.OK) {
        resModel.fail = false;
        resModel.data = data;
    } else if (res instanceof Blob) {
        if(res.type === 'application/json'){
            resModel.fail = true
            let reader = new FileReader();
            reader.readAsText(res, 'utf-8');
            reader.onload = function() {
                let resJson = JSON.parse(reader.result)
                messageHandler(resJson)
            }
        }else{
            resModel.fail = false;
            resModel.data = res;
        }
    } else if (code === STATUS_CODE.AUTH_ERR) {
        resModel.status = 'AUTH_ERR'
    }
    return resModel;
}
