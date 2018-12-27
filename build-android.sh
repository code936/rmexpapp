DATE=`date +%Y%m%d`
# cd android
# ./gradlew assembleRelease
# cd ../apk
# cp ./android/app/build/outputs/apk/release .


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
    cp ./android/app/build/outputs/apk/release/app-release.apk  ./Apk/app-release-`date +%Y-%m-%d`.apk
fi