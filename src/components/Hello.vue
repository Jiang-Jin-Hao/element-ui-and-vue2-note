<template>
  <div>

    <div>
      <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName">
        <el-table-column
            prop="id"
            label="编号"
            width="180">
        </el-table-column>
        <el-table-column
            prop="username"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="password"
            label="密码">
        </el-table-column>
        <el-table-column
            prop="birthday"
            label="生日"
            >
        </el-table-column>
      </el-table>
    </div>

    <div>
      <div class="block">
        <span class="demonstration">默认</span>
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
        </el-date-picker>
      </div>
    </div>

    <div>
      <div>第三方图标的使用：</div>
      <div><i class="fa fa-camera-retro fa-lg"></i></div>
    </div>

  </div>
</template>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<script>

// import axios from "axios";

export default {
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }
  },
  created: function () {
    this.$http.get("user/").then((response) => {
      this.tableData = response.data;
    })
  },
  data() {
    return {
      tableData: [],
      // 下面是日期部分
      value1: ''
    }
  }
}
</script>