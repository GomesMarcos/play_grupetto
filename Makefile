guard-%:
	@ if [ "${${*}}" = "" ]; then \
		echo "Informe a variável \"$*\" "; \
		exit 1; \
	fi

clean:
	find . -type d -name __pycache__ -exec rm -r {} \+

collect_tests:
	pytest --collect-only

cover:
	coverage run --source=src/ -m pytest -vv tests/ && coverage report -m

cover_html:
	coverage html 

delete_local_branch: guard-name
	git branch -D ${name}

delete_remote_origin_branch: guard-name
	git push origin --delete ${name}

install_backend:
	pip install -r requirements.txt

install_backend_dev:
	pip install -r requirements_dev.txt

install_backend_test:
	pip install -r requirements_test.txt

feature: guard-name
	git checkout -b feature/${name} dev
	git pull origin dev
	git push -u origin feature/${name}
	git branch

hotfix: guard-name
	git checkout -b hotfix/${name} master
	git pull origin master
	git branch

release: guard-name
	git checkout -b release/${name} dev
	git pull origin dev
	git push -u origin release/${name}
	git branch

release_by_current_branch: guard-name
	git checkout -b release/${name} $(git symbolic-ref --short HEAD)
	git push -u origin release/${name}
	git branch

tag: guard-name guard-text
	git checkout master
	git pull origin master
	git tag -a ${name} -m"${text}" master 
	git push origin ${name}
	git tag

solve_conflict: guard-destiny guard-working
	git checkout -b conflict/${destiny}_${working} ${destiny}
	git push -u origin conflict/${destiny}_${working}
	git pull origin ${working}
	git branch

test_verbose_with_print:
	pytest -svv tests/

venv:
	python3 -m venv venv