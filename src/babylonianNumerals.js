let images = ['graphics/Babylonian/0.svg',
   			  'graphics/Babylonian/1.png', 'graphics/Babylonian/2.png', 
			  'graphics/Babylonian/3.png', 'graphics/Babylonian/4.png',
			  'graphics/Babylonian/5.png', 'graphics/Babylonian/6.png', 
			  'graphics/Babylonian/7.png', 'graphics/Babylonian/8.png',
			  'graphics/Babylonian/9.png', 'graphics/Babylonian/10.png']
images[20] = 'graphics/Babylonian/20.png';
images[30] = 'graphics/Babylonian/30.png';
images[40] = 'graphics/Babylonian/40.png';
images[50] = 'graphics/Babylonian/50.png';
function input(decimal){
	let temp = decimal + '<sub>10</sub>';
    document.getElementById("decimal").innerHTML = temp; 
    document.getElementById("toSexagesimal").innerHTML = "Sexagesimal:";
    document.getElementById("inpDecimal").innerHTML = "Decimal:"
	stepDecimal(decimal);
	toSexagesimal(decimal);
}

function stepDecimal(num){
	let str = '= ';
	num = num.toString();
	l = num.length-1;
	for (let i = 0; i < (l+1); i++) {
		str += num[i];
		str += ' * 10 <sup>'+ (l-i)+ '</sup>';
		if (i != l){
			str += ' + ' 
		}
	}
 	document.getElementById("stepDecimal").innerHTML = str;
}

function toSexagesimal(num){
	document.getElementById("drawSexagesimal").innerHTML = "";
	let highest;
	let img;
	let sexa = [];
	let str = '= ';
	let s = '';
    for (let i = 10; i >= 0; i--) {
    	x =  Math.pow(60, i);
    	if(x <= num){
    		highest = i;
    		break;
    	} 
    }

    for (let i = highest; i >= 0; i--) {
    	sexa[i] = Math.floor(num/Math.pow(60,i));
    	num = num % Math.pow(60,i);
    	s += sexa[i] + ' ';
    	str += sexa[i];
    	str += ' * 60 <sup>'+ (i)+ '</sup>';
    	console.log(sexa[i]);
    	if ((sexa[i] < 10) || (sexa[i] % 10 == 0)){
    		img = document.createElement('img');
    		img.src = images[sexa[i]];
    		document.getElementById('drawSexagesimal').appendChild(img);

    		img = document.createElement('img');
    		img.src = images[0];
    		document.getElementById('drawSexagesimal').appendChild(img);

    	} else {
    		temp = sexa[i].toString();
    		img = document.createElement('img');
    		img.src = images[temp[0]*10];
    		document.getElementById('drawSexagesimal').appendChild(img);

    		img = document.createElement('img');
    		img.src = images[temp[1]];
    		img.style.margin = "0px 0px 0px -4px";
    		document.getElementById('drawSexagesimal').appendChild(img);

    		img = document.createElement('img');
    		img.src = images[0];
    		document.getElementById('drawSexagesimal').appendChild(img);
    	}
    	if (i != 0){
			str += ' + ' 
		}

    }
    s += '<sub>60</sub>';
    document.getElementById("sexagesimal").innerHTML = s; 
    document.getElementById("stepSexagesimal").innerHTML = str;
}
