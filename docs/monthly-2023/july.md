## Tháng 7/2023

<table>
    <thead>
        <th>&emsp;&emsp;&emsp;&emsp;&emsp;</th>
        <th>_giá_</th>
        <th>Sơn</th>
        <th>Cảnh&emsp;&emsp;&emsp;&emsp;&emsp;</th>
        <th>Châu</th>
        <th>Nhân&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
    </thead>
    <tbody>
        <tr>
            <td><b>Cần phải trả</b></td>
            <td><b>_</b></td>
            <td style="background: green; color: white;"><b>_</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data7, 2, 4)}}-64={{sumToPaid && sumToPaid(data7, 2, 4)-64}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data7, 3, 4)}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data7, 4, 4)}}-192={{sumToPaid && sumToPaid(data7, 4, 4)-192}}</b></td>
        </tr>
        <tr>
            <td><b>Tổng</b></td>
            <td><b>_</b></td>
            <td><b>{{sum && sum(data7, 1, 4)}}</b></td>
            <td><b>{{sum && sum(data7, 2, 4)}}</b></td>
            <td><b>{{sum && sum(data7, 3, 4)}}</b></td>
            <td><b>{{sum && sum(data7, 4, 4)}}</b></td>
        </tr>
        <tr>
            <td><i>Đã chi</i></td>
            <td><i>{{sumOwner && sumOwner(data7)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data7, 1)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data7, 2)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data7, 3)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data7, 4)}}</i></td>
        </tr>
        <tr v-for="item in data7">
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

:point_right: [HÓA ĐƠN/BIÊN LAI](/bills/t7-2023)
