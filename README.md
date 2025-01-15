# SDevLibrary-element-v2

## 安装教程
```
npm i SDevLibrary-element-v2
```
## 使用说明
### 引入
    ```
    //入口js文件
    import SDevLibraryElementV2 from 'SDevLibrary-element-v2'

    //引入组件库样式
    import 'SDevLibrary-element-v2/index.css'

    //使用开发工具
    Vue.use(SDevLibraryElementV2)
    ```

### 组件

#### 1.  STable
    ```
    <STable :data="data" :columns="columns">
       <template #cloumnKey="{ data }">
          {{ data[columnKey] }}
       </template>
    </STable>
    ```
#### 2.  STableBar
    ```
    <STableBar :search-field-list="searchFieldList" />
    ```

#### 3.  SPage
    ```
    <SPage :page-data="response" @change="onPageChange" />
    ```
#### 4.  SBoard
    ```
    <SBoard :background-img="require('@/assets/bg1.png')">
       <div class="header" />
       <div class="content" />
    </STable>
    ```
    
### 工具类
#### 1.  class DialogHelper
    ```
    // 打开弹窗
    DialogHelper.show(element, param)

    // 打开单选弹窗
    DialogHelper.select(element, param)

    // 打开多选弹窗
    DialogHelper.selectList(element, param)
    ```
#### 2.  class FormHelper
    ```
    FormHelper.validate(formRef)
    ```
#### 3.  class EnumHelper
    ```
    EnumHelper.getLabel(enumList, key)
    EnumHelper.getColor(enumList, key)
    EnumHelper.getByKey(enumList, key)
    ```
#### 4.  class FileHelper
    ```
    FileHelper.blob2Excel(blob, name)
    ```



