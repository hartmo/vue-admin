export default {
  name: 'permissions',
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
        name: this.listQuery.name,
        areaId: this.listQuery.areaId,
        supplierStatus: this.listQuery.supplierStatus
      }
      return item
    }
  },
  data() {
    var validator = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.confirmAdminPwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var validator1 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form1.confirmAdminPwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      dialogVisible: false,
      dialogVisible1: false,
      loading: false,
      form1: {
        adminAccount: '',
        adminName: '',
        adminPwd: '',
        confirmAdminPwd: ''
      },
      form: {
        adminId: 0,
        confirmAdminPwd: '',
        newAdminPwd: ''
      },
      page: {
        total: 0,
        pageSize: 10,
        pageIndex: 1
      },
      rules1: {
        adminAccount: [
          { required: true, message: '请输入账号', trigger: 'change' }
        ],
        adminName: [
          { required: true, message: '请输入用户名称', trigger: 'change' }
        ],
        adminPwd: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ],
        confirmAdminPwd: [
          { validator: validator1, trigger: 'change' }
        ]
      },
      rules: {
        adminPwd: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ],
        confirmAdminPwd: [
          { validator: validator, trigger: 'change' }
        ]
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
      this.$api('table/getAdminUser', { pageIndex: this.page.pageIndex, pageSize: this.page.pageSize }).then(res => {
        this.list = res.data
        this.page.total = res.total
        setTimeout(() => {
          this.loading = false
        }, 1000)
      })
      setTimeout(() => {
        this.loading = false
      }, 3000)
    },
    add() {
      this.dialogVisible1 = true
      this.form1 = Object.assign({}, this.form1, {
        adminAccount: '',
        adminName: '',
        adminPwd: '',
        confirmAdminPwd: ''
      })
      setTimeout(() => {
        this.$refs.form1.resetFields()
      }, 100)
    },
    addsure() {
      this.$refs.form1.validate((valid) => {
        if (valid) {
          this.$api('table/addAdminUser', this.form1).then(res => {
            this.$message({
              message: '创建成功',
              type: 'success'
            })
            this.init()
            this.dialogVisible1 = false
          })
        } else {
          this.$message.error('请补充红框内容')
        }
      })
    },
    // 条数数目
    handleSizeChange(row) {
      this.page.pageSize = row
      this.init()
    },
    // 分页大小
    handleCurrentChange(row) {
      this.page.pageIndex = row
      this.init()
    },
    del(row) {
      this.$confirm('此操作将永久停用该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$api('table/deleteAdminUser', { adminId: row.id }).then(res => {
          if (res.result === 1000) {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.init()
          }
        })
      })
    },
    handleClick(row) {
      this.dialogVisible = true
      this.form = Object.assign({}, this.form, {
        adminId: row.id,
        confirmAdminPwd: '',
        newAdminPwd: ''
      })
      setTimeout(() => {
        this.$refs.form.resetFields()
      }, 100)
    },
    sure() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$api('table/updateAdminUserPwdAuth', this.form).then(res => {
            this.$message({
              message: '修改成功',
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
