@echo off
:: test
:: writes to stdout, with some delay so you'll know it does something.
:: exits with exit code 0
:: 
:: the delay uses timeout, and make sure it doesn't write anything.

C:\Windows\System32\timeout.exe /t 3 /nobreak 1>nul 2>nul
echo -----------------------------

C:\Windows\System32\timeout.exe /t 3 /nobreak 1>nul 2>nul
echo  this is sent through STDOUT

C:\Windows\System32\timeout.exe /t 3 /nobreak 1>nul 2>nul
echo -----------------------------


exit /b 0
