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

// S C L
const data4Other = [35, 35, 35];
const data4 = ref([
    {
        name: 'Nhà tháng 4',
        cost: 6500,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Phí qly tháng 4',
        cost: 418,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 4',
        cost: 300,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Tiền mạng tháng 3',
        cost: 220,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Nước sh tháng 3 (10m3)',
        cost: 88,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 3',
        cost: 402,
        divideTo: [],
        owner: 1,
    },
]);

// S C L
const data5Other = [80, 80, 80];
const data5 = ref([
    {
        name: 'Nhà tháng 5',
        cost: 6500,
        divideTo: [1, 2],
        additionToMe: 500,
        owner: 1,
    },
    {
        name: 'Phí qly tháng 5',
        cost: 418,
        divideTo: [1, 2],
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 5',
        cost: 200,
        divideTo: [1, 2],
        owner: 1,
    },
    {
        name: 'Tiền mạng tháng 4',
        cost: 220,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Nước sh tháng 4 (9m3)',
        cost: 80,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 4',
        cost: 350,
        divideTo: [],
        owner: 1,
    },
]);

// S C
const data6Other = [50, 50];
const data6 = ref([
    {
        name: 'Nhà tháng 6',
        cost: 6500,
        divideTo: [],
        additionToMe: 500,
        owner: 1,
    },
    {
        name: 'Phí qly tháng 6',
        cost: 418,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 6',
        cost: 200,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Tiền mạng tháng 5',
        cost: 220,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Nước sh tháng 5 (8m3)',
        cost: 70,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 5',
        cost: 280,
        divideTo: [],
        owner: 1,
    },
]);

// S C
const data7Other = [50, 50];
const data7 = ref([
    {
        name: 'Nhà tháng 7',
        cost: 6500,
        divideTo: [],
        additionToMe: 500,
        owner: 1,
    },
    {
        name: 'Phí qly tháng 7',
        cost: 418,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 7',
        cost: 200,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Tiền mạng tháng 6',
        cost: 220,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Nước sh tháng 6 (12m3)',
        cost: 100,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 6',
        cost: 300,
        divideTo: [],
        owner: 1,
    },
]);

// S C
const data8Other = [67, 33];
const data8 = ref([
    {
        name: 'Nhà tháng 8',
        cost: 6500,
        divideTo: [],
        additionToMe: 500,
        owner: 1,
    },
    {
        name: 'Phí qly tháng 8',
        cost: 418,
        divideTo: [],
        additionToMe: Math.floor(418/3),
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 8',
        cost: 200,
        divideTo: [],
        owner: 1,
    },
    {
        name: 'Tiền mạng tháng 7',
        cost: 220,
        divideTo: [],
        additionToMe: Math.floor(220/3),
        owner: 1,
    },
    {
        name: 'Nước sh tháng 7 (8m3)',
        cost: 70,
        divideTo: [],
        additionToMe: Math.floor(70/3),
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 7',
        cost: 290,
        divideTo: [],
        additionToMe: Math.floor(290/3),
        owner: 1,
    },
]);


// S C
const data9Other = [67, 33];
const data9 = ref([
    {
        name: 'Nhà tháng 9',
        cost: 6500,
        divideTo: [],
        additionToMe: Math.floor(6500/3),
        owner: 1,
    },
    {
        name: 'Phí qly tháng 9',
        cost: 418,
        divideTo: [],
        additionToMe: Math.floor(418/3),
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 9',
        cost: 300,
        divideTo: [],
        additionToMe: Math.floor(300/3),
        owner: 1,
    },
    {
        name: 'Tiền mạng tháng 8',
        cost: 220,
        divideTo: [],
        additionToMe: Math.floor(220/3),
        owner: 1,
    },
    {
        name: 'Nước sh tháng 8 (11m3)',
        cost: 97,
        divideTo: [],
        additionToMe: Math.floor(97/3),
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 8',
        cost: 300,
        divideTo: [],
        additionToMe: Math.floor(300/3),
        owner: 1,
    },
]);

// S C
const data10Other = [67, 33];
const data10 = ref([
    {
        name: 'Nhà tháng 10',
        cost: 6500,
        divideTo: [],
        additionToMe: Math.floor(6500/3),
        owner: 1,
    },
    {
        name: 'Phí qly tháng 10',
        cost: 418,
        divideTo: [],
        additionToMe: Math.floor(418/3),
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 10',
        cost: 300,
        divideTo: [],
        additionToMe: Math.floor(300/3),
        owner: 1,
    },
    {
        name: 'Tiền mạng tháng 9',
        cost: 220,
        divideTo: [],
        additionToMe: Math.floor(220/3),
        owner: 1,
    },
    {
        name: 'Nước sh tháng 9 (11m3)',
        cost: 97,
        divideTo: [],
        additionToMe: Math.floor(97/3),
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 9',
        cost: 320,
        divideTo: [],
        additionToMe: Math.floor(300/3),
        owner: 1,
    },
]);

</script>