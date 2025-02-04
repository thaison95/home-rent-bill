## Tháng 2/2025

<table>
    <thead>
        <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
        <th>_giá_</th>
        <th>Sơn+Khương</th>
        <th>Cảnh</th>
    </thead>
    <tbody>
        <tr>
            <td><b>Cần phải trả</b></td>
            <td><b>_</b></td>
            <td style="background: green; color: white;"><b>_</b></td>
            <td style="background: green; color: white;"><b>{{sumToPaid && sumToPaid(data2, 2, 2, data2Other)}}</b></td>
        </tr>
        <tr>
            <td><b>Tổng</b></td>
            <td><b>_</b></td>
            <td><b>{{sum && sum(data2, 1, 2)}}</b></td>
            <td><b>{{sum && sum(data2, 2, 2)}}</b></td>
        </tr>
        <tr>
            <td><i>Sinh hoạt phí</i></td>
            <td><i>_</i></td>
            <td><i>{{data2Other && data2Other[0]}}</i></td>
            <td><i>{{data2Other && data2Other[1]}}</i></td>
        </tr>
        <tr>
            <td><i>Đã chi</i></td>
            <td><i>{{sumOwner && sumOwner(data2)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data2, 1)}}</i></td>
            <td><i>{{sumOwner && sumOwner(data2, 2)}}</i></td>
        </tr>
        <tr v-for="item in data2">
            <td>{{item.name}}</td>
            <td>{{item.cost}}</td>
            <td>{{dive1item && dive1item(item, 1, 2)}}</td>
            <td>{{dive1item && dive1item(item, 2, 2)}}</td>
        </tr>
    </tbody>
</table>

**Note:**
- *: Người thanh toán
- Sinh hoạt phí: nước uống

