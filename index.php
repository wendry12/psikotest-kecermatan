<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Kecermatan</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="start-screen" id="start-screen">
        <button class="start-button" onclick="startTest()">Mulai Test</button>
    </div>

    <div class="container" id="test-container" style="display: none;">
        <div class="timer">Durasi: <span id="countdown">01:00</span></div>

        <table class="table">
            <tr>
                <th colspan="5" id="column-title">Kolom 1</th>
            </tr>
            <tr id="symbol-row"></tr>
            <tr>
                <td class="option-label">A</td>
                <td class="option-label">B</td>
                <td class="option-label">C</td>
                <td class="option-label">D</td>
                <td class="option-label">E</td>
            </tr>
        </table>

        <div class="content-wrapper">
            <div>
                <table class="table">
                    <tr>
                        <th colspan="5">Pertanyaan</th>
                    </tr>
                    <tr id="question-row"></tr>
                </table>
                <table class="answer-table">
                    <tr>
                        <td onclick="selectOption(this, 'A')">A</td>
                        <td onclick="selectOption(this, 'B')">B</td>
                        <td onclick="selectOption(this, 'C')">C</td>
                        <td onclick="selectOption(this, 'D')">D</td>
                        <td onclick="selectOption(this, 'E')">E</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
