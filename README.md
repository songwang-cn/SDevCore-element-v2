# S-dev-library

#### 安装教程

npm i s-dev-library

#### 使用说明

### 组件

1.  STable
    ...
    <STable :data="data" :columns="columns">
       <template #cloumnKey="{ data }">
          {{ data[columnKey] }}
       </template>
    </STable>
    ...
2.  STableBar
    ...
    <STableBar :search-field-list="searchFieldList" />
    ...

3.  SPage
    ...
    <SPage :page-data="response" @change="onPageChange" />
    ...

4.  SBoard
    ...
    <SBoard :background-img="require('@/assets/bg1.png')">
       <div class="header" />
       <div class="content" />
    </STable>
    ...
    
### 工具类
1.  class DialogHelper

    DialogHelper.show(element, param)
    DialogHelper.select(element, param)
    DialogHelper.selectList(element, param)

2.  class FormHelper

    FormHelper.validate(formRef)

3.  class EnumHelper

    EnumHelper.getLabel(enumList, key): string
    EnumHelper.getColor(enumList, key): string
    EnumHelper.getByKey(enumList, key): {label: string, key: string, color: string, ...}

4.  class FileHelper

    FileHelper.blob2Excel(blob, name)




