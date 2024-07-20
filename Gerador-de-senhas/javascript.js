var range =  document.getElementById('range')
var value = document.getElementById('numero')
var resultado = document.getElementById('resultado')
range.addEventListener('input', function(){

    value.textContent = range.value
})


//Capturando valor do ranger
var caracteres = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

var caracteres_min = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

var caracteres_especiais = ["!", "@", "#", "$", "%", "^", "&", "*"]

var numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
]

function gerar(){
    if (range.value == 5){
        
        
    }
}