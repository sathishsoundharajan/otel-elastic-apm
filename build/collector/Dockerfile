FROM otel/opentelemetry-collector-contrib:latest
COPY build/collector/collector.yml /etc/collector.yml
CMD ["--config=/etc/collector.yml"]