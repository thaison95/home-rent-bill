## Tháng 11/2023

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
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data11, 2, 4, data11Other)}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data11, 3, 4, data11Other)}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data11, 4, 4, data11Other)}}</b></td>
        </tr>
        <tr>
            <td><b>Tổng</b></td>
            <td><b>_</b></td>
            <td><b>{{sum && sum(data11, 1, 4)}}</b></td>
            <td><b>{{sum && sum(data11, 2, 4)}}</b></td>
            <td><b>{{sum && sum(data11, 3, 4)}}</b></td>
            <td><b>{{sum && sum(data11, 4, 4)}}</b></td>
        </tr>
        <tr>
            <td><i>Sinh hoạt phí</i></td>
            <td><i>_</i></td>
            <td><i>{{data11Other && data11Other[0]}}</i></td>
            <td><i>{{data11Other && data11Other[1]}}</i></td>
            <td><i>{{data11Other && data11Other[2]}}</i></td>
            <td><i>{{data11Other && data11Other[3]}}</i></td>
        </tr>
        <tr>
            <td><i>Đã chi</i></td>
            <td><i>{{sumOwner && sumOwner(data11)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data11, 1)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data11, 2)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data11, 3)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data11, 4)}}</i></td>
        </tr>
        <tr v-for="item in data11">
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
- Sinh hoạt phí: 2 bình nước

:point_right: [HÓA ĐƠN/BIÊN LAI](/bills/t11-2023)
