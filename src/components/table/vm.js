export default {
  name: 'MTable',
  data() {
    return {
      loading: false,
      list: [],
      total: 0,
      page: {
        page: 1,
        size: 10
      }
    }
  },
  mounted() {
    this.loading = true
    setTimeout(() => {
      this.init()
    }, 1000)
  },
  watch: {
    pagesizes: {
      deep: true,
      handler(val) {
        this.page.size = val[0]
      }
    }
  },
  props: {
    value: {}, // 非必须
    pagesizes: {
      type: Array,
      default: () => {
        return [10, 25, 50, 100, 150, 200]
      }
    },
    param: {
      type: Object,
      default: () => {
        return Object.assign({})
      }
    },
    /**
     * 是否展示分页
     */
    paginationShow: {
      type: Boolean,
      default: true
    },
    /**
     * 是否后台传参，如果是后台传参 request字段必须传
     */
    isbackpage: {
      type: Boolean,
      default: false
    },
    /**
     * 如果isbackpage为true，就是后台分页，request是必须传参
     * @param url 请求地址
     * @param post 请求方式
     */
    request: {
      type: Object,
      default: () => {
        return {
          url: '',
          total: 'erro.total',
          data: 'erro.list'
        }
      }
    }
  },
  methods: {
    /**
     * 后台传参初始化
     */
    init(item) {
      let params = {
        size: this.page.size,
        page: this.page.page > 0 ? this.page.page - 1 : this.page.page
      }
      if (item) {
        this.page.page = item.page || 0
        params = Object.assign({}, params, item)
      }
      this.loading = true
      const param = Object.assign({}, this.param, params)
      this.$api(this.request.url, param).then(({
        error
      }) => {
        this.loading = false
        this.list = this.request.data ? error[this.request.data] : error
        this.total = error.total ? error.total : 0
      }).catch(e => {
        this.loading = false
      })
    },
    /**
     * 获取分页大小
     * @param row 分页大小
     */
    handleSizeChange(row) {
      if (!this.isbackpage) {
        this.$emit('handleSizeChange', this.page)
      } else {
        this.page.size = row
        this.init()
      }
    },
    /**
     * 获取分页页码
     * @param row
     */
    handleCurrentChange(row) {
      if (!this.isbackpage) {
        this.$emit('handleCurrentChange', this.page)
      } else {
        this.page.page = row
        this.init()
      }
    },
    /**
     * 删除其中的一条数据
     * 目前仅限于后台删除数据
     */
    delDate(row) {
      this.list.splice(row, 1)
    }
  },
  computed: {
    /**
     * 用户看到的数据
     */
    userarr() {
      if (!this.isbackpage) {
        if (this.paginationShow) {
          const arr = this.value.slice(this.page.size * (this.page.page - 1), this.page.size * this.page.page)
          this.loading = true
          setTimeout(() => {
            this.loading = false
          }, 500)
          return arr
        } else {
          return this.value
        }
      } else {
        return this.list
      }
    }
  }
}
