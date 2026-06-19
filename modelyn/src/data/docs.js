export const installCommands = {
  pip: 'pip install modelyn',
  npm: 'npm install -g @modelyn/cli',
  curl: 'curl -fsSL https://get.modelyn.ai | sh',
};

export const quickstartSteps = [
  {
    id: 1,
    title: 'Install the CLI',
    description: 'Install the Modelyn CLI with your package manager of choice.',
    command: 'pip install modelyn',
  },
  {
    id: 2,
    title: 'Authenticate',
    description: 'Log in once — credentials are cached locally for every future deploy.',
    command: 'modelyn login',
  },
  {
    id: 3,
    title: 'Deploy your model',
    description: 'Point Modelyn at a model file, a Hugging Face repo, or a Python entrypoint.',
    command: 'modelyn deploy model.pkl',
  },
  {
    id: 4,
    title: 'Call your endpoint',
    description: 'Every deploy returns a versioned HTTPS endpoint ready for traffic.',
    command: 'curl https://api.modelyn.ai/v1/predict -d @input.json',
  },
];

export const cliExamples = [
  { command: 'modelyn deploy model.pkl', description: 'Deploy a new model and create an endpoint.' },
  { command: 'modelyn list', description: 'List every deployed model and its current status.' },
  { command: 'modelyn logs api-prod --follow', description: 'Stream live logs from a running endpoint.' },
  { command: 'modelyn scale api-prod --min 1 --max 10', description: 'Set autoscaling bounds for an endpoint.' },
  { command: 'modelyn rollback api-prod --to v12', description: 'Roll an endpoint back to a previous version.' },
  { command: 'modelyn metrics api-prod', description: 'Print latency, throughput, drift, and cost for an endpoint.' },
];

export const apiExamples = [
  {
    id: 'deploy',
    title: 'Deploy a model',
    method: 'POST',
    path: '/v1/models',
    description: 'Upload a model artifact and create a new versioned endpoint.',
    code: `curl https://api.modelyn.ai/v1/models \\
  -H "Authorization: Bearer $MODELYN_KEY" \\
  -F "file=@model.pkl" \\
  -F "name=fraud-detector"`,
  },
  {
    id: 'predict',
    title: 'Run a prediction',
    method: 'POST',
    path: '/v1/predict',
    description: 'Send input data to a deployed endpoint and get a prediction back.',
    code: `curl https://api.modelyn.ai/v1/predict \\
  -H "Authorization: Bearer $MODELYN_KEY" \\
  -d '{"endpoint": "fraud-detector", "input": [0.21, 1.4, 0.0]}'`,
  },
  {
    id: 'metrics',
    title: 'Read endpoint metrics',
    method: 'GET',
    path: '/v1/metrics/:endpoint',
    description: 'Fetch latency, throughput, drift score, and cost for any endpoint.',
    code: `curl https://api.modelyn.ai/v1/metrics/fraud-detector \\
  -H "Authorization: Bearer $MODELYN_KEY"`,
  },
  {
    id: 'rollback',
    title: 'Roll back a version',
    method: 'POST',
    path: '/v1/models/:endpoint/rollback',
    description: 'Instantly revert an endpoint to any previously deployed version.',
    code: `curl https://api.modelyn.ai/v1/models/fraud-detector/rollback \\
  -H "Authorization: Bearer $MODELYN_KEY" \\
  -d '{"version": "v12"}'`,
  },
];

export const statusServices = [
  { name: 'API', status: 'operational' },
  { name: 'Model deploys', status: 'operational' },
  { name: 'GPU scheduler', status: 'operational' },
  { name: 'Monitoring & metrics', status: 'operational' },
  { name: 'Dashboard', status: 'degraded' },
];
