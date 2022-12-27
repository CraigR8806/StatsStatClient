#!/bin/bash

this_dir=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

if [[ -f $this_dir/.serverpid && -n "$(ps -p $(cat $this_dir/.serverpid) | grep -v "PID  TTY")" ]];then
	echo "Looks like server is already running..."
	echo "Exiting..."
	exit 1
fi

mkdir -p $this_dir/logs

log_file=$this_dir/logs/statclient-$(date "+%m-%d-%Y_%H-%M-%S").log


ng serve --open > $log_file 2> $log_file &
serverPID=$!

echo $serverPID > $this_dir/.serverpid

