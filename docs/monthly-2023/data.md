<script>
import { ref } from 'vue'

const data4 = ref([
    {
        name: 'Nhà tháng 4',
        cost: 6500,
        divideTo: [],
        divideBy: [0.3846153846, 0.3076923077, 0.3076923077],
        owner: 1,
    },
    {
        name: 'Internet (6 tháng)',
        cost: 1320,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Phí qly tháng 3',
        cost: 403,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Phí qly tháng 4',
        cost: 418,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 4',
        cost: 200,
        divideTo: [1, 2],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Bóng đèn',
        cost: 80,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Chổi + vòi nước',
        cost: 155,
        divideTo: [],
        divideBy: [],
        owner: 3,
    },
]);

const data5 = ref([
    {
        name: 'Nhà tháng 5',
        cost: 6500,
        divideTo: [],
        divideBy: [0.3846153846, 0.3076923077, 0.3076923077],
        owner: 1,
    },
    {
        name: 'Phí qly tháng 5',
        cost: 418,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Nước sinh hoạt tháng 4 (7 khối)',
        cost: 60,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 5',
        cost: 200,
        divideTo: [1, 2],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 4',
        cost: 82,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Nước uống (2 bình)',
        cost: 116,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Cây lau nhà',
        cost: 260,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Cây chà nhà tắm',
        cost: 35,
        divideTo: [],
        divideBy: [],
        owner: 2,
    },
]);

const data6 = ref([
    {
        name: 'Nhà tháng 6',
        cost: 6500,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Phí qly tháng 6',
        cost: 418,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 6',
        cost: 300,
        divideTo: [1, 2, 4],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Nước sinh hoạt tháng 5 (8 khối)',
        cost: 68,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 5',
        cost: 182,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Nước uống (4 bình)',
        cost: 212,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền mạng (6 tháng)',
        cost: 235,
        divideTo: [],
        divideBy: [0,0,0,1],
        owner: 1,
    },
]);

const data7 = ref([
    {
        name: 'Nhà tháng 7',
        cost: 6500,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Phí qly tháng 7',
        cost: 418,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 7',
        cost: 300,
        divideTo: [1, 2, 4],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Nước sinh hoạt tháng 6 (12 khối)',
        cost: 102,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 6',
        cost: 319,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
]);

const data8 = ref([
    {
        name: 'Nhà tháng 8',
        cost: 6500,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Phí qly tháng 8',
        cost: 418,
        divideTo: [1, 2, 3],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 8',
        cost: 300,
        divideTo: [1, 2, 4],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Nước sinh hoạt tháng 7 (10 khối)',
        cost: 85,
        divideTo: [1, 2, 3],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 7',
        cost: 304,
        divideTo: [1, 2, 3],
        divideBy: [],
        owner: 1,
    },
]);

const data9Other = [0, -135, 100, -13];
const data9 = ref([
    {
        name: 'Nhà tháng 9',
        cost: 6500,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Phí qly tháng 9',
        cost: 418,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 9',
        cost: 300,
        divideTo: [1, 2, 4],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Nước sinh hoạt tháng 8 (11m3)',
        cost: 93,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 8',
        cost: 506,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
]);

const data10Other = [27, -81, 27, 27];
// const data10Other = [0, 0, 0, 0];
const data10 = ref([
    {
        name: 'Nhà tháng 10',
        cost: 6500,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Phí qly tháng 10',
        cost: 418,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 10',
        cost: 300,
        divideTo: [1, 2, 4],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Nước sinh hoạt tháng 9 (10m3)',
        cost: 85,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 9',
        cost: 342,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
]);

const data11Other = [-81, 27, 27, 27];

const data11 = ref([
    {
        name: 'Nhà tháng 11',
        cost: 6500,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Phí qly tháng 11',
        cost: 418,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 11',
        cost: 300,
        divideTo: [1, 2, 4],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Nước sinh hoạt tháng 10 (8m3)',
        cost: 68,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 10',
        cost: 347,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
]);

const data12Other = [-69, -143, 106, 106];

const data12 = ref([
    {
        name: 'Nhà tháng 12',
        cost: 6500,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Phí qly tháng 12',
        cost: 418,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền gửi xe tháng 12',
        cost: 300,
        divideTo: [1, 2, 4],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền mạng tháng 11',
        cost: 220,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Nước sh tháng 11 (10m3)',
        cost: 85,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền điện tháng 11',
        cost: 305,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
    {
        name: 'Tiền rác',
        cost: 234,
        divideTo: [],
        divideBy: [],
        owner: 1,
    },
]);

</script>