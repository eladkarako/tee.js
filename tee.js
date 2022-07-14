//var command       = ".\\test_stdout_0.cmd"
//var command       = ".\\test_stderr_111.cmd"
var command       = ".\\test_both_stdout_and_stderr_222.cmd"
   ,command_args  = ["--dummy-arg1"
                    ,"--dummy-arg2"
                    ]
   ;

var fs            = require("fs")
   ,write         = fs.writeFile.bind(fs)
   ,append        = fs.appendFile.bind(fs)
   ,empty_fn      = function(){}
   ;

var child_process = require("child_process")
   ,run           = child_process.exec.bind(child_process)
   ,options       = {"shell" : true
                    }
   ,child         = run(command, command_args)
   ;

child.on("spawn", function(){ 
  write("./out.txt", "", {encoding:"utf8", flag:"w"},empty_fn);
  write("./err.txt", "", {encoding:"utf8", flag:"w"},empty_fn);
});

child.stdout.setEncoding("utf8");
child.stdout.on("data", function(data){
  console.log(data);   
  append("./out.txt", data, {encoding:"utf8", flag:"a"},empty_fn);
});

child.stderr.setEncoding("utf8");
child.stderr.on("data", function(data){ 
  console.error(data); 
  append("./err.txt", data, {encoding:"utf8", flag:"a"},empty_fn);
});

child.on("error", function(){ 
  console.error.apply(console, arguments);
});

child.on("close", function(code){
  setTimeout(function(){
    process.exitCode=code;
    process.exit();
  },10);
});


/*
https://nodejs.org/api/fs.html#file-system-flags
https://nodejs.org/api/child_process.html#class-childprocess
https://nodejs.org/api/child_process.html#event-spawn
https://nodejs.org/api/child_process.html#event-error
https://nodejs.org/api/child_process.html#event-close
https://nodejs.org/api/child_process.html#spawning-bat-and-cmd-files-on-windows
*/