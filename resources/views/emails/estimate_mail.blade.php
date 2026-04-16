<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Kostenvoranschlag prüfen</title>
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
            background-color: #00f7e4;
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
            background-color: #00f7e4; /* slightly darker teal so white text is readable */
            color: #ffffff;            /* FIX: was missing semicolon after background-color above */
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
            <h2>Kostenvoranschlag Anfrage angefragt.</h2>
        </div>
        <div class="content">
            <h3>Hallo,</h3>
            <p>Vielen Dank für Ihr Interesse!</p>
            <p>Es wurde eine neue Anfrage für ein kostenloses Angebot erstellt.</p>
            <p>Um Ihre Anfrage abzuschließen und Ihr Angebot einzusehen, bitten wir Sie, Ihre E-Mail-Adresse zu bestätigen. Klicken Sie dazu einfach auf den folgenden Button:</p>
            <a href="{{ $url }}" class="button">Zur Anfrage</a>
        </div>
        <div class="footer">
            Herzliche Grüße<br>
            <p>Ihr Team von Energie Solution Nord</p>
        </div>
    </div>
</body>
</html>