$(document).ready(function(){
    $('#giperS').attr("onsubmit","giperS(this)");
    $('#parabS').attr("onsubmit","parabS(this)");
    $('#ellipseS').attr("onsubmit","ellipseS(this)");
    $('#cicrleS').attr("onsubmit","circlS(this)");
    $('#lineS').attr("onsubmit","lineS(this)");
    $('#gS').attr("onsubmit","gS(this)");
    $('#paraS').attr("onsubmit","paraS(this)");
    $('#linoS').attr("onsubmit","linoS(this)");
});
function giperS(form){
    var x= parseFloat(form.x.value),
        y= parseFloat(form.y.value),
        a= parseFloat(form.a.value),
        b= parseFloat(form.b.value),
        clr= form.clr.value;
    if(isNaN(a)||isNaN(b)||isNaN(x)||isNaN(y)){
        alert('введите корректные коэффициенты');
        return false;
    }else{
    if((b==0)||(a==0)){
        alert('a и b не должны быть равны 0');
        return false;
    }}
    BGiper(x, y ,Math.abs(a),Math.abs(b),clr);
};
function parabS(form){
    var x= parseFloat(form.x.value),
        y= parseFloat(form.y.value),
        p= parseFloat(form.p.value),
        clr= form.clr.value;
    if(isNaN(p)||isNaN(x)||isNaN(y)){
        alert('введите корректные коэффициенты');
        return false;
    }else{
    if((p==0)){
        alert('p не должен быть равен 0');
        return false;
    }}
    BParab(x, y ,p,clr);
};
function ellipseS(form){
    var x= parseFloat(form.x.value),
        y= parseFloat(form.y.value),
        a= parseFloat(form.a.value),
        b= parseFloat(form.b.value),
        clr= form.clr.value;
    if(isNaN(a)||isNaN(b)||isNaN(x)||isNaN(y)){
        alert('введите корректные коэффициенты');
        return false;
    }else{
    if((b==0)||(a==0)){
        alert('a и b не должны быть равны 0');
        return false;
    }}
    BEllipse(x, y ,Math.abs(a),Math.abs(b),clr);
};
function circlS(form){
    var x= parseFloat(form.x.value),
        y= parseFloat(form.y.value),
        r= parseFloat(form.r.value),
        clr= form.clr.value;
    if(isNaN(r)||isNaN(x)||isNaN(y)){
        alert('введите корректные коэффициенты');
        return false;
    }else{
    if((r==0)){
        alert('r не должен быть равен 0');
        return false;
    }}
    BEllipse(x, y ,Math.abs(r),Math.abs(r),clr);
};

function lineS(form){
    var a= parseFloat(form.a.value),
        b= parseFloat(form.b.value),
        c= parseFloat(form.c.value),
        clr= form.clr.value;
    if(isNaN(a)||isNaN(b)||isNaN(c)){
        alert('введите корректные коэффициенты');
        return false;
    }else if((a==0)&&(b==0)){
        alert('из коэффициентов a и b хотя бы один должен быть не равен 0');
        return false;
    }
    BLine(a,b,c,clr);
}

function linoS(form){
    var k= parseFloat(form.k.value),
        b= parseFloat(form.b.value),
        clr= form.clr.value;
    if(isNaN(k)||isNaN(b)){
        alert('введите корректные коэффициенты');
        return false;
    }else if((k==0)){
        alert('k не должен быть равен 0');
    }
    BLine(k,-1,-b,clr);
}
function gS(form){
    var k= parseFloat(form.k.value),
        y= parseFloat(form.y.value),
        x= parseFloat(form.x.value),
        clr= form.clr.value;
    if(isNaN(k)||isNaN(x)||isNaN(y)){
        alert('введите корректные коэффициенты');
        return false;
    }else if((k==0)){
        alert('k не должен быть равен 0');
    }
    Bg(x,y/2,k,clr);
}

function paraS(form){
     var a= parseFloat(form.a.value),
        b= parseFloat(form.b.value),
        c= parseFloat(form.c.value),
        clr= form.clr.value;
    if(isNaN(a)||isNaN(b)||isNaN(c)){
        alert('введите корректные коэффициенты');
        return false;
    }else if((a==0)){
        alert('a должен быть не равен 0');
        return false;
    }
    Bpara(a,b,c,clr);
}


$('#clear').on('click',function(){
    createOs();
})
$('#msh1').on('click',function(){
    msh=+10;
    createOs();
});
$('#msh2').on('click',function(){
    msh=+20;
    createOs();
});
$('#msh3').on('click',function(){
    msh=+50;
    createOs();
});
$('#msh4').on('click',function(){
    msh=+100;
    createOs();
});
$('#msh5').on('click',function(){
    msh=+200;
    createOs();
});
$('#msh6').on('click',function(){
    msh=+500;
    createOs();
});
$('#msh7').on('click',function(){
    msh=+1000;
    createOs();
});
$('#msh8').on('click',function(){
    msh=+2000;
    createOs();
});
$('.main-display').height($('.main-display').width());
var can = document.getElementById("display");
can.width=$('.main-display').width();
can.height=$('.main-display').height();
var wid = can.width,
    hei=can.height;
