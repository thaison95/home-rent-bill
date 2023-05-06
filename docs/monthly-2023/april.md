## Tháng 4/2023

<table>
    <thead>
        <th></th>
        <th>_giá_</th>
        <th>Sơn</th>
        <th>Cảnh</th>
        <th>Châu</th>
    </thead>
    <tbody>
        <tr>
            <td><b>Cần phải trả</b></td>
            <td><b>_</b></td>
            <td style="background: green; color: white;"><b>_</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data4, 2)}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data4, 3)}}</b></td>
        </tr>
        <tr>
            <td><b>Tổng</b></td>
            <td><b>_</b></td>
            <td><b>{{sum && sum(data4, 1)}}</b></td>
            <td><b>{{sum && sum(data4, 2)}}</b></td>
            <td><b>{{sum && sum(data4, 3)}}</b></td>
        </tr>
        <tr>
            <td><i>Đã chi</i></td>
            <td><i>{{sumOwner && sumOwner(data4)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data4, 1)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data4, 2)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data4, 3)}}</i></td>
        </tr>
        <tr v-for="item in data4">
            <td>{{item.name}}</td>
            <td>{{item.cost}}</td>
            <td>{{dive1item && dive1item(item, 1)}}</td>
            <td>{{dive1item && dive1item(item, 2)}}</td>
            <td>{{dive1item && dive1item(item, 3)}}</td>
        </tr>
    </tbody>
</table>

**Note:**
- *: Người thanh toán

:point_right: [HÓA ĐƠN/BIÊN LAI](/bills/t4-2023)
