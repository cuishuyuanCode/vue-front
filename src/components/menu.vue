<!--加入顶部导航栏，侧边导航栏-->

<template>
  <el-container class="menu-container">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>导航三</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container direction="vertical">
      <!--      <el-header style="text-align: right; font-size: 12px">-->
      <el-header style="text-align: right; font-size: 12px;">
        <el-menu style="background-color: red">
         <el-menu-item-group>
           <el-menu-item>
             ddd
           </el-menu-item>
           <el-menu-item>
             ddd
           </el-menu-item>
         </el-menu-item-group>
        </el-menu>
      </el-header>
      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
    <!--        <el-menu>-->
    <!--          <el-menu-item index="1" style="width: 100px;">处理中心</el-menu-item>-->
    <!--          <el-submenu index="2">-->
    <!--            <template slot="title">我的工作台</template>-->
    <!--            <el-menu-item index="2-1">选项1</el-menu-item>-->
    <!--            <el-menu-item index="2-2">选项2</el-menu-item>-->
    <!--            <el-menu-item index="2-3">选项3</el-menu-item>-->
    <!--            <el-submenu index="2-4">-->
    <!--              <template slot="title">选项4</template>-->
    <!--              <el-menu-item index="2-4-1">选项1</el-menu-item>-->
    <!--              <el-menu-item index="2-4-2">选项2</el-menu-item>-->
    <!--              <el-menu-item index="2-4-3">选项3</el-menu-item>-->
    <!--            </el-submenu>-->
    <!--          </el-submenu>-->
    <!--          <el-menu-item index="3" disabled>消息中心</el-menu-item>-->
    <!--          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
    <!--        </el-menu>-->
    <!--        <el-dropdown>-->
    <!--          <i class="el-icon-setting" style="margin-right: 15px"></i>-->
    <!--          <el-dropdown-menu slot="dropdown">-->
    <!--            <el-dropdown-item>查看</el-dropdown-item>-->
    <!--            <el-dropdown-item>新增</el-dropdown-item>-->
    <!--            <el-dropdown-item>删除</el-dropdown-item>-->
    <!--          </el-dropdown-menu>-->
    <!--        </el-dropdown>-->
  </el-container>
</template>
<style>

  .menu-container {
    height: 100vh;
    border: 1px solid #eee;
  }


  .el-header {
    text-align: right;
    /*background-color: #B3C0D1;*/
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
<script>
    // export default {
    //     data() {
    //         const item = {
    //             date: '2016-05-02',
    //             name: '王小虎',
    //             address: '上海市普陀区金沙江路 1518 弄'
    //         };
    //         return {
    //             tableData: Array(20).fill(item)
    //         }
    //     }
    // };
</script>
