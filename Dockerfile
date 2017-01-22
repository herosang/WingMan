FROM bamos/openface

RUN useradd -d /root/ -m app

WORKDIR /root/
RUN pip install Django djangorestframework django-webpack-loader

COPY ./wingman/ /root/
RUN chown -R app:app /root/
USER app

CMD [ "python", "./manage.py runserver 0.0.0.0:", "echo ${PORT}" ]
