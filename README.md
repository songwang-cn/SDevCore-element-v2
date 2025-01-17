# SDevCore-element-v2

## 安装教程

```
npm  i  sdevcore-element-v2
```

## 使用说明

### 引入

```
//入口js文件
import SDevCoreElementV2 from 'sdevcore-element-v2'

//引入组件库样式
import 'sdevcore-element-v2/index.css'

//使用开发工具
Vue.use(SDevCoreElementV2)
```

## 组件

### SBody

```
<SBody>
    <template #logo>
      左侧头部
    </template>
    <template #menu>
      左侧菜单
    </template>
    <template #copyright>
      左侧底部
    </template>
    <template #header>
      右侧头部
    </template>
    <template #main>
      主体部分
    </template>
</SBody>
```

### SPanel

```
<SPanel title="用户列表" hide-title @full-change="onFullChange">
    <template #body>
      面板主体
    </template>
    <template #footerLeft>
      底部左侧
    </template>
    <template #footerRight>
      底部右侧
    </template>
</SPanel>
```
SPanel配置项/事件 

| 配置项/事件          | 说明         | 类型          | 描述              |
| --------------- | ------------ | ------------- | ------------------- |
| title         | 标题 | string       |       |
| hideTitle          | 隐藏头部标题 | boolean        | 默认值：false       |
| @fullChange          | 全屏状态变化事件 | 参数：isFullscreen        |        |

### STable

```
<STable :data="data" :columns="columns">
    <template #cloumnKey="{ data }">
        {{  data[columnKey] }}
    </template>
</STable>
```
STable组件配置项

| 配置项 |  说明  | 类型 | 示例 |
| --------    | -------- | -------- | -------- |
| columns     |  表格列配置项 | Array       | [{key: 'name', label: '姓名'}]    |
| data        |  表格数据     | Array       | [{name: '张三'}]    |
| loading     |  加载状态     | Boolean     |  默认值: false      |
| hideIndex   |  隐藏序号列   | Boolean     | 默认值: false     |
| hideSelect  |  隐藏选择列   | Boolean     | 默认值: false    |
| hideDelete  |  隐藏删除按钮 | Boolean     | 默认值: false    |
| showDetail  |  显示详情按钮 | Boolean     | 默认值: false    |
| hideEdit    |  隐藏编辑按钮 | Boolean     | 默认值: false    |
| hideCtrl    |  隐藏操作列       | Boolean     | 默认值: false    |
| ctrlWidth   |  操作列宽度       | Number      | 默认值: 140    |
| editStr     |  编辑按钮文字     | String      | 默认值: '编辑'    |
| detailStr   |  详情按钮文字     | String      | 默认值: '详情'    |
| deleteStr   |  删除按钮文字     | String      | 默认值: '删除'    |
| autoHeight  |  表格自适应高度   | Boolean     | 默认值: false    |
| selectList  |  选中列表         | Array     | 默认值: []    |

STable事件

| 事件名称 |  说明  | 参数 |
| --------    | -------- | -------- | 
| @edit       |  编辑事件    | row |
| @detail     |  详情事件    | row |
| @delete     |  删除事件    | row |
| @select     |  选择事件    | selectList |
| @onSelect   |  (同select)    | selectList |

STable插槽

| 插槽名称 |  说明  | 示例 |
| --------    | -------- | ---|
| tableHeader   |  表格头部插槽 |       -- |
| actionBefore  |  默认操作按钮左侧插槽     |-- |
| actionEnd     |  默认操作按钮右侧插槽     |     -- | 
| tableFooter    | 表格底部插槽     |     -- |
| [columnKey]   |  表格内部列插槽  |   <template #columnKey="{ data }">{{ data }}</template>

### STableBar

```
<STableBar 
    :search-field-list="searchFieldList" 
    search-immediate
    @search="onSearch"
    @reset="onReset"
/>
```
STableBar配置项 

| 配置项          | 说明         | 类型          | 示例                |
| --------------- | ------------ | ------------- | ------------------- |
| hideAdd         | 隐藏新增按钮 | boolean       | 默认值：false       |
| addStr          | 新增按钮文字 | string        | 默认值：添加        |
| searchFieldList | 搜索对象列表 | [searchField] | 详见searchField配置 |
| searchImmediate | 搜索立即执行 | boolean       | 默认值：false       |
| hideSearch                |      隐藏右侧搜索区域        |  boolean             |    默认值：false                 |

searchField 对象配置 

