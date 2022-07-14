@echo off
:: test
:: writes to both stdout and stderr + delay
:: exits with exit code 222
:: 
:: the delay uses timeout, and make sure it doesn't write anything.

C:\Windows\System32\timeout.exe /t 3 /nobreak 1>nul 2>nul
echo this is sent through STDOUT

C:\Windows\System32\timeout.exe /t 3 /nobreak 1>nul 2>nul
echo this is sent through STDERR  1>&2

exit /b 222
