
$(function(){

    //下拉列表
    let headlinee=document.querySelector('.banner .headline ')
    let del=document.querySelector('.del ')
    let category1=$('.category1')
    let categoryy=$('.categoryy')[0]
    let item=document.querySelectorAll('.banner .ulbox .item')

    onm()
    function onm() {
        for (let i = 0; i < category1.length; i++) {
            item[i].onmouseenter = function () {
                animate(categoryy, {height: 230})
                animate(category1[i], {height: 230})
                for (let j = 0; j < category1.length; j++) {
                    item[j].onmouseenter = function () {
                        for (let m = 0; m < category1.length; m++) {
                            category1[m].style['height'] = '0px';
                        }
                        category1[j].style['height'] = '230px';
                    }
                }
            }
        }
    }


    headlinee.onmouseleave=function () {
        animate(categoryy,{height:0})
        for(let m=0;m<category1.length;m++){
            animate(category1[m],{height:0})
        }
        headlinee.onmouseenter=onm()
    }
    del.onmouseenter=function () {
        animate(categoryy,{height:0})
        for(let m=0;m<category1.length;m++){
            animate(category1[m],{height:0})
        }
        del.onmouseleave=onm()
    }




















//搜索框
    let body=$('body')[0];
    let headline=$('.headline')[0];
    let sousuo=$('.sousuo',headline)[0];
    let input=$('input',sousuo)[0];
    let inp=$('.inp',sousuo)[0]
    input.onclick=function(){
        inp.style.display='none';
    }
    body.onclick=function(e){
        let obj=e.target;
        if(obj.className!='sousuo1'&& input.value==''){
            inp.style.display='block';
        }
    }
















    //banner
    let bannerImg=$('.bannerImg3')[0];
    let li=$('li');
    let bli=$('li',bannerImg);
    let bannerImg2=$('.bannerImg4')[0];
    let li2=$('li',bannerImg2);
    let banner=$('.banner1')[0];
    let t=setInterval(move,2000);
    let blast=$('.last')[0];
    let bnext=$('.next')[0];
    let n=0;
    let banimg=[];
    let imgwidth=parseInt(getComputedStyle(bannerImg,null).width+'px');
    for(var i=0;i<bli.length;i++){
        banimg.push(bli[i].getElementsByTagName('img')[0]);
    }

    //暂停动画
    banner.onmouseenter=function(){
        clearInterval(t);
    }
    banner.onmouseleave=function(){
        t=setInterval(move,2000);
    }


    //banner图片切换
    let current=0,next=0;
    let flag=true,flag1=true;
    bli[0].style['display']='block';

    function move(){
        flag1=true;
        next++;
        if(next==bli.length){
            next=0;
        }
        setTimeout(function(){banimg[current].src=banimg[current].title;},200)
        bli[current].style['display']='none';
        bli[current].src=bli[current].title;
        bli[next].style['display']='block';
        li2[current].className='';
        li2[next].className='hot';
        current=next;
        flag=true;
        lmove()
    }

    // 点击事件开始




    for(let i=0;i<li2.length;i++){

        //点击小圆事件
        li2[i].onclick=function(){
            flag1=false;
            let n=i-1;
            if(n<0){
                n=0;
            }
            next=i;
            //同步小圆
            setTimeout(function(){banimg[current].src=banimg[current].title;},200)
            for(let j=0;j<li2.length;j++){
                li2[j].className='';
                banner.style.opacity='0';
                bli[j].style.display='none';
            }
            li2[i].className='hot';
            //同步banner图
            bli[i].style.display='block';
            banner.style.opacity='1';
            n=i;
            // yuan(i)
            current=i;
            // yuan(current)
         }
    }
    //





    function lmove(){
        blast.onclick=function(){

            if(!flag){
                return;
            }else{
                flag=false;

                next=current-1;
                if(next<0){
                    next=bli.length-1;
                }
                setTimeout(function(){banimg[current].src=banimg[current].title;},200)
                bli[current].style['display']='none';
                bli[current].src=bli[current].title;
                bli[next].style['display']='block';
                li2[current].className='';
                li2[next].className='hot';
                current=next;
                // yuan(current)
                flag=true;
            }
        }
    }








    //点击‘下一个’事件
    rmove()
    function rmove(){
        bnext.onclick=function(){
            if(flag){
                flag=false;
                move();
            }
        }
    }




    //小圆 鼠标移上的效果
    // yuan(0)
    // function yuan(n){
    //     for(let k=0;k<li2.length;k++){
    //             li2[k].onmouseenter=function(){
    //                 li2[k].className='hot';
    //             }
    //         if(k!=n&&flag1){
    //             li2[k].onmouseleave=function(){
    //                 li2[k].className='';
    //             }
    //         }
    //     }
    // }














    //图片轮播
    let list=$('.list')[0]
    let lisli=$('li',list)
    let jz=$('.jz')[0]
    let jy=$('.jy')[0]
    // console.log(jz,jy)
    let tt=setInterval(movez,6000)
    list.style['transform']='translateX(-1225px)'
    function movel(){
        list.style['transform']='translateX(-1225px)'
        jz.style['color']='#E0E0E0'
        jy.style['color']='#B0B0B0'
        {
            jy.onmouseenter=function () {
                this.style['color']='#FF6700'
            }
            jy.onmouseleave=function () {
                this.style['color']='#B0B0B0'
            }

            jz.onmouseenter=function () {
                this.style['color']='#E0E0E0'
            }
            jz.onmouseleave=function () {
                this.style['color']='#E0E0E0'
            }
        }
    }
    function mover(){
        list.style['transform']='translateX(0px)'
        jy.style['color']='#E0E0E0'
        jz.style['color']='#B0B0B0'
        {
            jz.onmouseenter=function () {
                this.style['color']='#FF6700'
            }
            jz.onmouseleave=function () {
                this.style['color']='#B0B0B0'
            }

            jy.onmouseenter=function () {
                this.style['color']='#E0E0E0'
            }
            jy.onmouseleave=function () {
                this.style['color']='#E0E0E0'
            }
        }
    }
    jz.onclick=function () {
        movel()
    }
    jy.onclick=function () {
        mover()
    }
    function movez() {
        movel()

        setTimeout(function () {
            mover()
        },3000)
    }












    // 选项卡
let class1=$('.class1')
    for(let i=0;i<class1.length;i++){
        let tup=$('.tup',class1[i])
        let tupLis=$('.lis',class1[i])
        console.log(tup)
        console.log(tupLis)
        for(let i=0;i<tupLis.length;i++){
            tupLis[i].onmouseenter=function(){
                for(let j=0;j<tupLis.length;j++){
                    tup[j].style.display='none'
                    tupLis[j].classList.remove('xhx')
                }
                tup[i].style.display='block'
                tupLis[i].classList.add('xhx')
            }
        }
    }










//为你推荐
    let jz2=$('.jz')[1]
    let jy2=$('.jy')[1]
    let recomend=$('.recommend')[0]
    let reli=$('li',recomend)
    let reul=$('.uln')[0]

    reul.style['transform']='translateX(-1240px)'
    function movel2(){
        reul.style['transform']='translateX(-1240px)'
        jz2.style['color']='#E0E0E0'
        jy2.style['color']='#B0B0B0'
        {
            jy2.onmouseenter=function () {
                this.style['color']='#FF6700'
            }
            jy2.onmouseleave=function () {
                this.style['color']='#B0B0B0'
            }

            jz2.onmouseenter=function () {
                this.style['color']='#E0E0E0'
            }
            jz2.onmouseleave=function () {
                this.style['color']='#E0E0E0'
            }
        }
    }
    function mover2(){
        reul.style['transform']='translateX(0px)'
        jy2.style['color']='#E0E0E0'
        jz2.style['color']='#B0B0B0'
        {
            jz2.onmouseenter=function () {
                this.style['color']='#FF6700'
            }
            jz2.onmouseleave=function () {
                this.style['color']='#B0B0B0'
            }

            jy2.onmouseenter=function () {
                this.style['color']='#E0E0E0'
            }
            jy2.onmouseleave=function () {
                this.style['color']='#E0E0E0'
            }
        }
    }
    jz2.onclick=function () {
        movel2()
    }
    jy2.onclick=function () {
        mover2()
    }







    //内容
    let ul3=$('.ul3')
    let ul4=$('.ul4')
    let ind=0;

    for(let i=0;i<ul3.length;i++){
        let ul3li=ul3[i].querySelectorAll('li')
        let ul4li=ul4[i].querySelectorAll('li')
        let widths=parseInt(getComputedStyle(ul3li[0],null).width);
        for(let j=0;j<ul3li.length;j++){
            ul4li[j].onclick=function () {
                ul4li.forEach(function (value) {
                    value.classList.remove('act')
                })
                ul3[i].style.left=-widths*j+'px';
                ul4li[j].classList.add('act')
                ind=j;
            }
        }

        //左右点击
        let leftbtn=$('.left-btn')
        let rightbtn=$('.right-btn')
        leftbtn[i].onclick=function () {
            ind--;
            if(ind<0){
                ind=ul4li.length-1;
            }
            ul4li.forEach(function (value) {
                value.classList.remove('act')
            })
            ul3[i].style.left=-widths*ind+'px';
            ul4li[ind].classList.add('act')
        }

        rightbtn[i].onclick=function () {
            ind++;
            if(ind>ul4li.length-1){
                ind=0;
            }
            ul4li.forEach(function (value) {
                value.classList.remove('act')
            })
            ul3[i].style.left=-widths*ind+'px';
            ul4li[ind].classList.add('act')
        }

    }




//视频模块
    let shiping=$('.shiping')[0]
    let spimg=shiping.querySelectorAll('img')
    let display=shiping.querySelectorAll('.display')

    for(let i=0;i<spimg.length;i++){
        spimg[i].onmouseover=function () {
            display[i].style['background']='#FF6700'
            display[i].style['border']='2px solid #FF6700'
        }
        display[i].onmouseover=function () {
            display[i].style['background']='#FF6700'
            display[i].style['border']='2px solid #FF6700'
        }
        spimg[i].onmouseout=function () {
            display[i].style['background']=''
            display[i].style['border']='2px solid white'
        }

    }




















})