export default {
  name: 'adduser',
  mounted() {
    this.form.openId = this.$route.query.openId
  },
  watch: {
  },
  components: {},
  computed: {
  },
  data() {
    return {
      isView: false,
      form: {
        openId: '',
        userMobile: '',
        userName: ''
      },
      rules: {
        userName: [
          { required: true, message: '姓名不能为空', trigger: 'change' }
        ],
        userMobile: [
          { required: true, message: '手机号码不能为空', trigger: 'change' }
        ]
      }
    }
  },
  props: {
  },
  methods: {
    sure() {
      const from = Object.assign({}, this.form, {
        orderContent: JSON.stringify(this.form.orderContent)
      })
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$api('table/saveUser', from).then(res => {
            this.$message({
              message: '提交成功',
              type: 'success'
            })
            this.isView = true
          })
        } else {
          this.$message.error('请补充红框内容')
        }
      })
    }
  }
}
