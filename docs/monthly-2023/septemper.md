## Tháng 9/2023

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
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data9, 2, 4, data9Other)}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data9, 3, 4, data9Other)}}</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data9, 4, 4, data9Other)}}</b></td>
        </tr>
        <tr>
            <td><b>Tổng</b></td>
            <td><b>_</b></td>
            <td><b>{{sum && sum(data9, 1, 4)}}</b></td>
            <td><b>{{sum && sum(data9, 2, 4)}}</b></td>
            <td><b>{{sum && sum(data9, 3, 4)}}</b></td>
            <td><b>{{sum && sum(data9, 4, 4)}}</b></td>
        </tr>
        <tr>
            <td><i>Sinh hoạt phí</i></td>
            <td><i>_</i></td>
            <td><i>{{data9Other && data9Other[0]}}</i></td>
            <td><i>{{data9Other && data9Other[1]}}</i></td>
            <td><i>{{data9Other && data9Other[2]}}</i></td>
            <td><i>{{data9Other && data9Other[3]}}</i></td>
        </tr>
        <tr>
            <td><i>Đã chi</i></td>
            <td><i>{{sumOwner && sumOwner(data9)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data9, 1)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data9, 2)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data9, 3)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data9, 4)}}</i></td>
        </tr>
        <tr v-for="item in data9">
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
- Tháng này đổi kì thanh toán điện sang đầu tháng (bình thường giữa tháng) nên tiền điện tăng.
- Châu hôm trước đã đóng sinh hoạt phí (tiền ăn) 900k, nên giờ còn lại 100k.

:point_right: [HÓA ĐƠN/BIÊN LAI](/bills/t9-2023)
