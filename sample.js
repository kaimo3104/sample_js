setInterval(() => {

    var fs = require('fs');
    var min = 0 ;
    var max = 9999999999999 ;
    var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    
    function writeFile(path, data) {
      fs.writeFile(path, data, function (err) {
        if (err) {
            throw err;
        }
      });
    }
    
    writeFile(`${a}.txt`, "test OK!");
    
    const exec = require('child_process').exec;
    exec('git add . -A', (err, stdout, stderr) => {
      if (err) { console.log(err); }
      console.log(stdout);
    });
    
    exec('git commit -m "commit"', (err, stdout, stderr) => {
      if (err) { console.log(err); }
      console.log(stdout);
    });
    
    exec('git push origin master', (err, stdout, stderr) => {
      if (err) { console.log(err); }
      console.log(stdout);
    });
    
    console.log('push success');
     }, 50); 