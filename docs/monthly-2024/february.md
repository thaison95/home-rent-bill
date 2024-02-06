## Tháng 2/2024

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
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data2, 2, 4, data2Other)}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data2, 3, 4, data2Other)}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data2, 4, 4, data2Other)}}</b></td>
        </tr>
        <tr>
            <td><b>Tổng</b></td>
            <td><b>_</b></td>
            <td><b>{{sum && sum(data2, 1, 4)}}</b></td>
            <td><b>{{sum && sum(data2, 2, 4)}}</b></td>
            <td><b>{{sum && sum(data2, 3, 4)}}</b></td>
            <td><b>{{sum && sum(data2, 4, 4)}}</b></td>
        </tr>
        <tr>
            <td><i>Sinh hoạt phí</i></td>
            <td><i>_</i></td>
            <td><i>{{data2Other && data2Other[0]}}</i></td>
            <td><i>{{data2Other && data2Other[1]}}</i></td>
            <td><i>{{data2Other && data2Other[2]}}</i></td>
            <td><i>{{data2Other && data2Other[3]}}</i></td>
        </tr>
        <tr>
            <td><i>Đã chi</i></td>
            <td><i>{{sumOwner && sumOwner(data2)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data2, 1)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data2, 2)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data2, 3)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data2, 4)}}</i></td>
        </tr>
        <tr v-for="item in data2">
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
- *: Người thanh toán.
- (1): Bữa giờ tôi có treo máy 24/24 chạy server nên tôi chịu thêm 1 ít tiền điện nhé.

:point_right: [HÓA ĐƠN/BIÊN LAI](/bills-2024/feb/t2-2024.md)
