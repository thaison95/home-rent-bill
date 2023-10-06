## Tháng 10/2023

<table>
    <thead>
        <th>&emsp;&emsp;&emsp;&emsp;&emsp;</th>
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
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data10, 2, 4, data10Other)}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data10, 3, 4, data10Other)}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data10, 4, 4, data10Other)}}</b></td>
        </tr>
        <tr>
            <td><b>Tổng</b></td>
            <td><b>_</b></td>
            <td><b>{{sum && sum(data10, 1, 4)}}</b></td>
            <td><b>{{sum && sum(data10, 2, 4)}}</b></td>
            <td><b>{{sum && sum(data10, 3, 4)}}</b></td>
            <td><b>{{sum && sum(data10, 4, 4)}}</b></td>
        </tr>
        <tr>
            <td><i>Sinh hoạt phí</i></td>
            <td><i>_</i></td>
            <td><i>{{data10Other && data10Other[0]}}</i></td>
            <td><i>{{data10Other && data10Other[1]}}</i></td>
            <td><i>{{data10Other && data10Other[2]}}</i></td>
            <td><i>{{data10Other && data10Other[3]}}</i></td>
        </tr>
        <tr>
            <td><i>Đã chi</i></td>
            <td><i>{{sumOwner && sumOwner(data10)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data10, 1)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data10, 2)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data10, 3)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data10, 4)}}</i></td>
        </tr>
        <tr v-for="item in data10">
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

:point_right: [HÓA ĐƠN/BIÊN LAI](/bills/t10-2023)
