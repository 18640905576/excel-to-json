const INPUT = "test.xlsx"
      ,OUTPUT = "output.json"
      ,FIRST_TITLE = "一级title"
      ,SECOND_TITLE = "二级title"
      ,FIRST_MAIN_LIST = ["一级title","一级store","一级id","一级code"]
      ,SECOND_MAIN_LIST = ["二级title","二级store","二级id","二级code"]
      
let node_xj = require("xls-to-json")
  , fs = require('fs')
  , path = require('path');


  node_xj({
    input: INPUT,  // input xlsx 
    output: OUTPUT // output json 
  }, function(err, result) {
    const FIRST = "一级"
          ,SECOND = "二级";
    if(err) {
      console.error(err);
    } else { 
      //result 是输出的数组
      if(!SECOND_MAIN_LIST){ // 如果是单层json转换
        console.log('转换成功，请查看output.json');
      }else{ //如果是2层json转换
        // TODO
        // 遍历result数组，如果新的数组木有FIRST_TITLE，则FIRST_MAIN_LIST所在对象迁移到新数组，并且加入items属性
        // 如果新的数组已经有FIRST_TITLE，则所有二级迁入items
        // 必须保持同步，否则会有错误
        let outputResult = []
          , i = -1;
        result.forEach(item => {
          delete item[""];
          if(item[FIRST_TITLE]){ // 如果有一级title
            // TODO
            // 一级属性转移到新的数组对象中
            // 二级属性push进该属性的items对象中
            outputResult[i+1] = {};
            outputResult[i+1].items = [];
            outputResult[i+1].items[0] = {};
            FIRST_MAIN_LIST.forEach(mainValue =>{   
              outputResult[i+1][mainValue] = item[mainValue];
            })
            SECOND_MAIN_LIST.forEach(mainValue1 =>{
              // 这里有问题，应该用promise保证同步性
              outputResult[i+1].items[0][mainValue1] = item[mainValue1];
            })

            i++;
          }else{ // 如果没有一级title
            // TODO
            // 删除相关的一级属性
            FIRST_MAIN_LIST.forEach(mainValue => {
              if(item[mainValue] === ""){
                delete item[mainValue];
              }
            });
            outputResult[i].items.push(item);
          }
        })

        // console.log(outputResult[12]);
        fs.writeFile('outputResult.json', JSON.stringify(outputResult), {}, (err,data)=>{
          if(err){
            console.log(err);
          }else{
            console.log('转换成功，请查看outputResult.json');
          }
        });

      }

    }
  });