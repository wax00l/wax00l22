
// 3ИСИП-621 Шахмурзаев Шамиль
//  "Работа с DOM в JavaScript" 


// Задание №1
func1();
function func1(){
    let input = document.querySelector('#inp№1')
    let p = document.querySelector('#p№1')
    input.addEventListener('blur', ()=>{
        p.innerHTML = p.innerHTML + input.value
    })
}

// Задание №2
func2();
function func2(){
    let inputs = document.querySelectorAll('.inp№2')
    let button = document.querySelector('#button№2')
    let p = document.querySelector('#p№2')
    button.addEventListener('click', ()=>{
        let sum = 0;
        for(let inp of inputs) {
            sum+= +inp.value;
            p.innerHTML = sum;
        }
    })
}

// Задание №3
func3();
function func3(){
    let input = document.querySelector('#inp№3')
    let p = document.querySelector('#p№3')
    input.addEventListener('blur', function(){
        let numbers = this.value.split('')
        let sum = 0;
        for(let num of numbers) {
            sum+= +num
        }
        p.innerHTML = sum;
    })
};


// Задание №4
func4();
function func4(){
    let input = document.querySelector('#inp№4')
    let p = document.querySelector('#p№4')
    input.addEventListener('blur', function(){
        let numbers = this.value.split(',')
        let sum = 0;
        for(let num of numbers) {
            sum+= +num
        }
      p.innerHTML = sum/numbers.length;
    })
} 

// Задание №5
func5();
function func5(){
    let input = document.querySelector('#inp№5_FIO')
    let inputF = document.querySelector('#inp№5_F')
    let inputI = document.querySelector('#inp№5_I')
    let inputO = document.querySelector('#inp№5_O')
    input.addEventListener('blur', function(){
        let FIO = this.value.split(' ');
        inputF.value = FIO[0];
        inputI.value = FIO[1];
        inputO.value = FIO[2];
    })

}

// Задание №6
func6();
function func6(){
    let input = document.querySelector('#inp№6_FIO')
    function bigletter(FIO){
        let FIOold = FIO.split(' ');
        let FIOnew = [];
        for (let i = 0; i <=2; i++){
            let FIObig = FIOold[i][0].toUpperCase() + FIOold[i].slice(1);  
            FIOnew.push(FIObig + ' ');
        }
        return FIOnew.join('');
    }
    input.addEventListener('blur', function(){
        this.value = bigletter(this.value)
    })

}

// Задание №7
func7();
function func7(){
    let input = document.querySelector('#inp№7')
    let span = document.querySelector('#span№7')
    input.addEventListener('blur', function(){
        let amount = this.value.split(' ');
        span.innerHTML = amount.length;
    })
}

// Задание №8
func8();
function func8(){
    let input = document.querySelector('#inp№8')
    input.addEventListener('blur', function(){
        let date = this.value.split('.');
        this.value = date.reverse().join('-')
    })
}



// Задание №9
func9();
function func9(){
    let input = document.querySelector('#inp№9')
    let button = document.querySelector('#button№9')
    let p = document.querySelector('#p№9')
    button.addEventListener('click', function(){
        let word = input.value.split('') ;
        console.log()
        p.innerHTML = word.join() == word.reverse().join()
    })
}

// Задание №10
func10();
function func10(){
    let input = document.querySelector('#inp№10')
    let p = document.querySelector('#p№10')
    input.addEventListener('blur', function(){
        p.innerHTML = this.value.split('').map(Number).includes(3)
    })
}



// Задание №11
func11();
function func11() {
    let ps = document.querySelectorAll('.p№11')
    let button = document.querySelector('#button№11')
    button.addEventListener('click', function(){
        for(let i = 0 ; i< ps.length; i++){
            let p = ps[i];
            p.innerHTML += ' '+ i;
            console.log(p.innerHTML)
        }
    })
}



// Задание №12
func12();
function func12(){
    let a = document.querySelectorAll('.a№12')
    for ( let i = 0 ; i< a.length; i++){
        a[i].innerHTML = a[i].innerHTML + '('+ a[i].href + ')';
    }

}


// Задание №13
func13();
function func13(){
    let a = document.querySelectorAll('.a№13')
    for ( let i = 0; i < a.length; i++) {
        if (a[i].href.indexOf('https://') == false) {
            let rarr = '&rarr;'
            a[i].innerHTML += rarr;
        }
    }
}


