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
            position: relative;
            padding-left: 15px;
        }
        
        .items-table .price::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            max-width: 200px;
            height: 1px;
            background: linear-gradient(to right, transparent, #d32f2f);
            border-right: 6px solid #d32f2f;
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
        
        .summary-row .line {
            flex-grow: 1;
            margin: 0 15px;
            height: 1px;
            background: linear-gradient(to right, transparent, #d32f2f);
            border-right: 6px solid #d32f2f;
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
            <h1>Energy Solution Nord</h1>
            <p>Hauptstraße 24, 22885 </p>
            <p>Barsbüttel, Deutschland</p>
        </div>
    </div>

    <!-- Items List -->
    <table class="items-table">
        <tr>
            <td class="title">
               <span>Solarmodul:  </span> {{ $solarPanel->title }}
            </td>
            <td class="price">({{  $data['solar_panel_module']}} {{ "module"}} )    {{ $data['solar_panel_price'] }} €.</td>
        </tr>
        <tr>
            <td class="title">Solarwechselrichter: {{ $solarInverter->title }}</td>
            <td class="price">{{ $data['solar_inverter_price']}} €.</td>
        </tr>
        @if($data['solar_inverter_charger_price'] > 0)
        <tr>
            <td class="title">Ladegerät: </td>
            <td class="price">{{ $data['solar_inverter_charger_price']}} €.</td>
        </tr>
        @endif

        @if($data['solar_inverter_battery_price'] > 0)
        <tr>
            <td class="title">Solarbatterie: </td>
            <td class="price">{{ $data['solar_inverter_battery_price']}} €.</td>
        </tr>
        @endif
        <tr>
            <td class="title">Überwachungssystem</td>
            <td class="price">{{ $data['monitoring_system_price']}} €.</td>
        </tr>
        <tr>
            <td class="title">Wandladestation </td>
            <td class="price">{{ $data['wallbox']}} €.</td>
        </tr>
        <tr>
            <td class="title">Energieversorgungsunternehmen  </td>
            <td class="price">{{ $data['evu_fees']}} €.</td>
        </tr>

    </table>

    <!-- Summary Section -->
    <div class="summary">

        <table class="items-table">
        <tr>
            <td class="title">
               <span>Zwischensumme </span> 
            </td>
            <td class="price"> {{ $data['sub_total'] }} €.</td>
        </tr>
        <tr>
            <td class="title">Mehrwertsteuer (MwSt.) ({{ $data['vat'] }}%) </td>
            <td class="price">{{ $data['vat_amount'] }} €.</td>
        </tr>
        
        <tr>
            <td class="title">Liefergebühr</td>
            <td class="price">{{ $data['delivery_fees'] }} €.</td>
        </tr>
        
        <tr>
            <td class="title">Servicegebühr </td>
            <td class="price">{{ $data['service_charge'] }} €.</td>
        </tr>
        <tr>
            <td class="title">Rabatt ({{ $data['discount'] }}%) </td>
            <td class="price">{{ $data['discount_amount'] }} €.</td>
        </tr>
        </table>
    
    </div>

    <!-- Summary Section -->
    <div class="summary">

        <table class="items-table">
            <tr>
                <td class="title">
                <span style="font-weight: 700">Gesamtsumme </span> 
                </td>
                <td class="price " style="font-weight: 700">{{ $data['grand_total'] }} €.</td>
            </tr>
         </table>
    </div>

    <!-- Signature & Date -->
    <div class="footer">
        <div class="signature-block">
            <div class="signature-box"></div>
            <div class="signature-label">Datum</div>
        </div>
        <div class="signature-block">
            <div class="signature-box"></div>
            <div class="signature-label">Unterschrift</div>
        </div>
    </div>
</body>
</html>