| 配置项 | 类型   | 描述            | 示例 |
| ------ | ------ | --------------- | ---- |
| key    | string | 搜索字段的key值 |      |
| label  | string | 搜索字段的名称  |      |
| type        | string | 搜索字段组件类型                   | 可选值：input,select,cascader,date,daterange |
|  placeholder      | string       |   placeholder占位文字  | 若不传入，默认使用label     |
| enumRecord  | array  | 当type为select，cascader时传入     | [{key:'xxx', label: 'xxx'}]                  |
| valueKey    | string | 指定enumRecord列表的value的key     | 默认值：‘key'                                |
| labelKey    | string | 指定enumRecord列表的label的key     | 默认值：‘label'                              |
| childrenKey | string | 指定enumRecord列表的 children的key | 默认值：‘children'                           |

### SPage

```
<SPage :page-data="response" @change="onPageChange" />
```
SPage配置项/事件 

| 配置项/事件          | 说明         | 类型          | 描述              |
| --------------- | ------------ | ------------- | ------------------- |
| pageData         | 隐藏新增按钮 | boolean       |  必传 ，示例{pageNum: 1, pageSize: 20, total: 999 }     |
| pageSizes          | 新增按钮文字 | array        | 默认值：[20, 50, 100]        |
| @change          | 分页器change事件 | 参数：pageData        |        |


### SDialog

```
<SDialog title="弹窗" @cancel="onCancel()" @confirm="onConfirm()">
    <!---弹窗内容区域-->
</SDialog>
```

SDialog配置项 

| 配置项 | 说明     | 类型   | 描述        | 
| ------ | -------- | ------ | ----------- | 
| title  | 弹窗标题 | string |             |
| width  | 宽度     | string | 默认值：50% | 
| height | 高度     | string | 默认值：50% |
| minWidth  | 最小宽度     | string | 默认值：500px |
| minHeight | 最小高度     | string | 默认值：500px | 
| fullable       | 是否支持全屏         | boolean       | 默认值：true             |

SDialog事件 

| 事件名    | 描述         |
| --------- | ------------ |
| cancel    | 点击取消触发 |
| onCancel  | 同cancel     |
| confirm   | 点击确定触发 |
| onConfirm  | 同confirm    |
| fullChange  | 切换全屏是触发             |

SDialog使用说明

SDialog是自定义的DIalog组件，需配合全局工具类 DialogHelper 一起使用

#### 示例
index.vue 主页面
```
<template>
    <STable data="userList" :columns="columns" @edit="onEditUser"/>
</template>
<script>
export default{
    data() {
        return{
            userList: [],
            columns:[
                {key: 'name'， label: '姓名'},
                {key: 'age'， label: '年龄'},
                {key: 'sex'， label: '性别'}
            ]
        }
    },
    methods: {
        async getUserList() {
            this.userList = await $http.userList.post()
        },
         async onEditUser() {
              await this.$DialogHelper.show(SDialog, param)
              // 刷新列表
              this.getUserList()
        }
    }
}
</script>

```
editView.vue 弹窗页面

```
<template>
  <SDialog title="编辑弹窗" @cancel="onCancel()" @confirm="onSubmit()">
      <el-form v-model="formData">
          ......
      <el-form>
  </SDialog>
</template>
<script>
export default{
    props:{
        // props里面这三项是固定的，只要使用了DialogHelper都会传入这三项
        onConfirm: Function,
        onCancel: Function,
        param: Object
    },
    data() {
        return{
            formData: {}
        }
    },
    methods: {
        async onSubmit() {
            await $http.updateUser.post(this.formData)
            // 调用onConfirm事件，关闭弹窗，完成Promise
            // onConfirm 也可传递参数 this.confirm(param)，外部在promise完成之后拿到param
            this.onConfirm()
        }
    }
}

</script>
```



### SBoard

```
<SBoard :background-img="require('@/assets/bg1.png')">

   <!--看板内容区域，内部使用绝对定位控制元素块位置即可-->

</STable>
```

## 工具类

### 1.  class DialogHelper

```
// 打开弹窗
DialogHelper.show(element, param)

// 打开单选弹窗
DialogHelper.select(element, param)

// 打开多选弹窗
DialogHelper.selectList(element, param)
```

### 2.  class FormHelper

```
FormHelper.validate(formRef)
```

### 3.  class EnumHelper

```
EnumHelper.getLabel(enumList, key)
EnumHelper.getColor(enumList, key)
EnumHelper.getByKey(enumList, key)
```

### 4.  class FileHelper

```
FileHelper.blob2Excel(blob, name)
```
