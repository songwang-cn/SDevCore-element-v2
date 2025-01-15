# S-dev-library

#### 安装教程

npm i s-dev-library

#### 使用说明

1.  STable
    ...
    <STable :data="data" :columns="columns">
       <template #cloumnKey="{ data }">
          {{ data[columnKey] }}
       <template>
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





