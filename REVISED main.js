var all_num_buttons_clicked = []
var all_symbols_clicked = []
var temp_value = 0
var answer = 0

function display(number){
    if(all_num_buttons_clicked.length == 0){
        output.innerHTML=0
    }else{
        for(i = 0; i<all_num_buttons_clicked.length;i++){
        output.innerHTML = all_num_buttons_clicked.join("")
        }
    }
}

function equalsDisplay(){
    output.innerHTML = answer
}

function reset(){
    all_num_buttons_clicked = []
    all_symbols_clicked = []
    temp_value = 0
    answer = 0
    display()   
}

function clearDisplay(){
    all_num_buttons_clicked = []
    display()    
}

function whichbutton(button){
    var clickedbutton = Number(button.getAttribute('value'))
    all_num_buttons_clicked.push(clickedbutton)
    display(clickedbutton)
}

function whichsymbol(symbol){
    var clickedsymbol = symbol.getAttribute('value')

    if(clickedsymbol == "%"){
       all_symbols_clicked.push("%")
       percent()
    }

    if(clickedsymbol == "÷"){
        all_symbols_clicked.push("÷")
        divide()
    }

    if(clickedsymbol == "*"){
        all_symbols_clicked.push("*")
        multiply()
    }

    if(clickedsymbol == "-"){
        all_symbols_clicked.push("-")
        sub()
    }

    if(clickedsymbol == "+"){
        all_symbols_clicked.push("+")
        add()
    }
    if(clickedsymbol == "="){
        doMath(clickedsymbol)
    }

  
}

function add(){
    if(temp_value==0){
        var current_number_display = Number(all_num_buttons_clicked.join(""))
        temp_value = current_number_display
        
    }else{
        temp_value+= Number(all_num_buttons_clicked.join(""))
        answer = temp_value
        console.log(answer)
        all_num_buttons_clicked = []
    }
    clearDisplay()
}

function sub(){
    if(temp_value==0){
        var current_number_display = Number(all_num_buttons_clicked.join(""))
        temp_value = current_number_display
        
    }else{
        temp_value-= Number(all_num_buttons_clicked.join(""))
        answer = temp_value
        console.log(answer)
        all_num_buttons_clicked = []
    }
    clearDisplay()
}

function multiply(){
    if(temp_value==0){
        var current_number_display = Number(all_num_buttons_clicked.join(""))
        temp_value = current_number_display
    }else{
        temp_value*= Number(all_num_buttons_clicked.join(""))
        answer = temp_value
        console.log(answer)
        all_num_buttons_clicked = []
    }
    clearDisplay()
}

function divide(){
    if(temp_value==0){
        var current_number_display = Number(all_num_buttons_clicked.join(""))
        temp_value = current_number_display
    }else{
        temp_value /= Number(all_num_buttons_clicked.join("")) 
        answer = temp_value
        console.log(answer)
        all_num_buttons_clicked = []
    }
    clearDisplay()
}


function percent(){
    if(temp_value==0){
        var current_number_display = Number(all_num_buttons_clicked.join(""))
        temp_value = current_number_display
    }else{
        temp_value /= Number(all_num_buttons_clicked.join("")) 
        answer %= temp_value
        console.log(answer)
        all_num_buttons_clicked = []
    }
    clearDisplay()
}


function doMath(symbol){
   
    if(all_symbols_clicked.at(-1) == "+"){
        add()
        equalsDisplay()
    }

    if(all_symbols_clicked.at(-1) == "-"){
        sub()
        equalsDisplay()
    }

    if(all_symbols_clicked.at(-1) == "*"){
        multiply()
        equalsDisplay()
    }

    if(all_symbols_clicked.at(-1) == "÷"){
        divide()
        equalsDisplay()
    }

    if(all_symbols_clicked.at(-1) == "%"){
        percent()
        equalsDisplay()
    }
}