// Задание №14
func14();
function func14(){
    let ps = document.querySelectorAll('.p№14')
    for (let p of ps){
        p.addEventListener('click', function(){
            this.innerHTML = this.innerHTML**2;
        });
    }
}


// Задание №15
func15();
function func15(){
    let inp = document.querySelector('#inp№15');
    let p = document.querySelector('#p№15');
    inp.addEventListener('blur', function(){
        let arr = this.value.split('.').reverse();
        let [year,month,date] = arr;
        let data = new Date(year,month,date)
        let days = ['вс','пн','вт','ср','чт','пт','сб']
        p.innerHTML = p.innerHTML + ' ' +days[data.getDay()]
    })
}



// Задание №16
func16();
function func16(){
    let inp = document.querySelector('#inp№16')
    let buttonplus1 = document.querySelector('#button№16plus1')
    let buttonmin1 = document.querySelector('#button№16min1')
    buttonplus1.addEventListener('click', ()=>{
        if( inp.value>=0 ) {
            inp.value++;
        }
    })
    buttonmin1.addEventListener('click', ()=>{
        if( inp.value>0 && inp.value !=0) {
            inp.value--;
        }
    })

}


// Задание №17
func17();
function func17(){
    let input = document.querySelector('#inp№17');
    let ps = document.querySelectorAll('.p№17')
    for(let p of ps){
        let sum = 0;
        p.addEventListener('click', function(){
            sum++;
            input.value = sum;
        })
    }

}


// Задание №18
func18();
function func18(){
    let divs = document.querySelectorAll('.div№18')
    for(let div of divs){
        div.innerHTML = div.innerHTML.slice(0,10)+'...'
    }
}


// Задание №19
func19();
function func19(){
    let input = document.querySelector('#inp№19')
    let button = document.querySelector('#button№19')
    button.addEventListener('click', ()=>{
        let str ='';
        let letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуйфхцчшщъыьэюя0123456789';
        for (let i = 0 ; i<=8;i++){
            str+= letters.charAt(Math.floor(Math.random() * letters.length))
        }
        input.value = str;
    })
}


// Задание №20
func20();
function func20(){
    let input = document.querySelector('#inp№20');
    let button = document.querySelector('#button№20')
    button.addEventListener('click', ()=>{
        let str =''
        let word = input.value;
        for ( let i =0; i<=word.length;i++){
            str += word.charAt(Math.floor(Math.random() * word.length))
        }
        input.value = str;
    })
};



// Задание №21
func21();
function func21(){
    let input = document.querySelector('#inp№21');
    let button = document.querySelector('#button№21');
    let span = document.querySelector('#span№21');
    button.addEventListener('click', function(){
        let c = (input.value-32)/1.8;
        console.log(input)
        span.innerHTML = c.toFixed(1);
    })
};


// Задание №22
func22();
function func22(){
    let input = document.querySelector('#inp№22');
    let button = document.querySelector('#button№22');
    let p = document.querySelector('#p№22');
    function makefact(num){
        let fact = 1;
        for(let i =1; i<=num; i++){
            fact *=i;
        }
        return fact;
    }
    button.addEventListener('click', function(){
        p.innerHTML = makefact(input.value)
    })
}


// Задание №23
func23();
function func23(){
    let a = document.querySelector('#inp№23_a');
    let b = document.querySelector('#inp№23_b');
    let c = document.querySelector('#inp№23_c');
    let button = document.querySelector('#button№23');
    let p = document.querySelector('#p№23');
    function quadratic(a,b,c){
        let d = b**2-4*a*c;
        if (d<0){
            return 'нет решения'
        }
        if (d>0){
            let x1 = (-b+Math.sqrt(d))/2*a;
            let x2 = (-b-Math.sqrt(d))/2*a;
            return 'первый корень:' + ' ' + x1.toFixed(1) +
            '<br>' + 'второй корень'+ ' ' + x2.toFixed(1);
        }
        if ( d==0){
            let x = (-b+Math.sqrt(d))/2*a;
            return 'корень равен' + ' ' + x.toFixed(1);
        }
    }
    button.addEventListener('click', ()=>{
        p.innerHTML = quadratic(a.value,b.value,c.value)
    })
}