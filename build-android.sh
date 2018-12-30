appVersion=`date '+%Y%m%d%H%M'`
component="export const appVersion = \"Build $appVersion\""

echo $component

echo $component > ./src/app-version.js
if [ -d ./android ]
then 
    cd android
    ./gradlew assembleRelease
    cd ..
else
    echo "Error :Directory android not present."
    exit
fi


if [ -d ./Apk ]
then 
    echo "Apk folder already present."
else
    mkdir Apk
fi

ReleaseApk=./Apk/app-release-$appVersion.apk
cp ./android/app/build/outputs/apk/release/app-release.apk $ReleaseApk
echo "$(tput setaf 2)Available at $ReleaseApk $(tput sgr 0)" 