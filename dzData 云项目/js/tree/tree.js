let that = null;
let okcode = -1;
let $tree_menu = $('#navLists');
function createTree(num){  
    
  let ary1 = getChild(data,num) ;
   if(!ary1.length)return;
    let $ul = $('<ul style="margin-left:10px"></ul>');
    ary1.forEach(item => {
        let $li = $(`<li>
        <div class="tree-title tree-ico">
            <span><i></i>${item.title}</span>
        </div>
    </li>`);
    if(!getChild(data,item.id).length){
        $li.find('i').css('background','none');
    } 



    $li.off().click(function(){
        let reData = list.filter(item=>item.checked); 
        if(reData.some(d=>d.id === item.id)){
            okcode = 'error';
            return;
        }else{
            okcode = item.id;
        }


        if(that){
            that.css({background:'none'});
        }
        $(this).find('span').css({
            background:'#ccc'
        });
        that = $(this).find('span');

        if(this.children[0].classList.toggle('open')){
            $(this).append(createTree(item.id));
            render(item.id);
            createMenu(item.id);

        }else{
            $(this).find('ul').remove();
        }
       
        return false;
    });
    //再把li放到ul中
    $ul.append($li);
}); 
//返回当前创建的ul，里面有很多的li(文件夹)
return  $ul;
}
$tree_menu.children().children().append( createTree(0) );
