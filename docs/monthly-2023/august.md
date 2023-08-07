## Tháng 8/2023

<table>
    <thead>
        <th></th>
        <th>_giá_</th>
        <th>Sơn</th>
        <th>Cảnh</th>
        <th>Châu</th>
        <th>Nhân&</th>
    </thead>
    <tbody>
        <tr>
            <td><b>Cần phải trả</b></td>
            <td><b>_</b></td>
            <td style="background: green; color: white;"><b>_</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data8, 2, 4)}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data8, 3, 4)}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data8, 4, 4)}}</b></td>
        </tr>
        <tr>
            <td><b>Tổng</b></td>
            <td><b>_</b></td>
            <td><b>{{sum && sum(data8, 1, 4)}}</b></td>
            <td><b>{{sum && sum(data8, 2, 4)}}</b></td>
            <td><b>{{sum && sum(data8, 3, 4)}}</b></td>
            <td><b>{{sum && sum(data8, 4, 4)}}</b></td>
        </tr>
        <tr>
            <td><i>Đã chi</i></td>
            <td><i>{{sumOwner && sumOwner(data8)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data8, 1)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data8, 2)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data8, 3)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data8, 4)}}</i></td>
        </tr>
        <tr v-for="item in data8">
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

:point_right: [HÓA ĐƠN/BIÊN LAI](/bills/t8-2023)
