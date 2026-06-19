export const changelogEntries = [
  {
    version: 'v0.9.0',
    date: 'June 2026',
    tag: 'New',
    title: 'Drift detection alerts',
    items: [
      'Real-time alerts when input or prediction drift crosses a configurable threshold',
      'Drift score now visible per-endpoint in the dashboard sidebar',
      'Slack and email alert channels',
    ],
  },
  {
    version: 'v0.8.0',
    date: 'May 2026',
    tag: 'Improved',
    title: 'Faster cold starts',
    items: [
      'Cold start latency reduced by 64% for scale-to-zero endpoints',
      'GPU scheduler now pre-warms capacity ahead of predicted traffic',
    ],
  },
  {
    version: 'v0.7.0',
    date: 'April 2026',
    tag: 'New',
    title: 'One-click rollbacks',
    items: [
      'Roll back any endpoint to a previous version from the dashboard or CLI',
      'Version history now retained for 90 days on Pro and Scale',
    ],
  },
  {
    version: 'v0.6.0',
    date: 'March 2026',
    tag: 'New',
    title: 'Hugging Face & ONNX support',
    items: [
      'Deploy Hugging Face Hub repos directly by name',
      'Native ONNX runtime support for cross-framework graphs',
    ],
  },
  {
    version: 'v0.5.0',
    date: 'February 2026',
    tag: 'Fixed',
    title: 'Stability improvements',
    items: [
      'Resolved a race condition in the autoscaler under bursty traffic',
      'Improved error messages for malformed model artifacts',
    ],
  },
];
