
        const arr = [0, 0];

        function appendToDisplay(value) {
            displayValue += value;
            document.getElementById('display').value = displayValue;
        }

        function clearDisplay() {
            displayValue = '';
            document.getElementById('display').value = displayValue;
        }
        function operators(value) {
            displayValue += '+';
            document.getElementById('display').value = displayValue;
        }
        function result() {
            const result = result_1(displayValue)
            document.getElementById('display').value = result;
            result = toString(displayValue);
        }

        let displayValue = '';







        function result_1(displayValue) {


            count = 0;

            str = "";

            for (i = 0; i < displayValue.length; i++) {

                if (displayValue[i] == '!') {
                    arr[0] = Number(str);
                    return result_2('!');
                }
                if (displayValue[i] == '+' || displayValue[i] == '-' || displayValue[i] == '*' || displayValue[i] == '/' || i == displayValue.length - 1) {

                    if (i == displayValue.length - 1)
                        str += displayValue[i];

                    if (count < 1) {
                        arr[0] = Number(str);
                        sign = displayValue[i];
                    }

                    else {
                        arr[1] = Number(str);

                        arr[0] = result_2(sign);
                        sign = displayValue[i];
                    }
                    str = "";
                    count++;
                }

                else {
                    str += displayValue[i];
                }
            }
            return arr[0];
        }

        function result_2(cases) {

            switch (cases) {
                case '+':
                    {
                        return arr[0] + arr[1];
                    }
                case '*':
                    {
                        return arr[0] * arr[1];
                    }
                case '-':
                    {
                        return arr[0] - arr[1];
                    }
                case '/':
                    {
                        return arr[0] / arr[1]
                    }
                case '!':
                    {
                        let fact = 1;
                        while (arr[0] > 1) {

                            fact *= arr[0];
                            arr[0] = arr[0] - 1;
                        }

                        return fact
                    }

            }
        }


        // var result = result_1(displayValue);
