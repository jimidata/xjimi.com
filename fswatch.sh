fswatch -l 1 -o ./_includes/ ./_pages/ ./js ./scss | xargs -n1 -I{} ./build.sh
