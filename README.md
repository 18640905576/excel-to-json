# excel-to-json
将excel转为json，可以转换一级&amp;二级的excel

1.  要使用本工具，你需要提前安装node环境。

2.  将文件download到本地，执行npm install命令

3.   在app.js文件中更改变量名称，将INPUT等变量更改为本地的文件名称，具体对应关系为 
 INPUT：输入excel文件名称， 
 FIRST_TITLE：JSON中一级显示的主名称， SECOND_TITLE：JSON中二级显示的主名称， 
 FIRST_MAIN_LIST：JSON中一级显示的全部变量组成的数组，   
 SECOND_MAIN_LIST：JSON中二级显示的全部变量组成的数组 
 详情可见实例文件test.xlsx和app.js
