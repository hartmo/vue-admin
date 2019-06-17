export default {
  name: 'user',
  mounted() {
    this.init()
  },
  watch: {
  },
  components: {},
  computed: {
    // 搜索条件的参数
    searchParam() {
      const item = {
        userName: this.listQuery.userName,
        userMobile: this.listQuery.userMobile
      }
      return item
    },
    userlist() {
      const start = this.page.pageIndex - 1
      const total = this.page.pageSize
      return this.list.slice(start * total, (start + 1) * total)
    }
  },
  data() {
    return {
      dialogVisible: false,
      loading: false,
      listQuery: {
        userName: '',
        userMobile: ''
      },
      form: {
        orderContent: [{ title: '' }],
        address: '',
        logistics: '',
        logisticsNumber: '',
        orderConsignee: '',
        orderMobile: '',
        orderRemark: '',
        personHandling: '李国裕',
        personHandlingMobile: '02029138489',
        userId: 0
      },
      page: {
        total: 0,
        pageSize: 10,
        pageIndex: 1
      },
      list: []
    }
  },
  props: {
    title: {
      type: String
    }
  },
  methods: {
    init() {
      this.loading = true
      this.$api('table/getUserList1', this.searchParam).then(res => {
        this.list = res.data
        this.page.total = res.data.length
        setTimeout(() => {
          this.loading = false
        }, 1000)
      })
      setTimeout(() => {
        this.loading = false
      }, 3000)
    },
    // 条数数目
    handleSizeChange(row) {
      this.page.pageSize = row
    },
    // 分页大小
    handleCurrentChange(row) {
      this.page.pageIndex = row
    },
    handleClick(row) {
      this.dialogVisible = true
      this.form = Object.assign({}, this.form, {
        orderContent: [{ title: '' }],
        address: '',
        logistics: '',
        logisticsNumber: '',
        orderConsignee: row.userName,
        orderMobile: row.userMobile,
        orderRemark: '',
        personHandling: '李国裕',
        personHandlingMobile: '02029138489',
        userId: row.id
      })
      setTimeout(() => {
        this.$refs.form.resetFields()
      }, 100)
    },
    sure() {
      const from = Object.assign({}, this.form, {
        orderContent: JSON.stringify(this.form.orderContent)
      })
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$api('table/sendOrderMessage', from).then(res => {
            this.$message({
              message: '推送成功',
              type: 'success'
            })
            this.dialogVisible = false
          })
        } else {
          this.$message.error('请补充红框内容')
        }
      })
    }
  }
}
