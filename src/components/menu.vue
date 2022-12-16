<!-- 课程预约 -->

<template>
  <el-container class="menu-container">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">

        <el-menu-item index="0">
          <i class="el-icon-user"></i>
          个人中心
        </el-menu-item>


        <el-menu-item index="0">
          <i class="el-icon-user"></i>
          课程管理
        </el-menu-item>
        
        <el-submenu index="1" style="padding-top: 30px;">
          <template slot="title"><i class="el-icon-setting"></i>课程管理</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">课程列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>


      </el-menu>
    </el-aside>

    <el-container direction="vertical">
      <!--      <el-header style="text-align: right; font-size: 12px">-->
      <el-header style="font-size: 12px;">
        <el-menu :default-openeds="['1', '3']" style="display: flex; height: 60px; width: calc(100%);">
          <el-menu-item index="1">ddd</el-menu-item>
          <el-menu-item index="2">sss</el-menu-item>
          <!-- <el-submenu index="">
            <el-menu-item index=""></el-menu-item>
          </el-submenu>
          <el-menu-item index=""></el-menu-item> -->
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
  </el-container>
</template>
<style>

  .menu-container {
    height: 100vh;
    border: 1px solid #eee;
  }


  .el-header {
    /* text-align: right; */
    /* background-color: #B3C0D1; */
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    };
</script>
