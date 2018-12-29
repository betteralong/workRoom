<template>
  <div class="my-order-page">
    <div class="form-container clearfix">
       <el-form ref="form" :model="form" label-width="80px">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="上传时间:" prop="createdTime" >
              <el-input v-model="form.settleBatch" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="订单号:" prop="name" >
              <el-input v-model="form.settleBatch" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="订单状态:" prop="phone">
              <el-select v-model="form.status" placeholder="请选择订单状态">
                <el-option label="未支付" value="shanghai"></el-option>
                <el-option label="已支付" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="buttom-group">
        <el-button @click="getList" type="primary" size="small" ><i class="el-icon-search"></i>查询</el-button>
        <el-button @click="handleReset" size="small"><i class="el-icon-refresh"></i>重置</el-button>
      </div>
    </div>
    <div class="table-container clearfix">
      <el-table
        :data="dataList"
        align="center"
        border
        style="width: 100%">
        <el-table-column v-for="(item,index) in column" :key="index"
          :prop="item.prop"
          :align="item.align"
          :width="item.width"
          :label="item.label">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="下载完成论文"
          align="center"
          width="150">
          <template slot-scope="scope">
            <el-button type="text" @click="edit(scope.row)" >下载</el-button>            
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-wrapper">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="form.current"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="form.size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
let column = Object.freeze([
    {
      label: '上传时间',
      prop: 'name',
      align: 'center'
    },
    {
      label: '订单状态',
      prop: 'user',
      align: 'center'
    },
    {
      label: '订单编号',
      prop: 'role',
      align: 'center'
    },
    {
      label: '备注',
      prop: 'remark',
      align: 'center'
    }
  ])
export default {
  methods: {
    getList() {

    },
    handleReset() {

    },
    handleSizeChange(size) {
      this.$set(this.form, 'size', String(size))
      this.getServiceList()
    },
    handleCurrentChange(current) {
      this.$set(this.form, 'current', String(current))
      this.getServiceList()
    },
  },
  data() {
    return {
            dialogVisible: false,
      column: column, // 表格的字段
      ruleForm: [],
      form:{
        createdTime: '',
        name: '',
        phone: '',
        size: 10,
        current: 1
      },
      dialogForm:{
        user:'',
        password:'',
        phone:'',
        role: '',
      },
      dataList: [
        {
          id: 1,
          name: '2018-03-09',
          role: 'GTX-2018-03-09-001',
          user: '未支付',
          phone: '184111111111',
          created: '2018-08-01',
          remark: '主题要鲜明'
        },
        {
          id: 1,
          name: '2018-03-09',
          role: 'GTX-2018-03-09-002',
          user: '已支付',
          phone: '184111111111',
          created: '2018-08-01',
          remark: '备注信息'
        },
        {
          id: 1,
          name: '2018-03-09',
          role: 'GTX-2018-03-09-003',
          user: '未支付',
          phone: '184111111111',
          created: '2018-08-01',
          remark: '备注信息'
        },
        {
          id: 1,
          name: '2018-03-09',
          role: 'GTX-2018-03-09-004',
          user: '未支付',
          phone: '184111111111',
          created: '2018-08-01',
          remark: '备注信息'
        },
      ],
      totalCount: 1,
    }
  }
}
</script>

<style lang="scss" scoped>
.my-order-page{
  padding: 24px;
  .table-container{
    padding: 20px 0;
  }
  .buttom-group{
    float: right;
  }
  .pagination-wrapper{
    padding-top: 15px;
    float: right;
  }
}
</style>
