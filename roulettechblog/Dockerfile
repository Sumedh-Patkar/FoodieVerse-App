# Pull the image from Dockerhub
FROM python:alpine3.18

WORKDIR /

# set up python environment variables

ENV PYTHONDOWNWRITEBYTECODE 1
ENV PYTHONNUNBUFFER 1

# update and  install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt /api/requirements.txt
RUN pip install -r /api/requirements.txt

# copy project
COPY . /

RUN python3 manage.py makemigrations
RUN python3 manage.py migrate
RUN python3 manage.py loaddata fixtures/blog_data.json

# Expose the port server is running on
EXPOSE 8000