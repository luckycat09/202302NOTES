let tabBox = document.getElementById('tabBox');
let tabList = tabBox.getElementsByTagName('div');
let navBox = document.getElementById('navBox');
let navList = navBox.getElementsByTagName('li');



/* for (let i = 0; i < navList.length; i++) {
    // 在循环给每个里绑定点击事件的时候，我们给每一个li（元素对象）设置一个自定义属性，属性值存储的是当前li的索引
    navList[i].myIndex=i;
    navList[i].onclick = function () {
        console.log(this.myIndex);
        changeTab(this.myIndex);
    }

} */
//2.闭包解决方法
// for (var i = 0; i < navList.length; i++) {

//     navList[i].onclick = (function (i) {
//         return function(){
//             changeTab(i);
//         } 
//     })(i)

// }
//es6中let的解决方法
for (let i = 0; i < navList.length; i++) {

    navList[i].onclick = function () {
            changeTab(i);
    }
}

// 封装函数实现选项卡切换
//1.

function changeTab(clickIndex) {
    for (let i = 0; i < navList.length; i++) {
        navList[i].className='';
        tabList[i].className='';
    }

    //点击的索引
    navList[clickIndex].className='active';
    tabList[clickIndex].className='active';
    console.log(clickIndex,tabList[clickIndex].className)
}
