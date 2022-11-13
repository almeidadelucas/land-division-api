#! /bin/sh

set -e
  
host="$1"
  
# Login for user (`-U`) and once logged in execute quit ( `-c \q` )
# If we can not login sleep for 1 sec
until mysql -h 127.0.0.1 --password=root; do
  >&2 echo "MySQL is unavailable - sleeping"
  sleep 1
done
