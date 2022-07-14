@echo off
:: test
:: writes to stderr, with some delay so you'll know it does something.
:: exits with exit code 111
:: 
:: the delay uses timeout, and make sure it doesn't write anything.

C:\Windows\System32\timeout.exe /t 3 /nobreak 1>nul 2>nul
echo ----------------------------- 1>&2

C:\Windows\System32\timeout.exe /t 3 /nobreak 1>nul 2>nul
echo  this is sent through STDERR  1>&2

C:\Windows\System32\timeout.exe /t 3 /nobreak 1>nul 2>nul
echo ----------------------------- 1>&2


exit /b 111
