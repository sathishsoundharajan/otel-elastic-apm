
const process = require('process');

const pack = require('./package.json');

const opentelemetry = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const { HapiInstrumentation } = require('@opentelemetry/instrumentation-hapi');
const { AmqplibInstrumentation } = require('@opentelemetry/instrumentation-amqplib');

const { BatchSpanProcessor } = require("@opentelemetry/sdk-trace-base");
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');

const otlpExporter = new OTLPTraceExporter()

const sdk = new opentelemetry.NodeSDK({
  spanProcessor: new BatchSpanProcessor(otlpExporter),
  traceExporter: otlpExporter,
  instrumentations: [
    getNodeAutoInstrumentations(),
    new HapiInstrumentation(),
    new AmqplibInstrumentation()
  ],
  serviceName: pack.name,
});

sdk.start()
  .then(() => {
    console.log('Tracing initialized')
  })
  .catch((error) => console.log('Error initializing tracing', error));

process.on('SIGTERM', () => {
  sdk.shutdown()
    .then(() => console.log('Tracing terminated'))
    .catch((error) => console.log('Error terminating tracing', error))
    .finally(() => process.exit(0));
});
