// 替换text.txt中的指定key的value 为 excel中对应的key-value值

var nodeXlsx = require('node-xlsx')
var fs = require('fs')
const dir = `${__dirname}/excel.xlsx` // excel 的文件地址
const targetFile = `${__dirname}/text.txt` // 需要替换的包含key-value的文本文件地址
const resultFile = `${__dirname}/res.txt` // 替换之后最后写入的文件

function parseExcel(dir){
  try{
     var data = nodeXlsx.parse(dir)
  }catch(e){
    console.error(e)
  }
  let sheet1 = data[0].data, origin = {}
  sheet1.forEach(element => {
    if (sheet1[i].length !== 0) {
      let key = sheet1[i][0],
        value = sheet1[i][1]
        origin[key] = value
    }
  })
  return origin
}

let origin = parseExcel(dir)
console.log('origin', origin)

function parseTarget(targetFile) {
  let target = fs.readFileSync(targetFile, 'utf-8')
  let split1 = target.split(';'), result = {}

  split1.forEach(element => {
    let key = element.split('=')[0].replace(/\n/g, '').replace(/\s/g,'').replace(/\"/g, '')
    let value = element.split('=')[1]
    result[key] = value
  });
  return result
}

var targetRes = parseTarget(targetFile)

function getRes(origin, targetRes) {
  for (let key in targetRes) {
    if (origin[key]) {
      targetRes[key] = origin[key]
    }
  }
  total = ''
  for (var key in targetRes) {
    total = total + `"${key}"="${targetRes[key]}"\n`
  }
  return total
}


let total = getRes(origin, targetRes)

fs.writeFileSync(resultFile, total, 'utf-8')



