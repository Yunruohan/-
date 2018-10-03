<template>
    <el-table
      :data="tableData"
      style="width: 90%;margin:20px;border:1px solid #ddd;">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </template>

  <script>
  import { Table,TableColumn } from 'element-ui'
  import axios from 'axios'
    export default {
      name: 'tableElem',
      data() {
        return {
          tableData: []
        }
      },
      mounted() {
         this.getData();
      }, 
      methods:{
        getData(){
          axios.get('../../static/json/dataTable.json').then( (res) =>{
              this.tableData = res.data.data;
          })
        }
      }
    }
  </script>

  