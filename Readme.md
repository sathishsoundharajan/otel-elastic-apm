1. `git clone` the repo
2. cd into build folder
3. Run `docker-compose up`

Then go to root folder and run `npm start`

Hit this URL 10 times `curl http://localhost:9110/`

Wait for the batch processor to the request and check the `docker-compose` logs

```
otel-collector    | 2022-07-29T14:39:44.207Z	error	exporterhelper/queued_retry.go:149	Exporting failed. Try enabling retry_on_failure config option to retry on retryable errors	{"kind": "exporter", "data_type": "traces", "name": "elastic", "error": "sending event request failed: Post \"http://elastic-apm:8200/intake/v2/events\": dial tcp 192.168.32.6:8200: connect: connection refused", "errorVerbose": "Post \"http://elastic-apm:8200/intake/v2/events\": dial tcp 192.168.32.6:8200: connect: connection refused\nsending event request failed\ngo.elastic.co/apm/transport.(*HTTPTransport).sendStreamRequest\n\tgo.elastic.co/apm@v1.15.0/transport/http.go:292\ngo.elastic.co/apm/transport.(*HTTPTransport).SendStream\n\tgo.elastic.co/apm@v1.15.0/transport/http.go:282\ngithub.com/open-telemetry/opentelemetry-collector-contrib/exporter/elasticexporter.(*elasticExporter).sendEvents\n\tgithub.com/open-telemetry/opentelemetry-collector-contrib/exporter/elasticexporter@v0.56.0/exporter.go:197\ngithub.com/open-telemetry/opentelemetry-collector-contrib/exporter/elasticexporter.(*elasticExporter).ExportResourceSpans\n\tgithub.com/open-telemetry/opentelemetry-collector-contrib/exporter/elasticexporter@v0.56.0/exporter.go:149\ngithub.com/open-telemetry/opentelemetry-collector-contrib/exporter/elasticexporter.newElasticTracesExporter.func1\n\tgithub.com/open-telemetry/opentelemetry-collector-contrib/exporter/elasticexporter@v0.56.0/exporter.go:53\ngo.opentelemetry.io/collector/exporter/exporterhelper.(*tracesRequest).export\n\tgo.opentelemetry.io/collector@v0.56.0/exporter/exporterhelper/traces.go:70\ngo.opentelemetry.io/collector/exporter/exporterhelper.(*timeoutSender).send\n\tgo.opentelemetry.io/collector@v0.56.0/exporter/exporterhelper/common.go:225\ngo.opentelemetry.io/collector/exporter/exporterhelper.(*retrySender).send\n\tgo.opentelemetry.io/collector@v0.56.0/exporter/exporterhelper/queued_retry.go:147\ngo.opentelemetry.io/collector/exporter/exporterhelper.(*tracesExporterWithObservability).send\n\tgo.opentelemetry.io/collector@v0.56.0/exporter/exporterhelper/traces.go:134\ngo.opentelemetry.io/collector/exporter/exporterhelper.(*queuedRetrySender).send\n\tgo.opentelemetry.io/collector@v0.56.0/exporter/exporterhelper/queued_retry.go:83\ngo.opentelemetry.io/collector/exporter/exporterhelper.NewTracesExporter.func2\n\tgo.opentelemetry.io/collector@v0.56.0/exporter/exporterhelper/traces.go:113\ngo.opentelemetry.io/collector/consumer.ConsumeTracesFunc.ConsumeTraces\n\tgo.opentelemetry.io/collector@v0.56.0/consumer/traces.go:36\ngo.opentelemetry.io/collector/service/internal/fanoutconsumer.(*tracesConsumer).ConsumeTraces\n\tgo.opentelemetry.io/collector@v0.56.0/service/internal/fanoutconsumer/traces.go:75\ngo.opentelemetry.io/collector/processor/batchprocessor.(*batchTraces).export\n\tgo.opentelemetry.io/collector@v0.56.0/processor/batchprocessor/batch_processor.go:262\ngo.opentelemetry.io/collector/processor/batchprocessor.(*batchProcessor).sendItems\n\tgo.opentelemetry.io/collector@v0.56.0/processor/batchprocessor/batch_processor.go:176\ngo.opentelemetry.io/collector/processor/batchprocessor.(*batchProcessor).startProcessingCycle\n\tgo.opentelemetry.io/collector@v0.56.0/processor/batchprocessor/batch_processor.go:143\nruntime.goexit\n\truntime/asm_amd64.s:1571"}
otel-collector    | go.opentelemetry.io/collector/exporter/exporterhelper.(*retrySender).send
otel-collector    | 	go.opentelemetry.io/collector@v0.56.0/exporter/exporterhelper/queued_retry.go:149
otel-collector    | go.opentelemetry.io/collector/exporter/exporterhelper.(*tracesExporterWithObservability).send
otel-collector    | 	go.opentelemetry.io/collector@v0.56.0/exporter/exporterhelper/traces.go:134
otel-collector    | go.opentelemetry.io/collector/exporter/exporterhelper.(*queuedRetrySender).send
otel-collector    | 	go.opentelemetry.io/collector@v0.56.0/exporter/exporterhelper/queued_retry.go:83
otel-collector    | go.opentelemetry.io/collector/exporter/exporterhelper.NewTracesExporter.func2
otel-collector    | 	go.opentelemetry.io/collector@v0.56.0/exporter/exporterhelper/traces.go:113
otel-collector    | go.opentelemetry.io/collector/consumer.ConsumeTracesFunc.ConsumeTraces
otel-collector    | 	go.opentelemetry.io/collector@v0.56.0/consumer/traces.go:36
otel-collector    | go.opentelemetry.io/collector/service/internal/fanoutconsumer.(*tracesConsumer).ConsumeTraces
otel-collector    | 	go.opentelemetry.io/collector@v0.56.0/service/internal/fanoutconsumer/traces.go:75
otel-collector    | go.opentelemetry.io/collector/processor/batchprocessor.(*batchTraces).export
otel-collector    | 	go.opentelemetry.io/collector@v0.56.0/processor/batchprocessor/batch_processor.go:262
otel-collector    | go.opentelemetry.io/collector/processor/batchprocessor.(*batchProcessor).sendItems
otel-collector    | 	go.opentelemetry.io/collector@v0.56.0/processor/batchprocessor/batch_processor.go:176
otel-collector    | go.opentelemetry.io/collector/processor/batchprocessor.(*batchProcessor).startProcessingCycle
otel-collector    | 	go.opentelemetry.io/collector@v0.56.0/processor/batchprocessor/batch_processor.go:143
otel-collector    | 2022-07-29T14:39:44.208Z	error	exporterhelper/queued_retry.go:85	Exporting failed. Dropping data. Try enabling sending_queue to survive temporary failures.	{"kind": "exporter", "data_type": "traces", "name": "elastic", "dropped_items": 24}
otel-collector    | go.opentelemetry.io/collector/exporter/exporterhelper.(*queuedRetrySender).send
```