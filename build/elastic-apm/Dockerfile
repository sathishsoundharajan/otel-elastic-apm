FROM docker.elastic.co/apm/apm-server:6.8.11
COPY build/elastic-apm/apm-server.yml /usr/share/apm-server/apm-server.yml
USER root
RUN chown root:apm-server /usr/share/apm-server/apm-server.yml
USER apm-server