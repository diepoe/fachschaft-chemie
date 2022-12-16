FROM httpd:2.4-alpine

# install nodejs
RUN apk update
RUN apk add nodejs npm

# copy project files to the container
RUN mkdir -p /var/www/html/fachschaft-chemie

COPY . /var/www/html/fachschaft-chemie

# run npm build
WORKDIR /var/www/html/fachschaft-chemie

RUN npm i
RUN npm run build

RUN cp -R /var/www/html/fachschaft-chemie/build/* /usr/local/apache2/htdocs/