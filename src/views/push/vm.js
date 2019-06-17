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
        orderMobile: this.listQuery.orderMobile,
        orderConsignee: this.listQuery.orderConsignee,
        logisticsNumber: this.listQuery.logisticsNumber,
        orderContent: this.listQuery.orderContent
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
        orderMobile: '',
        logisticsNumber: '',
        orderContent: '',
        orderConsignee: ''
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
      this.$api('table/getOrderList', this.searchParam).then(res => {
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
      this.form = Object.assign(this.form, row, {
        orderContent: JSON.parse(row.orderContent)
      })
    }
  }
}
