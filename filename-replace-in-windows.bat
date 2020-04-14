::This bat file is used to replace chars in some file names in windows

@echo off&&setlocal enabledelayedexpansion

for %%i in (*.jpg) do (

set ym=%%i

set ym=!ym:original-chars=new-chars!

if %%i neq !ym! (ren "%%i" "!ym!")

)

endlocal 

::*.jpg is file format, can be any suffix, for instance *.doc

