function operation() {

    var select = document.getElementById('operators');
    option = select.options[select.selectedIndex].value;

    if (option == 'add' || option == 'sub') {

        document.getElementById('input-01').placeholder = 'Insira o primeiro valor';

        document.getElementById('input-02').placeholder = 'Insira o segundo valor';
        document.getElementById('input-01').disabled = false;
        document.getElementById('input-02').disabled = false;

    } else if (option == 'mult') {

        document.getElementById('input-01').placeholder = 'Insira o multiplicado';

        document.getElementById('input-02').placeholder = 'Insira o multiplicando';
        document.getElementById('input-01').disabled = false;
        document.getElementById('input-02').disabled = false;

    } else if (option == 'divi' || option == 'dires') {

        document.getElementById('input-01').placeholder = 'Insira o dividendo';

        document.getElementById('input-02').placeholder = 'Insira o divisor';
        document.getElementById('input-01').disabled = false;
        document.getElementById('input-02').disabled = false;

    } else {

        document.getElementById('input-01').placeholder = 'Selecione um operador';

        document.getElementById('input-02').placeholder = 'Selecione um operador';
        document.getElementById('input-01').disabled = true;
        document.getElementById('input-02').disabled = true;

    }

    value = option
    return value

}

function calc() {

    var input1 = document.getElementById("input-01").value;
    var input2 = document.getElementById("input-02").value;

    var i1convert = parseInt(input1)
    var i2convert = parseInt(input2)

    if (value == 'add') {

        acount = i1convert + i2convert
        document.getElementById("input-03").value = input1 + "  +  " + input2;
        document.getElementById("input-04").value = acount;

    } else if (value == 'sub') {

        acount = i1convert - i2convert
        document.getElementById("input-03").value = input1 + "  -  " + input2;
        document.getElementById("input-04").value = acount;

    } else if (value == 'mult') {

        acount = i1convert * i2convert
        document.getElementById("input-03").value = input1 + "  x  " + input2;
        document.getElementById("input-04").value = acount;

    } else if (value == 'divi') {

        acount = i1convert / i2convert
        document.getElementById("input-03").value = input1 + "  /  " + input2;
        document.getElementById("input-04").value = acount;

    } else if (value == 'dires') {
        
        acount = i1convert % i2convert
        document.getElementById("input-03").value = input1 + "  /  " + input2;
        document.getElementById("input-04").value = acount;

    } else {

        document.getElementById("input-03").value = "Selecione um operador";
        document.getElementById("input-04").value = "Selecione um operador";

    }

}