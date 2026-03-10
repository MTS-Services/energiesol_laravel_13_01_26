

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Neue Anfrage eingegangen</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #00f7e4;;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .content {
            padding: 30px;
            color: #333333;
            line-height: 1.6;
        }
        .button {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 24px;
            background-color: #00f7e4;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #888888;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Energie Solution Nord</h2>
        </div>
        <div class="content">
            <h3>Hallo,</h3>
            <p>Es wurde eine neue Kostenvoranschlagsanfrage eingegangen.</p>
            <p>Klicken Sie auf den Button unten, um die Anfrage einzusehen:</p>
            <a href="{{ $url }}" class="button">Anfrage ansehen</a>
        </div>
        <div class="footer">
            &copy; {{ date('Y') }} Energie Solution Nord. Alle Rechte vorbehalten.<br>
            <a href="https://www.energiesolutionnord.de" style="color:#888888; text-decoration:none;">www.energiesolutionnord.de</a>
        </div>
    </div>
</body>
</html>
