guard-%:
	@ if [ "${${*}}" = "" ]; then \
		echo "Informe a variável \"$*\" "; \
		exit 1; \
	fi

clean:
	find . -type d -name __pycache__ -exec rm -r {} \+

venv:
	python -m venv venv