var Atx = wid/2,
    Aty=hei/2,
    Ax=+0,
    Ay=+0,
    msh =+20,
    draw = can.getContext('2d'),
    pad =+20;
draw.lineWidth = 2;
draw.strokeStyle = "#F00";
draw.textAlign = "right";
draw.textBaseline = "top";
draw.font = "italic 11pt san-serif";
draw.fillStyle = '#F8F8F8';
draw.fillRect(pad,pad,(wid - 2*pad),(hei -2*pad));
function createOs(){
    draw.beginPath();
    draw.clearRect(0, 0, wid, hei);
    draw.fillRect(pad,pad,(wid - 2*pad),(hei -2*pad));
    draw.strokeStyle = '#AAA';
    for(var i=-9;i<=9;i++){
            if((Aty+i*((wid-pad)/20)>pad)&&(Aty+i*((wid-pad)/20)<(hei-pad))){
                draw.moveTo(pad,Aty+i*((wid-pad)/20));
                draw.lineTo(wid-pad,Aty+i*((wid-pad)/20));
            }
                draw.moveTo(Atx+i*((wid-pad)/20),hei-pad);
                draw.lineTo(Atx+i*((wid-pad)/20),pad);
    }
    draw.stroke();
    draw.beginPath();
    draw.moveTo(0,0);
    draw.lineTo(0,0);
    draw.strokeStyle = '#111';
    if((Ax<(msh))&&(Ax>-msh)){
        draw.moveTo(pad,Aty);
        draw.lineTo(wid-pad-2,Aty);
        draw.lineTo(wid-pad-15,Aty-7);
        draw.moveTo(wid-pad-2,Aty);
        draw.lineTo(wid-pad-15,Aty+7);
        for(i=-9;i<=9;i++){
            draw.moveTo(Atx+i*((wid-pad)/20),Aty+5);
            draw.lineTo(Atx+i*((wid-pad)/20),Aty-5);
            if(!(((i+20)%2==1)&&($(window).width()<900))){
            draw.strokeText((msh/20)*i,Atx+i*((wid-pad)/20)-3,Aty);
            }
        }
        for(i=-19;i<=19;i++){
            draw.moveTo(Atx+i*((wid-pad)/40),Aty+3);
            draw.lineTo(Atx+i*((wid-pad)/40),Aty-3);

        }
    }
    if((Ay<(msh))&&(Ay>-msh)){
        draw.moveTo(Atx,hei-pad);
        draw.lineTo(Atx,pad+2);
        draw.lineTo(Atx+7,pad+15);
        draw.moveTo(Atx-7,pad+15);
        draw.lineTo(Atx,pad+2);
        for(var i=-9;i<=9;i++){
            if((Aty+i*((wid-pad)/20)>pad)&&(Aty+i*((wid-pad)/20)<(hei-pad))){
                draw.moveTo(Atx-5,Aty+i*((wid-pad)/20));
                draw.lineTo(Atx+5,Aty+i*((wid-pad)/20));
                if(!(((i+20)%2==1)&&($(window).width()<900))){
                    draw.strokeText(-(msh/20)*i,Atx-3,Aty+i*((wid-pad)/20));
                }
            }
        }
        for(i=-19;i<=19;i++){
            if((Aty+i*((wid-pad)/40)>pad)&&(Aty+i*((wid-pad)/40)<(hei-pad))){
                draw.moveTo(Atx+3,Aty+i*((wid-pad)/40));
                draw.lineTo(Atx-3,Aty+i*((wid-pad)/40));
            }
        }
    }
    draw.stroke();
};
createOs();
function BGiper(x, y ,a,b,clr){
    draw.beginPath();
    draw.moveTo(0,0);
    draw.strokeStyle=clr;
    var revmsh=(wid-2*pad)/msh,x1,x2,y1,dx=0.1,dy=1;
    console.log(revmsh);
    for(x1=pad; x1>=pad;x1=x1+dx){
        x2=(x1-pad)/revmsh-msh/2;
        if(((x2-x)*(x2-x)/(a*a)-1)>=0){
            y1=dy*Math.sqrt(b*b*((x2-x)*(x2-x)/(a*a)-1))+y;
            draw.lineTo(x1+25*y/revmsh,hei/2-y1*revmsh-25*y/revmsh);
        }else{
            dx=-dx;
            dy=-dy;
        }
    }
    draw.moveTo(wid,hei);
    for(x1=(wid-pad); x1<=(wid-pad);x1=x1+dx){
        x2=(x1-pad)/revmsh-msh/2;
        if(((x2-x)*(x2-x)/(a*a)-1)>=0){
            y1=dy*Math.sqrt(b*b*((x2-x)*(x2-x)/(a*a)-1))+y;
            draw.lineTo(x1+25*y/revmsh,hei/2-y1*revmsh-25*y/revmsh);
        }else{
            dx=-dx;
            dy=-dy;
        }
    }
    draw.stroke();
    draw.clearRect(0,0,pad,hei);
    draw.clearRect(0,0,wid,pad);
    draw.clearRect(0,hei-pad,wid,pad);
    draw.clearRect(wid-pad,0,pad,hei);
};

