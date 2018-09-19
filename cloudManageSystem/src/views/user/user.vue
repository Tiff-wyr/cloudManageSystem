<template>
  <div class="user-management">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="tableData"
      :stripe="true"
    >
      <el-table-column
        prop="createdTime"
        label="日期"
        width="250">
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="个性签名"
        width="250">
      </el-table-column>
      <el-table-column
        prop=""
        label="用户头像"
        width="200">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" class="avatar">
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini" @click="lookUser">查看详情
          </el-button>
          <el-button
            size="mini"
            type="danger" @click="deleteRow(scope.row._id)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[6, 12, 18, 24]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      getData() {
        this.$axios.get('/user').then(res => {
          if (res.data.code === 200) {
            this.tableData = res.data.data
            console.log(res.data.data);
          }
        })
      },
      lookUser() {},
      deleteRow(id) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.post('/user/delete', {userIds: [id]}).then(res => {
            if(res.code === 200){
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.getData()
            }

          })
         ;
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      } ,

    },
    created() {
      this.getData()
    },

  }
</script>

<style scoped lang="scss">
  .user-management {
    position: relative;
    .avatar {
      line-height: 50px;
      width: 50px;
      height: 50px;
    }
    /deep/{
      .block{
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #ccc;

      }
    }


  }
</style>
