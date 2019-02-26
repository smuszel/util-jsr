source ./loadPath.sh
echo 'abc 123' > test.before
echo 'abc 123' > test.after
regplace ./test.after 'abc (\d+)' xyz