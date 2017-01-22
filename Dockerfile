FROM bamos/openface

COPY ./wingman /root/wingman/
COPY ./backend /root/openface/
WORKDIR /root/

RUN pip install Django djangorestframework django-webpack-loader

WORKDIR /root/wingman/

CMD [ "python", "./manage.py runserver 0.0.0.0:8000" ]
