all:
	mkdocs build

serve:
	mkdocs serve -o

push:
	mkdocs build
	mkdocs gh-deploy
	git add .
	/usr/bin/date > /tmp/commit_msg
	git commit -F /tmp/commit_msg --allow-empty
	git push

install:
	sudo apt-get install mkdocs "mkdocs-*" -y

.SILENT:
