FROM python:3.8

WORKDIR /app

COPY requirements.txt .
COPY ./app .

RUN apt-get update && apt-get upgrade -y

RUN pip install --upgrade pip
RUN pip install --upgrade setuptools
RUN pip install --no-cache-dir --trusted-host pypi.python.org -r /app/requirements.txt

#RUN alembic upgrade head

EXPOSE 3000

CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "3000"]