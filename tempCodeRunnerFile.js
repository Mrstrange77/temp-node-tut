const {readFileSync,writeFileSync}=require('fs');

const first=readFileSync('./content/test.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result-sync.txt',
  `here is  the result :${first},${second}`
)