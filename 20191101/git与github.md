# git与github
+ git:版本控制工具
   + 之前有个老项目运行还不错,但是觉得技术比较low,设计的风格比较old,所以公司决定更新迭代,当程序猿开发完成后测试没问题,上线有问题,但是上线网站挂了,则么办?
     + 先让老版本回滚回来,等新版本开发好确认没问题再次上线.
     + 版本的时光穿梭.
+ github:远程代码管理仓库.贵圈基友平台(交流.学习)


### 集中式 vs 分布式
  + 集中式的缺点:
         + 必须联网.比较慢.都使用一个中央服务.有可能造成数据丢失
  + 分布式:
         + 不需联网 速度快
### 初始化版本控制状态
    + 找到要控制的文件目录,鼠标右键,找到git bash here 点击 
    + 打开控制台,输入git init 
    + 版本控制都是基于.git这个隐藏文件的,如果不小心把git文件删除
    + 通过Tab补全文件
    通过ll或ls查看
    + 通过上下键切换刚才输入的命令
### 设置作者信息
    + 设置用户名 git config --global user.name'你的名字' (这个名字想好,英文的)   
    + 设置邮箱   git config --global user.email'邮箱地址'(能够收到邮件的邮箱)
    + 工作区到暂存区
    + git add 指定文件名
    + git add . 所有文件
    + git status 查看命令
    + git commit -m 备注(你能直接识别的注释)
    + 快速把工作区的代码放到版本区
      + git commit -a -m 
       + 注意: 上面这个命令,前提条件是文件已经提交过一次才可以使用.
### 过滤指定文件
    +  创建一个.gitignore的文件
    +  touch .gitinore 创建文件
    +  + 规则：https://www.cnblogs.com/zhihang/p/10611475.html
	+ /create.txt   过滤文件
	+ node_modeules/  过滤文件夹及文件夹里面的内容
	
    + 如果配置不起作用，可以先把之前的操作清除一下，再进行过滤操作
###  清除命令    git rm -r --cache  . 
    + 警告：gitignore 的忽略规则只适用还没管理的文件，假如你有忽略规则在你添加之前被git 管理，那添加的忽略规则将无法适用已经管理的文件 
### 查看版本:
     + git log
     + git reflog (如果版本操作的多久使用这个)
### 查看每个区域的不同点
    + 工作区跟暂存区的区别:
       git diff 
    +  工作区和版本去的区别 
         git diff  master
    +  暂存区和版本区的区别
        git diff  catched
### 时光穿梭机
    + HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令git reset --hard commit_id。
    穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本。
    要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本。 

    + git reset --hard版本id 
### 与远程仓库链接
  + 创建秘钥 与git绑定
   + $ ssh-keygen -t rsa -C '512098874@qq.com'
   + ssh -T git@github.com

### 把我们的代码放到远程仓库
 1.在github上创建一个项目
 2.绑定秘钥
    ssh-keygen -t rsa -C'邮箱名'绑定一次就行
 3.确定版本库是最新的(没有东西可以提交了)
 4.查看远程仓库:
   git renove -v (使用git init的时候是查不出来的)
 5.添加远程仓库
   git remove add origin
 6.


### 还有第二种方式:
 1.现在远程仓库中创建一个项目
 2.git clone 项目的地址
 3.git add . git commit -m ''
 4.git push origin master

### 下载课件
 + git clone git@github.com:nizp/2019-10-8.git
 + git push

### node
  + 创建项目: NPM init -y 会生成一个package,json
  + NPM 跟着node安装一起安装下来的模块
  + NPM 是目前世界上最大的资源管理平台
  + Yran 最快的资源管理平台
  + 如何下载资源呢?
  + npm install 资源名
  + -g 全局安装
  + -s 项目一来
  + 下载下来的时候回自动生成一个node_modules的文件夹,文件夹中放的就是