export default {
  name: 'adduser',
  mounted() {
  },
  watch: {
  },
  components: {},
  computed: {
  },
  data() {
    return {
      isView: false,
      logisticsNumber: '',
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
      }
    }
  },
  props: {
  },
  methods: {
    init() {
      const data = { logisticsNumber: this.logisticsNumber }
      this.$api('table/queryOrder', data).then(res => {
        res.data.orderContent = JSON.parse(res.data.orderContent)
        this.form = res.data
        this.isView = true
      })
    }
  }
}
