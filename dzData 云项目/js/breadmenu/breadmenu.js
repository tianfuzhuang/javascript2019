const {getParents,getChild,} = tools;
const $breadNav = $('.bread-nav');
//console.log($breadNav);
let list = null;
function createMenu(id){ 
    $breadNav.html('');
    let pary = getParents
    (id);
    pary.forEach((item,i,all)=>{
        let $navChild = null;
        if(i === all.length-1){
            $navChild = $('<span>'+ item.title +'</span>')
        }else{
            $navChild = $('<a href="javascript:void(0);">'+ item.title +'</a>')
        }
   //点击面包屑,让文件夹河面包屑一起动
   $navChild.click(function(){
       //每点击一次面包屑按钮都把全选的数据清除一次
       tools.getChild(data,id).forEach(item=>item.checked = false);
       render(item.id);
       createMenu(item.id);

   })
   
   
        $breadNav.append($navChild);
    })

}
createMenu(0);