function BParab(x,y,p,clr){
    draw.beginPath();
    draw.moveTo(wid,hei);
    draw.strokeStyle=clr;
    var x1,x2,y1,revmsh=(wid-2*pad)/msh,dx=1,dy=1;
    for(x1=(wid-pad);x1<=(wid-pad);x1=x1-dx){
        x2=(x1-pad)/revmsh-msh/2;
        if((p*(x2-x))>=0){
            y1=dy*Math.sqrt(p*(x2-x))+y;
            draw.lineTo(x1+x,hei/2-y1*revmsh-15*y/revmsh);
        }else{
            console.log('erock'+x2);
            dx=-dx;
            dy=-dy;
        }
    }
    draw.stroke();
    draw.clearRect(0,0,pad,hei);
    draw.clearRect(0,0,wid,pad);
    draw.clearRect(0,hei-pad,wid,pad);
    draw.clearRect(wid-pad,0,pad,hei);
}

function BEllipse(x, y ,a,b,clr){
    var revmsh=(wid-2*pad)/msh;
    draw.beginPath();
    draw.strokeStyle=clr;
    draw.ellipse(wid/2+x*revmsh, hei/2-y*revmsh,a*revmsh,b*revmsh,0 * Math.PI/180, 180 * Math.PI/180, 3 * Math.PI);
    draw.stroke();
    draw.clearRect(0,0,pad,hei);
    draw.clearRect(0,0,wid,pad);
    draw.clearRect(0,hei-pad,wid,pad);
    draw.clearRect(wid-pad,0,pad,hei);
}


function BLine(a,b,c,clr){
    var revmsh=(wid-2*pad)/msh,x1,y1;
    draw.beginPath();
    draw.strokeStyle=clr;
    if(b!=0){
        x1=-msh/2;
        y1=(-a*x1+c)/b;
        draw.moveTo(wid/2+revmsh*x1,hei/2-y1*revmsh);
        x1=msh/2;
        y1=(-a*x1+c)/b;
        draw.lineTo(wid/2+revmsh*x1,hei/2-y1*revmsh);
    }else{
        draw.moveTo(wid/2+revmsh*(-c/a),pad);
        draw.lineTo(wid/2+revmsh*(-c/a),hei-pad);
    }
    draw.stroke();
    draw.clearRect(0,0,pad,hei);
    draw.clearRect(0,0,wid,pad);
    draw.clearRect(0,hei-pad,wid,pad);
    draw.clearRect(wid-pad,0,pad,hei);
    
}

function Bg(x,y,k,clr){
    var revmsh=(wid-2*pad)/msh,x1,y1,x2,rfl=true;
    draw.beginPath();
    draw.strokeStyle=clr;
    if(k<0){
        draw.moveTo(0,0);
    }else{
        draw.moveTo(0,hei);
    }
    for(x1=pad;x1<wid-pad;x1++){
        x2=(x1-pad)/revmsh-msh/2-x;
        if(x2!=0){
            y1=y+k/x2+y;
            if(rfl&&(x2>0)){
                rfl=false;
                if(k>0){
                    draw.moveTo(0,0);
                }else{
                    draw.moveTo(0,hei);
                }
            }
            draw.lineTo(x1,hei/2-y1*revmsh);
        }else{
            if(k>0){
                draw.moveTo(0,0);
            }else{
                draw.moveTo(0,hei);
            }
        }
    }
    draw.stroke();
    draw.clearRect(0,0,pad,hei);
    draw.clearRect(0,0,wid,pad);
    draw.clearRect(0,hei-pad,wid,pad);
    draw.clearRect(wid-pad,0,pad,hei);
    
}

function Bpara(a,b,c,clr){
    draw.beginPath();
    draw.moveTo(wid,hei);
    draw.strokeStyle=clr;
    var x1,x2,y1,revmsh=(wid-2*pad)/msh;
    if(a>0){
        draw.moveTo(0,0);
    }else{
        draw.moveTo(0,hei);
    }
    for(x1=pad;x1<(wid-pad);x1++){
        x2=(x1-pad)/revmsh-msh/2;
        y1=a*x2*x2+x2*b+c;
        draw.lineTo(x1,-y1*revmsh+hei/2);
    }
    draw.stroke();
    draw.clearRect(0,0,pad,hei);
    draw.clearRect(0,0,wid,pad);
    draw.clearRect(0,hei-pad,wid,pad);
    draw.clearRect(wid-pad,0,pad,hei);
    
}

$(window).resize(function(){
    location.reload();
    $('.main-display').height($('.main-display').width());
//        can=document.getElementById("display");
//        can.width=$('.main-display').width();
//        can.height=$('.main-display').height();
    wid=can.width;
    hei=can.hei;
    Atx=wid/2;
    Aty=hei/2;
//        draw = can.getContext('2d');
    createOs();
});






