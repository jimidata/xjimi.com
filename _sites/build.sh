rootDirectory="./"
siteDirectory="./_sites"

if [[ -d ./_sites ]]; then
    rm -rf ./_sites
fi
mkdir ./_sites

for f in $rootDirectory*
do
    name=${f##*/}
    if [[ $name != _* ]]; then
        if [[ -d $f ]]; then 
            cp -rf $f "$rootDirectory""_sites/$name"
        else
            cp $f "$rootDirectory""_sites/$name"
        fi
    elif [[ -d $f ]]; then
        if [[ $f == ./_includes ]]; then
            cp -rf $f "$siteDirectory/"
        fi
        if [[ $f == ./_pages ]]; then
            cp -rf $f/ "$siteDirectory/_pages"
        fi
    fi
done
stack=($siteDirectory/_pages)
top=1
while [ $top -gt 0 ]; do
    top=`expr $top - 1`
    adir=${stack[$top]}
    for page in $adir/* ; do
        if [[ $page == *.html.haml ]]; then
            pageDir=`dirname $page`
            pageName=${page##*/}
            pageName="${pageName%.*}"
            haml $page $pageDir/$pageName
            rm $page
            echo "haml $page $pageDir/$pageName"
        elif [[ -d $page ]]; then
            echo "into $page -> $top"
            stack[$top]=$page
            top=`expr $top + 1`
        fi
    done
done
mv $siteDirectory/_pages/* $siteDirectory/
rm -rf $siteDirectory/_pages
rm -rf $siteDirectory/_includes

