#!/bin/bash

trap killgroup SIGINT

killgroup(){
  echo killing...
  kill 0
}

tsc -w &
tsc -w -p tests &
ava --watch
