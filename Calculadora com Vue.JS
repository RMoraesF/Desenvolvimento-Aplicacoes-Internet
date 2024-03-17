<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Com Vue.js</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        #calculadora {
            width: 250px;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            margin: 20px auto;
            background-color: #f9f9f9;
        }
        #display {
            width: 100%;
            height: 40px;
            font-size: 18px;
            text-align: right;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
            padding: 5px;
            box-sizing: border-box;
        }
        button {
            width: 50px;
            height: 50px;
            font-size: 18px;
            margin: 5px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button.operator {
            background-color: #f7921e;
            color: white;
        }
        button.operator:hover {
            background-color: #e6801d;
        }
        button.clear {
            background-color: #e74c3c;
            color: white;
        }
        button.clear:hover {
            background-color: #d14131;
        }
        button.equal {
            background-color: #4caf50;
            color: white;
        }
        button.equal:hover {
            background-color: #419f4a;
        }
        button.number {
            background-color: #e0e0e0;
        }
        button.number:hover {
            background-color: #cecece;
        }
    </style>
</head>
<body>
    <div id="app">
        <div id="calculadora">
            <input type="text" id="display" v-model="display" disabled>
            <button class="clear" @click="clearDisplay">C</button>
            <button class="operator" v-for="op in operators" :key="op" @click="addToDisplay(op)">{{ op }}</button>
            <button class="number" v-for="num in numbers" :key="num" @click="addToDisplay(num)">{{ num }}</button>
            <button class="equal" @click="calculate">=</button>
        </div>
    </div>

    <script>
        new Vue({
            el: '#app',
            data: {
                display: '',
                numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'],
                operators: ['+', '-', '*', '/']
            },
            methods: {
                addToDisplay(value) {
                    this.display += value;
                },
                clearDisplay() {
                    this.display = '';
                },
                calculate() {
                    try {
                        this.display = eval(this.display);
                    } catch (error) {
                        this.display = 'Erro';
                    }
                }
            }
        });
    </script>
</body>
</html>
