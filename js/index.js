
/* console.log(getTime()); */

// 1. 获取元素 留言板-hd的输入框 和 add（添加按钮） | 留言板_bd 身体
var messipt = document.getElementById('messipt');
var btn = document.getElementById('add');
var messbd = document.getElementById('messages_bd');
/* 原生 from 的 del */
var currform = document.getElementById('currform');
var currbtn = document.getElementById('currbtn');
 /* console.log(currform);
 console.log(currbtn); */
 currbtn.onclick = function() {
    if (currform !== null) {  // 如果，当前的 form 表单域里不为空 则 删除该表单域
        currform.parentNode.removeChild(currform);
    }
 }
 
/* console.log(messages);
console.log(btn);
console.log(messOne); */

// 2. 事件注册，及处理
// 输入框，获得焦点事件
messipt.onfocus = function () {
    this.value = '';
    btn.className = 'hover';
}
// 输入框，失去焦点事件
messipt.onblur = function () {
    btn.className = 'submit';
}
// add 按钮点击事件
btn.onclick = function () {
    var messValue = messipt.value;
    if (messValue == '') {
        alert('未输入内容！');
    } else {
        // 2. 创建一个 form 标签 （ 添加 <form> 表单域 ）
        var from_bar = document.createElement('from');
        
        from_bar.className = 'messagesbars';
        //   ①： 创建一个 span 标签，并给它个 类名 date （ 添加 span 日期 ）
        var date = document.createElement('span');
        date.innerHTML = getTime();
        date.className = 'date';
        // ②：创建一个 input 标签，并给赋值 并 给它类名 messbar  （ 添加 input.type="text" 表单元素 ）
        var messbar = document.createElement('input');
        messbar.type = 'text';
        messbar.value = messValue;
        messbar.className = 'messbar';
        // ③： 创建一个 input type submit 标签，并给它 类名 del （ 添加 input.type="submit" 表单提交控件 ）
        var del = document.createElement('input');
        del.type = 'submit';
        del.value = 'x';
        del.className = 'del';
        // input.type="submit" 点击事件
        del.onclick = function () {
            /* alert('该元素被点击了'); */
            if (from_bar !== null) {  // 如果，当前的 form 表单域里不为空 则 删除该表单域
                from_bar.parentNode.removeChild(from_bar);
            }
        }

        // 3. 把 date messbar del 放进 messages_bd ( form)里
        from_bar.appendChild(date);
        from_bar.appendChild(messbar);
        from_bar.appendChild(del);
        messbd.appendChild(from_bar);
    }
}