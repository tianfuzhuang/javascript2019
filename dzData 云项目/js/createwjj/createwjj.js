let number = 1;
//获取新建按钮
$create = $('#create');
$create.click(function () {
   //关闭默认行为
   returnVal = true;
   //先向页面插入文件夹
   let $folder = $(`<div  class="file-item">
   <img src="./images/wjj.png" alt="" />
   <span class="folder-name"></span>
   <input type="text" value="新建文件夹" class="editor"/>
   <i></i>
</div>`);
   $('#newBox').append($folder);
   let $span = $folder.find('span');
   let $txt = $folder.find('input');;
   $span.hide();
   $txt.css('display', 'block');
   $txt.select();
   $txt.blur(function () {
      let val = $txt.val();
      //如果val为空 提示不能为空
      if (val == '') {
         alert('不能为空')
         render(list[0].pid);
         return;
      }
      let bool = list.map(item => item.title).includes(val);
      let nval = '';
      nval = val;
      while (bool) {
         let s = val.replace(/\(\d\)$/, '') + '(' + number++ + ')';
         bool = list.map(item => item.title).includes(s);
         nval = s;
         // console.log(s);           
      }

      //
      if (list[0] == undefined) {    
         data[+new Date] = {
            "id": +new Date,
            "pid": prevId,
            "title": nval,
            "type": "file",
            "checked": false
         }
         render(prevId);
         return;
      } else {
         //向数据中添加id和title
         data[+new Date] = {
            "id": +new Date,
            "pid": list[0].pid,
            "title": nval,
            "type": "file",
            "checked": false
         }
      }
      //渲染数据   
      render(list[0].pid)

   })
})