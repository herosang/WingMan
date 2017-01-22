FROM bamos/openface

WORKDIR /root/
RUN pip install Django djangorestframework django-webpack-loader

COPY ./wingman /root/wingman/
WORKDIR /root/wingman/

CMD [ "python", "./manage.py runserver 0.0.0.0:8000" ]
