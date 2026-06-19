export const comparisonRows = [
  {
    label: 'Kubernetes setup',
    diy: 'Weeks of cluster provisioning, Helm charts, and YAML',
    modelyn: 'Not required — fully managed',
  },
  {
    label: 'GPU scheduling',
    diy: 'Manual node pools and bin-packing scripts',
    modelyn: 'Automatic, cost-aware placement',
  },
  {
    label: 'Monitoring',
    diy: 'Stitched together from Prometheus, Grafana, and custom exporters',
    modelyn: 'Built-in latency, throughput, drift, and cost dashboards',
  },
  {
    label: 'Rollbacks',
    diy: 'Custom CI/CD pipelines and manual image tagging',
    modelyn: 'One-click rollback to any previous version',
  },
  {
    label: 'Drift detection',
    diy: 'Usually skipped, or built in-house over months',
    modelyn: 'Enabled by default on every endpoint',
  },
  {
    label: 'Time to production',
    diy: '4–8 weeks of platform work before the first model ships',
    modelyn: 'Minutes, with a single deploy command',
  },
];
