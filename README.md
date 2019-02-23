Node sed-like utility.

```
source ./loadPath.sh
echo 'name 111 3 is good' | jsr 'name (\d+) (\d+) is' foo bar

name foo bar is good
```