## Tháng 3/2024

<table>
    <thead>
        <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
        <th>_giá_</th>
        <th>Sơn</th>
        <th>Cảnh</th>
        <th>Luân</th>
    </thead>
    <tbody>
        <tr>
            <td><b>Cần phải trả</b></td>
            <td><b>_</b></td>
            <td style="background: green; color: white;"><b>_</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data3, 2, 3, data3Other)}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data3, 3, 3, data3Other)}}</b></td>
        </tr>
        <tr>
            <td><b>Tổng</b></td>
            <td><b>_</b></td>
            <td><b>{{sum && sum(data3, 1, 3)}}</b></td>
            <td><b>{{sum && sum(data3, 2, 3)}}</b></td>
            <td><b>{{sum && sum(data3, 3, 3)}}</b></td>
        </tr>
        <tr>
            <td><i>Sinh hoạt phí</i></td>
            <td><i>_</i></td>
            <td><i>{{data3Other && data3Other[0]}}</i></td>
            <td><i>{{data3Other && data3Other[1]}}</i></td>
            <td><i>{{data3Other && data3Other[2]}}</i></td>
        </tr>
        <tr>
            <td><i>Đã chi</i></td>
            <td><i>{{sumOwner && sumOwner(data3)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data3, 1)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data3, 2)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data3, 3)}}</i></td>
        </tr>
        <tr v-for="item in data3">
            <td>{{item.name}}</td>
            <td>{{item.cost}}</td>
            <td>{{dive1item && dive1item(item, 1, 3)}}</td>
            <td>{{dive1item && dive1item(item, 2, 3)}}</td>
            <td>{{dive1item && dive1item(item, 3, 3)}}</td>
        </tr>
    </tbody>
</table>

**Note:**
- *: Người thanh toán
- (**): Đã trừ phần Châu

:point_right: [HÓA ĐƠN/BIÊN LAI](/bills-2024/mar/t3-2024.md)
