## Tháng 12/2023

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
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data12, 2, 4, data12Other)}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data12, 3, 4, data12Other)}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data12, 4, 4, data12Other)}}</b></td>
        </tr>
        <tr>
            <td><b>Tổng</b></td>
            <td><b>_</b></td>
            <td><b>{{sum && sum(data12, 1, 4)}}</b></td>
            <td><b>{{sum && sum(data12, 2, 4)}}</b></td>
            <td><b>{{sum && sum(data12, 3, 4)}}</b></td>
            <td><b>{{sum && sum(data12, 4, 4)}}</b></td>
        </tr>
        <tr>
            <td><i>Sinh hoạt phí</i></td>
            <td><i>_</i></td>
            <td><i>{{data12Other && data12Other[0]}}</i></td>
            <td><i>{{data12Other && data12Other[1]}}</i></td>
            <td><i>{{data12Other && data12Other[2]}}</i></td>
            <td><i>{{data12Other && data12Other[3]}}</i></td>
        </tr>
        <tr>
            <td><i>Đã chi</i></td>
            <td><i>{{sumOwner && sumOwner(data12)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data12, 1)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data12, 2)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data12, 3)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data12, 4)}}</i></td>
        </tr>
        <tr v-for="item in data12">
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

:point_right: [HÓA ĐƠN/BIÊN LAI](/bills/t12-2023)
