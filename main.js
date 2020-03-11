function OpenExe(path, exe_title)
 {
var doOpen = confirm("Are you sure you want to open the app " + exe_title + " located at " + path);
if (doOpen) {
var cmdShell = new ActiveXObject("WScript.Shell");
var myPath = path

cmdShell.Run(myPath , 1, true);
}
 }
