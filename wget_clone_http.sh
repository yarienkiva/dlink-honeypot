mkdir output
wget -e robots=off \
	--save-headers \
	--mirror \
	--convert-links \
	--adjust-extension \
	--page-requisites \
	--no-parent \
	--header='Accept-Encoding: identity' \
	-P output $1
