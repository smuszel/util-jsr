```
source ./loadPath.sh
echo 'name 111 3 is good' | jsr 'name (\d+) (\d+) is' foo bar

name foo bar is good
```

Nvm I discovered `perl -pie 's/regex/replacement/g file'`
