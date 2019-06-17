export default {
  name: 'adduser',
  mounted() {
    const logisticsNumber = this.$route.query.logisticsNumber
    this.init({ logisticsNumber })
  },
  watch: {
  },
  components: {},
  computed: {
  },
  data() {
    return {
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
    init(data) {
      this.$api('table/queryOrder', data).then(res => {
        res.data.orderContent = JSON.parse(res.data.orderContent)
        this.form = res.data
      })
    }
  }
}
