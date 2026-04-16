<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Estimate</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            font-size: 13px;
            color: #333;
            padding: 20px;
            line-height: 1.4;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 25px;
            padding-bottom: 12px;
            border-bottom: 1px solid #333;
        }

        .header-left {
            width: 150px;
            height: 80px;
            border: 2px solid #d32f2f;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f5f5f5;
            font-size: 12px;
            color: #999;
            flex-shrink: 0;
        }

        .header-right {
            text-align: right;
            flex-grow: 1;
        }

        .header-right h1 {
            font-size: 20px;
            margin-bottom: 2px;
            color: #000;
            font-weight: bold;
        }

        .header-right p {
            font-size: 11px;
            color: #666;
        }

        .items-table {
            width: 100%;
            margin-bottom: 15px;
        }

        .items-table tr {
            border-bottom: 1px solid #eee;
        }

        .items-table td {
            padding: 6px 0;
            vertical-align: middle;
        }

        .items-table .title {
            text-align: left;
            width: auto;
        }

        .items-table .price {
            text-align: right;
            width: auto;
            font-weight: 500;
            padding-left: 15px;
        }

        .summary {
            margin-top: 15px;
            padding-top: 10px;
            border-top: 1px solid #333;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 4px 0;
        }

        .summary-row .label {
            text-align: left;
        }

        .summary-row .value {
            text-align: right;
            font-weight: 500;
            min-width: 100px;
        }

        .summary-row.total-row {
            margin-top: 3px;
            font-size: 15px;
            font-weight: bold;
            border-top: 2px solid #d32f2f;
            padding-top: 5px;
        }

        .footer {
            margin-top: 40px;
            display: flex;
            justify-content: flex-end;
            gap: 50px;
        }

        .signature-block {
            width: 140px;
        }

        .signature-box {
            height: 50px;
            border-bottom: 2px dotted #666;
            margin-bottom: 3px;
        }

        .signature-label {
            font-size: 11px;
            text-align: center;
            color: #666;
        }
    </style>
</head>

<body>
    <!-- Header -->
    <div class="header">
        <div class="header-right">
            <h1>Kostenvoranschlag Anfrage angefragt</h1>
            <p>Hauptstraße 24, 22885 </p>
            <p>Barsbüttel, Deutschland</p>
        </div>
    </div>

    <!-- Items List -->
    <h2>Wirtschaftlichkeitsanalyse mit Wandladestation</h2>
    <table class="items-table">
        <tr>
            <td class="title">
                <span>Gesamtinvestition: </span>
            </td>
            <td class="price">{{ number_format($data['grand_total'], 2) }} €.</td>
        </tr>
        <tr>
            <td class="title">Erzeugte Energie ( {{ $data['module'] }} module )</td>
            <td class="price">
                {{ number_format(($data['module'] * $data['generated_electricity_per_module']) / 1000, 2) }} Kwh </td>
        </tr>

        <tr>
            <td class="title">Wandladestation</td>
            <td class="price">{{ $data['wallbox_electricity_generate'] }} Kwh</td>
        </tr>


        <tr>
            <td class="title">Stückpreis</td>
            <td class="price">{{ $data['unit_price'] }} €.</td>
        </tr>
        <tr>
            <td class="title">Rendite pro Jahr </td>
            <td class="price">
                {{ number_format((($data['module'] * $data['generated_electricity_per_module']) / 1000 + $data['wallbox_electricity_generate']) * $data['unit_price'], 2) }}
                €.</td>
        </tr>
        <tr>
            <td class="title">Amortisation </td>
            <td class="price">
                {{ number_format($data['grand_total'] / ((($data['module'] * $data['generated_electricity_per_module']) / 1000 + $data['wallbox_electricity_generate']) * $data['unit_price']), 2) }}
                Years</td>
        </tr>

        <tr>
            <td class="title">Amortisation (20 Jahre) </td>
            <td class="price">
                {{ number_format(20 * ((($data['module'] * $data['generated_electricity_per_module']) / 1000 + $data['wallbox_electricity_generate']) * $data['unit_price']), 2) }}
                €.</td>
        </tr>

    </table>


    <!-- Items List -->
    <h2>Wirtschaftlichkeitsanalyse ohne Wandladestation</h2>
    <table class="items-table">
        <tr>
            <td class="title">
                <span>Gesamtinvestition: </span>
            </td>
            <td class="price">{{ number_format($data['grand_total'] - $data['wallbox'], 2) }} €.</td>
        </tr>
        <tr>
            <td class="title">Erzeugte Energie ( {{ $data['module'] }} module )</td>
            <td class="price">
                {{ number_format(($data['module'] * $data['generated_electricity_per_module']) / 1000, 2) }} Kwh </td>
        </tr>



        <tr>
            <td class="title">Stückpreis</td>
            <td class="price">{{ $data['unit_price'] }} €. Kwh</td>
        </tr>
        <tr>
            <td class="title">Rendite pro Jahr </td>
            <td class="price">
                {{ number_format((($data['module'] * $data['generated_electricity_per_module']) / 1000) * $data['unit_price'], 2) }}
                €.</td>
        </tr>
        <tr>
            <td class="title">Amortisation </td>
            <td class="price">
                {{ number_format(($data['grand_total'] - $data['wallbox']) / ((($data['module'] * $data['generated_electricity_per_module']) / 1000) * $data['unit_price']), 2) }}
                Years</td>
        </tr>

        <tr>
            <td class="title">Amortisation (20 Jahre) </td>
            <td class="price">
                {{ number_format(20 * ((($data['module'] * $data['generated_electricity_per_module']) / 1000) * $data['unit_price']), 2) }}
                €.</td>
        </tr>

    </table>


</body>

</html>
