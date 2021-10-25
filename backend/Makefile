guard-%:
	@ if [ "${${*}}" = "" ]; then \
		echo "Informe a variável \"$*\" "; \
		exit 1; \
	fi

clean:
	find . -type d -name __pycache__ -exec rm -r {} \+

run:
	python manage.py runserver

venv:
	python -m venv venv