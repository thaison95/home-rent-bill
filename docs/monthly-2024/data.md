<script>
import { ref } from 'vue'
// S C Ch L
const data1Other = [-813, 327, 327, 159];

const data1 = ref([
    {
        name: 'Nhà tháng 1',
        cost: 6500,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Phí qly tháng 1',
        cost: 418,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 1',
        cost: 300,
        divideTo: [1, 2, 4],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền mạng tháng 12',
        cost: 220,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Nước sh tháng 12 (11m3)',
        cost: 93,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 12',
        cost: 524,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Phí bảo hiểm cháy nổ',
        cost: 218,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
]);

// S C Ch L
const data2Other = [-577, 200, 292, 85];
const data2 = ref([
    {
        name: 'Nhà tháng 2',
        cost: 6500,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Phí qly tháng 2',
        cost: 418,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 2',
        cost: 300,
        divideTo: [1, 2, 4],
        owner: 1,
    },
    {
        name: 'Tiền mạng tháng 1',
        cost: 220,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Nước sh tháng 1 (12m3)',
        cost: 106,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 1',
        cost: 450,
        divideTo: [],
        additionToMe: 100,
        owner: 1,
        mark: {
            1: '(1)'
        }
    },
]);

// S C L
const data3Other = [0, 0, 0];
const data3 = ref([
    {
        name: 'Nhà tháng 3',
        cost: 6500,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Phí qly tháng 3',
        cost: 418,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 3',
        cost: 300,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Tiền mạng tháng 2 (**)',
        cost: 165,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Nước sh tháng 2 (7m3)',
        cost: 62,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 2 (**)',
        cost: 160,
        divideTo: [],
        owner: 1,
    },
]);

</script>