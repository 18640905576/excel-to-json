# excel-to-json
将excel转为json，可以转换一级&amp;二级的excel

1.  要使用本工具，你需要提前安装node环境。

2.  将文件download到本地，执行npm install命令

3.  在app.js文件中更改变量名称，将INPUT等变量更改为本地的文件名称，具体对应关系为 
  INPUT：输入excel文件名称， 
  FIRST_TITLE：JSON中一级显示的主名称， SECOND_TITLE：JSON中二级显示的主名称， 
  FIRST_MAIN_LIST：JSON中一级显示的全部变量组成的数组，   
  SECOND_MAIN_LIST：JSON中二级显示的全部变量组成的数组，
  详情可见示例文件test.xlsx和app.js
  
4.  修改文件完毕后，node执行app.js，在window系统上的命令为  node app.js

5.  文件夹根目录下将出现新的.json文件，根据转换层级不同，转换结果也不同，一级转换结果在  output.json中，二级转换结果在  outputResult.json中

6.  本工具亲测可用，如果您在使用的过程中发现了问题，欢迎交流~
