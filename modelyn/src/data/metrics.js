export const metrics = [
  { id: 'uptime', value: 99.99, decimals: 2, suffix: '%', label: 'Uptime SLA', icon: 'ShieldCheck' },
  { id: 'latency', value: 120, decimals: 0, prefix: '<', suffix: 'ms', label: 'Average inference latency', icon: 'Zap' },
  { id: 'predictions', value: 50, decimals: 0, suffix: 'M+', label: 'Predictions served', icon: 'Activity' },
  { id: 'savings', value: 85, decimals: 0, suffix: '%', label: 'Infrastructure cost reduction', icon: 'TrendingDown' },
];
