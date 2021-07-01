#!/usr/bin/bash

## A hack to export all image files to a json list

# find name of last file in directory
declare -a files
files=(img/*)
pos=$(( ${#files[*]} - 1 ))
last=${files[$pos]}

#overwrite file if already there
echo "{" > img-list.json 
echo ' "name": [' >> img-list.json

for FILE in "${files[@]}"
do 
  if [[ $FILE == $last ]]
  then
    echo " "\"$FILE\" >> img-list.json
    break
  else 
    echo " "\"$FILE\", >> img-list.json
  fi 
done 

echo " ]" >> img-list.json
echo "}" >> img-list.json

