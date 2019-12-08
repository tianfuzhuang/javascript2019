const $newBox = $('#newBox');
const $empty = $('#empty');
const $checkedAll = $('#checkedAll');
let every = true;
let returnVal = false;
let prevId = '';

function render(num = 0) {
  every = true;
  $newBox.html('');
  let d = tools.getChild(data, num);
  list = d;
  //console.log(d);
  //每次render的时候都把最新当前需要显示的数据更新
  //没有length,就没有子级
  if (!d.length) {
    $empty.show();
    return;
  }
  $empty.hide();

  $.each(d, (i, item) => {
    //只要有一个数据的布尔值为false,就不可能全部选中，那么checkedAll就不能打钩
    if (!item.checked) {
      every = false;
      $checkedAll.removeClass('checked');
    }
    const { checked,id,title } = item;
   
    let $folder = $(`<div  class="file-item  ${checked ? 'active' : ''}" did="${id}">
   <img src="./images/wjj.png" alt="" />
   <span class="folder-name">${title}</span>
   <input type="text" value="${title}" class="editor"/>
   <i class=${checked ? "checked" : ''}></i>
</div>`);

    let $img = $folder.find('img');
    let $i = $folder.find('i');

    
    $i.click(function () { 
    
      
      data[id].checked = !data[id].checked; 
      render(num);
      console.log(id);
    });



    $img.dblclick(function () {
      //获取img父级的did并变成数字类型
      let id = $(this).parent().attr('did') * 1;
      console.log(id);
      
      prevId = id;
      //只要双击文件夹,先把当前对应的数据的布尔值清掉
      d.forEach(item => item.checked = false);
      $checkedAll.removeClass('checked'); //清除全选
    
      
      render(id);
      createMenu(id);
    });
    //组织按下文件的默认行为
    $newBox.mousedown(function () {
      return false;
    });
    $newBox.append($folder);
  });
  //点击全选的
  $checkedAll.off().click(function () {
    // console.log(list);
    //如果list是个空数组，就不用render
    if (!list.length) return;
    d.forEach(item => item.checked = !every); //先同步数据
    render(num); //再通过数据渲染页面
  });


  if (every) {
    $checkedAll.addClass('checked');
  }

}
//console.log(data);




render(0)