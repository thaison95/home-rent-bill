## Tháng 1/2024

<table>
    <thead>
        <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
        <th>_giá_</th>
        <th>Sơn</th>
        <th>Cảnh</th>
        <th>Châu</th>
        <th>Luân</th>
    </thead>
    <tbody>
        <tr>
            <td><b>Cần phải trả</b></td>
            <td><b>_</b></td>
            <td style="background: green; color: white;"><b>_</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data1, 2, 4, data1Other)}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data1, 3, 4, data1Other)}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data1, 4, 4, data1Other)}}</b></td>
        </tr>
        <tr>
            <td><b>Tổng</b></td>
            <td><b>_</b></td>
            <td><b>{{sum && sum(data1, 1, 4)}}</b></td>
            <td><b>{{sum && sum(data1, 2, 4)}}</b></td>
            <td><b>{{sum && sum(data1, 3, 4)}}</b></td>
            <td><b>{{sum && sum(data1, 4, 4)}}</b></td>
        </tr>
        <tr>
            <td><i>Sinh hoạt phí</i></td>
            <td><i>_</i></td>
            <td><i>{{data1Other && data1Other[0]}}</i></td>
            <td><i>{{data1Other && data1Other[1]}}</i></td>
            <td><i>{{data1Other && data1Other[2]}}</i></td>
            <td><i>{{data1Other && data1Other[3]}}</i></td>
        </tr>
        <tr>
            <td><i>Đã chi</i></td>
            <td><i>{{sumOwner && sumOwner(data1)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data1, 1)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data1, 2)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data1, 3)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data1, 4)}}</i></td>
        </tr>
        <tr v-for="item in data1">
            <td>{{item.name}}</td>
            <td>{{item.cost}}</td>
            <td>{{dive1item && dive1item(item, 1, 4)}}</td>
            <td>{{dive1item && dive1item(item, 2, 4)}}</td>
            <td>{{dive1item && dive1item(item, 3, 4)}}</td>
            <td>{{dive1item && dive1item(item, 4, 4)}}</td>
        </tr>
    </tbody>
</table>

**Note:**
- *: Người thanh toán
- Tháng này ăn nhậu hơi nhiều 😂

:point_right: [HÓA ĐƠN/BIÊN LAI](/bills-2024/jan/t1-2024.md)
