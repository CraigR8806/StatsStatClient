#!/bin/bash

this_dir=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
if [ ! -f $this_dir/.serverpid ];then
	echo "No saved server pid"
	echo "Nothing to do"
	echo "Exiting..."
	exit 
elif [ -z "$(ps -p $(cat $this_dir/.serverpid) | grep -v "PID  TTY")" ];then
	echo "Looks like server is not running..."
	echo "Exiting..."
	exit 
fi


kill -9 $(cat $this_dir/.serverpid)
rm -f $this_dir/.serverpid
