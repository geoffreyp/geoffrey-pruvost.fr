FROM whiledo/letsencrypt-apache-ubuntu

LABEL maintainers="geoffrey@pruvost.xyz"

ADD apt_requirements.txt apt_requirements.txt
RUN apt-get update && \
    apt-get install -y $(grep -vE "^\s*#" apt_requirements.txt  | tr "\n" " ") && \
    cd /var/www/html/ && \
    rm index.html && \
    git clone https://github.com/geoffreyp/geoffrey-pruvost.fr.git  && \
    mv geoffrey-pruvost.fr/* . && \
    /data/letsencrypt/letsencrypt-auto --apache --email geoffrey@pruvost.xyz --agree-tos -d geoffreypruvost.fr


CMD ["apache2ctl", "-D", "FOREGROUND"]
